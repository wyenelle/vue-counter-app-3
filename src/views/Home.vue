<script setup>
import { RouterLink } from 'vue-router'
import Img from '../assets/calc.png'

</script>

<template>
    <main class="wrapper  h-auto  main-bg  md:px-5 md:py-3">
        <div class="w-full  text-white py-6 md:py-4 flex justify-end  items-center px-5  ">
            <RouterLink to="/counter" class="text-2xl font-bold"> Counter</RouterLink>
        </div>

        <div class="w-full mt-10  h-full ">

            <div class=" grid grid-cols-2 text-white w-full h-full ">
                <div class="col-span-2 md:col-span-1 ">
                    <div class="w-full h-full centered-col gap-9 px-6">
                        <h1 class="w-10/12  text-5xl font-bold text-start ">Thinking of using a good and proven <span
                                class="">counter </span> ? i've got you covered. </h1>

                        <p class="w-10/12 text-xl ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nulla, veritatis adipisci mollitia
                            rem tenetur!
                        </p>

                        <ul class="md:mt-5  mt-3 p-4 border border-slate-200  italic    shadow-lg  ">
                            <li class="- text-xl">Add and Subtract functionality</li>
                            <li class="- text-xl">Use of Composables</li>
                            <li class="- text-xl">Set counter</li>
                            <li class="- text-xl">Reset</li>
                            <li class="- text-xl">Vuex</li>
                        </ul>

                        <RouterLink to="/counter" class="hidden md:block">
                            <button class="btn"> Explore</button>
                        </RouterLink>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1  ">
                    <div class="flex justify-center items-center h-full">
                        <img :src="Img" alt="photo" class="" />
                    </div>
                </div>
            </div>

        </div>
        <div class="mt-10"></div>
        <RouterLink to="/counter" class="md:hidden px-6 mt-10 ">
            <button class="btn"> Explore</button>
        </RouterLink>
        <div class="h-40 ">

        </div>
    </main>
</template>

<style scoped>
h1{
}
@media (max-width: 600px){
    h1{
        font-size: 2rem;
    }
}
</style>