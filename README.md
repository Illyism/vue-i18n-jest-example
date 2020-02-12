# vue-i18n + jest unit test example

## How it works

See [src/i18n.js](https://github.com/Illyism/vue-i18n-jest-example/blob/master/src/i18n.js)
and [src/tests/vue.js](https://github.com/Illyism/vue-i18n-jest-example/blob/master/src/tests/vue.js)
and the unit test [BottleCounter.test.js](https://github.com/Illyism/vue-i18n-jest-example/blob/master/src/components/__tests__/BottleCounter.test.js)

This allows you to use jest to unit test vue components without having a complicated setup.
This way you don't have to mock the $t() functions but actually use vue-i18n itself.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Authors

This project is maintained by [Ilias Ismanalijev](https://il.ly).
