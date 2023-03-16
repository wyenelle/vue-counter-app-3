<script setup>
import useCounter from '../composable/useCount.js'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useState } from 'vuex-composition-helpers/dist'


const store = useStore()
const { count } = useState(['count'])


let num = ''
const { increment, decrement, reset, setValue } = useCounter(num, store)
</script>

<template>
    <div class="h-screen pb-20 px-3 ">
        <h1 class="text-white w-8/12 mx-auto mt-8 text-center font-bold text-4xl">Counter Page</h1>

        <div class="flex justify-evenly items-center flex-col mt-10 gap-5 h-5/6  text-white">
            <div class="h-40 rounded-md centered mb-3 ">
                <h1 class="text-6xl font-extrabold px-2 text-white"> {{ count }}</h1>
            </div>

            <div class="flex flex-col mb-4  w-7/12  gap=5">
                <div class=" centered w-8/12 mx-auto gap-3">
                    <input type="text" class="h-10 text-black px-2  outline-none in rounded-md  text-2xl" placeholder=" value" v-model="num" />
                    <button class=" text-2xl to px-3 p-auto rounded-md " @click="setValue(num)">Add</button>
                </div>



                <div>
                    <div class="centered mt-6 gap-5">
                        <button @click="decrement" class="  px-2 py-3 text-x bg-green-500 font-bold rounded-md">Decrement</button>
                        <button @click="reset" class=" px-2 py-3 text-x bg-red-500 font-bold rounded-md">Reset</button>
                        <button @click="increment" class=" px-2 py-3 text-x bg-green-500 font-bold rounded-md">Increment</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-3 py-6 w-10/12 md:w-4/12 mx-auto homing text-center rounded-md h-10 centered  text-white font-bold mb-20">
            <router-link to='/' class="">
                Return Home
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.in{
    width: 120px;
    height: 60px;
}
.to{
    height: 62px;
}
</style>