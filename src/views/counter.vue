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
    <div class="h-screen pb-20 ">
        <h1 class="text-white w-6/12 mx-auto mt-8 text-center text-3xl">Counter Page</h1>

        <div class="flex justify-evenly items-center flex-col mt-10 gap-5 h-5/6  text-white">
            <div class="h-40 rounded-md centered mb-3 ">
                <h1 class="text-6xl font-extrabold px-2 text-white"> {{ count }}</h1>
            </div>

            <div class="flex flex-col mb-4 gap=5">
                <div class=" py-3">
                    <input type="text" class="h-10 py-2 px-2 bg-transparent text-white border-2 border-white py-3 outline-none rounded-md  text-2xl" placeholder="set value" v-model="num" />
                    <button class=" bg-green-600 text-center text-xl text-white h-10 px-2 font-bold rounded-md py-3" @click="setValue(num)">Add</button>
                </div>



                <div>
                    <div class="centered mt-3 gap-5">
                        <button @click="decrement" class="  px-2 py-3 text-x bg-green-500 font-bold">Decrement</button>
                        <button @click="reset" class=" px-2 py-3 text-x bg-red-500 font-bold">Reset</button>
                        <button @click="increment" class=" px-2 py-3 text-x bg-green-500 font-bold">Increment</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-3 py-6 w-10/12 mx-auto bg-orange-500 text-center rounded-md h-10 centered  text-white font-bold mb-20">
            <router-link to='/' class="">
                Return Home
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>