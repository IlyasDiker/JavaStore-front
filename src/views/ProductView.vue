<template>

    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-4  py-5 sm:py-16  mx-auto">
            <div class="flex flex-wrap" v-if="product">
                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded aspect-square"
                    :src="product.picture">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ product.brand }}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{ product.name }}</h1>
                    <p class="leading-relaxed">{{ product.description }}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div class="flex">
                            <span class="mr-3">Color</span>
                            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button
                                class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button
                                class="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>
                        <div class="flex ml-6 items-center">
                            <span class="mr-3">Size</span>
                            <div class="relative">
                                <select
                                    class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-700 text-base pl-3 pr-10">
                                    <option>SM</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <span
                                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <span class="title-font font-medium text-2xl text-gray-900">{{ product.price.toLocaleString() }} MAD</span>
                        <button @click="toggleToCart"
                            class="flex ml-auto text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded">
                            {{ cartStore.isInCart(product.id) ? 'Add to cart' : 'Remove from cart'}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import getProduct from '../composables/getProduct';
import { useCartStore } from '../stores/cart';

export default {
    data() {
        return {
            product: null
        }
    },
    created() {
        getProduct(this.$route.params.id).then((product) => {
            this.product = product;
        })
    },
    methods: {
        toggleToCart(){
            this.cartStore.toggleItemFromCart(this.product)
            this.cartStore.isCartOpen = true
        }
    },
    setup(){
        const cartStore = useCartStore();
        return {cartStore}
    }
}
</script>