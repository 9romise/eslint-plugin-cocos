import type { MessageIds, Options } from './match-ccclass-filename'
import { run } from '~/test-utils'
import rule from './match-ccclass-filename'

run<Options, MessageIds>({
  name: 'match-ccclass-filename',
  rule,
  valid: [
    {
      filename: 'Foo.ts',
      code: `
        @ccclass('Foo')
        class Foo {}
      `,
    },
    {
      filename: 'Foo.ts',
      code: `
        @ccclass("Foo")
        class Foo {}
      `,
    },
    {
      filename: 'Foo.ts',
      code: `
        @ccclass(\`Foo\`)
        class Foo {}
      `,
    },
  ],
  invalid: [
    {
      filename: 'Foo.ts',
      code: `
        @ccclass
        class Foo { }
      `,
      output: `
        @ccclass('Foo')
        class Foo { }
      `,
      errors: [
        { messageId: 'shouldMatchFileName' },
      ],
    },
    {
      filename: 'Foo.ts',
      code: `
        @ccclass('foo')
        class Foo { }
      `,
      output: `
        @ccclass('Foo')
        class Foo { }
      `,
      errors: [
        { messageId: 'shouldMatchFileName' },
      ],
    },
    {
      filename: 'Foo.ts',
      code: `
        @ccclass('Bar')
        class Foo { }
      `,
      output: `
        @ccclass('Foo')
        class Foo { }
      `,
      errors: [
        { messageId: 'shouldMatchFileName' },
      ],
    },
  ],
})
