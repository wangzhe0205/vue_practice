/**
 * 整个项目的入口js文件 相当于Java中的main方法
 */
//导入vue
import Vue from 'vue'
//导入路由
import router from './router'
//导入vuex
import store from './store/store1'
//导入程序主组件
//import App from './App.vue'

// import mainCom from '@/components/mainCom.vue'

//import mainComA1 from '@/components/vue02/mainComA1.vue'

import main03 from '@/components/vue03/main03.vue'

import mainCom03 from '@/components/vue03/mainCom03.vue'
//阻止启动生产消息，默认不生产
Vue.config.productionTip = false
/**
 * 创建vue实例
 * 跳转到主组件 
 * h默认的函数
 * 挂载或绑定页面 index.html中的id为app的div
 * 此时的vue对相当于一个接口
 * 主组件和其他的组件export相当于这个接口的实现类
 */
new Vue({
    //使用路由
    router,
    //使用vuex
    store,
  render: h => h(mainCom03),
}).$mount('#app')
