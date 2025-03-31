import type { MessageIds, Options } from './lifecycle-order'
import type { TestCaseError } from '~/test-utils'
import { run } from '~/test-utils'
import rule from './lifecycle-order'

function errors(n: string[]): TestCaseError<MessageIds>[] {
  return n.map((name) => ({ messageId: 'invalidOrder', data: { name } }))
}

run<Options, MessageIds>({
  name: 'lifecycle-order',
  rule,
  valid: [
    `
      @ccclass
      class Foo {}
    `,
    `
      @ccclass
      class Foo {
        x: string
        onLoad() {}
        y: number
        start() {}
        onEnable() {}
        update() {}
        lateUpdate() {}
        onDisable() {}
        onDestroy() {}
      }
    `,
    {
      code: `
        @ccclass
        class Foo {
          start() {}
          x: string
          onLoad() {}
          onDestroy() {}
          y: number
          onEnable() {}
          onDisable() {}
          update() {}
          lateUpdate() {}
        }
      `,
      options: [{ order: ['start', 'onLoad', 'onDestroy', 'onEnable', 'onDisable', 'update', 'lateUpdate'] }],
    },
  ],
  invalid: [
    {
      code: `
        @ccclass
        class Foo {
          start() {}
          onLoad() {}
        }
      `,
      errors: errors(['onLoad']),
    },
    {
      code: `
        @ccclass
        class Foo {
          lateUpdate() {}
          x: string
          onDestroy() {}
          y: number
          start() {}
          onEnable() {}
          update() {}
          onDisable() {}
          onLoad() {}
        }
      `,
      errors: errors(['start', 'onEnable', 'update', 'onDisable', 'onLoad']),
    },
  ],
})
