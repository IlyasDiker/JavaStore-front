<template>

    <main class="text-gray-600 body-font">
        <div class="container px-4 py-16 mx-auto">
            <div class="grid grid-cols-4 gap-3">
                <template v-if="!products">
                    <div class="bg-gray-100 rounded-xl w-full text-gray-700 p-4" role="alert">
                      <p class="font-bold">Loading ...</p>
                    </div>
                </template>
                <template v-else>
                    <template v-for="(item, index) in products" :key="index">
                        <RouterLink :to="{name:'product', params:{id:item.id}}" class="lg:col-span-1 md:col-span-2 col-span-4">
                            <a class="block relative aspect-square rounded overflow-hidden">
                                <img class="object-cover object-center w-full h-full flex"
                                :src="item.picture">
                            </a>
                            <div class="mt-4">
                                <h2 class="text-gray-900 title-font text-lg font-medium">{{ item.name }}</h2>
                                <p class="mt-1">{{ item.price.toLocaleString() }} MAD</p>
                            </div>
                        </RouterLink>
                    </template>
                </template>
            </div>
        </div>
    </main>

</template>


<script>
import getProducts from '../composables/getProducts'
export default {
  data () {
    return {
        products: null,
    }
  },
  created(){
    getProducts().then((data)=>{
        this.products = data
    })
  }

}
</script>