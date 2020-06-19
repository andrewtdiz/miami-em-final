<template>
  <div class="flex flex-col  w-full relative">
      <Navbar/>
      <div class="w-full pt-24 mt-4 flex-1 z-0">
        <div class="w-full justify-center py-2">
          <h1 class="text-2xl lg:text-6xl font-bold text-gray-800">About Us</h1>
          <p class="lg:w-1/3 mx-auto px-4 sm:px-0 leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate. Vivamus id arcu ut nisi eleifend rutrum.</p>
        </div>
        <section class="text-gray-700 body-font">
          <div class="container px-5 pt-12 pb-48 mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full">
              <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div @click="changeSelected(0)" class="flex relative pb-12" style="cursor: pointer !important">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10" :class="selected==0 ? 'bg-blue-700' : 'bg-blue-400'">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4" :class="selected==0 ? 'opacity-100' : ['hover:opacity-75', 'opacity-50']">
                    <h2 class="font-bold title-font text-md text-gray-900 mb-1" style="cursor: pointer !important">{{aboutUs[0].title}}</h2>
                    <p class="leading-relaxed" style="cursor: pointer !important">{{aboutUs[0].desc}}</p>
                  </div>
                </div>
                <div @click="changeSelected(1)" class="flex relative pb-12" >
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10" :class="selected==1 ? 'bg-blue-700' : 'bg-blue-400'">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4" :class="selected==1 ? 'opacity-100' : ['hover:opacity-75', 'opacity-50']">
                    <h2 class="font-bold title-font text-md text-gray-900 mb-1" style="cursor: pointer !important">{{aboutUs[1].title}}</h2>
                    <p class="leading-relaxed" style="cursor: pointer !important">{{aboutUs[1].desc}}</p>
                  </div>
                </div>
                <div @click="changeSelected(2)" class="flex relative">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10" :class="selected==2 ? 'bg-blue-700' : 'bg-blue-400'">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4" :class="selected==2 ? 'opacity-100' : ['hover:opacity-75', 'opacity-50']">
                    <h2 class="font-bold title-font text-md text-gray-900 mb-1" style="cursor: pointer !important">{{aboutUs[2].title}}</h2>
                    <p class="leading-relaxed" style="cursor: pointer !important">{{aboutUs[2].desc}}</p>
                  </div>
                </div>
              </div>
              <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" :src="aboutUs[selected].img" alt="step">
            </div>
          </div>
        </section>

        
        <section class="text-gray-700 body-font bg-gray-200" >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="mr-10 ml-auto object-cover object-center rounded-lg" alt="hero" src="https://img1.wsimg.com/isteam/ip/98c1f477-09ba-4d4d-87bc-8ed1076615eb/Headshot.jpg">
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font leading-tight sm:text-5xl text-3xl mb-4 font-normal text-gray-900">Statement from the <br> Associate Program Director
            </h1>
            <p class="mb-8 leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, enim id malesuada venenatis, enim ante aliquam eros, sit amet fringilla dolor justo non mi. Fusce vel augue sed lacus consequat bibendum. Pellentesque faucibus eros vitae est fermentum commodo. Praesent viverra ut neque et varius. Nullam libero mi, efficitur ut lobortis in, eleifend et ligula. Pellentesque semper neque sit amet tincidunt aliquam. "</p>
            <h2 class="font-bold title-font text-black text-md">Patricia De Melo Panakos, MD</h2>
            <h3 class="tracking-wide text-gray-500 text-xs font-normal title-font mb-4 uppercase">Assistant Program Director</h3>


          </div>
          
        </div>
      </section>

        <div ref="img2" class="relative flex content-center items-center justify-center" style="min-height: 75vh;">
          <div class="absolute block top-0 w-full h-full bg-center bg-cover bg-image-1" >
            <span class="left-0 w-full h-full absolute opacity-75 bg-black">
            </span>
          
          </div>

          <div class="absolute sm:hidden block top-0 w-full h-full bg-center bg-cover bg-image-1">
            <span class="left-0 w-full h-full absolute opacity-75 bg-black">
            </span>
          </div>
          
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-full px-4 ml-auto mr-auto text-center">
                <h1 class="text-white font-bold text-2xl sm:text-5xl tracking-wider" > Clinical experience you can't find anywhere else </h1>
                
                </div>
            </div>
          </div>
          
          
          
        </div>


        <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-row-reverse flex-wrap">
            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pl-10">
              <div class="w-full sm:p-4 px-4 mb-6">
                <h1 class="title-font font-bold text-xl mb-2 text-gray-900">Stats at a glance</h1>
                <div class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus eu nunc lacinia, a vulputate lacus vulputate.</div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">45</h2>
                <p class="leading-relaxed">Residents</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">43</h2>
                <p class="leading-relaxed">Faculty Members</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">>100K/yr</h2>
                <p class="leading-relaxed">Patients</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">6</h2>
                <p class="leading-relaxed">Rotation sites</p>
              </div>
            </div>
            <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img class="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1561328635-c1c6ad1753b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1557&q=80" alt="stats">
            </div>
          </div>
        </section>

        <footer class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img class="-ml-8" src="../assets/jackson_memorial.png" style="height: auto; width: auto" alt="">
              </a>
              <p class="mt-2 text-sm text-gray-500">© Copyright 2020 <br> Jackson Memorial Hospital System</p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div class="ml-auto lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-gray-800 tracking-wide text-sm mb-3">EDUCATION</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Clinical Sites</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Clinical Curriculum</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Didactic Curriculum</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Electives</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Research</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-gray-800 tracking-wide text-sm mb-3">CLINICAL</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Ultrasound</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Toxicology</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">EMS</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Fellowships</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-gray-800 tracking-wide text-sm mb-3">PEOPLE</h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Faculty</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Class of 2021</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Class of 2022</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Class of 2023</a>
                  </li>
                  <li>
                    <a class="text-gray-600 cursor-pointer hover:text-gray-800">Alumni</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div class="bg-gray-200">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p class="text-gray-500 text-sm text-center sm:text-left">
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
      </footer>

      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      selected: 0,
      changedInLastN: false,
      nTime: 5000,
    }
  },
  methods: {
    autoSelectedIncrement() {
      if(!this.changedInLastN) {
        if(this.selected<2) this.selected++
        else this.selected = 0
      }
      setTimeout(() => this.autoSelectedIncrement(), this.nTime)
    },
    changeSelected(val) {
      this.selected = val
      this.changedInLastN = true
      setTimeout(() => this.changedInLastN = false, this.nTime)
    },
  },
  computed: {
    aboutUs() {
      return this.$store.getters.getAboutUs
    },
  },
  mounted() {
    setTimeout(() => this.autoSelectedIncrement(), 5000)
  },

}
</script>

<style>
.bg-image-1 {
  background-image: url("../assets/jackson.jpg");
  left: 0px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>