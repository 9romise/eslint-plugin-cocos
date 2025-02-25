import type { Config } from 'tsdown'
import { resolve } from 'node:path'
import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  alias: {
    '~': resolve('src'),
  },
  entry: [
    'src/index.ts',
  ],
  shims: true,
  format: ['cjs', 'esm'],
}) as Config
