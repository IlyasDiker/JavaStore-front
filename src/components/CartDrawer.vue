<template>
    <span class="fixed inset-0 bg-gray-900/30 transition-all z-50" :class="openDrawer ? '':' opacity-0 invisible'" @click="$emit('onClose')"></span>
    <aside class="cartDrawer" :class="openDrawer ? 'open' : ' translate-x-full'">
        <button @click="$emit('onClose')">Close</button>
    </aside>
</template>

<script>
export default {
    props:{
        openDrawer: Boolean
    }

}
</script>

<style lang="scss" scoped>
.cartDrawer {
    @apply fixed right-0 top-0 bottom-0 w-full max-w-lg p-4 bg-white shadow-lg transition-all z-50;
    .open{
        @apply translate-x-0;
    }
}
</style>