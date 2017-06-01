module.exports = {
        data () {
          return {
              VueOnline: true
          }
        },
        created () {
            this.VueOnlineSetListeners()
        },
        beforeDestroy () {
            this.VueOnlineRemoveListeners()
        },
        methods: {
            VueOnlineSetListeners () {
                window.addEventListener('online', this.VueOnlineUpdateOnline)
                window.addEventListener('offline', this.VueOnlineUpdateOnline)
            },
            VueOnlineRemoveListeners () {
                window.removeEventListener('online', this.VueOnlineUpdateOnline)
                window.removeEventListener('offline', this.VueOnlineUpdateOnline)
            },
            VueOnlineUpdateOnline () {
                if (typeof window.navigator.onLine === undefined) {
                    this.VueOnline = true
                } else {
                    this.VueOnline = window.navigator.onLine
                }
            }
        }
}
