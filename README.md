# vue-logger
![Ci](https://img.shields.io/circleci/project/github/Lluvio/vue-logger.svg) ![Version](https://img.shields.io/npm/v/vue-logger.svg) ![License](https://img.shields.io/npm/l/vue-logger.svg) ![Downloads](https://img.shields.io/npm/dm/vue-logger.svg)


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
