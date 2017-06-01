import VueOnline from './VueOnline'
import utils from './libs/utils.js'

function plugin (Vue, options) {
    window.addEventListener('online', online)
    window.addEventListener('offline', offline)

    const defaultOptions = {
        defaultOnlineTitle: 'Online',
        defaultOnlineMessage: 'You are back online',
        defaultOfflineTitle: 'Offline',
        defaultOffilneMessage: 'You are now offline'
    }
    options = utils.extend(defaultOptions, [options || {}])
    function online () {
        if (options.notifier) {
            options.notifier._init(Vue)
            options.notifier._notifyOnline(Vue, options.defaultOnlineMessage, options.defaultOnlineTitle)
        }
    }
    function offline () {
        if (options.notifier) {
            options.notifier._init(Vue)
            options.notifier._notifyOffline(Vue, options.defaultOffilneMessage, options.defaultOfflineTitle)
        }
    }
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  version,
  VueOnline
}
