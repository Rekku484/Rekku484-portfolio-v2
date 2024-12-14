<template>
    <div id="entirety">
        <div id="home">
            <div id="info">
                <img src='/src/assets/marsh.png' width="481.97">
                <h1>Rekku484</h1>
                <h2>Furry Artist</h2>
            </div>
            <hr />
            <div id="nav_view">
                <div class="nav">
                    <RouterLink to="/artworks"><h3>Artworks</h3></RouterLink>
                </div>
                <div class="nav">
                    <RouterLink to="/characters"><h3>Characters</h3></RouterLink>
                </div>
                <div class="nav">
                    <RouterLink to="/commission"><h3>Commission</h3></RouterLink>
                </div>
                <div class="nav">
                    <a href="https://github.com/Rekku484/Rekku484-portfolio-v2"><h3>Github</h3></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    #home {
        display: flex;
        flex-direction: column !important;
    }

    img[src='/src/assets/marsh.png'] {
        width: 250px;
    }

    h1 {
        font-size: 40px !important;
    }

    h2 {
        margin-top: -2rem !important;
    }

    h3 {
        font-size: 30px !important;
        text-align: center !important;
    }

    hr {
        width: 320px;
        border: 1px solid #7BB2B2 !important;
    }

    #home, hr, #nav_view {
    position: relative;
    right: 0rem !important;
}


}

#entirety {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 98vh;
    overflow: hidden;
}

#home, hr, #nav_view {
    position: relative;
    right: 3rem;
}

#home {
    display: flex;
    flex-direction: row;
    /* margin-right: 25rem; */
}

#info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

hr {
    border: 3px solid #7BB2B2;
    margin-right: 5vw;
    margin-left: 5vw;
}

#nav_view {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.nav {
    margin-top: -2rem;
}




img[src='/src/assets/marsh.png'] {
    margin-left: 2.5rem;
    margin-bottom: -1rem;
}

h1 {
    font-size: 64px;
}

h2 {
    margin-top: -3rem;
    font-size: 40px;
}

h3 {
    font-size: 55px;
    text-align: left;
}

</style>