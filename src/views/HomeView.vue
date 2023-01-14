<template>
  <div class="flex flex-col">
    <section class="flex flex-col bg-[url(https://images.ctfassets.net/lym53uuylvg8/14riosbIRXnh5BgxsZ2CpA/b13f6477c46edc1d06b14120112c029f/rolex2.jpg?fit=crop&q=95)] bg-center bg-cover text-white min-h-[400px] relative before:content-[''] before:absolute before:inset-0  before:bg-gradient-to-t before:from-black/30 before:to-transparent before:z-0" id="hero-section">
     <div class="z-10 container mx-auto h-full px-4 py-16 grow flex flex-col justify-between">
      <span></span> 
      <div class="flex flex-col">
        <span class="text-base">Explore our</span>
        <h1 class="text-4xl font-semibold mb-5">Watch Collection</h1>
        <div class="flex flex-row">
          <RouterLink to="/store" type="button" class="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200/50 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Shop Now</RouterLink>
        </div>
      </div>
     </div>
    </section>
    <FaqSection/>
  </div>
</template>


<script setup>
import FaqSection from '../components/Section/FaqSection.vue';

</script>