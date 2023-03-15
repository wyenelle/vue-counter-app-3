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
    <div class="h-screen border-4 border-red-500">
        <h1 class="text-white w-6/12 mx-auto mt-8 text-center text-3xl">Counter Page</h1>

        <div class="flex justify-center items-center flex-col mt-10 gap-5 h-5/6 border-4 border-red-500 text-white">
            <div class="h-40 border-4 border-orange-600 rounded-md centered mb-3 ">
                <h1 class="text-6xl font-extrabold px-2 text-white"> {{ count }}</h1>
            </div>

            <div class="input">
                <input type="text" class="" placeholder="set value" v-model="num" />
                <button @click="setValue(num)">Add</button>
            </div>



            <div>
                <div class="functions">
                    <button @click="decrement" class="-">Decrement</button>
                    <button @click="reset" class="reset">Reset</button>
                    <button @click="increment" class="-">Increment</button>
                </div>
            </div>
        </div>

        <div class="home">
            <router-link to='/' class="home-text">
                Return Home
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>