import Vue from 'vue'
import Logger from '../../src/index.js'

// reinstall plugin
Logger.installed = false

describe("Vue log option", function () {

  Vue.use(Logger, {
    dev: true,
    prefix: 'prefix',
    shortname: true,
    levels: ['info'],
    forceLevels: ['error']
  })

  const vm = new Vue()
  const str = 'hello world'

  it("with dev true", function () {
    expect(Vue.console.dev).toBeDefined()
    expect(Vue.console.dev).toEqual(true);
  });

  it("with prefix 'prefix'", function () {
    expect(Vue.console.prefix).toEqual('prefix')
  });

  it("add level info", function () {
    expect(Vue.console.info).toBeDefined()
  });

  it("with shortname true", function () {
    expect(vm.$warn).toBeDefined()
    expect(vm.$log).toBeDefined()
    expect(vm.$error).toBeDefined()
    vm.$error(str)
    const temp = vm.$console.history.pop()
    expect(temp).toEqual(`[PREFIX :: ERROR] ${str}`);
  });

  it("with dev true and forceLevels limit with error", function () {
    vm.$console.dev = false
    vm.$error(str)
    const temp = vm.$console.history.pop()
    expect(temp).toEqual(`[PREFIX :: ERROR] ${str}`);

    vm.$log(str)
    const log = vm.$console.history.pop()
    expect(log).toEqual(undefined);
  });

  it("with history stack length > 20", function () {
    vm.$console.dev = true
    const length = 30
    for (const i of Object.keys(Array.from({
        length
      }))) {
      // console.log(i);
      vm.$log(i)
    }
    expect(vm.$console.history.length).toEqual(length - 20);
  });

});
