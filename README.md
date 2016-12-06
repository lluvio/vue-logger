# vue-logger
[![Ci](https://img.shields.io/circleci/project/github/Lluvio/vue-logger.svg)](https://circleci.com/gh/Lluvio/vue-logger) [![Version](https://img.shields.io/npm/v/vue-logger.svg)](https://www.npmjs.com/package/vue-logger) [![License](https://img.shields.io/npm/l/vue-logger.svg)](https://www.npmjs.com/package/vue-logger) [![Downloads](https://img.shields.io/npm/dm/vue-logger.svg)](https://www.npmjs.com/package/vue-logger)


## Installation

### NPM

```bash
npm install vue-logger --save
```

## Example

### Configuration

```js
import vueLogger from 'vue-logger'

Vue.use(vueLogger, { prefix: new Date(), dev: true })
```

### Usage

```js
export default {
	ready () {
		this.$log.log('hello world')
		// or Vue.log.log('hello world')
	}
}
```

the default level group are `['log', 'warn', 'debug']`, you can extends via parameter

```js
Vue.use(vueLogger, { levels: ['info'] })
```

### Options

|Name|Type|Default|
|---|----|-----|
|prefix|string|None|
|dev|boolean|true|
|levels|array|['log', 'warn', 'debug']|

## Development Setup

```bash
# install deps
npm install

# build dist files
npm run build

# run all tests
npm test
```
