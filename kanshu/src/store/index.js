import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        msg: '请登录'
    },
    mutations: {
        newMsg(state, user) {
            state.msg = user.username;
        }
    },
    getters: {

    },
    actions: {
       
    }
})

