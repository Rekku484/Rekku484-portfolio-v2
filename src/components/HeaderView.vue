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
        <div class="hamburger" @click="toggleSidebar"><Menu :size='24'></Menu></div>
    </div>
    <div id="sidebar">
        <div :class="{ 'isOpen':mobular }"></div>
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
            this.mobular = !this.mobular
        } 
    }
}

</script>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next';

</script>



<style scoped>
@media (max-width: 810px) {
    
}

@media (prefers-color-scheme: light) {
    Menu {
        color: black !important;
        size: 24px;
    }
}

Menu {
    color: white;
}

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