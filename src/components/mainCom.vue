<template>
    <div id="mainCom">
        maincom组件
       
             <div id="divTop">
                  <comA></comA>
            </div>
            <div id="divBottom">
                <comB></comB>
            </div>
           
    </div>
   
</template>

<script>
//导入comA
import comA from '@/components/comA.vue';
import comB from '@/components/comB.vue';
export default {
    name:"mainCom",
    //注册
    components:{
        comA,
        comB,
    }
}
</script>

<style>
#mainCom{
    border: 1px solid black;
    width: 600px;
    height: 600px;
}
#divTop{
    border: 1px solid green;
    width: 390px;
    height: 100px; 
}
#divBottom{
     border: 1px solid blue;
    float: left;
    width: 500px;
    height: 394px;
}

</style>


