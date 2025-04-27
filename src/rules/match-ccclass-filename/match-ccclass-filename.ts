import type { ESLintRuleModule } from '~/utils'
import path from 'node:path'
import { AST_NODE_TYPES } from '@typescript-eslint/utils'
import { isCCClassDecorator } from '~/ast-utils'
import { createRule } from '~/utils'

export const RULE_NAME = 'match-ccclass-filename'
export type MessageIds = 'shouldMatchFileName'
export type Options = []

export default createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforce `ccclass` name to match the filename',
      recommended: true,
    },
    fixable: 'whitespace',
    messages: {
      shouldMatchFileName: 'ccclass name `{{name}}` should match the filename `{{filename}}`',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      Decorator(node) {
        if (!isCCClassDecorator(node))
          return

        const { sourceCode } = context

        const extension = path.extname(context.filename)
        const filename = path.basename(context.filename, extension)

        let ccclassName = ''
        if (
          node.expression.type === AST_NODE_TYPES.CallExpression
          && node.expression.arguments.length === 1
        ) {
          ccclassName = sourceCode.getText(node.expression.arguments[0])
          if (
            ccclassName === `'${filename}'`
            || ccclassName === `"${filename}"`
            || ccclassName === `\`${filename}\``
          ) {
            return
          }
        }

        context.report({
          node,
          messageId: 'shouldMatchFileName',
          data: {
            name: ccclassName,
            filename,
          },
          fix(fixer) {
            return fixer.replaceText(node, `@ccclass('${filename}')`)
          },
        })
      },
    }
  },
}) as ESLintRuleModule<Options, MessageIds>
