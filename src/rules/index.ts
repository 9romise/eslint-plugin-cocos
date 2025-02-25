import type { ESLintRuleModule } from '~/utils'
import ccclassFirst from './ccclass-first/ccclass-first'

export const rules: Record<string, ESLintRuleModule<unknown[], string>> = {
  'ccclass-first': ccclassFirst,
}
