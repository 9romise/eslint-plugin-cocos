import type { UserConfig } from 'tsdown'
import { readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'tsdown'

const RULE_SRC = 'src/rules'
const rules = readdirSync(RULE_SRC, {
  withFileTypes: false,
  recursive: false,
}).flatMap((dir) => {
  const name = `${RULE_SRC}/${dir}`
  return statSync(name).isDirectory() ? [`${name}/${dir}.ts`] : []
})

export default defineConfig({
  clean: true,
  dts: true,
  alias: {
    '~': resolve('src'),
  },
  entry: [
    'src/index.ts',
    ...rules,
  ],
  shims: true,
  format: 'esm',
}) as UserConfig
