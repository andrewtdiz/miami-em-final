<template>
   <div class="flex flex-col w-full relative">
      <Navbar/>
       <div class="mt-8 h-screen w-full flex flex-col">
            <section class="text-gray-700 bg-image body-font">
                <div class="container bg-white shadow-xl px-5 rounded-md my-16 py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl lg:text-6xl text-gray-800 font-bold">Faculty</h1>

                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum.</p>
                    </div>
                    <section class="text-gray-700 body-font">
                        <div class="container px-5 mx-auto">
                            <div class="flex flex-wrap -m-2">
                            
                            <div v-for="(resident, ind) in faculty" v-scroll-to="{ el: '#' + resident.name.split(' ').join('') }" :key="ind+112"  class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201">
                            <div class="w-full flex flex-col items-stretch">
                                <h2 class="title-font font-bold text-lg mb-1 text-gray-900">{{resident.name}}</h2>
                                <h3 class="text-gray-600 text-xs font-bold uppercase leading-wide mb-3">{{resident.position}}</h3>
                                <p class="text-left mb-1"> <span class="font-bold text-left w-full text-sm text-gray-900"> Med School: </span>{{resident.about["Med School"]}}</p>
                                <p class="text-left mb-4"> <span class="font-bold text-left w-full text-sm text-gray-900">  Residency: </span>{{resident.about["Residency"]}}</p>
                                <p class="text-left mb-4"> <span class="font-bold text-left w-full text-sm text-gray-900">  Interest: </span>{{resident.about["Interests"]}}</p>
                                <span class="inline-flex">
                                <a class="text-gray-500">
                                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-2 text-gray-500">
                                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a class="ml-2 text-gray-500">
                                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                                </span>
                            </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        </section>
                </div>
                </section>


                <!-- <section v-for="(resident,ind) in faculty" :id="resident.name.split(' ').join('')" :key="ind+99" class="text-gray-700 body-font">
                    <div class="container mx-auto flex px-5 py-16 border-b border-t border-gray-200 items-center" :class="ind%2==1 ? 'flex-row-reverse' : 'flex-row'" >
                        <div class="md:w-1/4 w-5/6 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded mx-auto" alt="hero" :src="'https://dummyimage.com/720x600'">
                        </div>
                        <div class="md:flex-1 flex flex-col md:items-start md:text-left items-center text-center" :class="ind%2==0 ? ['lg:pl-24', 'md:pl-16'] : ['lg:pr-24', 'md:pr-16']">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{resident.name}}
                            </h1>
                            <p class="mb-4 leading-relaxed"><span class="font-bold text-gray-700">Why Jackson: </span> <span v-html="resident.why"> </span></p>
                            <p class="mb-4 leading-relaxed"><span class="font-bold text-gray-700">Hobbies: </span> <span v-html="resident.hobbies"> </span></p>
                            <p class="mb-4 leading-relaxed"><span class="font-bold text-gray-700">Favoite thing about Miami: </span> <span v-html="resident.favorite"> </span></p>
                            
                        </div>
                    </div>
                </section> -->
       </div>
       

            
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar
    },
    computed: {
        faculty() {
            return this.$store.getters.getFaculty
        },
    },
}
</script>

<style>
.bg-image {
  background-image: url("../assets/jackson.jpg");
  right: 0;
  top: -400px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>