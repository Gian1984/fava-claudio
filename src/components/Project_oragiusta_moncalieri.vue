<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          L'ORAGIUSTA MONCALIERI
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Moncalieri (TO) - 2020
        </h3>

        <!-- Image gallery -->

        <div class=" lg:mt-0 lg:col-start-1 lg:col-span-8 lg:mr-32 lg:row-start-1 lg:row-span-3">

          <button v-on:click="toggleModal()">
            <div class="w-100 grid grid-cols-1 lg:grid-cols-1 lg:gap-8 mt-3">
              <div v-for="image in product.images" :key="image.id">
                <img :src="image.imageSrc" :alt="image.imageAlt" :class="[image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block', 'w-full mt-3 hover:opacity-75']" />
              </div>
            </div>
          </button>

          <!-- modal gallery-->

          <div v-if="showModal" class="bg-white bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto my-6 mx-auto lg:max-w-6xl py-60">
              <!--content-->
              <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gray-200">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"></div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                  <div class="carousel relative rounded relative overflow-hidden shadow-xl">
                    <div class="carousel-inner relative overflow-hidden w-full">
                      <!--Slide 1-->

                      <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
                             checked="checked">
                      <div class="carousel-item absolute opacity-0 bg-center w-100 h-52 md:h-full lg:h-full">
                        <img src="img/loragiusta/foto-1-scaled.jpg" alt="vista-interna-01">
                      </div>
                      <label for="carousel-9"
                             class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-2"
                             class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 2-->
                      <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 bg-center h-52 md:h-full lg:h-full">
                        <img src="img/loragiusta/foto-2-scaled.jpg" alt="vista-interna-02">
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
                        <img src="img/loragiusta/foto-3-scaled.jpg" alt="vista-interna-03">
                      </div>
                      <label for="carousel-2"
                             class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-4"
                             class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 4-->
                      <input class="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/loragiusta/foto-4-scaled.jpg" alt="vista-interna-04">
                      </div>
                      <label for="carousel-3"
                             class="control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-5"
                             class="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 5-->
                      <input class="carousel-open" type="radio" id="carousel-5" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/loragiusta/foto-5-scaled.jpg" alt="vista-interna-05">
                      </div>
                      <label for="carousel-4"
                             class="control-5 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-6"
                             class="next control-5 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 6-->
                      <input class="carousel-open" type="radio" id="carousel-6" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/loragiusta/foto-6-scaled.jpg" alt="vista-interna-06">
                      </div>
                      <label for="carousel-5"
                             class="control-6 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-7"
                             class="next control-6 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 7-->
                      <input class="carousel-open" type="radio" id="carousel-7" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/loragiusta/foto-7-scaled.jpg" alt="vista-interna-07">
                      </div>
                      <label for="carousel-6"
                             class="control-7 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-8"
                             class="next control-7 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 8 -->
                      <input class="carousel-open" type="radio" id="carousel-8" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/loragiusta/foto-8-scaled.jpg" alt="vista-interna-08">
                      </div>
                      <label for="carousel-7"
                             class="control-8 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-9"
                             class="next control-8 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 9 -->
                      <input class="carousel-open" type="radio" id="carousel-9" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/loragiusta/foto-9-scaled.jpg" alt="vista-interna-09">
                      </div>
                      <label for="carousel-8"
                             class="control-9 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-1"
                             class="next control-9 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
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
                        <li class="inline-block mr-3">
                          <label for="carousel-4"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                          <label for="carousel-5"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                          <label for="carousel-6"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                          <label for="carousel-7"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                          <label for="carousel-8"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                          <label for="carousel-9"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>

                      </ol>

                    </div>
                  </div>
                </div>
                <!--footer-->
                <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button class=" bg-transparent uppercase text-sm rounded  mr-1 mb-1 " type="button" v-on:click="toggleModal()">
                    <XIcon class="w-8 h-8 text-gray-500 hover:text-black" aria-hidden="true" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div class="mt-8 lg:col-span-3">
          <!-- Product details -->

          <h1 class="text-xl font-medium text-gray-900 text-left hidden lg:block">
            L'ORAGIUSTA MONCALIERI
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Moncalieri (TO) - 2020
          </h2>

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
import { XIcon } from '@heroicons/vue/outline'

const product = {
  name: "L'ORAGIUSTA MONCALIEI",
  href: '#',
  images: [
    {
      id: 1,
      name: "L'Oragiusta Moncalieri vista 1",
      imageSrc: 'img/loragiusta/foto-1-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 1",
      description:"L'Oragiusta Moncalieri vista 1",
      primary: true,
    },
    {
      id: 2,
      name: "L'Oragiusta Moncalieri vista 2",
      imageSrc: 'img/loragiusta/foto-2-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 2",
      description:"L'Oragiusta Moncalieri vista 2",
      primary: true,
    },

    {
      id: 3,
      name: "L'Oragiusta Moncalieri vista 3",
      imageSrc: 'img/loragiusta/foto-3-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 3",
      description:"L'Oragiusta Moncalieri vista 3",
      primary: true,
    },
    {
      id: 4,
      name: "L'Oragiusta Moncalieri vista 4",
      imageSrc: 'img/loragiusta/foto-4-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 4",
      description:"L'Oragiusta Moncalieri vista 4",
      primary: true,
    },
    {
      id: 5,
      name: "L'Oragiusta Moncalieri vista 5",
      imageSrc: 'img/loragiusta/foto-5-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 5",
      description:"L'Oragiusta Moncalieri vista 5",
      primary: true,
    },
    {
      id: 6,
      name: "L'Oragiusta Moncalieri vista 6",
      imageSrc: 'img/loragiusta/foto-6-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 6",
      description:"L'Oragiusta Moncalieri vista 6",
      primary: true,
    },
    {
      id: 7,
      name: "L'Oragiusta Moncalieri vista 7",
      imageSrc: 'img/loragiusta/foto-7-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 7",
      description:"L'Oragiusta Moncalieri vista 7",
      primary: true,
    },
    {
      id: 8,
      name: "L'Oragiusta Moncalieri vista 8",
      imageSrc: 'img/loragiusta/foto-8-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 8",
      description:"L'Oragiusta Moncalieri vista 8",
      primary: true,
    },
    {
      id: 9,
      name: "L'Oragiusta Moncalieri vista 9",
      imageSrc: 'img/loragiusta/foto-9-scaled.jpg',
      imageAlt: "L'Oragiusta Moncalieri vista 9",
      description:"L'Oragiusta Moncalieri vista 9",
      primary: true,
    },

  ],

  description: `
    <p>Il progetto di ristrutturazione della Centrale Operativa di Telecontrol è caratterizzato da un totale restyling per un’azienda leader nel campo della sicurezza e della vigilanza.
Il progetto consente ai visitatori di poter osservare “il cuore pulsante dell’azienda”, senza tuttavia disturbare l’attività lavorativa dei dipendenti. Differenti tonalità di colore per la pavimentazione separano il percorso distributivo dagli spazi lavorativi.
Le pareti degli uffici sono tamponate con vetrate e lamiere forate a tutta altezza in modo da conferire luminosità e permeabilità agli ambienti interni.
</p>`,

  info:[
    {name: 'Luogo', info:'Moncalieri (TO)'},
    {name:'Stato', info:'Realizzato'},
    {name:'Cliente', info:"L'Oragiusta"},
    {name:'Team di progettazione', info:'Claudio Fava'},
    {name:'Foto', info:'Paolo Properzi'}
  ]

}

export default {

  name: "large-modal",

  data() {
    return {
      showModal: false
    }
  },

  components:{
    XIcon
  },

  methods:{
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  },

  setup() {
    return {
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
#carousel-3:checked~.control-3,
#carousel-4:checked~.control-4,
#carousel-5:checked~.control-5,
#carousel-6:checked~.control-6,
#carousel-7:checked~.control-7,
#carousel-8:checked~.control-8,
#carousel-9:checked~.control-9{
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
#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet,
#carousel-4:checked~.control-4~.carousel-indicators li:nth-child(4) .carousel-bullet,
#carousel-5:checked~.control-5~.carousel-indicators li:nth-child(5) .carousel-bullet,
#carousel-6:checked~.control-6~.carousel-indicators li:nth-child(6) .carousel-bullet,
#carousel-7:checked~.control-7~.carousel-indicators li:nth-child(7) .carousel-bullet,
#carousel-8:checked~.control-8~.carousel-indicators li:nth-child(8) .carousel-bullet,
#carousel-9:checked~.control-9~.carousel-indicators li:nth-child(9) .carousel-bullet{
  color: #2b6cb0;
}
</style>