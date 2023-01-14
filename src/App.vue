<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarUi from './components/NavbarUi.vue';
import { useCartStore } from './stores/cart';

const cartStore = useCartStore();
cartStore.innitCart();
</script>

<template>
  <NavbarUi />
  <RouterView />
</template>

<style scoped>

</style>
