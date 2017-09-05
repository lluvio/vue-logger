const vLogger = {}
vLogger.install = function (Vue, options) {
  if (vLogger.installed) return
  const logger = {
    dev: true,
    prefix: '',
    shortname: true,
    levels: ['log', 'warn', 'debug', 'error', 'dir']
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
      if (!logger.dev || typeof console === 'undefined') return
      const args = Array.prototype.slice.apply(arguments)
      const prefix = (typeof logger.prefix === 'function') ? logger.prefix() : logger.prefix;
      args.unshift(`[${prefix} :: ${level}]`.toUpperCase())
      console[level].apply(console, args)
    }
    if (logger.shortname) {
      Vue.prototype[`$${level}`] = logger[level]
    }
  }
  Vue.prototype.$console = logger
  Vue.console = logger
}
export default vLogger
