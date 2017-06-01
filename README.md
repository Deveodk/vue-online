# @deveodk/vueOnline

[![npm](https://img.shields.io/npm/v/@deveodk/vue-online.svg)](https://www.npmjs.com/package/@deveodk/vue-online) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> An easy way to show if a users browser is online, with support for custom notification drivers. Inspired by Sopamo/vue-online.

## Installation

```bash
npm install --save @deveodk/vue-online
```

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import @deveodk/vueOnline from '@deveodk/vue-online'

Vue.use(@deveodk/vueOnline)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="@deveodk/vue-online/dist/@deveodk/vue-online.css"></link>
<script src="@deveodk/vue-online/dist/@deveodk/vue-online.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/@deveodk/vue-online/dist/@deveodk/vue-online.css"></link>
<script src="https://unpkg.com/@deveodk/vue-online"></script>
```



## Usage

The package provides multiple options to notfiy if a users browser is online. The easiest way is to let the plugin do it automaticly. 

#### Using @deveodk/vue-toastr driver

```code
# Using the default notification
import online from '@deveodk/vue-online'
Vue.use(online, {
    notifier: require('@deveodk/vue-online/drivers/deveoToastr.js'),
    defaultOnlineTitle: 'Online',
    defaultOnlineMessage: 'You are online',
    defaultOfflineTitle: 'Offline',
    defaultOffilneMessage: 'You are offline'
})

```

#### Extending the functionality on your own

```code
# The plugin comes with a build in mixin that allows you to make your own functionality
  import {VueOnline} from '@deveodk/vue-online'
  export default {
      mixins: [VueOnline]
  }
```

This will give you a reactive variable ```{{VueOnline}}``` the variable is either ```true``` for online, or ```false``` for offline


## License

[MIT](http://opensource.org/licenses/MIT)

#### Made with <3 by deveo
