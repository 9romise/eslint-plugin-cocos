import type { ESLintRuleModule } from '~/utils'
import ccclassFirst from './ccclass-first/ccclass-first'
import lifecycleOrder from './lifecycle-order/lifecycle-order'
import matchCCClassFilename from './match-ccclass-filename/match-ccclass-filename'
import singleCCClassPerFile from './single-ccclass-per-file/single-ccclass-per-file'

export const rules: Record<string, ESLintRuleModule<unknown[], string>> = {
  'ccclass-first': ccclassFirst,
  'lifecycle-order': lifecycleOrder,
  'match-ccclass-filename': matchCCClassFilename,
  'single-ccclass-per-file': singleCCClassPerFile,
}
