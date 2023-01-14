<template>
    <main class="bg-gray-100 py-6 min-h-screen">
        <template v-if="invoice">
            <div class="container mx-auto px-4 sm:px-6 py-6 bg-white flex flex-col rounded-xl shadow">
                <div class="flex flex-col">
                    <h1 class="text-3xl">Invoice Number : {{ invoice.id }}</h1>

                    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                            <OrderCard :item="invoice.product" :isShow="true"/>
                    </ul>

                    <pre>
                        {{ JSON.stringify(invoice, null,4) }}
                    </pre>
                </div>
            </div>
        </template>
        <template v-else>
            LOADING ...
        </template>
    </main>
</template>

<script>
import { useCartStore } from '../stores/cart'
import getOrder from '../composables/getOrder'
import OrderCard from '../components/OrderCard.vue'

export default{
    data() {
        return {
            invoice: null
        };
    },
    created() {
        getOrder(this.$route.params.id).then((data) => {
            this.invoice = data;
        });
    },
    setup() {
        const cartStore = useCartStore();
    },
    components: { OrderCard }
}

</script>