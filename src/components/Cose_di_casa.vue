
<template>
  <div class="bg-white">
    <section aria-labelledby="features-heading" class="mx-auto max-w-7xl pt-32 pb-12 sm:px-2 lg:px-8">
      <div class="mx-auto max-w-7xl px-4 lg:max-w-none lg:px-0">
        <div class="max-w-7xl mx-auto border-b border-black">
          <h2 id="features-heading" class="text-xl text-left leading-10 mx-auto max-w-7xl pb-2 font-bold tracking-tight text-gray-400 sm:text-xl">' CASA GRAMSCI ' è su COSE DI CASA, Agosto 2022</h2>
        </div>
        <p class="text-sm font-medium text-left mx-auto mt-2">Cose di casa</p>
        <nav class="flex items-center justify-left mt-2" aria-label="Progress">
          <ol role="list" class="flex items-center space-x-5">
            <li v-for="step in steps" :key="step.name">
              <a v-if="step.status === 'complete'" :href="step.href" class="block h-2.5 w-2.5 rounded-full bg-gray-600 hover:bg-gray-900">
                <span class="sr-only">{{ step.name }}</span>
              </a>
              <a v-else-if="step.status === 'current'" :href="step.href" class="relative flex items-center justify-center" aria-current="step">
          <span class="absolute flex h-5 w-5 p-px" aria-hidden="true">
            <span class="h-full w-full rounded-full bg-gray-200" />
          </span>
                <span class="relative block h-2.5 w-2.5 rounded-full bg-gray-600" aria-hidden="true" />
                <span class="sr-only">{{ step.name }}</span>
              </a>
              <a v-else :href="step.href" class="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                <span class="sr-only">{{ step.name }}</span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  </div>

  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded pt-0 lg:pt-12 max-w-7xl mx-auto">
    <div class="px-4 py-5 mx-auto">


              <!--  description & cover start -->

              <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 pb-12">
                <div class="mt-14 lg:col-span-5 lg:mt-0 px-4 lg:px-8">
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

    </div>
  </div>

</template>

<script>
import { DocumentSearchIcon, } from '@heroicons/vue/outline'


const steps = [
  { name: 'Cose di Casa', href: '/Cose_di_casa', status: 'current' },
  { name: '100 Idee per Restrutturare', href: '/Cento_idee', status: 'upcoming' },
]

export default {
  components: {
    DocumentSearchIcon,
  },

  setup() {
    return {
      steps
    }
  },

}

</script>

