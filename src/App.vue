<template>
  <div id="app" class="relative">
    <div :class="navMenu ? ['nav-menu-2'] : ['nav-menu']" class="fixed overflow-y-scroll bg-gray-200 z-50 top-0 shadow-lg w-full flex flex-col ml-auto items-center h-screen" :style="{right: navMenu ? '0px' : '-100%'}">
      <div  class="flex w-full px-4 justify-end items-center">
        <img src="./assets/jackson_memorial.png" class=" mr-auto -ml-12 h-24 w-auto" alt="">

      <div @click="$store.commit('flipNav')"  class="h-10 bg-gray-400 rounded-full w-10 flex justify-center items-center">

        <svg  class="w-4 h-4 fill-current text-gray-700 hover:text-blue-500" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
          <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
        </svg>
      </div>
      </div>
      <div class="flex flex-col w-full px-3 justify-start items-center">
        <div v-for="(route,ind) in routes" class="w-full border-b border-gray-500 py-3" :key="ind" :to="route.path">
        <router-link v-if="!route.list" class="w-full" :to="route.path">
          <p class="w-full text-left font-medium text-4xl text-left cursor-pointer" >{{route.name}}</p>

        </router-link>
        <div v-else class="flex flex-col">
          <div class="w-full flex items-center">
          <p @click="flipNav(route.name)" class="mr-4 w-full lg:mr-10 font-medium text-4xl text-left cursor-pointer" >{{route.name}}</p>
          
          <svg version="1.1" class="fill-current mr-3 h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 491.996 491.996" style="enable-background:new 0 0 491.996 491.996;" xml:space="preserve">
            <g>
            <g>
            <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
              L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
              c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
              c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
              C491.996,136.902,489.204,130.046,484.132,124.986z"/>
            </g>
            </g>
          </svg>
        </div>
        <div v-if="openNav == route.name" class="flex flex-col w-full">
            <router-link class=""  v-for="(link, ind) in route.list" :key="ind" :to="link.path">
              <p class="mr-4 w-full lg:mr-10 font-medium text-2xl text-gray-600 text-left cursor-pointer" >{{link.name}}</p>

            </router-link>
            
          </div>
        </div>
        
        </div>
      </div>
      <div class="mt-auto mb-4 flex justify-start w-full px-4">
        <p class='text-sm font-normal'>© Copyright 2020 Jackson Memorial EM Residency</p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      openNav: '',
    }
  },
  methods: {
    flipNav(val) {
      if(this.openNav=='') this.openNav = val
      else {
        this.openNav = '' 
      }
    },
  },
  computed: {
    navMenu() {
      return this.$store.getters.getNavMenu
    },  
    routes() {
      return this.$store.getters.getRoutes
    },
    imageViewing(){
      return this.$store.getters.getImageViewing
    }
  },
  watch: {
    $route (){
        this.$store.commit('changeNav', false)
    }
  }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-menu {
  transition: right 0.3s ease;
}

.nav-menu-2 {
  transition: right 0.3s ease;
}
</style>
