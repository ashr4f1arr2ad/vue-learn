// import Vue from 'vue';

// import Vuex from 'vuex';

import {createStore} from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: { // = data
//         count: 0
//     },

//     getters: { // = computed properties
        
//     },

//     actions: {

//     },

//     mutations: {

//     }
// });

export default createStore({
    state: {
        count: 0,
        mode: JSON.parse(localStorage.getItem('mode'))
    },

    getters: {
        counter: function(state) {
            return state.count
        }
    },

    // actions: {
    //     addToCounter(context, payload) {
    //         const counter = context.state.count;
    //         counter.push(payload);
    //         context.commit('UPDATE_COUNTER', counter);
    //     }
    // },

    mutations: {
        increment(state) {
            // console.log(payload)
            state.count ++
        },
        toggle(state) {
            if(state.mode === 'dark') {
                state.mode = 'light';
                localStorage.setItem('mode', JSON.stringify(state.mode));
              } else {
                state.mode = 'dark';
                localStorage.setItem('mode', JSON.stringify(state.mode));
            }
        }
    }
});