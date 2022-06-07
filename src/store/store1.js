import vue from 'vue'

import vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
vue.use(vuex);

export default new vuex.Store({
	state:{
		count:0,
	},
	getters:{
		getCon(state){
			return state.count;
		},
		mutaCount(state,num){
			state.count += num;
		}
	},
	actions:{
		getAddCount(context,num){
			context.commit("mutaCount",num);
		}
	},
	plugins:[createPersistedState({
		storage:window.sessionStorage,
		reducer(state){
			return{
				state:state,
			}
		}
	})]
})