<template>
   <div class="flex flex-col w-full relative">
      <Navbar/>
       <div class="mt-8 w-full flex flex-col">
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl lg:text-6xl text-gray-800 font-bold">Alumni</h1>

                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum.</p>
                    </div>
                    <section class="text-gray-700 body-font">
                        <div class="container px-5 mx-auto">
                            <div class="flex flex-wrap -m-2">
                            <div v-for="(resident, ind) in alumni" v-scroll-to="{ el: '#' + resident.name.split(' ').join('') }" :key="ind+112" class="p-2 cursor-pointer lg:w-1/3 md:w-1/2 w-full">
                                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="opacity-85 hover:opacity-100 w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-bold">{{resident.name}}</h2>
                                    <p class="text-md text-gray-600 text-sm"> <span class="font-bold text-gray-800"> Year: </span>{{resident.year}}</p>
                                    <p class="text-md text-gray-600 text-sm"><span class="font-bold text-gray-800"> Practicing: </span>{{resident.where}}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                </div>
                </section>


                <!-- <section v-for="(resident,ind) in alumni" :id="resident.name.split(' ').join('')" :key="ind+99" class="text-gray-700 body-font">
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
        alumni(){
            return this.$store.getters.getAlumni
        },
    }
}
</script>

<style>

</style>