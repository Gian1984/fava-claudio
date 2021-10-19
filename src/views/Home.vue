<template>
  <!-- ARCHITETTURA & INTERIOR DESIGN -->

  <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
  >

  <div class="relative" id="home">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 parallax-elem-1" />
    <div class="mx-auto">
      <div class="relative shadow-xl  sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/PRO_7700.jpg" alt="Salotto di design" />
          <div class="absolute inset-0" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8">
          <p class="mt-6 max-w-lg mx-auto text-center text-xl text-grey-500 sm:max-w-3xl font-black">
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


  </transition>


  <!-- IL PROGETTO DEGLI SPAZI -->


  <div class="relative" id="progetto_degli_spazi">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden">

        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/PRO_7942.jpg" alt="la cura del dettaglio" />
          <div class="absolute inset-0" />
        </div>

        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8">
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-end">
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-60 sm:gap-5">
            </div>
          </div>
          <div class="px-2 rounded-lg sm:space-y-0 sm:inline-grid sm:gap-5 sm:justify-end lg:ml-5">
            <p class="max-w-lg text-xl text-grey-500 sm:max-w-3xl text-left font-black">
              IL PROGETTO DEGLI SPAZI
            </p>
            <p class="max-w-lg text-base text-black sm:max-w-3xl text-left font-black">
              Progettiamo coniugando estetica ed esigenze del cliente.<br>
              <button class="mt-6 mb-2 bg-white opacity-50 hover:bg-blue-700 text-xs text-black font-bold py-1 px-2 rounded-full inline-flex" @click="this.$router.push({ name: 'Project_centrale_operativa_telecontrol' })">
                <span class="px-1 py-0.5">Vai al progetto</span>
                <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- RIFUNZIONALIZZAZIONE -->

  <div class="relative" id="cosa_facciamo">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden">

        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/rasoparete/vista-02-1-scaled.jpg" alt="la cura del dettaglio" />
          <div class="absolute inset-0" />
        </div>

        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8">
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-end">
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-60 sm:gap-5">
            </div>
          </div>
          <div class=" px-2 rounded-lg sm:space-y-0 sm:inline-grid sm:gap-5 sm:justify-end lg:ml-5">
            <p class="mt-2 max-w-lg text-left text-xl text-white lg:text-gray-900 sm:max-w-3xl font-black">
              RIFUNZIONALIZZAZIONE
            </p>
            <p class="mt-2 max-w-lg text-left text-base text-white lg:text-gray-900 sm:max-w-3xl font-black">
              Progettiamo per dare nuova vita agli edifici.<br>
              <button class="mt-6 mb-2 bg-white opacity-50 hover:bg-blue-700 text-xs text-black font-bold py-1 px-2 rounded-full inline-flex" @click="this.$router.push({ name: 'Project_concorso_rasoparete' })">
                <span class="px-1 py-0.5">Vai al progetto</span>
                <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- LA CURA DEL DETTAGLIO -->

  <div class="relative" id="come_progettiamo">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden">

        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="img/loragiusta/foto-2-scaled.jpg" alt="la cura del dettaglio" />
          <div class="absolute inset-0" />
        </div>

        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8">
          <div class="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-end">
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-60 sm:gap-5">
            </div>
          </div>
          <div class=" shadow px-2 rounded-md sm:space-y-0 sm:inline-grid sm:gap-5 sm:justify-end lg:ml-5">
            <p class="mt-2 max-w-lg text-left text-xl text-white sm:max-w-3xl">
              LA CURA DEL DETTAGLIO
            </p>
            <p class="mt-2 max-w-lg text-left text-base text-white sm:max-w-3xl">
              Disegniamo arredi personalizzati studiando ogni particolare.<br>
              <button class="mt-6 mb-2 bg-white opacity-50 hover:bg-blue-700 text-xs text-black font-bold py-1 px-2 rounded-full inline-flex" @click="this.$router.push({ name: 'Project_casa_rivoli' })">
                <span class="px-1 py-0.5">Vai al progetto</span>
                <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
              </button>
            </p>
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
          <img class="h-full w-full object-cover" src="img/PRO_7721-crop.jpg" alt="la cura del dettaglio" />
          <div class="absolute inset-0" />
        </div>

        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-60 lg:px-8">
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-end">
            <div class="space-y-4 sm:space-y-0 sm:inline-grid py-60 sm:gap-5">
            </div>
          </div>
          <div class="px-2 rounded-md sm:space-y-0 sm:inline-grid sm:gap-5 sm:justify-end lg:ml-5">
            <p class="mt-2 max-w-lg text-left text-xl text-white sm:max-w-3xl font-black">
              IL PROGETTO DEGLI SPAZI
            </p>
            <p class="mt-2 max-w-lg text-left text-base text-white sm:max-w-3xl font-black">
              Progettiamo coniugando estetica ed esigenze del cliente.<br>
              <button class="mt-6 mb-2 bg-white opacity-50 hover:bg-blue-700 text-xs text-black font-bold py-1 px-2 rounded-full inline-flex" @click="this.$router.push({ name: 'Project_casa_rivoli' })">
                <span class="px-1 py-0.5">Vai al progetto</span>
                <ChevronRightIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Team test -->



  <div class="bg-gray-900 bg-gradient-to-t from-white">
    <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 mx-auto text-center">
          <h2 class=" text-xl mx auto text-center text-white tracking-tight" id="profilo">CHI SIAMO</h2>
          <p class="text-base  text-gray-300">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
        </div>
        <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-24">
          <li v-for="person in team" :key="person.name" class="py-10 px-6 bg-gray-800 text-center xl:px-10 xl:text-left">
            <div class="space-y-6 xl:space-y-10">
              <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" :src="person.imageSrc" :alt="person.imageAlt" />
              <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h2 class="max-w-lg text-xl text-white sm:max-w-3xl">{{ person.name }}</h2>
                  <p class="text-indigo-400 pb-10">{{ person.role }}</p>
                  <p class=" max-w-lg text-base text-white sm:max-w-3xl pr-2  lg:border-r text-left">
                    {{ person.description }}
                  </p>
                </div>

                <ul role="list" class="flex justify-center space-x-5 pl-2 mt-4">
                  <li>
                    <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-300">
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



<!--  &lt;!&ndash; Team Section &ndash;&gt;-->

<!--  <div class="bg-white end">-->
<!--    <div class=" mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">-->
<!--      <div class="space-y-4 sm:space-y-12">-->
<!--        <h2 class="max-w-lg text-xl text-grey-500 sm:max-w-3xl mx-auto" id="profilo">CHI SIAMO</h2>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


<!--  <div class=" relative bg-white overflow-hidden  ">-->

<!--  &lt;!&ndash;    Claudio&ndash;&gt;-->

<!--    <div class="relative lg:pb-16 pb-7 max-w-full">-->
<!--      <div class="lg:absolute lg:left-0 lg:h-full lg:w-1/2 pb-10" >-->
<!--        <img class="w-full h-full object-cover lg:hidden" src="img/2013-07-16-B-N-low.jpg" alt="Fava Claudio foto" />-->
<!--      </div>-->
<!--      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">-->
<!--        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:rounded-lg md:rounded-lg rounded-none">-->
<!--          <div class="p-4">-->
<!--            <div class="mt-6">-->
<!--              <h2 class="max-w-lg text-xl text-grey-500 sm:max-w-3xl mb-10">-->
<!--                CLAUDIO FAVA-->
<!--              </h2>-->
<!--              <p class="max-w-lg text-base text-grey-500 sm:max-w-3xl">-->
<!--                Nasce a Torino nel 1984. Si laurea presso la Facoltà di Architettura del Politecnico di Torino. Dopo un’esperienza presso lo studio milanese Claudio Bellini Design+Design, collabora con numerosi studi di architettura torinesi. Fra i suoi lavori, la ristrutturazione della Centrale Operativa di Telecontrol, importante istituto di vigilanza e la ristrutturazione di una casa privata a Rivoli (To). Si occupa di architettura residenziale, uffici e spazi commerciali, dal progetto preliminare fino alla fase esecutiva e direzione lavori.-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="mt-12 sm:mt-16 lg:mt-0">-->
<!--          <div class="md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full bg-none">-->
<!--            <img class="hidden lg:block lg:full lg:h-full h-4/6 mx-auto object-cover" src="img/2013-07-16-B-N_low-2.jpg" alt="Claudio Fava Foto" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash;     Giorgio&ndash;&gt;-->
<!--    <div>-->
<!--      <div class="relative">-->
<!--        <div class="relative bg-white">-->
<!--          <div class="lg:absolute lg:ml-28 lg:h-full lg:w-1/2 pb-10">-->
<!--            <img class="h-full lg:w-3/5 lg:h-2/3 object-cover lg:h-full mx-auto" src="img/IMG-20170906-WA0003_cut2-1.jpeg" alt="Giorgio Fava foto" />-->
<!--          </div>-->
<!--          <div class="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-28">-->
<!--            <div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">-->
<!--              <div class="mt-6">-->
<!--                <h2 class="max-w-lg text-xl text-grey-500 sm:max-w-3xl mb-10">-->
<!--                  GIORGIO FAVA-->
<!--                </h2>-->
<!--                <p class="max-w-lg text-base text-grey-500 sm:max-w-3xl">-->
<!--                  Laureato presso la Facoltà di Architettura del Politecnico di Torino, sperimenta esperienze lavorative diverse in ambito teatrale ed artistico presso Teatro Regio di Torino, Steve McCurry Studio di New York, MOdenArte Gallery di Boca Raton, Florida. Dal 2007 lavora in pianta stabile presso Cantieri Navali Sanlorenzo prima come architetto di commessa e dal 2014 come Project Manager per il design di interni di motor yachts dai 30 ai 40 metri.-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <!--  Carousel section-->

  <div class="bg-white">
    <div class=" mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
      <div class="space-y-4 sm:space-y-12">
        <h2 class="max-w-lg text-xl text-grey-500 sm:max-w-3xl mx-auto" id="gallery">GALLERY</h2>
      </div>
    </div>
  </div>

  <div class="bg-white relative overflow-hidden">
    <div class="gallery-wrap" style="background-image: url('img/carousel/4-200x100.jpg');">
      <div class="item" style="background-image: url('img/loragiusta/foto-3-scaled.jpg');"></div>
      <div class="item" style="background-image: url('img/loragiusta/foto-2-scaled.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7711.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7701.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7943.jpg');"></div>
      <div class="item" style="background-image: url('img/PRO_7906.jpg');"></div>
    </div>
  </div>


  <!-- Projects Section -->

  <Projects></Projects>

</template>

<script>

import Projects from "../components/Projects";
import { ChevronRightIcon } from '@heroicons/vue/solid'
import { gsap } from 'gsap';

const team = [
  {
    name: 'Claudio Fava',
    role: 'Architetto',
    imageSrc:
        'img/2013-07-16-B-N-low.jpg',
    imageAlt:"Claudio Fava Foto",
    description:"Nasce a Torino nel 1984. Si laurea presso la Facoltà di Architettura del Politecnico di Torino. Dopo un’esperienza presso lo studio milanese Claudio Bellini Design+Design, collabora con numerosi studi di architettura torinesi. Fra i suoi lavori, la ristrutturazione della Centrale Operativa di Telecontrol, importante istituto di vigilanza e la ristrutturazione di una casa privata a Rivoli (To). Si occupa di architettura residenziale, uffici e spazi commerciali, dal progetto preliminare fino alla fase esecutiva e direzione lavori.",
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

const products = [
  {
    id: 1,
    name: 'Sala Congressi Telecontrol',
    href: '/Project_sala_congressi_telecontrol',
    imageSrc: 'img/vista-01.jpg',
    imageAlt: "Sala Congressi Telecontrol.",
  },
  {
    id: 2,
    name: 'Casa Nel Parco',
    href: '/Project_casa_nel_parco',
    imageSrc: 'img/vista-esterna-02_crop.jpg',
    imageAlt: "Casa Nel Parco.",
  },
  {
    id: 3,
    name: 'Casa Rivoli',
    href: '/Project_casa_rivoli',
    imageSrc: 'img/PRO_7711.jpg',
    imageAlt: "Casa Rivoli.",
  },
  {
    id: 4,
    name: 'Centrale Operativa Telecontrol',
    href: '/Project_centrale_operativa_telecontrol',
    imageSrc: 'img/PRO_7906.jpg',
    imageAlt: "Centrale Operativa Telecontrol.",
  },
  {
    id: 5,
    name: 'Casa R',
    href: '/Project_casa_R',
    imageSrc: 'img/vista-02-versione-A.jpg',
    imageAlt: "Casa R.",
  },
  {
    id: 6,
    name: 'Camera Dei Bimbi',
    href: '/Project_camera_bimbi',
    imageSrc: 'img/vista-03_crop.jpg',
    imageAlt: "Camera Dei Bimbi.",
  },
  {
    id: 7,
    name: 'Concorso Rasoparete',
    href: '/Project_concorso_rasoparete',
    imageSrc: 'img/rasoparete/vista-03-1-scaled.jpg',
    imageAlt: "Concorso Rasoparete.",
  },
  {
    id: 8,
    name: "L'/oragiusta Moncalieri",
    href: '/Project_oragiusta_moncalieri',
    imageSrc: 'img/loragiusta/foto-1-scaled.jpg',
    imageAlt: "L'/oragiusta Moncalieri.",
  },
  {
    id: 9,
    name: 'Villa Perrault',
    href: '/Project_villa_perrault',
    imageSrc: 'img/villaperrault/vista-02-scaled.jpg',
    imageAlt: "Villa Perrault.",
  },
]

export default {


  components: {
    ChevronRightIcon,
    Projects,
  },

  setup() {
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
      team
    }
  },
}

</script>





