import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局配置
import '@/assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'
import http from '@/api/config'
import './mock'

//第三方包
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

/* 引入element-ui报如下警告信息 20211103
warning element-ui > async-validator > babel-runtime > core-js@2.6.12: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > sass-loader@8.0.2" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
*/
