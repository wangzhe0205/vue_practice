<template>
    <div id="comA2">
        comA2<br>
       {{vA}}<br>
       {{vB}}
       {{vC}}<br>
       {{VD}}
    </div>
</template>
<script>
export default {
    name:"comA2",
    components:{},
    data(){
        return{
           //组件之间传递参数取值
           vA:this.$route.params.v1,
           vB:this.$route.params.v2,
           vC:this.$route.query.v3,
           VD:this.$route.query.v4,
        };
    },
}
</script>

<style>

</style>