import type { ESLintRuleModule } from '~/utils'
import ccclassFirst from './ccclass-first/ccclass-first'
import lifecycleOrder from './lifecycle-order/lifecycle-order'

export const rules: Record<string, ESLintRuleModule<unknown[], string>> = {
  'ccclass-first': ccclassFirst,
  'lifecycle-order': lifecycleOrder,
}
