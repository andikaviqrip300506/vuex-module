<template>
    <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
   <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
 
     <div class="mx-auto max-w-md text-center">
         <h1 class="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Product<span class="text-blue-600"></span></h1>
     </div>
 
     <div class="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          <div v-for="product in filteredProduk" :key="product.id">
    
       <article class="relative flex flex-col overflow-hidden rounded-lg border">
         <div class="aspect-square overflow-hidden">
           <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" :src="product.image" alt="" />
         </div>
         <div class="absolute top-0 m-2 rounded-full bg-white">
           <p class="rounded-full bg-gray-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
         </div>
         <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
           <div class="mb-2 flex" v-if="product.title.length < 100">
             <p class="mr-3 text-sm font-semibold"> {{ product.title.substring(0,8)+".." }} </p>
           </div>
           <h3 class="mb-2 text-sm text-gray-400">${{ product.price }}</h3>
           <li class="text-left">  
             <span class="text-sm text-gray-400">Rating</span>
             <ul class="m-0 flex items-center p-0 font-medium">
               <li class="inline text-yellow-500">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               </li>
               <li class="inline text-yellow-500">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               </li>
               <li class="inline text-yellow-500">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               </li>
               <li class="inline text-yellow-500">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               </li>
               <li class="inline text-yellow-500">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                 </svg>
               </li>
               <li class="ml-2 inline text-base"> {{ product.rating.rate }}</li>
             </ul>
           </li>
         </div>
         
         <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
           <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-gray-600 group-hover:text-white">Add</div>
           <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-gray-500 group-hover:text-white">
         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
   </svg>  <router-link :to="{name: 'SingleProduct', params: {id: product.id }}"> + </router-link></div>
   
         </button> 
       </article>
     </div>
       
     </div>
     </div>
 
 </section>
 
 
 </template>
 
 <script>
 import { mapGetters, mapActions } from 'vuex';

 
 export default {
     computed: {
         ...mapGetters('product', ['filterProduk']),
         filteredProduk() {
          return this.filterProduk(this.$route.params.category)
         }
     },
     methods: {
       
         ...mapActions('product', ['fetchFilterProduct']),
     },
     created() {
         this.fetchFilterProduct();
     },
 }
 </script>