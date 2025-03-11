import type { Tree } from './types'
import { AST_NODE_TYPES } from '@typescript-eslint/utils'

export function isCCClassDecorator(decorator: Tree.Decorator): decorator is Tree.Decorator {
  const expression = decorator.expression
  if (expression.type === AST_NODE_TYPES.Identifier)
    return expression.name === 'ccclass'
  else if (expression.type === AST_NODE_TYPES.CallExpression)
    return expression.callee.type === AST_NODE_TYPES.Identifier && expression.callee.name === 'ccclass'
  return false
}
