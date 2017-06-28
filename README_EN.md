# Vue logger
[![Ci](https://img.shields.io/circleci/project/github/lluvio/vue-logger.svg)](https://circleci.com/gh/Lluvio/vue-logger) [![Version](https://img.shields.io/npm/v/vue-logger.svg)](https://www.npmjs.com/package/vue-logger) [![License](https://img.shields.io/npm/l/vue-logger.svg)](https://www.npmjs.com/package/vue-logger) [![Downloads](https://img.shields.io/npm/dm/vue-logger.svg)](https://www.npmjs.com/package/vue-logger)

> It works with Vue.js 2.x and 1.x

## Installation

### NPM

```bash
npm install vue-logger --save
```

## Usage

```js
// ready
import vueLogger from 'vue-logger'
Vue.use(vueLogger, { 
  prefix: new Date(),
  dev: true,
  shortname: true,
  levels: ['log', 'warn', 'debug', 'error', 'dir']
})
```

```js
// using
export default {
  ready () {
    // when shortname set true. the default value is true
    this.$error('hello world')

    // using in global
    Vue.console.log('hello world')
  }
}
```

the default level group are `['log', 'warn', 'debug', 'error', 'dir']`, you can extends via parameter

```js
Vue.use(vueLogger, { levels: ['info'] })

// using in instance
this.$info('hello world')
```

### Options

|Name|Type|Default|
|---|----|-----|
|prefix|string|None|
|dev|boolean|true|
|shortname|boolean|true|
|levels|array|['log', 'warn', 'debug', 'error', 'dir']|

## Development Setup

```bash
# install deps
npm install

# build dist files
npm run build

# run all tests
npm test
```

## TODO

- [ ] sentry