<template>
  <div class="fixed w-full shadow-md flex h-20 justify-center sm:items-stretch items-center bg-white z-10">
      <div class="flex items-center sm:items-stretch container h-full">
          <router-link to="/" class="h-full flex md:mr-auto -ml-12 md:-ml-0 mr-auto justify-between items-center">
            <img class="" src="../assets/jackson_memorial.png" style="height: 150%; width: auto" alt="">
          </router-link>
            <div  v-for="(route,ind) in routes" class="hidden md:block flex items-stretch" :key="ind">
                <Navbaritem v-if="route.path" class="mx-4 h-full" :title="route.name" :route="route.path" />
                <Navbardropdown v-else class="mx-4 h-full" :title="route.name" :list="route.list" />
            </div>
            <div @click="$store.commit('flipNav')" class=" sm:hidden h-12 mr-6 w-12 block flex justify-center items-center">
          <svg  version="1.1" class="fill-current w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
                  C512,404.954,503.046,396,492,396z"/>
              </g>
            </g>
          </svg>
        </div>
      </div>
        
        
    </div>
</template>

<script>
import Navbaritem from './Navbaritem.vue'
import Navbardropdown from './Navbardropdown'

export default {
    props: ['type'],
    components: {
        Navbaritem,
        Navbardropdown
    },
    data() {
        return {
        }
    },
    computed: {
        routes() {
            return this.$store.getters.getRoutes
        },
    },
}
</script>

<style>

</style>