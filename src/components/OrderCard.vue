<template>
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="w-16 h-16 rounded-full object-cover" :src="item.picture" alt="Neil image">
            </div>
            <div class="flex-1 min-w-0 flex flex-col gap-1">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{item.name}}
                </p>
                <div class="flex flex-row gap-2" v-if="!isShow">
                    <input type="number" v-model="item.quantity" @change="handleQtChange" min="1"
                    class="block w-16 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"/>
                    <button @click="removeItem()" type="button" class="px-3 py-2 text-xs font-medium text-center text-red-700 hover:text-white bg-red-50 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {{item.price * (item.quantity ?? 1) }} MAD
            </div>
        </div>
    </li>
</template>

<script>
import { useCartStore } from "../stores/cart"

export default{
    methods: {
        handleQtChange(event){
            if(event.srcElement.value <= 0){
                this.cartStore.removeFromCart(this.item.id)
            }
        },
        removeItem(){
            this.cartStore.removeFromCart(this.item.id)
        }
    },
    props:{
        item: Object,
        isShow: Boolean
    },
    setup(){
        const cartStore = useCartStore()

        return {cartStore}
    }
}
</script>