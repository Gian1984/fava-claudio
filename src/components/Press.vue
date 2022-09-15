<script setup>


        // const features = [
        //   {
        //     id:1,
        //     name: 'Cose di Casa - 8 Agosto 2022',
        //     description:
        //         'Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d\'interni che lascia in comunicazione gli ambienti. ',
        //     imageSrc: 'img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp',
        //     imageAlt: 'Cose di Casa - 8 Agosto 2022',
        //     gallery:'gallery1'
        //   },
        //
        //   {
        //     id:2,
        //     name: '100 Idee per ristrutturare - Luglio 2022',
        //     description:
        //         'Un viaggio nel mondo del salus per aquam alla ricercq delle soluzioni più idonee all\'area wellness connessa direttamente alla zona notte, per una rigenerazione totale. La spa è stata realizzata ricercando il giusto linguaggio di integrazione tra arredo e tecnologie contemporanee.',
        //     imageSrc: 'img/pubblicazioni/100idee_luglio2022/copertina_idee.webp',
        //     imageAlt:
        //         '100 Idee per ristrutturare - Luglio 2022',
        //     gallery:'gallery2'
        //   },
        // ]


</script>
<template>
  <div class="bg-white">
    <section aria-labelledby="features-heading" class="mx-auto max-w-7xl pt-32 sm:px-2 lg:px-8">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
        <div class="max-w-3xl">
          <h2 id="features-heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pubblicazioni</h2>
          <p class="mt-4 text-gray-500">The Organize modular system offers endless options for arranging your favorite and most used items. Keep everything at reach and in its place, while dressing up your workspace.</p>
          <button id="play-button" @click="startFancy()"></button>
        </div>
      </div>
      </section>
  </div>

  <div class="flex flex-wrap mx-auto max-w-7xl sm:px-2 lg:px-8">
    <div class="w-full">

      <!-- tab selector start  -->

      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">

        <!-- tab 1  -->

        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1}">
            Cose di Casa
          </a>
        </li>

        <!-- tab 2  -->

        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-pink-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2}">
            100  Idee per ristrutturare
          </a>
        </li>


      </ul>

      <!-- tab selector end  -->

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">

              <!--  description & cover start -->

              <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div class="mt-6 lg:col-span-5 lg:mt-0">
                  <h3 class="text-lg font-medium text-gray-900">8 Agosto 2022</h3>
                  <p class="mt-2 text-sm text-gray-500">
                    Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d'interni che lascia in comunicazione gli ambienti.
                  </p>
                </div>
                <div class="lg:col-span-7">
                  <div class="aspect-w-2 aspect-h-5 overflow-hidden rounded-lg  sm:aspect-w-2 sm:aspect-h-5">
                    <a
                        href="img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp"
                        data-fancybox="gallery1"
                        data-caption="Cose di Casa - 8 Agosto 2022"
                    >
                      <img  src="img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp"  alt="Cose di Casa - 8 Agosto 2022" class="object-cover object-center h-64 mx-auto w-auto"/>
                    </a>
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
                      <div class="min-h-80 aspect-w-5 aspect-h-2 rounded-md bg-gray-200 group-hover:opacity-75 ">
                        <a
                            href="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_1.webp"
                            data-fancybox="gallery1"
                            data-caption="Pagina 1"
                        >
                          <img src="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_1.webp" alt="Cose di casa pagina 1 luglio 2022" class="aspect-w-5 aspect-h-2 object-cover object-center" />
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
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                        <a
                            href="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_2.webp"
                            data-fancybox="gallery1"
                            data-caption="Pagina 1"
                        >
                          <img src="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_2.webp" alt="Cose di casa pagina 1 luglio 2022" class="aspect-w-5 aspect-h-2 object-cover object-center" />
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
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                        <a
                            href="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_3.webp"
                            data-fancybox="gallery1"
                            data-caption="Pagina 1"
                        >
                          <img src="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_3.webp" alt="Cose di casa pagina 1 luglio 2022" class="aspect-w-5 aspect-h-2 object-cover object-center" />
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

                    <!-- pagina -->

                    <div  class="group relative">
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                        <a
                            href="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_4.webp"
                            data-fancybox="gallery1"
                            data-caption="Pagina 1"
                        >
                          <img src="img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_4.webp" alt="Cose di casa pagina 1 luglio 2022" class="aspect-w-5 aspect-h-2 object-cover object-center" />
                        </a>
                      </div>
                      <div class="mt-4 flex justify-between">
                        <div>
                          <h3 class="text-sm text-gray-700">
                            <p >
                              <span aria-hidden="true" class="absolute inset-0" />
                              Cose di casa - Luglio 2022
                            </p>
                          </h3>
                        </div>
                        <p class="text-sm font-medium text-gray-900">1</p>
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

              <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div class="mt-6 lg:col-span-5 lg:mt-0">
                  <h3 class="text-lg font-medium text-gray-900">8 Agosto 2022</h3>
                  <p class="mt-2 text-sm text-gray-500">
                    Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d'interni che lascia in comunicazione gli ambienti.
                  </p>
                </div>
                <div class="lg:col-span-7">
                  <div class="aspect-w-2 aspect-h-5 overflow-hidden rounded-lg  sm:aspect-w-2 sm:aspect-h-5">
                    <a
                        href="img/pubblicazioni/100idee_luglio2022/copertina_idee.webp"
                        data-fancybox="gallery2"
                        data-caption="Cose di Casa - 8 Agosto 2022"
                    >
                      <img  src="img/pubblicazioni/100idee_luglio2022/copertina_idee.webp"  alt="Cose di Casa - 8 Agosto 2022" class="object-cover object-center h-64 mx-auto w-auto"/>
                    </a>
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
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                        <a
                            href="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_1.webp"
                            data-fancybox="gallery2"
                            data-caption="Pagina 1"
                        >
                          <img src="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_1.webp" alt="Cose di casa pagina 1 luglio 2022" class="aspect-w-5 aspect-h-2 object-cover object-center" />
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
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                        <a
                            href="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_2.webp"
                            data-fancybox="gallery2"
                            data-caption="Pagina 1"
                        >
                          <img src="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_2.webp" alt="Cose di casa pagina 1 luglio 2022" class="aspect-w-5 aspect-h-2 object-cover object-center" />
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
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                        <a
                            href="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_3.webp"
                            data-fancybox="gallery2"
                            data-caption="Pagina 1"
                        >
                          <img src="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_3.webp" alt="Cose di casa pagina 1 luglio 2022" class="aspect-w-5 aspect-h-2 object-cover object-center" />
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
                      <div class="min-h-80 aspect-w-5 aspect-h-2 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                        <a
                            href="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_4.webp"
                            data-fancybox="gallery2"
                            data-caption="Pagina 1"
                        >
                          <img src="img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_4.webp" alt="Cose di casa pagina 1 luglio 2022" class="aspect-w-5 aspect-h-2 object-cover object-center" />
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

export default {
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
