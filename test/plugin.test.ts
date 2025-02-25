import type { ESLint } from 'eslint'
import { assertType, describe, it } from 'vitest'
import plugin from '~/index'

describe('plugin', () => {
  it('should match Eslint.Plugin', () => {
    assertType<ESLint.Plugin>(plugin)
  })
})
