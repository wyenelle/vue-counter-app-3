<script setup>
import useCounter from '../composable/useCount.js'
import {useStore} from 'vuex'
import {computed} from 'vue'
import {useState} from 'vuex-composition-helpers/dist'


const store = useStore()
const {count} = useState(['count'])


let num = ''
const {increment,decrement,reset,setValue} = useCounter(num,store)
</script>

<template>
    <div class="counter">
        <h1>Counter Page</h1> 
        <div class="input">
            <input type="text" class="" placeholder="set value" v-model="num" />
            <button @click="setValue(num)">Add</button>
        </div>
        
        <div class="number">
            <h1> {{ count }}</h1>
        </div>
        
        <div>
            <div class="functions">
                    <button @click="decrement" class="-">Decrement</button>
                    <button @click="reset" class="reset">Reset</button>
                    <button @click="increment" class="-">Increment</button>
            </div>
        </div> 

        <div class="home">
            <router-link to='/' class="home-text">
                Return Home
            </router-link>
        </div>
    </div>
</template>

<style scoped>

    .counter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin:auto;
        padding:2rem;
        background-color: black;
        color: white;
    }
    .input input{
        height: 30px;        
        border-radius: 5px;
        border: 1px solid gray;
        margin-right: 2px;
    }
    .input{
        margin-top: 3rem;
    }
    .input button{
        height: 30px;
        width: 70px;
        text-align: center;
        background-color: green;
        color:white;
        font-weight: bolder;
        font-size: 18px;
        font-family:  'Alegreya', serif;
        padding: 5px;
        border: 1px solid gray ;
    }
    .number{
        height: 100px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color:white;
        margin: 2rem 0;
        font-weight: 500;
        font-size: 28px;
    }
.functions{
display: flex;
justify-content: space-between;
width:90vw;
align-items: center;
gap: 1rem;
margin-top: 1.3rem;
}
.functions button{
    padding: 10px;
    border-radius: 7px;
    background-color: green;
    color:white;
    font-weight: 700;
    font-size: 20px;
    border: 1px solid green;
    outline: none;
    font-family: 'Alegreya', serif;
}
.functions .reset{
    background-color: red;
}
.home{
    border: 2px solid white;
    color: white;
    width: 50vw;
    height: 3rem;
    padding: 5px;
    text-align: center;
    border-radius: 7px;
    margin-top: 4rem;
}
.home .home-text{
    color:white;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    font-family: 'Alegreya', serif;

}
@media (min-width: 768px){
    .counter{
        width: 70vw;
        height: 90vh;
        margin-top: 2em;
    }
    .functions{
        width: 30vw;
    }
    .home{
        width: 25vw;
    }
}
</style>