
<template>
  <div class="bg-white">
    <section aria-labelledby="features-heading" class="mx-auto max-w-7xl pt-32 pb-12 sm:px-2 lg:px-8">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
        <div class="max-w-3xl mx-auto">
          <h2 id="features-heading" class="text-xl text-center font-bold tracking-tight text-gray-900 sm:text-xl uppercase">Pubblicazioni</h2>
        </div>
      </div>
      </section>
  </div>

  <div class="flex flex-wrap mx-auto max-w-7xl sm:px-2 lg:px-8">
    <div class="w-full">

      <!-- tab selector start  -->

      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">

        <!-- tab 1  -->

        <li class="-mb-px ml-2 last:mr-0 flex-auto text-center hovercursor">
          <a class="text-xs px-5 py-3 rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-400 bg-white': openTab !== 1, 'text-white bg-gray-300': openTab === 1}">
            Cose di Casa
          </a>
        </li>

        <!-- tab 2  -->

        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center hovercursor">
          <a class="text-xs px-5 py-3 rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-400 bg-white': openTab !== 2, 'text-white bg-gray-300': openTab === 2}">
            100  Idee per ristrutturare
          </a>
        </li>


      </ul>

      <!-- tab selector end  -->

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded pt-12">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}" id="gallery">

              <!--  description & cover start -->

              <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 pb-12">
                <div class="mt-14 lg:col-span-5 lg:mt-0">
                  <h3 class="text-lg font-medium text-gray-900">55 m² luminosi e su misura</h3>
                  <p class="text-xs text-gray-400">Agosto 2022</p>
                  <p class="mt-8 text-sm text-gray-500">
                    Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d'interni che lascia in comunicazione gli ambienti.
                  </p>
                  <a
                      href="img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp"
                      data-fancybox="gallery"
                      data-caption="Cose di Casa - 8 Agosto 2022"
                      class="hover:text-indigo-400 flex my-10"
                  >
                    Sfoglia
                    <DocumentSearchIcon class="h-6 w-6 ml-1"/>

                  </a>
                </div>
                <div class="lg:col-span-7">
                  <div class="aspect-w-2 aspect-h-5 overflow-hidden sm:aspect-w-2 sm:aspect-h-5">
                    <img  src="img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp"  alt="Cose di Casa - 8 Agosto 2022" class="object-cover object-center h-96 mx-auto w-auto"/>
                  </div>
                </div>
              </div>

              <!--  description & cover end -->


              <!--  list of page start -->

              <div class="bg-white">
                <div class="mx-auto max-w-2xl pb-16 pt-2 px-4 sm:pb-24 sm:pt-6 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-80 aspect-w-5 aspect-h-2 bg-gray-200 ">
                        <a
                            href="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_1.webp"
                            data-fancybox="gallery"
                            data-caption="55 mq luminosi e su misura"
                        >
                          <img src="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_1.webp" alt="55 mq luminosi e su misura" class="aspect-w-5 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              Pagina
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">1</p>
                      </div>
                    </div>

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden bg-gray-200">
                        <a
                            href="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_2.webp"
                            data-fancybox="gallery"
                            data-caption="Pura versatilità"
                        >
                          <img src="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_2.webp" alt="Pura versatilità" class="aspect-w-5 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              Pagina
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">2</p>
                      </div>

                    </div>

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden bg-gray-200">
                        <a
                            href="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_3.webp"
                            data-fancybox="gallery"
                            data-caption="Fresca e naturale"
                        >
                          <img src="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_3.webp" alt="Fresca e naturale" class="aspect-w-5 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              Pagina
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">3</p>
                      </div>
                    </div>

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden bg-gray-200">
                        <a
                            href="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_4.webp"
                            data-fancybox="gallery"
                            data-caption="Complice la luce"
                        >
                          <img src="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_4.webp" alt="Complice la luce" class="aspect-w-5 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              pagina
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">4</p>
                      </div>
                    </div>

                    <!-- pagina -->

                  </div>
                </div>
              </div>

              <!--  list of page start -->

            </div>

            <!-- end tab -->

            <!-- start tab -->

            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">

              <!--  description & cover start -->

              <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 pb-12">
                <div class="mt-14 lg:col-span-5 lg:mt-0">
                  <h3 class="text-lg font-medium text-gray-900">Il wellness a casa</h3>
                  <p class="text-xs text-gray-400">Agosto 2022</p>
                  <p class="mt-8 text-sm text-gray-500">
                    Un viaggio nel mondo del salus per aquam alla ricercq delle soluzioni più idonee all'area wellness connessa direttamente alla zona notte, per una rigenerazione totale. La spa è stata realizzata ricercando il giusto linguaggio di integrazione tra arredo e tecnologie contemporanee.
                  </p>
                  <a
                      href="img/pubblicazioni/100idee_luglio2022/copertina_idee.webp"
                      data-fancybox="gallery2"
                      data-caption="Cose di Casa - 8 Agosto 2022"
                      class="hover:text-indigo-400 flex my-10"
                  >
                    Sfoglia
                    <DocumentSearchIcon class="h-6 w-6 ml-1"/>

                  </a>
                </div>
                <div class="lg:col-span-7">
                  <div class="aspect-w-2 aspect-h-5 overflow-hidden sm:aspect-w-2 sm:aspect-h-5">
                    <img  src="img/pubblicazioni/100idee_luglio2022/copertina_idee.webp"  alt="100 Idee per ristrutturare - 8 Agosto 2022" class="object-cover object-center h-96 mx-auto w-auto"/>
                  </div>
                </div>
              </div>

              <!--  description & cover start -->

              <!--  list of page start  -->

              <div class="bg-white">
                <div class="mx-auto max-w-2xl pb-16 pt-2 px-4 sm:pb-24 sm:pt-6 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-64 aspect-w-3 aspect-h-2 overflow-hidden bg-gray-200">
                        <a
                            href="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_1.webp"
                            data-fancybox="gallery2"
                            data-caption="Il wellness a casa"
                        >
                          <img src="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_1.webp" alt="Il wellness a casa" class="aspect-w-3 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              Pagina
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">1</p>
                      </div>
                    </div>

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-80 aspect-w-3 aspect-h-2 overflow-hidden bg-gray-200">
                        <a
                            href="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_2.webp"
                            data-fancybox="gallery2"
                            data-caption="Luogo di rigenerazionze"
                        >
                          <img src="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_2.webp" alt="Luogo di rigenerazionze" class="aspect-w-3 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              Pagina
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">2</p>
                      </div>
                    </div>

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden bg-gray-200">
                        <a
                            href="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_3.webp"
                            data-fancybox="gallery2"
                            data-caption="Relax e integrazione"
                        >
                          <img src="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_3.webp" alt="Relax e integrazione" class="aspect-w-5 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              Pagina
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">3</p>
                      </div>
                    </div>

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden bg-gray-200">
                        <a
                            href="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_4.webp"
                            data-fancybox="gallery2"
                            data-caption="Spa in camera"
                        >
                          <img src="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_4.webp" alt="Spa in camera" class="aspect-w-5 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              Pagina
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">4</p>
                      </div>
                    </div>

                    <!--  pagina -->

                  </div>
                </div>
              </div>

              <!--  list of page end  -->

            </div>

            <!-- end tab -->

          </div>
        </div>
      </div>
    </div>
  </div>







</template>


<script>
import { DocumentSearchIcon, } from '@heroicons/vue/outline'

export default {
  components: {
    DocumentSearchIcon,

  },



  name: "pink-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}

</script>

<style>
.hovercursor:hover{
  cursor: pointer;
}
</style>
