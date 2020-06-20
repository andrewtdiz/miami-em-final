<template>
   <div class="flex flex-col w-full relative">
      <Navbar/>
       <div class="mt-8 h-screen w-full flex flex-col">
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl lg:text-6xl text-gray-800 font-bold">Where residents rotate</h1>

                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                    
                        <div v-for="(site, ind) in clincalSites" :key="ind" v-scroll-to="{ el: '#' + site.title.split(' ').join('') }" class="cursor-pointer p-4 lg:w-1/3 md:w-1/2" >
                            <div class="h-full flex flex-col items-center text-center">
                            <img alt="team" class="hover:shadow-lg md:opacity-85 hover:opacity-100 flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" :src="site.img">
                            <div class="w-full">
                                <h2 class="title-font font-bold text-lg text-gray-900">{{site.title}}</h2>
                                <p class="mb-4">{{site.shortDesc}}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                <section class="text-gray-700 body-font bg-gray-200" >
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="mr-10 ml-auto object-cover object-center rounded-lg" alt="hero" src="https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/IMG_1236.JPG" style="max-height: 400px">
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font leading-tight sm:text-5xl text-3xl mb-4 font-normal text-gray-900">Statement from the <br> Associate Program Director
                        </h1>
                        <p class="mb-8 leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, enim id malesuada venenatis, enim ante aliquam eros, sit amet fringilla dolor justo non mi. Fusce vel augue sed lacus consequat bibendum. Pellentesque faucibus eros vitae est fermentum commodo. Praesent viverra ut neque et varius. Nullam libero mi, efficitur ut lobortis in, eleifend et ligula. Pellentesque semper neque sit amet tincidunt aliquam. "</p>
                        <h2 class="font-bold title-font text-black text-md">Mark Supino, MD, FACEP</h2>
                        <h3 class="tracking-wide text-gray-500 text-xs font-normal title-font mb-4 uppercase">Assistant Program Director</h3>


                    </div>
                    
                    </div>
                </section>

                <section v-for="(site,ind) in clincalSites" :id="site.title.split(' ').join('')" :key="ind+99" class="text-gray-700 body-font">
                    <div class="container mx-auto flex flex-col sm:flex-row justify-center px-5 py-16 border-b border-t border-gray-200 items-center" :class="ind%2==1 ? 'flex-row-reverse' : 'flex-row'" >
                        <div class="md:w-1/3 w-5/6 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded mx-auto" alt="hero" :src="site.img">
                        </div>
                        <div class="md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center" :class="ind%2==0 ? ['lg:pl-24', 'md:pl-16'] : ['lg:pl-24', 'md:pl-16']">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{site.title}}
                            </h1>
                            <p class="mb-4 leading-relaxed"><span class="font-bold text-gray-700">Description: </span> <span v-html="site.desc"> </span></p>
                            <div class="flex mt-8 justify-center">
                                <a :href="site.link" target="_blank" class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-md">{{site.title}} Website</a>
                            </div>
                        </div>
                    </div>
                </section>
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
        clincalSites(){
            return this.$store.getters.getClinicalSites
        },
    }
}
</script>

<style>

</style>