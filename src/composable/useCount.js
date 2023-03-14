import { ref } from "vue"

const useCount = (num,store) => {
const number = ref(0)

const increment = () => {
        store.commit('add')
    }

    const decrement = () => {
        store.commit('minus')
    }

    const reset = () => {
        store.commit('reset')
    }

    const setValue = (num) => {
        store.commit('setVal',num)        
    }

    return {increment,decrement,reset,setValue,number}
}

export default useCount