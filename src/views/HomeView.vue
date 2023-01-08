<template>
  <section class="flex flex-col bg-[url(https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MY_web.jpg)] bg-cover text-white min-h-[80vh] relative before:content-[''] before:absolute before:inset-0  before:bg-gradient-to-t before:from-black/30 before:to-transparent before:z-0" id="hero-section">
   <div class="z-10 container mx-auto h-full px-4 py-16 grow flex flex-col justify-between items-center">
    <span></span> 
    <div class="flex flex-col items-center">
      <span class="text-base">Latest Merch</span>
      <h1 class="text-4xl font-semibold mb-5">Our Store</h1>
      <RouterLink to="/shop" type="button" class="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200/50 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Shop Now</RouterLink>
    </div>
   </div>
  </section>
  <section class="flex bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h2 class="text-3xl font-bold mb-5">Home to the software teams</h2>
        <p class="px-5 text-xl text-gray-700 dark:text-gray-300 max-w-prose">Meet your developers where they already are. GitHub is home to over 40 million developers and the world’s largest open source community.</p>
        <dl class="flex flex-row justify-evenly max-w-prose w-full mt-9">
            <div class="flex flex-col gap-1">
                <dt class="text-2xl sm:text-4xl font-bold">73M+</dt>
                <dd class="text-base text-gray-700 dark:text-gray-300">developers</dd>
            </div>
            <div class="flex flex-col gap-1">
                <dt class="text-2xl sm:text-4xl font-bold">1B+</dt>
                <dd class="text-base text-gray-700 dark:text-gray-300">contributors</dd>
            </div>
            <div class="flex flex-col gap-1">
                <dt class="text-2xl sm:text-4xl font-bold">4M+</dt>
                <dd class="text-base text-gray-700 dark:text-gray-300">organizations</dd>
            </div>
        </dl>
    </div>
  </section>
</template>
