import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ArtworkPage from "../components/ArtworkPage.vue";
import CharacterPage from "../components/CharacterPage.vue";
import CommissionPage from "../components/CommissionPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/artworks',
            name: 'artworks',
            component: ArtworkPage
        },
        {
            path: '/characters',
            name: 'characters',
            component: CharacterPage
        },
        {
            path: '/commission',
            name: 'commission',
            component: CommissionPage
        }
    ]
})

export default router