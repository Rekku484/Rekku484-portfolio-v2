<template>



    <HeaderView></HeaderView>
    <p style="font-size: 64px; margin-right: 0rem;">Characters</p>
    <h2>Sidebar currently being built, not yet implemented</h2>

    <div id="screen-center">
        <div id="entirety-container">
            <div class="char-container">
                <div class="char-preview">
                    <div class="char-img"><img src='/src/assets/characters/rafa-preview.png'></div>
                    <div class="char-name"><p>Rafa</p></div>
                </div>
                <div class="char-detailed">
                    <div class="char-text"><p>Rafa<br/>Cat Spirit</p> <span>Rafa is a fursona<br/>of Rekku484</span></div>
                    <div class="char-img-detailed"><img src='/src/assets/characters/rafa-detailed.png'></div>
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
        </div>
    </div>

</template>

<script setup lang="ts">
import HeaderView from '../components/HeaderView.vue';
</script>

<style scoped>
@media (max-width: 810px) {
    img[src*='rafa-preview'] {
        width: 380.36px !important;
        height: 201.32px !important;
        position: relative !important;
        bottom: 3rem !important;
        right: -2rem !important;
    }

    img[src*='rafa-detailed'] {
        height: 288.71px !important;
    }

    #entirety-container {
    display: flex;
    flex-direction: column !important;
    overflow: hidden;
    }

    .char-container {
        width: 100% !important;
    }

    .char-preview {
        height: 60px !important;
        overflow: hidden;
    }

    .char-detailed {
        height: 487.21px;
    }

    .char-text {
        margin-top: -1.2rem !important;
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
        margin-top: -1.2rem !important;
    }

    p {
        font-size: 40px !important;
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

#screen-center {
    display: flex;
    justify-content: center;
}

#entirety-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 150vh;
    overflow: hidden;
    justify-content: center;
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
    width: 50%;

}

.char-preview {
    display: flex;
    background: linear-gradient(90deg, #497072 27%, #122228 90%);
    overflow: hidden;
    height: 70px;
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
    flex-direction: column;
    align-items: center;
    overflow: hidden;

}

.char-text {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: -1.3rem;

}

.char-img-detailed {
    margin-top: 3rem;
}

img[src*='rafa-preview'] {
    height: 375.27px;
    width: 708.65px;
    position: relative;
    bottom: 7rem;
}

img[src*='rafa-detailed'] {
    height: 398.41px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

a {
    text-align: center;
    font-size: 64px;
}

p {
    text-align: center;
    font-size: 32px;
}

.char-text p {
    font-size: 32px;
    text-align: left;
    margin-left: 1rem;

}

.char-text span {
    font-size: 24px;
    text-align: left;
    margin-left: 1rem;
    margin-top: -1.2rem;
}


</style>