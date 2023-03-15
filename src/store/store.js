import {createStore} from 'vuex'

export const store = createStore({
    state: {
        count : 0
    },
    mutations: {
        add(state){
            state.count++
        },
        minus(state){
            state.count <= 0 ? store.count = 0 : state.count--
        },
        reset(state){
            state.count = 0
        },
        setVal(state,payload){
            state.count = (state.count * 1) + (payload * 1)
        }
    }
})