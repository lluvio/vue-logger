import Vue from 'vue'
import Logger from '../../src/index.js'

describe("this.$log", function() {
  
  Vue.use(Logger)
  const vm = new Vue()
  const str = 'hello world'
  
  it("level log out hello world", function() {
    expect(vm.$log.log).toBeDefined()
    vm.$log.log = jasmine.createSpy('log')
    vm.$log.log(str)
    expect(vm.$log.log).toHaveBeenCalledWith(str);
  });
  
  it("level debug out hello world", function() {
    expect(vm.$log.debug).toBeDefined()
    vm.$log.debug = jasmine.createSpy('debug')
    vm.$log.debug(str)
    expect(vm.$log.debug).toHaveBeenCalledWith(str);
  });
  
  describe("Vue log", function() {
    it("level debug out hello world", function() {
      expect(vm.$log.debug).toBeDefined()
      Vue.log.debug = jasmine.createSpy('debug')
      Vue.log.debug(str)
      expect(Vue.log.debug).toHaveBeenCalledWith(str);
    });
  });
});
