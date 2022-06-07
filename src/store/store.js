import vue from 'vue'

import vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


vue.use(vuex);
/**
 * vuex相当于一个类
 * Store相当于vuex的一个对象
 */
export default new vuex.Store({
	//设置全局访问的state【数据，变量】【属性值JSON对象】
	//state属性值可以是任意object类型
	state:{
		//初始化全局访问变量
		conut:0,
		changeShowCom:true,

	},
	//监听state中数据变化
	getters:{
		//获取conut值的变化,有返回值
		getConut(state){
			return state.conut;
		}
	},
	//直接修改state中变量
	mutations:{
		mutaaddcount(state,num){
			state.conut += num
		},
		mutadelcount(state,num){
			state.conut -= num
		}
	},
	//间接修改state中变量
	actions:{
		getMutaDelCount(context,num){
			/**
			 * context等同于store对象
			 * 具有的相同的属性和方法
			 */
			context.commit("mutadelcount",num);


		}
	},
	plugins:[createPersistedState({
		// 选择数据存储的位置，可以是localStorage/sessionStorage/cookie
		storage:window.sessionStorage,
		// 指定需要持久化的state
		reducer:function (state){
			return{
				conut:state,
			}
		}
	})],
});