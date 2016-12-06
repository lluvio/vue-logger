const vLogger = {}
vLogger.install = function (Vue, options) {
  if (vLogger.installed) return
  var logger = {
    dev: true,
    prefix: '',
    levels: ['log', 'warn', 'debug']
  }
  if (options) {
    for (const key of Object.keys(options)) {
      if (key === 'levels') {
        logger[key] = logger[key].concat(options[key])
      } else {
        logger[key] = options[key]
      }
    }
  }
  for (const level of logger.levels) {
    logger[level] = function () {
      if (!this.dev || typeof console === 'undefined') return
      var args = Array.from(arguments)
      args.unshift(`[${this.prefix} :: ${level}]`.toUpperCase())
      console[level].apply(console, args)
    }
  }
  Vue.prototype.$log = logger
  Vue.log = logger
}
export default vLogger
