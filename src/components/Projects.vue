<template>
  <div class="bg-white pb-5 enter" id="progetti">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-10 sm:px-6 lg:px-12">

      <div class="mx-auto py-3 px-4 text-center sm:px-6 lg:px-8 lg:py-3">
        <h2 class="max-w-lg text-xl text-grey-500 sm:max-w-3xl mx-auto">PROGETTI</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-10 sm:gap-y-12 lg:gap-x-12">
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
        name: 'Flush House',
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

  setup(){
    return{
      products
    }

  }
}

</script>
