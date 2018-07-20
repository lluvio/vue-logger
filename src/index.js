const vLogger = {}
vLogger.install = function (Vue, options) {
  if (vLogger.installed) return
  const logger = {
    dev: true,
    prefix: '',
    shortname: true,
    levels: ['log', 'warn', 'debug', 'error', 'dir'],
    forceLevels: [],
    history: []
  }
  if (options) {
    for (const key of Object.keys(options)) {
      if (key === 'levels' || key === 'forceLevels') {
        logger[key] = logger[key].concat(options[key])
      } else {
        logger[key] = options[key]
      }
    }
  }
  for (const level of logger.levels) {
    logger[level] = function () {
      if (typeof console === 'undefined') return
      // 在开发模式 或者 forceLevels 存在则打印
      if (logger.dev || logger.forceLevels.indexOf(level) >= 0) {
        const args = Array.prototype.slice.apply(arguments)
        const prefix = (typeof logger.prefix === 'function') ? logger.prefix() : logger.prefix
        const prefixWithLevel = `[${prefix} :: ${level}]`.toUpperCase()
        args.unshift(prefixWithLevel)
        console[level].apply(console, args)
        logger.history.push(args.join(' '))

        // 历史记录超过 20则清空
        if (logger.history.length >= 20) {
          logger.history.length = 0
        }
      }
    }
    if (logger.shortname) {
      Vue.prototype[`$${level}`] = logger[level]
    }
  }
  Vue.prototype.$console = logger
  Vue.console = logger
}
export default vLogger
