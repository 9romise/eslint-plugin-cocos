# eslint-plugin-cocos

[![npm version][npm-version-src]][npm-version-href]
[![npm bundle size][npm-bundle-size-src]][npm-bundle-size-href]
[![License][license-src]][license-href]

🚧 WIP:
An ESLint plugin for Cocos Creator (>=3.8.5, maybe lower).

## Installation

You should install [ESLint](https://eslint.org) first:

```sh
npm install --save-dev eslint
```

Next, install `eslint-plugin-cocos`:

```sh
npm install --save-dev eslint-plugin-cocos
```

## Usage

### Flat Config ([`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files))

```js
import cocos from 'eslint-plugin-cocos'

export default [
  cocos.configs.recommended,
]
```

### Legacy Config ([`.eslintrc.js`](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated))

```js
module.exports = {
  extends: [
    'plugin:cocos/recommended-legacy',
  ],
}
```

## Credit

- [eslint-stylistic](https://eslint.style)
- [eslint-plugin-de-morgan](https://github.com/azat-io/eslint-plugin-de-morgan)

## License

[MIT](./LICENSE) License &copy; 2025-PRESENT [Vida Xie](https://github.com/9romise)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/eslint-plugin-cocos
[npm-version-href]: https://npmjs.com/package/eslint-plugin-cocos
[npm-bundle-size-src]: https://img.shields.io/npm/unpacked-size/eslint-plugin-cocos
[npm-bundle-size-href]: https://npmjs.com/package/eslint-plugin-cocos
[license-src]: https://img.shields.io/npm/l/eslint-plugin-cocos
[license-href]: https://opensource.org/licenses/MIT
