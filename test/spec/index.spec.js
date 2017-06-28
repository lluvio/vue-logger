import Vue from 'vue'
import Logger from '../../src/index.js'

describe("this.$console", function() {
  
  Vue.use(Logger, {shortname: false})
  const vm = new Vue()
  const str = 'hello world'

  it("level log out hello world", function() {
    expect(vm.$console.log).toBeDefined()
    vm.$console.log = jasmine.createSpy('log')
    vm.$console.log(str)
    expect(vm.$console.log).toHaveBeenCalledWith(str);
  });
  
  it("level debug out hello world", function() {
    expect(vm.$console.debug).toBeDefined()
    vm.$console.debug = jasmine.createSpy('debug')
    vm.$console.debug(str)
    expect(vm.$console.debug).toHaveBeenCalledWith(str);
  });
  
  describe("Vue log", function() {
    it("level debug out hello world", function() {
      expect(Vue.console.debug).toBeDefined()
      Vue.console.debug = jasmine.createSpy('debug')
      Vue.console.debug(str)
      expect(Vue.console.debug).toHaveBeenCalledWith(str);
    });
  });
});
