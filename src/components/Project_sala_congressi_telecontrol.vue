<template>
  <div class="bg-white">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">

      <div class="flex mx-auto">
        <div class="flex-none w-16 h-16 ...">
          <button class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" @click="this.$router.push({ name: 'Project_camera_bimbi' })">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div class="flex-grow h-16 ...">
          <h1 class="text-xl font-medium text-gray-900 text-center">
            NUOVA SALA CONGRESSI TELECONTROL
          </h1>
        </div>

        <div class="flex-none w-16 h-16 text-right">
          <button class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" @click="this.$router.push({ name: 'Project_casa_nel_parco' })">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>



      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <!-- Image gallery -->
        <div class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-8 lg:row-start-1 lg:row-span-3">

          <button v-on:click="toggleModal()">
          <div class="w-100 grid grid-cols-1 lg:grid-cols-1 lg:gap-8 mt-3">
            <img v-for="image in product.images" :key="image.id" :src="image.imageSrc" :alt="image.imageAlt" :class="[image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block', 'w-full mt-3 hover:opacity-75']" />
          </div>
          </button>

          <!-- modal gallery-->

          <div v-if="showModal" class="bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto lg:max-w-6xl py-60">
              <!--content-->
              <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gray-200">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 class="text-3xl font-semibold">
                    Dettaglio foto
                  </h3>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                  <div class="carousel relative rounded relative overflow-hidden shadow-xl">
                    <div class="carousel-inner relative overflow-hidden w-full">
                      <!--Slide 1-->

                      <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
                             checked="checked">
                      <div class="carousel-item absolute opacity-0 bg-center w-100 h-52 md:h-full lg:h-full">
                        <img src="img/vista-02.jpg">
                      </div>
                      <label for="carousel-3"
                             class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-2"
                             class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 2-->
                      <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 bg-center h-52 md:h-full lg:h-full">
                        <img src="img/vista-03.jpg">
                      </div>
                      <label for="carousel-1"
                             class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-3"
                             class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 3-->
                      <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/vista-04-assometria.jpg">
                      </div>
                      <label for="carousel-2"
                             class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-1"
                             class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!-- Add additional indicators for each slide-->
                      <ol class="carousel-indicators">
                        <li class="inline-block mr-3">
                          <label for="carousel-1"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                          <label for="carousel-2"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                          <label for="carousel-3"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                      </ol>

                    </div>
                  </div>
                </div>
                <!--footer-->
                <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button class="text-red-500 bg-transparent border border-solid border-black-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                    Close
                  </button>
                </div>
              </div>

          </div>

        </div>
        </div>

        <div class="mt-8 lg:col-span-3">
          <!-- Product details -->
          <div class="mt-10">
            <h2 class="text-lg font-medium text-gray-900 mt-10">Descrizione</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description" />
          </div>

          <div class="mt-8 border-t border-gray-200 pt-8">
            <div class="mt-4 prose prose-sm text-gray-500">
              <p v-for="item in product.info" :key="item">
                <span class="text-lg font-medium text-gray-900">{{ item.name }} :</span>
                <span class="block text-base text-gray-300"
                ><span class="text-gray-500 text-italic">- {{ item.info }}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'

const product = {
  name: 'NUOVA SALA CONGRESSI TELECONTROL',
  href: '#',
  images: [
    {
      id: 1,
      imageSrc: 'img/vista-01.jpg',
      imageAlt: "NUOVA SALA CONGRESSI TELECONTROL",
      primary: true,
    },
    {
      id: 2,
      name: 'Sala Congressi',
      imageSrc: 'img/vista-02.jpg',
      imageAlt: "Sala Congressi.",
      primary: true,
    },

    {
      id: 2,
      name: 'Ingresso',
      imageSrc: 'img/vista-03.jpg',
      imageAlt: "Ingresso.",
      primary: true,
    },
    {
      id: 4,
      name: 'Esploso',
      imageSrc: 'img/vista-04-assometria.jpg',
      imageAlt: "Esploso.",
      primary: true,
    },
    {
      id: 5,
      name: 'Planimetria',
      imageSrc: 'img/pianta-piano-terreno.jpg',
      imageAlt: "Planimetria.",
      primary: true,
    },
    {
      id: 6,
      name: 'Stato di fatto',
      imageSrc: 'img/20170415_173308-BN-1.jpg',
      imageAlt: "Stato di fatto.",
      primary: true,
    },
  ],

  description: `
    <p>L’intervento prevede la rifunzionalizzazione del locale autorimessa dell’azienda Telecontrol Spa a Rivoli (To) con l’obbiettivo di trasformarlo in una nuova Sala Congressi per complessivi 400 mq compresi di un soppalco.
Il progetto prevede di creare uno spazio polifunzionale per soddisfare le esigenze del cliente che richiedeva la massima flessibilità nelle possibili funzioni di tale spazio. Le principali destinazioni d’uso dello spazio sono state così individuate: area lounge, area break, area supporto per allestimenti catering, spazio per riunioni e convention, sala per feste e presentazioni, locale deposito /guardaroba.
Scatolari metallici sospesi sostengono i corpi illuminanti e si ancorano ai pilastri esistenti creando una rete che delimita idealmente le varie aree. Pareti in legno a soffietto possono essere tenute aperte o chiuse a fisarmonica per suddividere gli spazi a seconda dell’attività che si sta svolgendo.</p>`,

  info:[
    {name: 'Luogo', info:'Rivoli (TO)'},
    {name:'Stato', info:'Compleato'},
    {name:'Cliente', info:'Telecontrol Spa'},
    {name:'Team di progettazione', info:'Claudio Fava, Giorgio Fava'},
  ]

}

const relatedProducts = [
  {
    id: 1,
    name: 'Sala Congressi',
    imageSrc: 'img/vista-02.jpg',
    imageAlt: "Sala Congressi.",
  },
  {
    id: 2,
    name: 'Ingresso',
    imageSrc: 'img/vista-03.jpg',
    imageAlt: "Ingresso.",
  },
  {
    id: 3,
    name: 'Esploso',
    imageSrc: 'img/vista-04-assometria.jpg',
    imageAlt: "Esploso.",
  },
  {
    id: 4,
    name: 'Planimetria',
    imageSrc: 'img/pianta-piano-terreno.jpg',
    imageAlt: "Planimetria.",
  },
  {
    id: 5,
    name: 'Stato di fatto',
    imageSrc: 'img/20170415_173308-BN-1.jpg',
    imageAlt: "Stato di fatto.",
  },
  // More products...
]



export default {

  name: "large-modal",

  components:{
    ChevronRightIcon,
    ChevronLeftIcon
  },

  data() {
    return {
      showModal: false
    }
  },

  methods:{
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  },


  setup() {
    return {
      relatedProducts,
      product,
    }
  },
}
</script>

<style>
.carousel-open:checked+.carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked~.control-1,
#carousel-2:checked~.control-2,
#carousel-3:checked~.control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
  color: #2b6cb0;
}
</style>