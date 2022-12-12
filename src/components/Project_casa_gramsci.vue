<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          CASA GRAMSCI
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Condove (TO) - 2022
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
                        <img src="img/casagramsci/01.webp" alt="vista-interna-01">
                      </div>
                      <label for="carousel-11"
                             class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-2"
                             class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 2-->
                      <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 bg-center h-52 md:h-full lg:h-full">
                        <img src="img/casagramsci/02.webp" alt="vista-interna-02">
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
                        <img src="img/casagramsci/09.webp" alt="vista-interna-03">
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
                        <img src="img/casagramsci/10.webp" alt="vista-interna-04">
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
                        <img src="img/casagramsci/11.webp" alt="vista-interna-05">
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
                        <img src="img/casagramsci/12.webp" alt="vista-interna-06">
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
                        <img src="img/casagramsci/13.webp" alt="vista-interna-07">
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
                        <img src="img/casagramsci/14.webp" alt="vista-interna-08">
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
                        <img src="img/casagramsci/15.webp" alt="vista-interna-09">
                      </div>
                      <label for="carousel-8"
                             class="control-9 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-10"
                             class="next control-9 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 10 -->
                      <input class="carousel-open" type="radio" id="carousel-10" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/casagramsci/16.webp" alt="Casa Rivoli vista interna 10">
                      </div>
                      <label for="carousel-9"
                             class="control-10 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-11"
                             class="next control-10 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                          class="fas fa-angle-right mt-3"></i></label>

                      <!--Slide 11 -->
                      <input class="carousel-open" type="radio" id="carousel-11" name="carousel" aria-hidden="true" hidden="">
                      <div class="carousel-item absolute opacity-0 h-52 md:h-full lg:h-full">
                        <img src="img/casagramsci/17.webp" alt="Casa Rivoli vista interna 11">
                      </div>
                      <label for="carousel-10"
                             class="control-11 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                          class="fas fa-angle-left mt-3"></i></label>
                      <label for="carousel-1"
                             class="next control-11 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
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
                        <li class="inline-block mr-3">
                          <label for="carousel-10"
                                 class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                        </li>
                        <li class="inline-block mr-3">
                          <label for="carousel-11"
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
            CASA GRAMSCI
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Condove (TO) - 2022
          </h2>

          <div class="mt-10">
            <h2 class="text-lg font-medium text-gray-900 mt-10">Descrizione</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">La boiserie a nastro</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description1" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">Rovere "nordico"</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description2" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">Pura versatilità</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description3" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">Bagno con layout a zone</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description4" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">Complice la luce</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description5" />
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
  name: 'CASA GRAMSCI',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Casa Gramsci vista interna 1',
      imageSrc: 'img/casagramsci/01.webp',
      imageAlt: "Casa Gramsci vista interna 1",
      description:"Casa Gramsci vista interna 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Casa Gramsci vista interna 2',
      imageSrc: 'img/casagramsci/02.webp',
      imageAlt: "Casa Gramsci vista interna 2",
      description:"Casa Gramsci vista interna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Casa Rivoli vista interna 3',
      imageSrc: 'img/casagramsci/09.webp',
      imageAlt: "Casa Rivoli vista interna 3",
      description:"Casa Rivoli vista interna 3",
      primary: true,
    },
    {
      id: 4,
      name: 'Casa Rivoli vista interna 4',
      imageSrc: 'img/casagramsci/10.webp',
      imageAlt: "Casa Rivoli vista interna 4",
      description:"Casa Rivoli vista interna 4",
      primary: true,
    },
    {
      id: 5,
      name: 'Casa Rivoli vista interna 5',
      imageSrc: 'img/casagramsci/11.webp',
      imageAlt: "Casa Rivoli vista interna 5",
      description:"Casa Rivoli vista interna 5",
      primary: true,
    },
    {
      id: 6,
      name: 'Casa Rivoli vista interna 6',
      imageSrc: 'img/casagramsci/12.webp',
      imageAlt: "Casa Rivoli vista interna 6",
      description:"Casa Rivoli vista interna 6",
      primary: true,
    },
    {
      id: 7,
      name: 'Casa Rivoli vista interna 7',
      imageSrc: 'img/casagramsci/13.webp',
      imageAlt: "Casa Rivoli vista interna 7",
      description:"Casa Rivoli vista interna 7",
      primary: true,
    },
    {
      id: 8,
      name: 'Casa Rivoli vista interna 8',
      imageSrc: 'img/casagramsci/14.webp',
      imageAlt: "Casa Rivoli vista interna 8",
      description:"Casa Rivoli vista interna 8",
      primary: true,
    },
    {
      id: 9,
      name: 'Casa Rivoli vista interna 9',
      imageSrc: 'img/casagramsci/15.webp',
      imageAlt: "Casa Rivoli vista interna 9",
      description:"Casa Rivoli vista interna 9",
      primary: true,
    },
    {
      id: 10,
      name: 'Casa Rivoli vista interna 10',
      imageSrc: 'img/casagramsci/16.webp',
      imageAlt: "Casa Rivoli vista interna 10",
      description:"Casa Rivoli vista interna 10",
      primary: true,
    },
    {
      id: 11,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/17.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 12,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/18.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 13,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/19.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 14,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/20.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 15,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/21.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 16,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/22.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 17,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/23.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 18,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/24.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 19,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/25.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 20,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/26.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
  ],

  description: `
    <p>Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata,
sostenibilità e con un progetto d'interni che lascia in comunicazione gli ambienti. A una zona giorno open - ma con cucina, pranzo e salotto ben definiti dai materiali diversi - e alla camera doppia, si aggiungono un bagno extra confortevole, un invidiabile ripostiglio e una lavanderia con spazio dedicato. Doppio l'ingresso, di cui uno direttamente in cucina.
L'intero volume è modellato con arredi nella maggior parte su misura e materiali naturali.

La planimetria della casa è stata trasformata dalla nuova apertura ricavata nella parete portante tra soggiorno-pranzo e cucina. La doppia putrella in ferro a vista, aggiunta in compensazione, si inserisce
con armonia nel volume dove predominano toni di verde.
La ristrutturazione e il progetto affidano alla forza di materiali naturali come il rovere e il marmo verde Guatemala la caratterizzazione degli interni.
Grande identità anche nella stanza da bagno, grazie alla parete della doccia in gres porcellanato, sempre in verde, ma lucente.
Gran parte degli arredi è su misura. In cucina, un elemento a “elle” si collega visivamente al living grazie alla boiserie a mezza parete che fa da giunto di connessione. A pavimento, porzioni di graniglia e gres effetto parquet segnalano funzioni diverse all’interno dello stesso volume.
</p>`,

  description1: `
    <p>La soluzione che connette la cucina all'adiacente zona pranzo (i due ambienti sono stati resi comunicanti in fase di ristrutturazione) gioca soprattutto sull'effetto visivo di continuità dato dall'impiego dello stesso materiale per l'arredamento di entrambi gli spazi, in questo caso il legno di rovere. Il dialogo tra le due aree del soggiorno open è rafforzato dalla boiserie a mezza parete, che protegge il muro e funge da schienale alle sedute su un lato del tavolo. Prosegue poi estendendosi direttamente alla base a penisola del lavello, fino a
fondersi con i moduli della cucina. È composta da una serie di listelli allineati e fissati a parete.
</p>`,

  description2: `
    <p>Il nuovo layout del soggiorno open è stato personalizzato con arredi su misura, per i quali si è privilegiato il legno di rovere naturale dalla tonalità miele, con contrappunti di nero dati dalle sedute e dalla base a doppia slitta del tavolo. Le ante di basi e pensili, la panca, il piano del tavolo e la pannellatura a parete a mezza altezza che abbraccia la zona pranzo e si innesta nella penisola con il lavello, creano un'insieme armonioso.</p>`,

  description3: `
    <p>Raccolta, ma comoda e godibile a 360°, la zona relax con il divano e, a lato, un tavolino e una lampada da terra di ispirazione nordica. Protetta dall’ingresso, è addossata alla parete dall'ampia finestra (che diffonde luce naturale nel soggiorno) e rivolta verso la zona pranzo, con vista sulla cucina e sullo schermo tv (a sinistra). Un angolo pensato per essere vissuto in modo conviviale o per leggere usufruendo della piena luce.</p>`,

  description4: `
    <p>Il bagno è diviso in tre spazi, e quello con i sanitari è chiuso da un'ulteriore porta, con anta in vetro per far passare la luce naturale. Entrando, si accede all’antibagno centrale, con il lavabo ovale sul mobile in legno completo di ante. A sinistra, l’ampia doccia nella nicchia in muratura.</p>`,

  description5: `
    <p>Elemento forte della stanza da bagno è la doccia in nicchia a filo pavimento, con il rivestimento
a terra che prosegue nel vano in muratura. È stato necessario eseguire un adeguato lavoro di impermeabilizzazione e prevedere uno scarico idoneo (al quale converge l'acqua raccolta attraverso la piletta rettangolare in acciaio inox). Le pareti interne del box sono rivestite in tavelline di gres porcellanato blu mare, dall'effetto marezzato lucido, posate - tocco originale - in verticale.
Per valorizzare al meglio l'intero vano doccia walk-in è stato ritagliato un “pozzo di luce” nel soffitto, che crea un effetto molto suggestivo per chi sta sotto il getto d’acqua e diffonde luminosità nella stanza.
</p>`,

  info:[
    {name: 'Luogo', info:'Condove (TO)'},
    {name:'Stato', info:'Realizzato'},
    {name:'Cliente', info:'Privato'},
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
#carousel-9:checked~.control-9,
#carousel-10:checked~.control-10,
#carousel-11:checked~.control-11{
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
#carousel-9:checked~.control-9~.carousel-indicators li:nth-child(9) .carousel-bullet,
#carousel-10:checked~.control-10~.carousel-indicators li:nth-child(10) .carousel-bullet,
#carousel-11:checked~.control-11~.carousel-indicators li:nth-child(11) .carousel-bullet{
  color: #2b6cb0;
}
</style>