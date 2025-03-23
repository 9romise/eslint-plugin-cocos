import type { ESLintRuleModule } from '~/utils'
import { isCCClass, isLifecycle, LIFECYCLE_METHODS } from '~/ast-utils'
import { createRule } from '~/utils'

export const RULE_NAME = 'lifecycle-order'
export type MessageIds = 'invalidOrder'
export type Options = [{ order: string[] }]

export const DEFAULT_ORDER: string[] = ['onLoad', 'start', 'onEnable', 'update', 'lateUpdate', 'onDisable', 'onDestroy']
export default createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'layout',
    docs: {
      description: 'Enforce a specific order of the lifecycle methods in a ccclass',
      recommended: true,
    },
    messages: {
      invalidOrder: '`{{name}}` method order is invalid.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          order: {
            type: 'array',
            items: {
              enum: LIFECYCLE_METHODS,
              type: 'string',
              minLength: 0,
            },
            uniqueItems: true,
          },
        },
      },
    ],
  },
  defaultOptions: [{ order: LIFECYCLE_METHODS }],
  create(context, optionsWithDefault) {
    const { order } = optionsWithDefault[0]

    const orderMap = new Map(order.map((method, index) => [method, index]))

    return {
      ClassDeclaration(node) {
        if (!isCCClass(node))
          return

        let lastIndex = -1

        node.body.body.forEach((ele) => {
          if (!isLifecycle(ele))
            return

          const methodName = ele.key.name
          const currentIndex = orderMap.get(methodName) ?? Infinity

          if (currentIndex < lastIndex) {
            context.report({
              node: ele,
              messageId: 'invalidOrder',
              data: {
                name: methodName,
              },
            })
          }

          if (currentIndex !== Infinity) {
            lastIndex = Math.max(lastIndex, currentIndex)
          }
        })
      },
    }
  },
}) as ESLintRuleModule<Options, MessageIds>
