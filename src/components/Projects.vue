<template>
  <div class="bg-white pb-5 enter" id="progetti">
    <div class="mx-auto py-10 px-4 sm:py-10 sm:px-6 lg:px-8">

      <div class="mx-auto py-3 px-4 text-center sm:px-6 lg:px-8 lg:py-3">
        <h2 class="max-w-lg text-xl text-grey-500 sm:max-w-3xl mx-auto">PROGETTI</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-10 sm:gap-y-12 lg:gap-x-24">
        <div v-for="product in products" :key="product.id" class="group relative">
          <a :href="product.href">
            <div class="h-full h-96 overflow-hidden group-hover:opacity-75">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />
            </div>
          </a>
          <p class="max-w-lg text-sm text-grey-500 sm:max-w-3xl">
            <a :href="product.href" class=" mb-2 inline-flex items-center uppercase text-black rounded-full p-1 pr-2 sm:text-xs lg:text-sm xl:text-base hover:text-gray-500">
              <span class="absolute inset-0" />
              {{ product.name }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const products = [

  {
    id: 1,
    name: 'Concorso Rasoparete',
    href: '/Project_concorso_rasoparete',
    imageSrc: 'img/rasoparete/vista-02-1-scaled.jpg',
    imageAlt: "Concorso Rasoparete.",
  },
  {
    id: 2,
    name: "L'oragiusta Moncalieri",
    href: '/Project_oragiusta_moncalieri',
    imageSrc: 'img/loragiusta/foto-1-scaled.jpg',
    imageAlt: "L'oragiusta Moncalieri.",
  },
  {
    id: 3,
    name: 'Sala Congressi Telecontrol',
    href: '/Project_sala_congressi_telecontrol',
    imageSrc: 'img/vista-01.jpg',
    imageAlt: "Sala Congressi Telecontrol.",
  },
  {
    id: 4,
    name: 'Casa Nel Parco',
    href: '/Project_casa_nel_parco',
    imageSrc: 'img/vista-esterna-02_crop.jpg',
    imageAlt: "Casa Nel Parco.",
  },
  {
    id: 5,
    name: 'Villa Perrault',
    href: '/Project_villa_perrault',
    imageSrc: 'img/villaperrault/vista-02-scaled.jpg',
    imageAlt: "Villa Perrault.",
  },
  {
    id: 6,
    name: 'Casa Rivoli',
    href: '/Project_casa_rivoli',
    imageSrc: 'img/PRO_7711.jpg',
    imageAlt: "Casa Rivoli.",
  },
  {
    id: 7,
    name: 'Centrale Operativa Telecontrol',
    href: '/Project_centrale_operativa_telecontrol',
    imageSrc: 'img/PRO_7906.jpg',
    imageAlt: "Centrale Operativa Telecontrol.",
  },
  {
    id: 8,
    name: 'Casa R',
    href: '/Project_casa_R',
    imageSrc: 'img/vista-02-versione-A.jpg',
    imageAlt: "Casa R.",
  },
  {
    id: 9,
    name: 'Camera Dei Bimbi',
    href: '/Project_camera_bimbi',
    imageSrc: 'img/vista-03_crop.jpg',
    imageAlt: "Camera Dei Bimbi.",
  },
]

export default {

  setup(){
    return{
      products
    }

  }
}

</script>