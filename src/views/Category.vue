<template>
<section class="py-20">
  <h1 class="mb-12 text-center font-sans text-5xl font-bold text-gray-900">Category Product<span class="text-blue-600"></span></h1>
  <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
    <div v-for="category in getCategory">
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="../assets/sm.png" alt="Hotel Photo" />
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">{{ category.toUpperCase() }}</h2>

          <div class="mt-3 flex items-end justify-between">
            <p>
            </p>

            <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                <router-link :to="{ name: 'Filter', params: {category: category}}">
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              </router-link>
            </div>
          </div>
        </div>
      </a>
    </article>
    </div>
  </div>  
</section>


</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
    computed: {
        ...mapGetters('category', ['getCategory']),
    },
    methods: {
        ...mapActions('category', ['fetchCategory'])
    },
    created() {
        this.fetchCategory();
    },
}
</script>