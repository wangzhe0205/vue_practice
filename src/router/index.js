/**
 * 路由配置文件
 *  需要实现跳转的组件及相关信息
 */
//导入相关的插件和组件
import vue from 'vue'
import router from 'vue-router'
//组件
import comA1 from '@/components/vue02/comA1.vue'
import comA2 from '@/components/vue02/comA2.vue'

/**
 * 使用路由 相当于将路由放到vue对象中
 * 相当于将路由配置到vue的实现类
 */
vue.use(router);

/**
 * 导出、创建路由对象【类似于构造方法（JSON对象）】 设置跳转
 */
export default new router({
    //设置具体的跳转
    routes: [
        //设置页面默认加载的组件
        {
            //跳转的地址
            path:"/",
            //重定向到指定的组件
            redirect:"/vue02/comA2",

        },
        //需要跳转的组件
        {
            //组件名
            name:"comA1",
            //地址
            path:"/vue02/comA1",
            //注册组件
            component:comA1,
        },
        {
            name:"comA2",
            path:"/vue02/comA2",
            component:comA2,
        },
    ]
})








