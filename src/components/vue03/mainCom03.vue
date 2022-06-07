<template>
    <div id="mainCom03">
        {{msg}}
        {{this.$store.state.count}}
        {{this.$store.getters.getCon}}
        {{conState}}
        {{getCon}}
        <button @click="add1()">danji1</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		name: 'mainCom03',
		data() {
			return {
				msg: '这个是Home模板页'
			}
		},
        methods:{
            add1(){
				this.getAddCount(1);
            },
            ...mapActions([
				"getAddCount",
            ]),
        },
        computed:{
            ...mapState({
				conState:(state)=>state.count,
            }),
			...mapGetters([
				"getCon",
			]),
        }
	}
</script>

<style>

</style>