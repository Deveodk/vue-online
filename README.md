# @deveodk/vueOnline

<img src="https://cloud.githubusercontent.com/assets/7561792/26679286/abc5ffd0-46d4-11e7-8578-8d1525600d77.png" width="100%" />

[![npm](https://img.shields.io/npm/v/@deveodk/vue-online.svg)](https://www.npmjs.com/package/@deveodk/vue-online) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> An easy way to show if a users browser is online, with support for custom notification drivers. Inspired by Sopamo/vue-online.

# Demo
See a functioning demo
<a href="https://packages.deveo.io/packages/vue/vue-online">deveo demo site</a>


## Installation

```bash
npm install --save @deveodk/vue-online
```

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import vueOnline from '@deveodk/vue-online'
Vue.use(vueOnline)
```

### Browser

```html
<!-- From CDN -->
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

<img src="https://cloud.githubusercontent.com/assets/7561792/26679305/bc4d7bda-46d4-11e7-9270-3f6cacdd0ae9.png" width="100%" />
