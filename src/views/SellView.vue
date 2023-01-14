<template>
    <section class="bg-[url('https://images.ctfassets.net/lym53uuylvg8/5sL7Z5IuSoQ5azt2wFwIyM/a69689d3f63bf00e69076f4a844fd719/rolex_daytona.jpg?fit=crop&q=75')] isolate bg-cover bg-center py-12
    text-white relative before:content-[''] before:absolute before:inset-0  before:bg-gradient-to-t before:from-black/70 before:to-transparent before:z-0">
        <div class="relative container mx-auto px-4 py-6 z-10">
            <div class="flex flex-col">
                <pan class="text-base">Sell your</pan>
                <h1 class="text-4xl font-semibold">Watch</h1>
            </div>
        </div>
    </section>
    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <form @submit.prevent="onSubmit">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="name" v-model="FormData.name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                        placeholder="Watch Model and Brand" required>
                </div>
                <div class="mb-6">
                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Price</label>
                    <input type="number" id="price" v-model="FormData.price"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                        required>
                </div>
                <div class="mb-6">
                    <label for="picture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Picture</label>
                    <input type="file" id="picture" @change="handlePictureChange"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                        required>
                    <template v-if="FormData.picture.file && FormData.picture.preview">
                        <img :src="FormData.picture.preview">
                    </template>
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
import postProduct from '../composables/postProduct'

export default{
    data () {
        return {
            FormData: {
                name: '',
                price: '',
                picture:{
                    file: null,
                    preview: null,
                    base64: null
                }
            }
        }
    },
    methods:{
        onSubmit(event){
            if(!this.FormData.picture.base64) return;

            postProduct(
                this.FormData.name,
                this.FormData.price,
                this.FormData.picture.base64
                ).then((res)=>{
                    console.log('success', res);
                })

        },
        handlePictureChange(event){
            if(event.target.files.length > 0){
                this.FormData.picture.file = event.target?.files[0]
                this.FormData.picture.preview = this.getPreviewFromFile(this.FormData.picture.file);
                this.getBase64FromFile(this.FormData.picture.file).then((binnary)=>{
                    this.FormData.picture.base64 = binnary;
                }, (err)=>{
                    console.warn(object);
                })
            } else {
                this.FormData.picture.file = null;
                this.FormData.picture.preview = null;
                this.FormData.picture.base64 = null;
            }
        },
        getPreviewFromFile(file){
            let url = URL.createObjectURL(file)
            return url;
        },
        getBase64FromFile(file){
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        }
    }
}
</script>