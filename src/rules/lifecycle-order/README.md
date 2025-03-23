# lifecycle-order

Enforce a specific order of the lifecycle methods in a ccclass.

## Rule Details

This rule enforces a specific order of the lifecycle methods in a ccclass.

## Options

This rule has options:
- `order`, default: ['onLoad', 'start', 'onEnable', 'update', 'lateUpdate', 'onDisable', 'onDestroy']

Examples of **incorrect** code for this rule:

:::incorrect

```ts
/* eslint lifecycle-order: ['error'] */
@ccclass('Foo')
class Foo extends Component {
  onDestroy() {

  }
  start() {
  }
  onLoad() {
  }
}
```

:::

Examples of **correct** code for this rule:

:::correct

```ts
/* eslint lifecycle-order: ['error'] */
@ccclass('Foo')
class Foo extends Component {
  onLoad() {
  }
  start() {
  }
  update() {
  }
  onDestroy() {
  }
}