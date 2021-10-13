import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 
import './assets/css/base.css'
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter)

// 全局注册icon-svg组件
import iconFont from '@/components/iconFont'
Vue.component('svg-icon', iconFont)

new Vue({
  render: h => h(App),
  // 添加事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
  ,
  router
}).$mount('#app')
