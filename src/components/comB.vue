<template>
    <div id="comB">
        comB
    <div id="divLeft">
         <comBleft></comBleft>       
    </div>
    <div id="divRight">
         <comBright></comBright> 
    </div>
    </div>
    
</template>

<script>
import comBleft from '@/components/comBleft.vue'
import comBright from '@/components/comBright.vue'

export default {
    name:"comB",
    components:{
      comBleft, 
      comBright, 
    }
}
</script>

<style>
#comB{
    border: 1px solid red;
    width: 500px;
    height: 394px;
}

#divLeft{
    border: 1px solid red;
    float: left;
    width: 100px;
    height: 394px;
}
#divRight{
    float: right;
     border: 1px solid gold;
    width: 380px;
    height: 394px;
}
</style>