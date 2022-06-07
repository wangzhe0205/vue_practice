<template>
    <div id="main03">
        {{msg}}<br>
<!--
    从state中获取数据
-->
        {{conut}}<br>
<!--        //从getters取值-->
        {{countCom}}

<!--        单击事件直接更新state-->
        <button @click="addcount()">danji1</button>

<!--        单击事件间接更新state-->
        <button @click="delcount()">danji2</button><br>

        {{conState}}<br>
        {{getConut}}<br>
        <button @click="a()">danji3</button><br>
    </div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		name: 'main03',
		data() {
			return {
				msg: '这个是Home模板页',
                //从state中取值
                conut:this.$store.state.conut,
                //从getters取值
                countCom:this.$store.getters.getConut,
			}
		},
        methods:{
			//直接更新
			addcount(){
				/**
                 *  更新state的
                 *  调用state对象中的mutation属性中的方法
                 *  commit(store对象中mutation属性中声明的方法，修改后的数据)
				 */
				//this.$store.commit("mutaaddcount",2);
                this.getMutaDelCount(1);
			},
            //间接更新
			delcount(){
				/**
				 *  调用state对象中的action属性中的方法
                 *  dispatch(store对象中action属性中声明的方法，修改后的数据)
				 */
				this.$store.dispatch("getMutaDelCount",3)
            },
			...mapActions([
				"getMutaDelCount",
			]),
            a(){
				let a =window.sessionStorage.getItem("conut");
				console.log(a);
            }
        },
        computed:{
			...mapState({
				conState:(state)=>state.conut,
			}),
            ...mapGetters([
            	"getConut",
            ]),

        },
	}
</script>

<style>

</style>