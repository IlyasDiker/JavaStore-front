<template>
    <main class="bg-gray-100 py-6 min-h-screen">
        <template v-if="invoice">
            <div class="max-w-5xl mx-auto py-16 bg-white rounded-lg shadow-md">
                <article class="overflow-hidden">
                    <div class="bg-[white] rounded-b-md">
                        <div class="p-9">
                            <div class="space-y-6 text-slate-700">
                                <p class="text-xl font-semibold tracking-tight font-body">
                                    ENSA Watches
                                </p>
                            </div>
                        </div>
                        <div class="p-9">
                            <div class="flex w-full">
                                <div class="grid grid-cols-3 gap-12 w-full">
                                    <div class="text-sm font-light text-slate-500">
                                        <p class="text-sm font-normal text-slate-700">
                                            Invoice Detail:
                                        </p>
                                        <p>ENSA Watches</p>
                                        <p>UIT Ibn Tofail</p>
                                        <p>Kenitra</p>
                                        <p>MA 00000</p>
                                    </div>
                                    <div class="text-sm font-light text-slate-500">
                                        <p class="text-sm font-normal text-slate-700">Billed To</p>
                                        <p>{{ invoice.firstname }} {{  invoice.lastname }}</p>
                                        <p>{{ invoice.email }}</p>
                                    </div>
                                    <div class="text-sm font-light text-slate-500">
                                        <p class="text-sm font-normal text-slate-700">Invoice Number</p>
                                        <p>{{ invoice.id }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-9">
                            <div class="flex flex-col mx-0 mt-8">
                                <table class="min-w-full divide-y divide-slate-500">
                                    <thead>
                                        <tr>
                                            <th scope="col"
                                                class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
                                                Description
                                            </th>
                                            <th scope="col"
                                                class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                                Quantity
                                            </th>
                                            <th scope="col"
                                                class="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                                Rate
                                            </th>
                                            <th scope="col"
                                                class="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template v-for="(item, index) in invoice.orders" :key="index">
                                            <tr class="border-b border-slate-200">
                                                <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                                    <div class="font-medium text-slate-700">{{ item.product.name }}</div>
                                                    <div class="mt-0.5 text-slate-500 sm:hidden">
                                                        {{ item.quantity }} unit at {{ item.product.toLocaleString() }}MAD
                                                    </div>
                                                </td>
                                                <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                                    {{ item.quantity }}
                                                </td>
                                                <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                                    {{ item.product.toLocaleString() }}MAD
                                                </td>
                                                <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                                    {{ item.quantity * item.product.toLocaleString() }}MAD
                                                </td>
                                            </tr>
                                        </template>

                                        <!-- Here you can write more products/tasks that you want to charge for-->
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="row" colspan="3"
                                                class="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                                                Total
                                            </th>
                                            <th scope="row"
                                                class="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
                                                Total
                                            </th>
                                            <td
                                                class="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                                                $0.0
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </article>
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

export default {
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