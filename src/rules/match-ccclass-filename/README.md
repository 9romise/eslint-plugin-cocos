# match-ccclass-filename

## Overview

This rule checks if the name of a ccclass matches the filename of the file it is in.

## Rule Details

This rule checks if the name of a ccclass matches the filename of the file it is in.

## Options

This rule has no options.

Examples of **incorrect** code for this rule:

:::incorrect

```ts
// Foo.ts

/* eslint match-ccclass-filename: ['error'] */
@ccclass('foo')
class Foo extends Component {
}
```

```ts
// Foo.ts

/* eslint match-ccclass-filename: ['error'] */
@ccclass('Bar')
class Foo extends Component {
}
```

:::

Examples of **correct** code for this rule:

:::correct

```ts
// Foo.ts

/* eslint match-ccclass-filename: ['error'] */
@ccclass('Foo')
class Foo extends Component {
  update() {
  }
}