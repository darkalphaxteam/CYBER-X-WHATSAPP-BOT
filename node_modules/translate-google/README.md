# Translate Google
free google translate


## Features

- Auto language detection
- Spelling correction
- Language correction
- Fast and reliable – it uses the same servers that [translate.google.com](https://translate.google.com) uses

## Install
```
npm install --save translate-google
```

## Usage

From automatic language detection to English:

``` js
const translate = require('translate-google')

translate('Ik spreek Engels', {to: 'en'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})
```

From English to Dutch with a typo:

``` js
translate('I spea Dutch!', {from: 'en', to: 'nl'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})
```


translate for array or object:
``` js
translate({a: 'I spea Dutch!', b: ['hello', 'world']}, {from: 'en', to: 'nl'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})
```

## API

### translate(text, options)

#### text

Type: `string`, `object`, `array`

The text to be translated

#### options

Type: `object`

##### from

Type: `string` Default: `auto`

The `text` language. Must be `auto` or one of the codes/names (not case sensitive) contained in [languages.js](https://github.com/shikar/M_NMP_GOOGLE_TRANSLATE/blob/master/languages.js)

##### to

Type: `string` Default: `en`

The language in which the text should be translated. Must be one of the codes/names (not case sensitive) contained in [languages.js](https://github.com/shikar/M_NMP_GOOGLE_TRANSLATE/blob/master/languages.js).

### Returns an `object`:

- `text` *(string, object, array)* – The translated text.

``` js
translate(['I spea Dutch', 'I spea Dutch']).then(res => {
    console.log(res);
    //=> ["I [speak] Dutch", "I [speak] Dutch"]
}).catch(err => {
    console.error(err);
});
```

## License

MIT © [Shikar](qzh.shi@gmail.com)
