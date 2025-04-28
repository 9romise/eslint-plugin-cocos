# single-ccclass-per-file

## Overview

This rule enforces having only one ccclass per file.

## Rule Details

Having multiple ccclasses in a single file can make code harder to maintain and find. This rule enforces that each file should contain at most one ccclass declaration.

## Options

This rule has no options.

Examples of **incorrect** code for this rule:

:::incorrect

```ts
/* eslint single-ccclass-per-file: ["error"] */
@ccclass('Foo')
class Foo extends Component {
}

@ccclass('Bar')
class Bar extends Component {
}
```

:::

Examples of **correct** code for this rule:

:::correct

```ts
/* eslint single-ccclass-per-file: ["error"] */
@ccclass('Foo')
class Foo extends Component {
}
```

:::