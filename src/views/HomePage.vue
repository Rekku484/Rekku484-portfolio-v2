<template>
    <div id="entirety">
        <div id="home">
            <div id="info">
                <img src='/src/assets/marsh.png' width="481.97px" style="@media (max-width: 810px) {width: 250px !important;}">
                <a>Rekku484</a>
                <span>Furry Artist</span>
            </div>
            <hr />
            <div id="nav_view">
                <div class="nav">
                    <RouterLink to="/artworks" style="text-decoration:none"><p>Artworks</p></RouterLink>
                </div>
                <div class="nav">
                    <RouterLink to="/characters" style="text-decoration:none"><p>Characters</p></RouterLink>
                </div>
                <div class="nav">
                    <RouterLink to="/commission" style="text-decoration:none"><p>Commission</p></RouterLink>
                </div>
                <div class="nav">
                    <a href="https://github.com/Rekku484/Rekku484-portfolio-v2" style="text-decoration:none"><p>Github</p></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 810px) {
    #home {
        display: flex !important;
        flex-direction: column !important;
    }

    img[src*='marsh'] {
        width: 250px !important;
        filter:drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.25)) !important;
    }

    a {
        font-size: 40px !important;
    }

    span {
        font-size: 24px !important;
    }

    p {
        font-size: 30px !important;
        text-align: center !important;
    }

    hr {
        width: 320px !important;
        border: 1px solid inherit !important;
    }

    #home, hr, #nav_view {
    position: relative;
    right: 0rem !important;
}

    #info {
        margin-right: 0rem !important;
    }


}

@media (prefers-color-scheme: light) {
    img[src*="marsh"] {
    filter: drop-shadow(0px 0px 100px rgba(0, 0, 0, 0.50)) !important;
    }

    .nav {
        filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.75)) !important;
    }

    p {
    color:black !important;
    }

    hr {
    border: 1.5px solid #7BB2B2 !important;
    margin-right: 5vw;
    margin-left: 5vw;
    }

}

#entirety {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: -0.5rem;
}

#home, hr, #nav_view {
    position: relative;
    right: 5rem;
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
    margin-right: 10rem;
}

img[src="/src/assets/marsh.png"] {
    width: 481.97px;
}

hr {
    border: 1.5px solid #386161;
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
    filter: drop-shadow(0px 5px 25px rgba(255, 255, 255, 0.75));
}


img[src*='marsh'] {
    margin-left: 2.5rem;
    margin-bottom: -1rem;
    filter: drop-shadow(0px 0px 100px rgba(255, 255, 255, 0.25)) !important;

}

a {
    font-size: 64px;
}

span {
    font-size: 40px;
}

p {
    font-size: 55px;
    text-align: left;
    color:white;
}

</style>