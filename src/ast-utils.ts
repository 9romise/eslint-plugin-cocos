import type { ASTNode, Tree } from './types'
import { AST_NODE_TYPES } from '@typescript-eslint/utils'

export function isCCClassDecorator(decorator: Tree.Decorator): decorator is Tree.Decorator {
  if (decorator.parent.type !== AST_NODE_TYPES.ClassDeclaration)
    return false

  const expression = decorator.expression
  if (expression.type === AST_NODE_TYPES.Identifier)
    return expression.name === 'ccclass'
  else if (expression.type === AST_NODE_TYPES.CallExpression)
    return expression.callee.type === AST_NODE_TYPES.Identifier && expression.callee.name === 'ccclass'
  return false
}

export function isCCClass(node: ASTNode): node is Tree.ClassDeclaration {
  if (node.type !== AST_NODE_TYPES.ClassDeclaration)
    return false

  return node.decorators.some((d) => isCCClassDecorator(d))
}

export const LIFECYCLE_METHODS: string[] = ['onLoad', 'start', 'onEnable', 'update', 'lateUpdate', 'onDisable', 'onDestroy']

export function isLifecycle(node: ASTNode): node is Tree.MethodDefinition & { key: Tree.Identifier } {
  if (node.type !== AST_NODE_TYPES.MethodDefinition)
    return false

  if (node.key.type !== AST_NODE_TYPES.Identifier)
    return false

  return LIFECYCLE_METHODS.includes(node.key.name)
}
