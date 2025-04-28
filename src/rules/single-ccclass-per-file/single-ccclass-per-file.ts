import type { ESLintRuleModule } from '~/utils'
import { isCCClass } from '~/ast-utils'
import { createRule } from '~/utils'

export const RULE_NAME = 'single-ccclass-per-file'
export type MessageIds = 'singleCCClass'
export type Options = []

export default createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforce one ccclass per file',
      recommended: true,
    },
    messages: {
      singleCCClass: 'Only one ccclass declaration is allowed per file.',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    let ccclassCount = 0

    return {
      'Program:exit': function () {
        ccclassCount = 0
      },
      ClassDeclaration(node) {
        if (!isCCClass(node))
          return

        ccclassCount++
        if (ccclassCount > 1) {
          context.report({
            node,
            messageId: 'singleCCClass',
          })
        }
      },
    }
  },
}) as ESLintRuleModule<Options, MessageIds>
