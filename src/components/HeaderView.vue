<template>
    <div id="header">
        <div class="nav-links">
            <RouterLink to="/"><img src='/src/assets/marsh.png' width="100"></RouterLink>
            <RouterLink to="/" style="text-decoration: none;"><p>Home</p></RouterLink>
            <RouterLink to="/artworks" style="text-decoration: none;"><p>Artworks</p></RouterLink> 
            <RouterLink to="/characters" style="text-decoration: none;"><p>Characters</p></RouterLink>
            <RouterLink to="/commission" style="text-decoration: none;"><p>Commission</p></RouterLink>
            <a href="https://github.com/Rekku484/Rekku484-portfolio-v2" style="text-decoration:none"><p>Github</p></a>
        </div>
        <div class="hamburger" @click="toggleSidebar"><Menu :size='24'></Menu></div>
    </div>
    
    <div v-if="mobular" class="overlay" @click="toggleSidebar"></div>

    <div id="sidebar" :class="{ 'isOpen': mobular }">
        
        <div class="sidebar-content">
            <img src='/src/assets/marsh.png' width="140">
            <RouterLink to="/" @click="toggleSidebar">Home</RouterLink>
            <RouterLink to="/artworks" @click="toggleSidebar">Artworks</RouterLink> 
            <RouterLink to="/characters" @click="toggleSidebar">Characters</RouterLink>
            <RouterLink to="/commission" @click="toggleSidebar">Commission</RouterLink>
            <a href="https://github.com/Rekku484/Rekku484-portfolio-v2" @click="toggleSidebar">Github</a>
        </div>
    
    </div>
</template>

<script lang="ts">
export default {
    name: 'HeaderView',
    data() {
        return {
            mobular: false
        }
    },
    methods: {
        toggleSidebar() {
            this.mobular = !this.mobular;
        } 
    }
}
</script>

<style scoped>

@media (prefers-color-scheme: light) {
    #sidebar {
        background-color: #D2E7E8 !important;
    }
}

@media (max-width: 810px) {
    .nav-links {
        display: none !important
    }

    .hamburger {
        display: block;
        cursor: pointer;
        margin-left: auto;
        padding: 1rem;
        z-index: 4;
    }

    #sidebar {
        position: fixed;
        top: 0;
        left: -100%;
        width: 70%;
        height: 100%;
        background-color: #0A2328;
        transition: left 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;
        z-index: 5;
    }

    #sidebar.isOpen {
        left: 0;
    }

    .sidebar-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .sidebar-content a {
        text-decoration: none;
        font-size: 1.5rem;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.25);
        z-index: 3;
        transition: 0.3s ease-in-out;
    }
}

@media (min-width: 811px) {
    #sidebar {
    display: none !important;
    }

    .hamburger {
        display: none;
    }

    .nav-links {
        display: flex;
        gap: 1rem;
    }
}



</style>