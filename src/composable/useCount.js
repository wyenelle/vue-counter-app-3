import { ref } from "vue"

const useCount = (num) => {
const number = ref(0)

const increment = () => {
        number.value = number.value + 1
    }

    const decrement = () => {
        number.value <= 0 ? number.value = 0 :number.value = number.value - 1
    }

    const reset = () => {
         number.value = 0
    }

    const setValue = (num) => {
        
        number.value = Number(num)
    }

    return {increment,decrement,reset,setValue,number}
}

export default useCount