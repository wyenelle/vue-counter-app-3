<script setup>
import { vShow } from 'vue';


</script>

<template>
    <div class="wrapper">
        <div class="ayomi">
            <h2>Ayomiposi</h2>
        </div>
        <div class="bg-timer">
            <div class="header-text">
                <h1> All we do is <span>count</span></h1>
                <h2>Keep track of changes in your app</h2>
                <div class="counter">
                    <RouterLink to="/counter" class="counter-text">counter</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.4rem 0;
    align-items: center;
    background-color: black;
    color:white
}

.ayomi {
    text-align: start;
    width: 100vw;
    padding:5px 2rem;
}
.bg-timer{
    background-image: url('../assets/timer.jpg' );
    background-size: contain;
    background-repeat: no-repeat;
}
.header-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 10px;
    width: 90vw;
    height: 60vh;
    margin: auto;
}
.header-text h1{
    width: 40%;
    font-size: 40px;
    font-weight: 800;

}
span{
    color: blue;
    background: rgba(0, 0, 0, 0.7);
}
.header-text h2{
    color: lightgray;
    background: rgba(0, 0, 0, 0.7);
    background-clip: border-box;
}
.counter{
    border: 2px solid red;
    color: white;
    width: 50vw;
    height: 3rem;
    padding: 5px;
    text-align: center;
    border-radius: 7px;
}
.counter .counter-text{
    color:white;
    font-size: 28px;
    font-weight: 700;
    text-decoration: none;
    font-family:'Alegreya', serif;;
    text-transform: capitalize;
}
@media (min-width: 768px){
    .wrapper{
        justify-content: space-between;
        padding-bottom:5rem;
    }
    .header-text{
    }
    .counter {
        width: 20vw;
        transform: scale(0.98);
        transition: all .5s ease;
    }

    .counter:hover{
        transform: scale(1);
        border: 1px solid red;
    }
}
</style>