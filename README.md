# phonetic-alphabet-converter

[![NPM](https://nodei.co/npm/phonetic-alphabet-converter.png)](https://nodei.co/npm/phonetic-alphabet-converter/)

[![NPM version](https://img.shields.io/npm/v/phonetic-alphabet-converter.svg)](https://www.npmjs.com/package/phonetic-alphabet-converter)
[![Build Status](https://travis-ci.org/remarkablemark/phonetic-alphabet-converter.svg?branch=master)](https://travis-ci.org/remarkablemark/phonetic-alphabet-converter)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/phonetic-alphabet-converter/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/phonetic-alphabet-converter?branch=master)

Converts string to [NATO phonetic alphabet](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet) words:

```
PhoneticAlphabetConverter(string[, alphabet])
```

#### Example:

```js
import converter from 'phonetic-alphabet-converter';
converter('abc'); // ['alpha', 'bravo', 'charlie']
```

[Demo](https://remarkablemark.org/phonetic-alphabet-converter/) | [JSFiddle](https://jsfiddle.net/remarkablemark/g4r6fu7j/) | [Repl.it](https://repl.it/@remarkablemark/phonetic-alphabet-converter)

## Installation

[NPM](https://www.npmjs.com/package/phonetic-alphabet-converter):

```sh
$ npm install phonetic-alphabet-converter --save
```

[Yarn](https://yarnpkg.com/package/phonetic-alphabet-converter):

```sh
$ yarn add phonetic-alphabet-converter
```

[CDN](https://unpkg.com/phonetic-alphabet-converter/):

```html
<script src="https://unpkg.com/phonetic-alphabet-converter@latest/umd/phonetic-alphabet-converter.js"></script>
<script>
  window.PhoneticAlphabetConverter(/* string */);
</script>
```

## Usage

Import module:

```js
// CommonJS
const converter = require('phonetic-alphabet-converter').default;

// ES Modules
import converter from 'phonetic-alphabet-converter';
```

Parse string:

```js
converter('abc'); // ['alpha', 'bravo', 'charlie']
```

By default, the converter uses a mapping of the NATO phonetic alphabet.

To override that, you can pass a custom object to the 2nd argument:

```js
converter('abc', {
  a: 'Amsterdam',
  b: 'Baltimore',
  c: 'Casablanca'
  // ...
});
// ['Amsterdam', 'Baltimore', 'Casablanca']
```

Or assign values to the default mapping:

```js
import { NATO_PHONETIC_ALPHABET } from 'phonetic-alphabet-converter';

converter('abc', {
  ...NATO_PHONETIC_ALPHABET,
  a: 'alfa'
});
// ['alfa', 'bravo', 'charlie']
```

## Testing

Run tests with coverage:

```sh
$ npm test
```

Run tests in watch mode:

```sh
$ npm run test:watch
```

Lint files:

```sh
$ npm run lint
```

Fix lint errors:

```sh
$ npm run lint:fix
```

## Release

Only collaborators with credentials can release and publish:

```sh
$ npm run release
$ git push --follow-tags && npm publish
```

## License

[MIT](https://github.com/remarkablemark/phonetic-alphabet-converter/blob/master/LICENSE)
