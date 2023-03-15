<script setup>
import {RouterLink} from 'vue-router'

</script>

<template>
    <main class="wrapper  h-screen centered-col main-bg gap-3">
        <div class="w-full md:w-11/12 py-5 md:py-4 flex justify-between items-center px-2 md:px-0 ">
            <h1 class="text-2xl font-bold"> Ayomipo</h1>
            <RouterLink to="/counter" class="text-2xl font-bold"> Counter</RouterLink>
        </div>

        <div class="w-full md:w-11/12 md:h-5/6  h-full ">
            
            <div class=" grid grid-cols-2 w-full h-full ">
                <div class="col-span-2 md:col-span-1 ">
                    <div class="w-full h-full centered-col gap-5 md:items-start">
                        <h1 class="w-9/12 text-4xl font-bold text-center md:text-start ">thinking of using a proven <span class="text-white">counter </span>  ? i've got you covered. </h1>
    
                        <p class="w-10/12 text-xl text-center md:text-start">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nulla, veritatis adipisci mollitia rem tenetur!
                        </p>
    
                        <ul class="mt-5 ml-2  bg-white/20 pl-5 italic  md:px-5  shadow-lg py-3 px-3">
                           <li class="text-gray-600 text-xl">Add and Subtract functionality</li> 
                           <li class="text-gray-600 text-xl">Use of Composables</li> 
                           <li class="text-gray-600 text-xl">Set counter</li> 
                           <li class="text-gray-600 text-xl">Reset</li> 
                           <li class="text-gray-600 text-xl">Vuex</li> 
                        </ul>
    
                        <RouterLink to="/counter">
                            <button class="btn"> Explore</button>
                        </RouterLink>
                    </div>
                </div>
                <div class="col-span-1  hidden front md:block ">
                    
                </div>
           </div>
        </div>
    </main>
</template>

<style scoped>
.main-bg{
    background-image:linear-gradient(to bottom right, #eebd89,#d13abd) ;
}
.front{
    background: url('../assets/front.png'); 
    background-size: cover;
    background-position: center;
}

</style>