<template>
    <br>
<section class="w-screen">
  
  <div class="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
    <div class="relative flex h-full flex-col text-gray-600 md:flex-row">
      <div class="relative p-8 md:w-4/6"> 
        <div class="flex flex-col md:flex-row">
<br>
          <h2 class="mb-2 text-2xl font-black">{{ product.title }}</h2>
        </div>
        <p class="mt-3 font-sans text-base tracking-normal">{{ product.description }}</p>
        <div class="flex flex-col md:flex-row md:items-end">
          <p class="mt-6 text-4xl font-black">${{ product.price }}<sup class="align-super text-sm">00</sup></p>
          <span class="ml-2 text-xs uppercase">{{ product.category }}</span>
        </div>
        <div class="mt-8 flex flex-col sm:flex-row">
          <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-gray-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Buy now
          </button>
          <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">Preview</button>
        </div>
      </div>
      <div class="mx-auto flex items-center px-5 pt-1 md:p-8">
        <img class="block h-auto max-w-full rounded-md shadow-lg" :src="product.image" alt="Shop image" height="185" width="225" />
      </div>
    </div>
    <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(82.284, 82.284, 82.284, 1)" offset="0%"></stop><stop stop-color="rgba(54.963, 54.619, 53.858, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,70L240,70C480,70,960,70,1440,73.3C1920,77,2400,83,2880,83.3C3360,83,3840,77,4320,63.3C4800,50,5280,30,5760,33.3C6240,37,6720,63,7200,61.7C7680,60,8160,30,8640,20C9120,10,9600,20,10080,33.3C10560,47,11040,63,11520,63.3C12000,63,12480,47,12960,43.3C13440,40,13920,50,14400,55C14880,60,15360,60,15840,65C16320,70,16800,80,17280,81.7C17760,83,18240,77,18720,75C19200,73,19680,77,20160,70C20640,63,21120,47,21600,35C22080,23,22560,17,23040,16.7C23520,17,24000,23,24480,28.3C24960,33,25440,37,25920,45C26400,53,26880,67,27360,60C27840,53,28320,27,28800,20C29280,13,29760,27,30240,41.7C30720,57,31200,73,31680,73.3C32160,73,32640,57,33120,45C33600,33,34080,27,34320,23.3L34560,20L34560,100L34320,100C34080,100,33600,100,33120,100C32640,100,32160,100,31680,100C31200,100,30720,100,30240,100C29760,100,29280,100,28800,100C28320,100,27840,100,27360,100C26880,100,26400,100,25920,100C25440,100,24960,100,24480,100C24000,100,23520,100,23040,100C22560,100,22080,100,21600,100C21120,100,20640,100,20160,100C19680,100,19200,100,18720,100C18240,100,17760,100,17280,100C16800,100,16320,100,15840,100C15360,100,14880,100,14400,100C13920,100,13440,100,12960,100C12480,100,12000,100,11520,100C11040,100,10560,100,10080,100C9600,100,9120,100,8640,100C8160,100,7680,100,7200,100C6720,100,6240,100,5760,100C5280,100,4800,100,4320,100C3840,100,3360,100,2880,100C2400,100,1920,100,1440,100C960,100,480,100,240,100L0,100Z"></path></svg>
  </div>

  </section>
 
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters("product", ["getProductById"]),
        product() {
            return this.getProductById(Number(this.$route.params.id));
        },
    },
    methods: {
        ...mapActions("product", ["fetchSingleProduct"]),
    },
    mounted() {
        const productId = this.$route.params.id;
        console.log("Fetching single product with ID:", productId);
        this.fetchSingleProduct(productId);
    },

};
</script>