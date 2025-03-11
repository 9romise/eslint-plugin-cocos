import type { ESLintRuleModule } from '~/utils'
import { isCCClassDecorator } from '~/ast-utils'
import { createRule } from '~/utils'

export const RULE_NAME = 'ccclass-first'
export type MessageIds = 'first'
export type Options = []

export default createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforce `ccclass` decorator to be the first decorator',
      recommended: true,
    },
    fixable: 'whitespace',
    messages: {
      first: 'ccclass decorator should be the first decorator',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      ClassDeclaration(node) {
        const { decorators } = node
        if (!decorators || decorators.length <= 1)
          return

        const ccclassIndex = decorators.findIndex((decorator) => isCCClassDecorator(decorator))
        if (ccclassIndex === 0)
          return

        const ccclass = decorators[ccclassIndex]
        const nextToken = context.sourceCode.getTokenAfter(ccclass)!
        context.report({
          node: ccclass,
          messageId: 'first',
          fix(fixer) {
            return [
              fixer.insertTextBefore(decorators[0], `${context.sourceCode.getText(ccclass)}\n`),
              fixer.removeRange([ccclass.range[0], nextToken.range[0]]),
            ]
          },
        })
      },
    }
  },
}) as ESLintRuleModule<Options, MessageIds>
