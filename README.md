# Vue logger

[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
[![Ci](https://img.shields.io/circleci/project/github/lluvio/vue-logger.svg)](https://circleci.com/gh/Lluvio/vue-logger) [![Version](https://img.shields.io/npm/v/vue-logger.svg)](https://www.npmjs.com/package/vue-logger) [![License](https://img.shields.io/npm/l/vue-logger.svg)](https://www.npmjs.com/package/vue-logger) [![Downloads](https://img.shields.io/npm/dm/vue-logger.svg)](https://www.npmjs.com/package/vue-logger)

文档(Document): [English](./README_EN.md)

> 适用于 vue 1.x 和 2.x

## 安装

```bash
npm install vue-logger --save
```

## 使用

引入

```js
import vueLogger from "vue-logger";
Vue.use(vueLogger, {
  prefix: () => new Date(),
  dev: true,
  shortname: true,
  levels: ["log", "warn", "debug", "error", "dir"],
  forceLevels: []
});
```

调用

```js
export default {
  mounted() {
    // 当 shortname 为 true 时, 默认为true
    this.$error("hello world");

    // 全局使用
    Vue.console.log("hello world");
  }
};
```

默认 levels `['log', 'warn', 'debug', 'error', 'dir']`, 你可以额外添加，

```js
Vue.use(vueLogger, { levels: ["info"] });

// 在组件中使用
this.$info("hello world");
// log依旧可以使用
this.$log("hello world");
```

关于`shortname`，默认是 `true`，如果不想要别名，可以这么调用

```js
this.$console.log();
```

### Options

| Name        | Type    | Default                                  | Desc                                  |
| ----------- | ------- | ---------------------------------------- | ------------------------------------- |
| prefix      | string  | None                                     | 日志前缀，可以通过 `function`动态添加 |
| dev         | boolean | true                                     | 日志开关，可选择在生产环境中关闭      |
| shortname   | boolean | true                                     |                                       |
| levels      | array   | ['log', 'warn', 'debug', 'error', 'dir'] |                                       |
| forceLevels | array   | []                                       | 无视 dev 的配置 强制打印              |

## 开发

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
