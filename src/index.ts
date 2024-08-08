import type { ESLint, Linter } from 'eslint'
import { rules } from './rules'

const pluginName = 'cocos'

const recommendedRules: Linter.RulesRecord = Object.fromEntries(
  Object.keys(rules).map((ruleName) => [`${pluginName}/${ruleName}`, 'error']),
)

export default {
  rules,
  configs: {
    'recommended': {
      plugins: {
        [pluginName]: {
          name: pluginName,
          rules,
        },
      },
      rules: recommendedRules,
    },
    'recommended-legacy': {
      plugins: [pluginName],
      rules: recommendedRules,
    },
  },
} as ESLint.Plugin
