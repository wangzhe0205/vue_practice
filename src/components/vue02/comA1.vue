<template>
    <div id="comA1">
        comA1
        {{per.name}}
        {{per.age}}
        <!-- 
            模拟页面组件A跳转页面组件B
            使用路由【名字或路径】
            1、实现comA1组件跳转comA2组件
                页面添加按钮
                按钮添加事件
                事件调用方法
                方法中实现方法
         -->
         <button @click="m1()">通过名字跳转comA2</button>
         <button @click="m2()">通过路径</button>
         <hr>
         {{prentPropOne}}
         <hr>
         <!-- 
             子组件向父组件传递参数【通过事件】
          -->
          <button @click="m3()">子组件向父组件传递参数【通过事件】</button>
    </div>
</template>
<script>
export default {
    name:"comA1",
    components:{},
    data(){
        return{
            per:{
                name:'zhanhsann',age:21
            }
        };
    },
    methods:{
        //通过名字跳转comA2
        m1:function(){
            this.$router.push({
                name:"comA2",
                //传递参数 JSoN对象
                params:{
                    v1:1,v2:2
                }
            });
        },
        //通过路径
        m2(){
            this.$router.push({
                path:"comA2",
                //传递参数  JSON对象
                query:{
                    v3:3,v4:4,
                }
            });
        },
        //子组件向父组件传递参数【通过事件】
        m3(){
            /**
             * 通过事件和方法
             */
            this.$emit("e1","lili");
        },

    },
    /**
     * 接受父组件通过属性传递参数
     * props属性值是数组可以接受多个参数
     */
    props:[
        "prentPropOne"
    ]
}
</script>

<style>

</style>