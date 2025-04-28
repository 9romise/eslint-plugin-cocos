import type { MessageIds, Options } from './single-ccclass-per-file'
import { run } from '~/test-utils'
import rule from './single-ccclass-per-file'

run<Options, MessageIds>({
  name: 'single-ccclass-per-file',
  rule,
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
      class Bar {}
      @ccclass
      class Foo {}
    `,
  ],
  invalid: [
    {
      code: `
        @ccclass
        class Foo {}
        @ccclass
        class Bar {}
      `,
      errors: [
        { messageId: 'singleCCClass' },
      ],
    },
    {
      code: `
        @ccclass('Foo')
        class Foo {}
        @ccclass('Bar')
        class Bar {}
        @ccclass('Baz')
        class Baz {}
      `,
      errors: [
        { messageId: 'singleCCClass' },
        { messageId: 'singleCCClass' },
      ],
    },
  ],
})
