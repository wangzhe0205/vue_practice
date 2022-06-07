<!--
    主组件
    程序加载后首先加载的组件
    也是项目中的第一个组件
-->
<!-- 
    template 页面模板   页面节点
        只能有一个最大的div
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<!-- 
    脚本节点    
    如果当前组件使用其他外部组件步骤：
        导出组件
        导入组件
        注册组件
        使用组件
-->
<script>
/**
 * 主组件导入外部的组件
 * @ 代表src
 */
import HelloWorld from './components/HelloWorld.vue'
/**
 * 导出组件
 */
export default {
    //当前组件名
  name: 'App',
  //注册导入的组件  注册之后才可以使用
  components: {
    HelloWorld
  }
}
</script>
<!--
    样式节点
-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
