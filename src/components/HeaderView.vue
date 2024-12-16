<template>
    <div id="header">
        <div class="nav">
            <RouterLink to="/"><img src='/src/assets/marsh.png' width="100"></RouterLink>
        </div>
        <div class="nav">
            <RouterLink to="/" style="text-decoration: none;"><p>Home</p></RouterLink>
        </div>
        <div class="nav">
            <RouterLink to="/artworks" style="text-decoration: none;"><p>Artworks</p></RouterLink> 
        </div>
        <div class="nav">
            <RouterLink to="/characters" style="text-decoration: none;"><p>Characters</p></RouterLink>
        </div>
        <div class="nav">
            <RouterLink to="/commission" style="text-decoration: none;"><p>Commission</p></RouterLink>
        </div>
        <div class="nav">
            <a href="https://github.com/Rekku484/Rekku484-portfolio-v2" style="text-decoration:none"><p>Github</p></a>
        </div>
    </div>
</template>

<style scoped>
#header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.nav {
    margin-top: 1rem;
    margin-left: 1rem;
}

p {
    font-size: 30px;
    margin-left: 1rem;
    margin-top: 1rem;
}

</style>