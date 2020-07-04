import Vue from 'vue'
import App from './App.vue'

//引入store，将store变成一个全局的仓库
import store from '@/store'

// import router from './router'
Vue.config.productionTip = false

new Vue({
  // rouer,
  store,//调用store
  render: h => h(App),
}).$mount('#app')
