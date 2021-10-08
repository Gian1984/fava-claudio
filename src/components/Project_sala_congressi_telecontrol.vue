<template>
  <div class="bg-white">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <!-- Image gallery -->
        <div class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-8 lg:row-start-1 lg:row-span-3">
          <h2 class="sr-only">Images</h2>

          <div class="w-100 grid grid-cols-1 lg:grid-cols-1 lg:gap-8">
            <img v-for="image in product.images" :key="image.id" :src="image.imageSrc" :alt="image.imageAlt" :class="[image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block', 'w-full rounded-lg']" />
          </div>
        </div>

        <div class="mt-8 lg:col-span-3">

          <!-- Product details -->
          <div class="mt-10">

            <h1 class="text-xl font-medium text-gray-900">
              {{ product.name }}
            </h1>

            <h2 class="text-lg font-medium text-gray-900">Descrizione</h2>

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

const product = {
  name: 'NUOVA SALA CONGRESSI TELECONTROL\n',
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
    },

    {
      id: 2,
      name: 'Ingresso',
      imageSrc: 'img/vista-03.jpg',
      imageAlt: "Ingresso.",
    },
    {
      id: 4,
      name: 'Esploso',
      imageSrc: 'img/vista-04-assometria.jpg',
      imageAlt: "Esploso.",
    },
    {
      id: 5,
      name: 'Planimetria',
      imageSrc: 'img/pianta-piano-terreno.jpg',
      imageAlt: "Planimetria.",
    },
    {
      id: 6,
      name: 'Stato di fatto',
      imageSrc: 'img/20170415_173308-BN-1.jpg',
      imageAlt: "Stato di fatto.",
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

  setup() {
    return {
      relatedProducts,
      product,
    }
  },
}
</script>