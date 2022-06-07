<template>
    <div id="mainComA1">
        <!-- 
            router-linkl类似于超链接
            to属性值地址
         -->
        <router-link to="/vue02/comA1">显示coma1组件</router-link>
        <router-link to="/vue02/comA2">显示coma2组件</router-link>
        <!-- 
            路由
            指定一个显示其他组件的位置
            插座：显示其他组件  类似于HTML中的iframe
         -->
        <router-view>

        </router-view>
        <hr>
        <!-- 
            父组件向子组件传递参数【通过属性】 
            通过子组件添加属性
            属性="属性值"
        -->
        <comA1 :prentPropOne="name" @e1="m1"></comA1>
    </div>
</template>
<script>
import comA1 from '@/components/vue02/comA1.vue'
export default {
    name:"mainComA1",
    components:{
        comA1,
    },
    data(){
        return{
            name:"zhangsan",
        }
    },
    methods:{
        //声明子组件定义的事件所调用的方法
        m1(v1){
            alert(v1);
        }
    }
}
</script>
<style>

</style>