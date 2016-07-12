# minify-css-string

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/minify-css-string.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/minify-css-string
[travis-image]: https://img.shields.io/travis/bentatum/minify-css-string.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/minify-css-string
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Remove new lines and extra space from a string of css.

## Install

```
npm i minify-css-string
```

## Usage

```js
import { default as minifyCssString } from 'minify-css-string'

const cssString = `
  @-webkit-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @-moz-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @-ms-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }
`

<style>
  {minifyCssString(cssString)}
</style>

/* minifyCssString(cssString) === `@-webkit-keyframes react-fade-in { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } } @-moz-keyframes react-fade-in { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } } @-ms-keyframes react-fade-in { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } } @keyframes react-fade-in { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } }` */
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
