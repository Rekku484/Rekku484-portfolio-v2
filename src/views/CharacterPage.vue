<template>



    <HeaderView></HeaderView>
    <p style="font-size: 64px; margin-right: 0rem;">Characters</p>
    <h1>Desktop is under construction, currently doing mobile view</h1>
    <h2>Sidebar currently being built, not yet implemented</h2>



    <div class="char-container">
        <div class="char-preview">
            <div class="char-img"><img src='/src/assets/rafa.png'></div>
            <div class="char-name"><p>Rafa</p></div>
        </div>
        <div class="char-detailed">
            <div class="char-text"><p>Rafa<br/>Cat Spirit</p> <span>Rafa is a fursona<br/>of Rekku484</span></div>
            <div class="char-img-detailed"></div>
        </div>
    </div>



    <div class="char-container">
        <div class="char-preview">
            <div class="char-img"></div>
            <div class="char-name"><p>Rishi</p></div>
        </div>
        <div class="char-detailed">
            <div class="char-text"><p>Rishi<br/>Slugcat</p></div>
            <div class="char-img-detailed"></div>
        </div>
    </div>



</template>

<script setup lang="ts">
import HeaderView from '../components/HeaderView.vue';
</script>

<style scoped>
@media (max-width: 810px) {
    img[src*='rafa'] {
        width: 380.36px;
        height: 201.32px;
        position: relative;
        bottom: 3rem;
        right: -2rem;
    }

    .char-preview {
        height: 60px;
        overflow: hidden;
    }

    .char-detailed {
        height: 487.21px;
    }

    .char-text {
        margin-top: -1.2rem;
    }

    .char-text p {
        font-size: 32px !important;
        text-align: left !important;
        margin-left: 1rem;
    }

    .char-text span {
        font-size: 24px;
        text-align: left;
        margin-left: 1rem;
        margin-top: -1.2rem;
    }

    p {
        font-size: 40px !important;
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
    .char-preview {
        background: linear-gradient(90deg, #A9D4D6 27%, #D2E7E8 90%) !important;
    }

    .char-detailed {
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
    margin-top: 1rem;
    flex-direction: column;

}

.char-preview {
    display: flex;
    background: linear-gradient(90deg, #497072 27%, #122228 90%);

}

.char-img {
    display: flex;
    width: 50vh;
    overflow: hidden;
    justify-content: right;
}

.char-name {
    display: flex;
    width: 50vh;
    overflow: hidden;
    align-items: center;
    margin-top: 0.2rem;
    margin-left: 2rem;
}

.char-detailed {
    display: flex;
    margin-top: 0.5rem;
    background: linear-gradient(90deg, #497072 27%, #122228 90%);

}

.char-text {
    display: flex;
    width: 100%;
    flex-direction: column;
}

a {
    text-align: center;
    font-size: 64px;
}

p {
    text-align: center;
    font-size: 32px;
}


</style>