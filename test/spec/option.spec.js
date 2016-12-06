import Vue from 'vue'
import Logger from '../../src/index.js'

// reinstall plugin
Logger.installed = false

describe("Vue log option", function() {
  
  Vue.use(Logger, { dev: false, prefix: 'prefix', levels: ['info']})
  
  it("with dev false", function() {
    expect(Vue.log.dev).toBeDefined()
    expect(Vue.log.dev).toEqual(false);
  });
  
  it("with prefix 'prefix'", function() {
    expect(Vue.log.prefix).toEqual('prefix')
  });
  
  it("add level info", function() {
    expect(Vue.log.info).toBeDefined()
  });
});

