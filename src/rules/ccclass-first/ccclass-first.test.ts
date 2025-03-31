import type { MessageIds, Options } from './ccclass-first'
import { run } from '~/test-utils'
import ccclassFirst from './ccclass-first'

run<Options, MessageIds>({
  name: 'ccclass-first',
  rule: ccclassFirst,
  valid: [
    `class Foo {}`,
    `
      @ccclass
      class Foo {}
    `,
    `
      @ccclass('Foo')
      class Foo {}
    `,
    `
    @ccclass
    @foo
    class Foo {}
    `,
    `
    @ccclass('Foo')
    @foo
    class Foo {}
    `,
    `
      @ccclass @foo
      class Foo {}
    `,
    `
      @ccclass('Foo') @foo
      class Foo {}
    `,
  ],
  invalid: [
    {
      code: `
        @foo
        @ccclass
        class Foo {}
      `,
      output: `
        @ccclass\n@foo
        class Foo {}
      `,
      errors: [
        {
          messageId: 'first',
        },
      ],
    },
    {
      code: `
        @foo
        @ccclass('Foo')
        class Foo {}
      `,
      output: `
        @ccclass('Foo')\n@foo
        class Foo {}
      `,
      errors: [
        {
          messageId: 'first',
        },
      ],
    },
    {
      code: `
        @foo @ccclass
        class Foo {}
      `,
      output: `
        @ccclass\n@foo class Foo {}
      `,
      errors: [
        {
          messageId: 'first',
        },
      ],
    },
  ],
})
