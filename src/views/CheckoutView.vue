<template>
    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col">
                <div class="block p-6 border border-gray-200 rounded-lg flex flex-col">
                    <span class="text-xl font-semibold mb-4">Your Order</span>
                    <ul class="divide-y divide-gray-200 dark:divide-gray-70">
                        <template v-for="(item, index) in cartStore.items" :key="index">
                            <OrderCard :item="item"/>
                        </template>
                        <li class="py-3 sm:py-4">
                            <div class="flex flex-row justify-between">
                                <span class="text-base font-semibold">Total:</span>
                                <span class="text-3xl font-semibold">{{ cartStore.calculateTotal() }} MAD</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <form @submit.prevent="onSubmit" class="md:order-first">
                <div class="mb-9 flex flex-col">
                    <span class="text-xl font-semibold">Contact Informations</span>
                    <span class="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div class="flex flex-row w-100 gap-4">
                    <div class="mb-6 grow">
                        <label class="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            First Name
                            <input type="text" v-model="FormData.firstname"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                                placeholder="John" required>
                        </label>
                    </div>
                    <div class="mb-6 grow">
                        <label class="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            Last Name
                            <input type="text" v-model="FormData.lastname"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                                placeholder="Doe" required>
                        </label>
                    </div>
                </div>
                <div class="mb-6">
                    <label class="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                        <input type="email" v-model="FormData.email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                            placeholder="johndoe@example.com" required>
                    </label>
                </div>
                <div class="mb-6">
                    <label class="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
                        Phone
                        <input type="tel" v-model="FormData.phone"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                            placeholder="+212 60000000" required>
                    </label>
                </div>

                <div class="mb-9 flex flex-col">
                    <span class="text-xl font-semibold">Billing Informations</span>
                    <span class="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>

                <div class="mb-6">
                    <label class="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
                        Credit Card Number
                        <input type="text" v-model="FormData.card_number"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                            placeholder="0000-0000-0000-0000" required>
                    </label>
                </div>

                <div class="flex flex-row w-100 gap-4">
                    <div class="mb-6 grow">
                        <label class="flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            Security Code
                            <input type="number" v-model="FormData.security_code"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                                placeholder="***" maxlength="3" required>
                        </label>
                    </div>
                    <div class="mb-6 grow">
                        <label class=" realtive flex flex-col gap-2 text-sm font-medium text-gray-900 dark:text-white" @click="$refs.expiration.showPicker">
                            ExpirationDate
                            <input type="month" v-model="FormData.expiration" ref="expiration"
                                class="absolute invisible" required>
                            <div class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light">
                                {{ FormData.expiration || 'YYYY-MM' }}
                            </div>
                        </label>
                    </div>
                </div>
                
                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" value=""
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required>
                    </div>
                    <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a
                            href="#" class="text-green-600 hover:underline dark:text-green-500">terms and
                            conditions</a></label>
                </div>
                <button type="submit"
                    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import OrderCard from '../components/OrderCard.vue';
import { useCartStore } from '../stores/cart';
import postOrder from '../composables/postOrder';
export default{
    methods: {
        onSubmit() {
            let items = this.cartStore.items;
            items.forEach((item)=>{
                postOrder(
                    item.id,
                    this.FormData.firstname,
                    this.FormData.lastname,
                    this.FormData.email,
                    this.FormData.phone,
                    this.FormData.card_number,
                    this.FormData.security_code,
                this.FormData.expiration,
                ).then((data)=>{
                    this.cartStore.orders.push(data.id)
                })
            })
            setTimeout(()=>{
                this.cartStore.items = [];
            })
        }
    },
    mounted(){
        window['refs'] = this.$refs.expiration
    },
    data() {
        return {
            FormData: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                card_number: '',
                security_code: '',
                expiration: '',
            }
        };
    },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },
    components: { OrderCard }
}
</script>