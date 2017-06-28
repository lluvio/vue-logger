import Vue from 'vue'
import Logger from '../../src/index.js'

// reinstall plugin
Logger.installed = false

describe("Vue log option", function() {
  
  Vue.use(Logger, { dev: false, prefix: 'prefix', shortname: true,levels: ['info']})
  const vm = new Vue()
  const str = 'hello world'
  
  it("with dev false", function() {
    expect(Vue.console.dev).toBeDefined()
    expect(Vue.console.dev).toEqual(false);
  });
  
  it("with prefix 'prefix'", function() {
    expect(Vue.console.prefix).toEqual('prefix')
  });
  
  it("add level info", function() {
    expect(Vue.console.info).toBeDefined()
  });

  it("with shortname true", function() {
    expect(vm.$warn).toBeDefined()
    expect(vm.$log).toBeDefined()
    expect(vm.$error).toBeDefined()
    vm.$error = jasmine.createSpy('log')
    vm.$error(str)
    expect(vm.$error).toHaveBeenCalledWith(str);
  });
});

