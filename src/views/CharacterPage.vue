<template>
    <HeaderView></HeaderView>
    <p style="font-size: 64px; margin-right: 0rem;">Characters</p>
    <h1>Desktop is under construction, currently doing mobile view</h1>
    <h2>Sidebar currently being built, not yet implemented</h2>
    <div class="char-container">
        <div class="char-img"><img src='/src/assets/rafa.png' height="201.32"></div>
        <div class="char-name"><p>Rafa</p></div>
    </div>
    <div class="char-container">
        <div class="char-img"></div>
        <div class="char-name"><p>Rishi</p></div>
    </div>
</template>

<script setup lang="ts">
import HeaderView from '../components/HeaderView.vue';
</script>

<style scoped>
@media (max-width: 810px) {
    p {
        font-size: 40px !important;
    }

    .char-container {
    display: flex;
    height: 50.55px;
    margin-top: 1rem;
    align-items: center;
    }


    #rafa {
        background-image: url(/src/assets/rafa.png);
        background-size: 380.36px 201.32px;
        align-items: stretch;
        background-repeat: no-repeat;
    }
    h1 {
        filter: opacity(0);
        position: absolute !important;
    }
    h2 {
        filter: opacity(1) !important;
        position: relative !important;
    }
}

@media (prefers-color-scheme: light) {
    .char-container {
        background: linear-gradient(90deg, #A9D4D6 27%, #D2E7E8 90%) !important;
    }

}

h1 {
    text-align: center;
    position: relative;
}

h2 {
    text-align: center;
    filter: opacity(0);
    position: absolute
}

.char-container {
    display: flex;
    background: linear-gradient(90deg, #497072 27%, #122228 90%);

}

.char-img {
    display: flex;
    width: 50vh;
    height: inherit;
    overflow: hidden;
    justify-content: right;

}

.char-name {
    display: flex;
    width: 50vh;
}

img[src*='rafa'] {
    width: 380.36px;
    object-fit: contain;
    position: relative;
    bottom: 3rem;
    
}

.char-name {
    display: flex;
}


/* #rafa {
    background-image: url(/src/assets/rafa.png);
    background-size: 380.36px 201.32px;
    align-items: stretch;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
} */

a {
    text-align: center;
    font-size: 64px;
}

p {
    text-align: center;
    font-size: 32px;
}


</style>