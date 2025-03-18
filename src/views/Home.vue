<template>
  <!-- ARCHITETTURA & INTERIOR DESIGN -->

  <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
  >

    <div class="relative min-h-screen" id="home">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div class="mx-auto">
        <div class="relative shadow-xl sm:overflow-hidden min-h-screen">

          <div class="absolute inset-0">
            <img class="min-h-full w-full object-cover" src="img/PaintIt/SantAmbrogio_21bis.webp" alt="il progetto degli spazi" />
          </div>

          <div class="relative px-4 sm:px-6 lg:px-8 lg:mr-7">
            <div class="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center pt-10">
              <p class=" max-w-lg mx-auto text-center text-xl text-grey-500 sm:max-w-3xl lg:mb-10 py-20">
                ARCHITETTURA<span class="text-white">&</span>INTERIOR DESIGN
              </p>
              <div class="space-y-4 sm:space-y-0 sm:inline-grid py-40 lg:py-60 sm:gap-5">
              </div>
            </div>
            <div class="max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs md:mr-0 md:w-1/2 lg:mr-0 md:ml-auto lg:ml-auto sm:mx-auto lg:w-1/2 spacing">
              <div class="bg-white bg-opacity-50 lg:ml-12 p-2">
                <p class="pt-1 text-base md:text-l lg:text-xl text-grey-500 sm:max-w-3xl text-left ">
                  PROGETTIAMO SPAZI SU MISURA DALLA FORTE IDENTITÀ, CONIUGANDO ESTETICA ED ESIGENZA DEL CLIENTE
                </p>
                <div class="text-right">
                  <button class="mt-2 md:mt-24 lg:mt-44 mb-2 bg-white opacity-50 hover:bg-gray-700 hover:text-white text-xs text-black font-bold py-1 px-2 rounded-full inline-flex" v-on:click="scrolltocontatti()">
                    <span class="px-1 py-0.5">Prenota la tua consulenza gratuita</span>
                    <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </transition>



  <!-- CASA GRAMSCI -->

  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden min-h-screen">

        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/casagramsci/01.webp" alt="il progetto degli spazi" loading="lazy" />
        </div>

        <div class="relative px-4 sm:px-6 lg:px-8 lg:mr-7">
          <div class="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center pt-14">
            <p class=" max-w-lg mx-auto text-center text-xl text-grey-500 sm:max-w-3xl lg:mb-10 py-20"></p>
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-40 lg:py-60 sm:gap-5">
            </div>
          </div>
          <div class="max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs md:mr-0 md:w-1/2 lg:mr-0 md:ml-auto lg:ml-auto sm:mx-auto lg:w-1/2 spacing">
            <div class="bg-white bg-opacity-50 lg:ml-12 p-2">
              <p class="mt-2 text-sm md:text-sm lg:text-base md:mt-10 lg:mt-6 max-w-lg text-sm md:text-sm text-black sm:max-w-3xl text-left">
              </p>
              <p class="pt-1 text-base md:text-l lg:text-xl text-grey-500 sm:max-w-3xl text-left ">
                CASA GRAMSCI
              </p>
              <p class="mt-2 text-sm md:text-sm lg:text-base md:mt-10 lg:mt-6 max-w-lg text-sm md:text-sm text-black sm:max-w-3xl text-left ">
                55 mq riconfigurati puntando su arredi su misura, materiali naturali e con un progetto che lascia in comunicazione gli ambienti.<br><br>
              </p>
              <div class="text-right">
                <a href="/project_casa_gramsci" class="mt-2 md:mt-24 lg:mt-44 mb-2 bg-white opacity-50 hover:bg-gray-700 hover:text-white text-xs text-black font-bold py-1 px-2 rounded-full inline-flex">
                  <span class="px-1 py-0.5">Vai al progetto</span>
                  <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- FOCUS ON CASA RIVOLI -->

  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden min-h-screen">

        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/PRO_7700.webp" alt="il progetto degli spazi" loading="lazy"/>
        </div>

        <div class="relative px-4 sm:px-6 lg:px-8 lg:mr-7">
          <div class="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center pt-14">
            <p class=" max-w-lg mx-auto text-center text-xl text-grey-500 sm:max-w-3xl lg:mb-10 py-20"></p>
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-40 lg:py-60 sm:gap-5">
            </div>
          </div>
          <div class="max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs md:mr-0 md:w-1/2 lg:mr-0 md:ml-auto lg:ml-auto sm:mx-auto lg:w-1/2 spacing">
            <div class="bg-white bg-opacity-50 lg:ml-12 p-2">
              <p class="mt-2 text-sm md:text-sm lg:text-base md:mt-10 lg:mt-6 max-w-lg text-sm md:text-sm text-black sm:max-w-3xl text-left">
                FOCUS ON:<br>
              </p>
              <p class="pt-1 text-base md:text-l lg:text-xl text-grey-500 sm:max-w-3xl text-left ">
                CASA RIVOLI
              </p>
              <p class="mt-2 text-sm md:text-sm lg:text-base md:mt-10 lg:mt-6 max-w-lg text-sm md:text-sm text-black sm:max-w-3xl text-left ">
                Il contrasto bianco e legno diventa il segno di continuità degli ambienti.<br>
              </p>
              <div class="text-right">
                <a href="\project_casa_rivoli" class="mt-2 md:mt-24 lg:mt-44 mb-2 bg-white opacity-50 hover:bg-gray-700 hover:text-white text-xs text-black font-bold py-1 px-2 rounded-full inline-flex">
                  <span class="px-1 py-0.5">Vai al progetto</span>
                  <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- IL PROGETTO DEGLI SPAZI -->

  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden min-h-screen">

        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/PRO_7942.webp" alt="il progetto degli spazi" loading="lazy"/>
        </div>

        <div class="relative px-4 sm:px-6 lg:px-8 lg:mr-7">
          <div class="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center pt-14">
            <p class=" max-w-lg mx-auto text-center text-xl text-grey-500 sm:max-w-3xl lg:mb-10 py-20"></p>
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-40 lg:py-60 sm:gap-5">
            </div>
          </div>
          <div class="max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs md:mr-0 md:w-1/2 lg:mr-0 md:ml-auto lg:ml-auto sm:mx-auto lg:w-1/2 spacing">
            <div class="bg-white bg-opacity-50 lg:ml-12 p-2">
              <p class="pt-1 text-base md:text-l lg:text-xl text-grey-500 sm:max-w-3xl text-left ">
                IL PROGETTO DEGLI SPAZI
              </p>
              <p class="mt-2 text-sm md:text-sm lg:text-base md:mt-10 lg:mt-6 max-w-lg text-sm md:text-sm text-black sm:max-w-3xl text-left ">
                Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente.<br>
              </p>
              <div class="text-right">
                <a href="\project_centrale_operativa_telecontrol" class="mt-2 md:mt-24 lg:mt-44 mb-2 bg-white opacity-50 hover:bg-gray-700 hover:text-white text-xs text-black font-bold py-1 px-2 rounded-full inline-flex">
                  <span class="px-1 py-0.5">Vai al progetto</span>
                  <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden min-h-screen">

        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/dante/PR_R0550 copy-min.webp" alt="il progetto degli spazi" loading="lazy"/>
        </div>

        <div class="relative px-4 sm:px-6 lg:px-8 lg:mr-7">
          <div class="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center pt-14">
            <p class=" max-w-lg mx-auto text-center text-xl text-grey-500 sm:max-w-3xl lg:mb-10 py-20"></p>
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-40 lg:py-60 sm:gap-5">
            </div>
          </div>
          <div class="max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs md:mr-0 md:w-1/2 lg:mr-0 md:ml-auto lg:ml-auto sm:mx-auto lg:w-1/2 spacing">
            <div class="bg-white bg-opacity-50 lg:ml-12 p-2">
              <p class="pt-1 text-base md:text-l lg:text-xl text-grey-500 sm:max-w-3xl text-left ">
                PROGETTI <br>SU MISURA
              </p>
              <p class="mt-2 text-sm md:text-sm lg:text-base md:mt-10 lg:mt-6 max-w-lg text-sm md:text-sm text-black sm:max-w-3xl text-left ">
                Attraverso la ricerca di nuove forme, materiali e tecniche.<br>
              </p>
              <div class="text-right">
                <a href="\project_dante" class="mt-2 md:mt-24 lg:mt-44 mb-2 bg-white opacity-50 hover:bg-gray-700 hover:text-white text-xs text-black font-bold py-1 px-2 rounded-full inline-flex">
                  <span class="px-1 py-0.5">Vai al progetto</span>
                  <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- IL PROGETTO DEGLI SPAZI -->

  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden min-h-screen">

        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/foto-LORA.webp" alt="il progetto degli spazi" loading="lazy"/>
        </div>

        <div class="relative px-4 sm:px-6 lg:px-8 lg:mr-7">
          <div class="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center pt-14">
            <p class=" max-w-lg mx-auto text-center text-xl text-grey-500 sm:max-w-3xl lg:mb-10 py-20"></p>
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-40 lg:py-60 sm:gap-5">
            </div>
          </div>
          <div class="max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs md:mr-0 md:w-1/2 lg:mr-0 md:ml-auto lg:ml-auto sm:mx-auto lg:w-1/2 spacing">
            <div class="bg-white bg-opacity-50 lg:ml-12 p-2">
              <p class="pt-1 text-base md:text-l lg:text-xl text-grey-500 sm:max-w-3xl text-left ">
                LA CURA DEL <br> DETTAGLIO
              </p>
              <p class="mt-2 text-sm md:text-sm lg:text-base md:mt-10 lg:mt-6 max-w-lg text-sm md:text-sm text-black sm:max-w-3xl text-left ">
                Disegniamo arredi personalizzati studiando ogni particolare.<br>
              </p>
              <div class="text-right">
                <a href="\project_oragiusta_moncalieri" class="mt-2 md:mt-24 lg:mt-44 mb-2 bg-white opacity-50 hover:bg-gray-700 hover:text-white text-xs text-black font-bold py-1 px-2 rounded-full inline-flex">
                  <span class="px-1 py-0.5">Vai al progetto</span>
                  <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TEAM -->

  <div class="bg-white ">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-12 lg:py-12">
      <div class="space-y-12">
        <div class="space-y-5 mx-auto text-center max-w-7xl ">
          <h2 class=" text-xl mx-auto max-w-full text-center text-gray-900 tracking-tight border-b border-black leading-10" id="profilo">CHI SIAMO</h2>
          <p class="text-gray-900 max-w-3xl mx-auto">
            Un team di architetti con sede a Torino che si occupa di progettazione architettonica a diversi livelli, dall'interior design al recupero dell'esistente, fino a edifici ex-novo.<br>
            Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente.<br>
            La nostra filosofia è di creare progetti cuciti su misura attraverso arredi personalizzati, curando ogni particolare.
          </p>
        </div>
        <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-24">
          <li v-for="person in team" :key="person.name" class="py-10 px-6 bg-gray-200 text-center xl:px-10 xl:text-left">
            <div class="space-y-6 xl:space-y-10">
              <img class="mx-auto h-56 w-56 xl:w-80 xl:h-80" :src="person.imageSrc" :alt="person.imageAlt" loading="lazy" />
              <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h2 class="max-w-lg text-xl text-black sm:max-w-3xl">{{ person.name }}</h2>
                  <p class="text-indigo-400 pb-10">{{ person.role }}</p>
                  <p class="hidden lg:block max-w-lg text-base text-gray-700 sm:max-w-3xl pr-2  lg:border-r lg:border-gray-700 text-left">
                    {{ person.description }}
                  </p>
                  <p class="lg:hidden max-w-lg text-base text-gray-700 sm:max-w-3xl pr-2 pt-2 pb-2 border-b border-gray-700 text-left">
                    {{ person.description }}
                  </p>
                </div>

                <ul role="list" class="flex justify-center space-x-5 pl-2 mt-4">
                  <li>
                    <a :href="person.linkedinUrl" class="text-gray-400 hover:text-blue-700">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <!-- Projects Section -->

  <div class="bg-white pb-5 enter" id="progetti">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-10 sm:px-6 lg:px-12">

      <div class="mx-auto py-3  text-center  lg:py-3">
        <h2 class="max-w-full border-b border-black text-xl text-grey-500 sm:max-w-7xl mx-auto leading-10">PROGETTI</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-10 sm:gap-y-12 lg:gap-x-12">
        <div v-for="project in projects" :key="project.id" class="group relative">
          <a :href="project.href">
            <div class="h-full h-96 overflow-hidden group-hover:opacity-75">
              <img :src="project.imageSrc" :alt="project.imageAlt" class="w-full h-full object-center object-cover" loading="lazy" width="362" height="281" />
            </div>
          </a>
          <p class="max-w-lg text-sm text-grey-500 sm:max-w-3xl">
            <a :href="project.href" class=" mb-2 inline-flex items-center uppercase text-black rounded-full p-1 pr-2 sm:text-xs lg:text-sm xl:text-base hover:text-gray-500">
              <span class="absolute inset-0" />
              {{ project.name }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>




  <!--  Carousel section-->

  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 text-center px-4 lg:py-12 sm:px-6 lg:px-12">
      <div class="space-y-4 sm:space-y-12">
        <h2 class="max-w-full border-b border-black text-xl text-grey-500 sm:max-w-7xl mx-auto leading-10" id="gallery">GALLERY</h2>
      </div>
    </div>
  </div>

  <div class="bg-white relative overflow-hidden">
    <div class="gallery-wrap" style="background-image: url('img/carousel/4-200x100.jpg');">
      <div class="item" style="background-image: url('img/PRO_7711.jpg');"></div>
      <div class="item" style="background-image: url('img/loragiusta/foto-3-scaled.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7701.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7943.jpg');"></div>
      <div class="item" style="background-image: url('img/loragiusta/foto-2-scaled.jpg');"></div>
      <div class="item" style="background-image: url('img/casagramsci/11.webp');"></div>
    </div>
  </div>



  <!-- PUBBLICAZIONI -->



  <div class="bg-white">
    <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-12" id="press">
      <div>
        <div class="space-y-5 mx-auto text-center max-w-7xl sm:px-6 lg:px-12  px-4">
          <h2 class=" text-xl mx-auto text-center max-w-full border-b border-black text-gray-900 tracking-tight leading-10">PRESS</h2>
          <p class="text-gray-900 max-w-3xl mx-auto"></p>
        </div>
        <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-12 max-w-7xl mx-auto">
          <li v-for="pub in press" :key="pub.name" class="py-10 px-6 text-center xl:px-10 xl:text-left">
            <div class="space-y-6 xl:space-y-10">
              <div class="center">
                <div class="page">
                  <a :href="pub.HrefUrl">
                    <img class="mx-auto h-auto w-52 xl:w-52 xl:h-auto box-shadow" :src="pub.imageSrc" :alt="pub.imageAlt" />
                  </a>
                </div>
              </div>
              <div class="space-y-2">
                <div class="font-medium text-lg leading-6 space-y-1 text-center">
                  <a :href="pub.HrefUrl" class="text-gray-400 hover:text-gray-500">
                    <h2 class="max-w-lg text-xl text-black sm:max-w-3xl mx-auto">{{ pub.name }}</h2>
                    <p class="text-black text-sm pb-5">{{ pub.role }}</p>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <!-- CONTATTI -->



  <div class="bg-white" id="formCont">
    <div class="mx-auto pb-12 px-4 sm:px-6 lg:px-8 lg:pb-12 max-w-7xl">
      <div class="space-y-5 mx-auto text-center sm:px-6 lg:px-12 px-4">
        <h2 class="text-xl mx-auto text-center max-w-full border-b border-black text-gray-900 tracking-tight leading-10">
          CONTATTI
        </h2>
        <p class="text-gray-900 max-w-3xl mx-auto"></p>
      </div>

      <div class="sm:px-6 lg:px-12 px-4 mx-auto">
        <div class="bg-gray-200 py-12 lg:py-24 px-4">
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-gray-900 max-w-3xl mx-auto">RICEVI LA TUA CONSULENZA GRATUITA</p>
          </div>

          <!-- Form -->
          <form ref="form" @submit.prevent="sendEmail" class="mx-auto mt-16 max-w-xl sm:mt-20">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-semibold text-gray-900">Nome</label>
                <div class="mt-2.5">
                  <input v-model="firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div>
                <label for="last-name" class="block text-sm font-semibold text-gray-900">Cognome</label>
                <div class="mt-2.5">
                  <input v-model="lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-semibold text-gray-900">Società</label>
                <div class="mt-2.5">
                  <input v-model="company" type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="location" class="block text-sm font-semibold text-gray-900">Area di interesse</label>
                <div class="mt-2.5">
                  <div class="mt-2 grid grid-cols-1">
                    <select v-model="interestArea" id="location" name="location" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400 sm:text-sm">
                      <option>Scenografie e allestimenti</option>
                      <option selected>Restrutturazioni</option>
                      <option>Product design</option>
                      <option>Accoglienza</option>
                      <option>Nuove costruzioni</option>
                    </select>
                    <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input v-model="email" type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="phone-number" class="block text-sm font-semibold text-gray-900">Telefono</label>
                <div class="mt-2.5">
                  <input v-model="phoneNumber" type="text" name="phone-number" id="phone-number" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold text-gray-900">Messaggio</label>
                <div class="mt-2.5">
                  <textarea v-model="message" name="message" id="message" rows="4" required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400"></textarea>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="captcha" class="block text-sm font-semibold text-gray-900">CAPTCHA verification: 6 + 6 = ?</label>
                <div class="mt-2.5">
                  <input v-model="captchaAnswer" type="number" name="captcha" id="captcha" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border focus:outline-indigo-400" />
                </div>
              </div>


              <div class="sm:col-span-2">
                <div class="flex gap-3">
                  <input v-model="consent" type="checkbox" id="consent" class="rounded border-gray-300 focus:outline-indigo-600">
                  <label for="consent" class="font-medium text-gray-900">
                    Ho letto e accetto <a class="hover:text-indigo-500" href="/privacy-policy">i termini e le condizioni.</a>
                  </label>
                </div>
              </div>
            </div>

            <div class="mt-10">
              <button :disabled="captchaAnswer != 12" type="submit" class="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-400"
                      :class="captchaAnswer == 12 ? 'bg-indigo-400' : 'bg-gray-400 cursor-not-allowed'">
                Invia
              </button>
            </div>

            <!-- Error Alert (Red) -->
            <div v-if="errorMessage" class="mt-3 rounded-md bg-red-500 p-4 text-center text-white">
              <p class="text-sm font-medium">{{ errorMessage }}</p>
            </div>

            <!-- Success Alert (Green) -->
            <div v-if="confirmation" class="mt-3 rounded-md bg-green-50 p-4 text-center">
              <p class="text-sm font-medium text-green-800">{{ confirmation }}</p>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>




</template>

<script>

import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { ChevronRightIcon, ChevronDownIcon} from '@heroicons/vue/solid'
import { gsap } from 'gsap';

const team = [
  {
    name: 'Claudio Fava',
    role: 'Architetto',
    imageSrc:
        'img/2013-07-16-B-N-low.jpg',
    imageAlt:"Claudio Fava Foto",
    description:"Nasce a Torino nel 1984. Si laurea presso la Facoltà di Architettura del Politecnico di Torino nel 2010, dopo un tirocinio presso lo studio milanese Claudio Bellini Design+Design. Inizia il suo percorso, collaborando con lo Studio Neirotti di Vinovo e lo studio LSB architetti associati per cui lavora in pianta stabile per due anni e dove ha modo di accrescere le proprie conoscenze lavorando su progetti in diversi ambiti.\n" +
        "Nel 2014 inizia la sua attività da libero professionista, iniziando importanti collaborazioni con arch. Giorgio Fava, arch. Paolo Neirotti e Sceg Architetti.",
    linkedinUrl: 'https://www.linkedin.com/in/claudio-fava-7ab95015/',
  },
  {
    name: 'Giorgio Fava',
    role: 'Architetto',
    imageSrc:
        'img/giocut.jpg',
    imageAlt:"Giorgio Fava Foto",
    description:"Laureato presso la Facoltà di Architettura del Politecnico di Torino, sperimenta esperienze lavorative diverse in ambito teatrale ed artistico presso Teatro Regio di Torino, Steve McCurry Studio di New York, MOdenArte Gallery di Boca Raton, Florida. Dal 2007 lavora in pianta stabile presso Cantieri Navali Sanlorenzo prima come architetto di commessa e dal 2014 come Project Manager per il design di interni di motor yachts dai 30 ai 40 metri.",
    linkedinUrl: 'https://www.linkedin.com/in/giorgio-fava-5730b234/',
  },
]

const press = [
  {
    name: 'CASA GRAMSCI',
    role: 'è su Cose Di Casa, Agosto 2022',
    imageSrc:
        'img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp',
    imageAlt:"è su Cose Di Casa, Agosto 2022",
    description:"Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d'interni che lascia in comunicazione gli ambienti. ",
    HrefUrl: '/cose_di_casa',
  },
  {
    name: 'CASA RIVOLI',
    role: 'è su 100 Idee Per Ristrutturare, Luglio 2022',
    imageSrc:
        'img/pubblicazioni/100idee_luglio2022/copertina_idee.webp',
    imageAlt:"100 Idee Per Ristrutturare, Luglio 2022",
    description:"\n" +
        "Un viaggio nel mondo del salus per aquam alla ricerca delle soluzioni più idonee all'area wellness connessa direttamente alla zona notte, per una rigenerazione totale. La spa è stata realizzata ricercando il giusto linguaggio di integrazione tra arredo e tecnologie contemporanee.",
    HrefUrl: '/cento_idee',
  },
  {
    name: 'PAINT IT BLACK',
    role: 'è su CRC, Marzo - Aprile 2024',
    imageSrc:
        'img/pubblicazioni/CRC_marzo_aprile_2024/crc_marzo_2024_copertina.webp',
    imageAlt:"Come Ristrutturare La Casa, Marzo - Aprile 2024",
    description:"\n" +
        "Un viaggio nel mondo del salus per aquam alla ricerca delle soluzioni più idonee all'area wellness connessa direttamente alla zona notte, per una rigenerazione totale. La spa è stata realizzata ricercando il giusto linguaggio di integrazione tra arredo e tecnologie contemporanee.",
    HrefUrl: '/come_ristrutturare_la_casa',
  },
]



const projects = [
  {
    id: 1,
    name: 'Paint it black',
    href: '/project_paint_it_black',
    imageSrc: 'img/PaintIt/SantAmbrogio_21bis.webp',
    imageAlt: "Progetto Paint it black.",
  },
  {
    id: 2,
    name: 'Dante',
    href: '/project_dante',
    imageSrc: 'img/dante/PR_R0609-HDR-mini-home.jpg',
    imageAlt: "Progetto Dante.",
  },
  {
    id: 3,
    name: 'Torre Rinalda',
    href: '/project_torrerinalda',
    imageSrc: 'img/torre/anteprima.webp',
    imageAlt: "Progetto Torre Rinalda.",
  },

  {
    id: 4,
    name: 'Casa Gramsci',
    href: '/project_casa_gramsci',
    imageSrc: 'img/casagramsci/01.webp',
    imageAlt: "Casa Gramsci.",
  },

  {
    id: 5,
    name: 'FLUSH HOUSE',
    href: '/project_concorso_rasoparete',
    imageSrc: 'img/rasoparete/vista-02-1-scaled.jpg',
    imageAlt: "Concorso Rasoparete.",
  },
  {
    id: 6,
    name: "L'oragiusta Moncalieri",
    href: '/project_oragiusta_moncalieri',
    imageSrc: 'img/loragiusta/foto-1-scaled.jpg',
    imageAlt: "L'oragiusta Moncalieri.",
  },
  {
    id: 7,
    name: "Vivere in 20 mq",
    href: '/project_vivere_20',
    imageSrc: 'img/vivere20metri/03-scaled.jpg',
    imageAlt: "Vivere in 20 mq",
  },
  {
    id: 8,
    name: 'Sala Congressi Telecontrol',
    href: '/project_sala_congressi_telecontrol',
    imageSrc: 'img/vista-01.jpg',
    imageAlt: "Sala Congressi Telecontrol.",
  },
  {
    id: 9,
    name: 'Casa Nel Parco',
    href: '/project_casa_nel_parco',
    imageSrc: 'img/vista-esterna-02_crop.jpg',
    imageAlt: "Casa Nel Parco.",
  },
  {
    id: 10,
    name: 'Villa Perrault',
    href: '/project_villa_perrault',
    imageSrc: 'img/villaperrault/vista-02-scaled.jpg',
    imageAlt: "Villa Perrault.",
  },
  {
    id: 11,
    name: 'Casa Rivoli',
    href: '/project_casa_rivoli',
    imageSrc: 'img/PRO_7711.jpg',
    imageAlt: "Casa Rivoli.",
  },
  {
    id: 12,
    name: 'Centrale Operativa Telecontrol',
    href: '/project_centrale_operativa_telecontrol',
    imageSrc: 'img/PRO_7906.jpg',
    imageAlt: "Centrale Operativa Telecontrol.",
  },

]




const products = [
    {
        id: 1,
        name: 'Paint it black',
        href: '/project_paint_it_black',
        imageSrc: 'img/PaintIt/SantAmbrogio_21bis.webp',
        imageAlt: "Progetto Paint it black.",
    },
    {
        id: 2,
        name: 'Dante',
        href: '/project_dante',
        imageSrc: 'img/dante/PR_R0609-HDR-mini-home.jpg',
        imageAlt: "Progetto Dante.",
    },
    {
        id: 3,
        name: 'Torre Rinalda',
        href: '/project_torrerinalda',
        imageSrc: 'img/torre/anteprima.webp',
        imageAlt: "Progetto Torre Rinalda.",
    },

    {
        id: 4,
        name: 'Casa Gramsci',
        href: '/project_casa_gramsci',
        imageSrc: 'img/casagramsci/01.webp',
        imageAlt: "Casa Gramsci.",
    },

    {
        id: 5,
        name: 'Concorso Rasoparete',
        href: '/project_concorso_rasoparete',
        imageSrc: 'img/rasoparete/vista-02-1-scaled.jpg',
        imageAlt: "Concorso Rasoparete.",
    },
    {
        id: 6,
        name: "L'oragiusta Moncalieri",
        href: '/project_oragiusta_moncalieri',
        imageSrc: 'img/loragiusta/foto-1-scaled.jpg',
        imageAlt: "L'oragiusta Moncalieri.",
    },
    {
        id: 7,
        name: "Vivere in 20 mq",
        href: '/project_vivere_20',
        imageSrc: 'img/vivere20metri/03-scaled.jpg',
        imageAlt: "Vivere in 20 mq",
    },
    {
        id: 8,
        name: 'Sala Congressi Telecontrol',
        href: '/project_sala_congressi_telecontrol',
        imageSrc: 'img/vista-01.jpg',
        imageAlt: "Sala Congressi Telecontrol.",
    },
    {
        id: 9,
        name: 'Casa Nel Parco',
        href: '/project_casa_nel_parco',
        imageSrc: 'img/vista-esterna-02_crop.jpg',
        imageAlt: "Casa Nel Parco.",
    },
    {
        id: 10,
        name: 'Villa Perrault',
        href: '/project_villa_perrault',
        imageSrc: 'img/villaperrault/vista-02-scaled.jpg',
        imageAlt: "Villa Perrault.",
    },
    {
        id: 11,
        name: 'Casa Rivoli',
        href: '/project_casa_rivoli',
        imageSrc: 'img/PRO_7711.jpg',
        imageAlt: "Casa Rivoli.",
    },
    {
        id: 12,
        name: 'Centrale Operativa Telecontrol',
        href: '/project_centrale_operativa_telecontrol',
        imageSrc: 'img/PRO_7906.jpg',
        imageAlt: "Centrale Operativa Telecontrol.",
    },
]

export default {


  components: {
    ChevronRightIcon,
    ChevronDownIcon
  },

  setup() {

    const form = ref(null);
    const firstName = ref('');
    const lastName = ref('');
    const company = ref('');
    const interestArea = ref('');
    const email = ref('');
    const phoneNumber = ref('');
    const message = ref('');
    const consent = ref(false);
    const confirmation = ref('');
    const errorMessage = ref('');
    const captchaAnswer = ref(null);


    const sendEmail = async () => {
      if (!consent.value) {
        errorMessage.value = 'You must accept the terms and conditions.';
        return;
      }

      if (captchaAnswer.value !== 12) {
        errorMessage.value = 'Incorrect CAPTCHA answer. Please try again.';
        return;
      }

      try {
        await emailjs.sendForm(
            'service_fjzqiao',
            'template_0zhyqfe',
            form.value,
            'Bj74svpWrorN6eSUy'
        );

        confirmation.value = 'Il tuo messaggio è stato correttamente inviato !';
        errorMessage.value = ''; // Clear any previous errors

        // Reset form fields
        firstName.value = '';
        lastName.value = '';
        company.value = '';
        interestArea.value = '';
        email.value = '';
        phoneNumber.value = '';
        message.value = '';
        captchaAnswer.value = null;
        consent.value = false;
      } catch (error) {
        errorMessage.value = 'Un errore si è prodotto durante. Ti preghiamo di riprovare più tardi.';
        console.error('Error sending email:', error);
      }
    };

    const beforeEnter = (el) => {
      el.style.opacity = 0
    }


    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        duration: 5,
        onComplete: done,
        delay: el.dataset.index * 0.5,
      })
    }

    return {
      beforeEnter,
      enter,
      products,
      team,
      press,
      projects,
      form,
      firstName,
      lastName,
      company,
      interestArea,
      email,
      phoneNumber,
      message,
      consent,
      confirmation,
      errorMessage,
      captchaAnswer,
      sendEmail,
    }
  },

  methods: {

    scrolltocontatti() {
      const element = document.getElementById('formCont');
      element.scrollIntoView({ behavior: 'smooth' });
    },

  },

}

</script>

<style>
.home-img{
  position: relative !important;
  width: 100% !important;
  height: 100vh !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

.spacing{
  padding-bottom: 20Px;
}

.item{
  -webkit-transition: flex 0.8s ease;
}

</style>





