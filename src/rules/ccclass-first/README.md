# ccclass-first

Enforce `ccclass` decorator to be the first decorator.

## Rule Details

This rule enforces `ccclass` decorator to be the first decorator.

## Options

This rule has no options.

Examples of **incorrect** code for this rule:

:::incorrect

```ts
/* eslint ccclass-first: ["error"] */
@ccclass('Foo')
@requireComponent(Button)
class Foo extends Component {

}
```

:::

Examples of **correct** code for this rule:

:::correct

```ts
/* eslint ccclass-first: ["error"] */
@requireComponent(Button)
@ccclass('Foo')
class Foo extends Component {

}
```

:::
