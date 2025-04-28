import type { ESLintRuleModule } from '~/utils'
import ccclassFirst from './ccclass-first/ccclass-first'
import lifecycleOrder from './lifecycle-order/lifecycle-order'
import matchCcclassFilename from './match-ccclass-filename/match-ccclass-filename'

export const rules: Record<string, ESLintRuleModule<unknown[], string>> = {
  'ccclass-first': ccclassFirst,
  'lifecycle-order': lifecycleOrder,
  'match-ccclass-filename': matchCcclassFilename,
}
