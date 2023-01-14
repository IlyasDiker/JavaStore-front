<template>
    <span class="fixed inset-0 bg-gray-900/30 transition-all z-50" :class="cartStore.isCartOpen ? '':' opacity-0 invisible'" @click="closeCart"></span>
    <aside class="cartDrawer" :class="cartStore.isCartOpen ? 'open' : ' translate-x-full'">
        <div class="max-w-md mx-auto py-3 flex flex-row justify-between items-center">
            <button @click="closeCart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div class="max-w-md mx-auto mt-6">
            <template v-if="cartStore.items.length > 0">
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                    <template v-for="(item, index) in cartStore.items" :key="index">
                        <OrderCard :item="item"/>
                    </template>
    
                    <li class="py-3 sm:py-4">
                        <div class="flex flex-row justify-between items-center gap-10">
                            <small class="text-gray-700">Your cart id : {{ cartStore.sessionID }}</small>
                            <button @click="onCheckout"
                                class="flex ml-auto text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded">
                                Checkout
                            </button>
                        </div>
                    </li>
                </ul>
            </template>
            <template v-else>
                <div class="flex flex-col items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span class="text-xl font-semibold mt-5">Your cart is still empty</span>
                    <span class="text-base">Adding products make us happy</span>
                </div>
            </template>
        </div>

    </aside>
</template>

<script>
import { useCartStore } from '../stores/cart'
import OrderCard from './OrderCard.vue';
export default {
    methods: {
        closeCart() {
            this.cartStore.isCartOpen = false;
        },
        onCheckout() {
            this.$router.push("/checkout"),
                this.cartStore.isCartOpen = false;
        }
    },
    props: {
        openDrawer: Boolean
    },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },
    components: { OrderCard }
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