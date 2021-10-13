<template>

  <!-- ARCHITETTURA & INTERIOR DESIGN -->


  <div class="relative" id="home">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl  sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/PRO_7700.jpg" alt="Salotto di design" />
          <div class="absolute inset-0" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8">
          <p class="mt-6 max-w-lg mx-auto text-center text-xl text-grey-500 sm:max-w-3xl">
            ARCHITETTURA<span class="text-white">&</span>INTERIOR DESIGN
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid py-60 sm:grid-cols-2 sm:gap-5">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- RIFUNZIONALIZZAZIONE -->


<!--  <div class="relative" id="cosa_facciamo">-->
<!--    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />-->
<!--    <div class="mx-auto">-->
<!--      <div class="relative shadow-xl sm:overflow-hidden">-->
<!--        <div class="absolute inset-0">-->
<!--          <img class="h-full w-full object-cover" src="img/vista-esterna-01_crop.jpg" alt="Progetto casa esterni" />-->
<!--          <div class="absolute inset-0" />-->
<!--        </div>-->
<!--        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8 lg:pl-60">-->
<!--          <p class="mt-2 max-w-lg text-xl text-grey-500 sm:max-w-3xl">-->
<!--            RIFUNZIONALIZZAZIONE-->
<!--          </p>-->
<!--          <p class="mt-2 max-w-lg text-xl text-grey-500 sm:max-w-3xl">-->
<!--            Progettiamo per dare nuova vita agli edifici.-->
<!--          </p>-->
<!--          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">-->
<!--            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid py-60 sm:grid-cols-2 sm:gap-5">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


  <!-- LA CURA DEL DETTAGLIO -->


  <div class="relative" id="come_progettiamo">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/PRO_7721-crop.jpg" alt="la cura del dettaglio" />
          <div class="absolute inset-0" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8">
          <p class="mt-2 max-w-lg text-right text-xl text-grey-500 sm:max-w-3xl">
            LA CURA DEL DETTAGLIO
          </p>
          <p class="mt-2 max-w-lg text-right text-base text-grey-500 sm:max-w-3xl">
            Disegniamo arredi personalizzati studiando ogni particolare.<br>
            <button class="mt-2 bg-white opacity-50 hover:bg-blue-700 text-xs text-black font-bold py-2 px-4 rounded-full inline-flex" @click="this.$router.push({ name: 'Project_casa_rivoli' })">
              <span class="px-3 py-0.5">Vai al progetto</span>
              <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
            </button>
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid py-60 sm:grid-cols-2 sm:gap-5">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- IL PROGETTO DEGLI SPAZI -->


  <div class="relative" id="come_lavoriamo">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/PRO_7701.jpg" alt="People working on laptops" />
          <div class="absolute inset-0" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8 lg:pl-60">
          <p class="mt-2 max-w-lg text-xl text-grey-500 sm:max-w-3xl">
            IL PROGETTO DEGLI SPAZI
          </p>
          <p class="mt-2 max-w-lg text-base text-grey-500 sm:max-w-3xl">
            Progettiamo coniugando estetica ed esigenze del cliente.<br>
            <button class="mt-2 bg-white opacity-50 hover:bg-blue-700 text-xs text-black font-bold py-2 px-4 rounded-full inline-flex" @click="this.$router.push({ name: 'Project_casa_rivoli' })">
              <span class="px-3 py-0.5">Vai al progetto</span>
              <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
            </button>
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid py-60 sm:grid-cols-2 sm:gap-5">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- Team Section -->

  <div class="bg-white">
    <div class=" mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
      <div class="space-y-4 sm:space-y-12">
        <h2 class="text-2xl font-extrabold tracking-tight text-black md:text-3xl lg:text-5xl" id="profilo">CHI SIAMO</h2>
      </div>
    </div>
  </div>


  <div class="relative bg-white overflow-hidden">
    <div class="relative lg:pb-16 pb-7">
      <div class="lg:absolute lg:left-0 lg:h-full lg:w-1/2 pb-10" >
        <img class="w-full h-full object-cover lg:hidden material-2" src="img/2013-07-16-B-N-low.jpg" alt="Support team" />
      </div>
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:rounded-lg md:rounded-lg rounded-none">
          <div class="p-4">
            <div>
              <span class="h-12 w-12 rounded-md flex items-center justify-center bg-cyan-700">
                <InboxIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
                Claudio Fava
              </h2>
              <p class="mt-4 text-base text-black lg:text-lg">
                Nasce a Torino nel 1984. Si laurea presso la Facoltà di Architettura del Politecnico di Torino. Dopo un’esperienza presso lo studio milanese Claudio Bellini Design+Design, collabora con numerosi studi di architettura torinesi. Fra i suoi lavori, la ristrutturazione della Centrale Operativa di Telecontrol, importante istituto di vigilanza e la ristrutturazione di una casa privata a Rivoli (To). Si occupa di architettura residenziale, uffici e spazi commerciali, dal progetto preliminare fino alla fase esecutiva e direzione lavori.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full bg-none">
            <img class="hidden lg:block lg:full lg:h-full h-4/6 mx-auto object-cover material-2" src="img/2013-07-16-B-N_low-2.jpg" alt="claudio-fava" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="relative">
        <div class="relative bg-white">
          <div class="lg:absolute lg:ml-24 lg:h-full lg:w-1/2 pb-10">
            <img class=" h-full object-cover lg:h-full material-2 mx-auto" src="img/IMG-20170906-WA0003_cut2-1.jpeg" alt="Support team" />
          </div>
          <div class="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
            <div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <span class="h-12 w-12 rounded-md flex items-center justify-center bg-cyan-700">
                    <SparklesIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div class="mt-6">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
                  Giorgio Fava
                </h2>
                <p class="mt-4 text-base text-black lg:text-lg">
                  Laureato presso la Facoltà di Architettura del Politecnico di Torino, sperimenta esperienze lavorative diverse in ambito teatrale ed artistico presso Teatro Regio di Torino, Steve McCurry Studio di New York, MOdenArte Gallery di Boca Raton, Florida. Dal 2007 lavora in pianta stabile presso Cantieri Navali Sanlorenzo prima come architetto di commessa e dal 2014 come Project Manager per il design di interni di motor yachts dai 30 ai 40 metri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


  <!--  Carousel section-->

  <div class="bg-white">
    <div class=" mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
      <div class="space-y-4 sm:space-y-12">
        <h2 class="text-2xl font-extrabold tracking-tight text-black md:text-3xl lg:text-5xl" id="gallery">GALLERY</h2>
      </div>
    </div>
  </div>

  <div class="bg-white relative overflow-hidden">
    <div class="gallery-wrap" style="background-image: url('img/carousel/4-200x100.jpg');">
      <div class="item" style="background-image: url('img/PRO_7764.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7805.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7840.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7860-.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7711.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7728.jpg');"></div>
    </div>
  </div>

  <!-- Projects Section -->

  <div class="bg-white pb-5" id="progetti">
    <div class="max-w-full mx-auto py-10 px-4 sm:py-10 sm:px-6 lg:px-8">

      <div class="mx-auto py-3 px-4 text-center sm:px-6 lg:px-8 lg:py-3">
        <h2 class="text-2xl font-extrabold tracking-tight text-black md:text-3xl lg:text-5xl">PROGETTI</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <a :href="product.href">
          <div class="h-full h-96 overflow-hidden group-hover:opacity-75">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />
          </div>
          </a>
          <h5 class="text-xs font-semibold text-gray-900">
            <a :href="product.href" class=" mb-2 inline-flex items-center uppercase text-black rounded-full p-1 pr-2 sm:text-xs lg:text-sm xl:text-base hover:text-gray-500">
              <span class="absolute inset-0" />
              {{ product.name }}
            </a>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ChevronRightIcon } from '@heroicons/vue/solid'

const products = [
  {
    id: 1,
    name: 'Nuova Sala Congressi Telecontrol',
    price: '$32',
    href: '/Project_sala_congressi_telecontrol',
    imageSrc: 'img/vista-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 1,
    name: 'Casa Nel Parco',
    price: '$32',
    href: '/Project_casa_nel_parco',
    imageSrc: 'img/vista-esterna-02_crop.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 1,
    name: 'Casa Rivoli',
    price: '$32',
    href: '/Project_casa_rivoli',
    imageSrc: 'img/PRO_7711.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 1,
    name: 'Centrale Operativa Telecontrol',
    price: '$32',
    href: '/Project_centrale_operativa_telecontrol',
    imageSrc: 'img/PRO_7906.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 1,
    name: 'Casa R',
    price: '$32',
    href: '/Project_casa_R',
    imageSrc: 'img/vista-02-versione-A.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 1,
    name: 'Camera Dei Bimbi',
    price: '$32',
    href: '/Project_camera_bimbi',
    imageSrc: 'img/vista-03_crop.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
]

export default {

  components: {
    ChevronRightIcon
  },

  setup() {
    return {
      products,
    }
  },
}

</script>

<style>

/*photo shadow effect*/

.material-2 {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px !important;
}

</style>

