<template>
    <HeaderView></HeaderView>
    <p>Commission</p>
</template>

<script setup lang="ts">
import HeaderView from '../components/HeaderView.vue';
</script>

<style scoped>
@media (max-width: 810px) {
    p {
        font-size: 40px !important;
    }
}

p {
    text-align: center;
    font-size: 64px;
}

</style>