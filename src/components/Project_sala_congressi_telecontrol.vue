<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          SALA CONGRESSI TELECONTROL
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          2016 - Rivoli
        </h3>

        <!-- Image gallery -->

        <div class=" lg:mt-0 lg:col-start-1 lg:col-span-8 lg:mr-32 lg:row-start-1 lg:row-span-3">

            <div class="w-100 grid grid-cols-1 lg:grid-cols-1 lg:gap-8 mt-3">
              <div v-for="image in product.images" :key="image.id">
                <p class="max-w-lg text-sm text-grey-500 sm:max-w-3xl mt-2 inline-flex items-center uppercase text-black p-1 pr-2 sm:text-xs lg:text-sm xl:text-base">
                  {{ image.status }}
                </p>
                <a
                    :href="image.imageSrc"
                    data-fancybox="gallery-project"
                    :data-caption="image.imageAlt"
                >
                <img :src="image.imageSrc" :alt="image.imageAlt" :class="[image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block', 'w-full mt-3 hover:opacity-75']" />
                </a>
              </div>
            </div>

        </div>

        <div class="mt-8 lg:col-span-3">
          <!-- Product details -->

          <h1 class="text-xl font-medium text-gray-900 text-left hidden lg:block">
            SALA CONGRESSI TELECONTROL
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            2016 - Rivoli
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

const product = {
  name: 'NUOVA SALA CONGRESSI TELECONTROL',
  href: '#',
  images: [
    {
      id: 1,
      imageSrc: 'img/vista-01.jpg',
      imageAlt: "NUOVA SALA CONGRESSI TELECONTROL",
      description:"SALA CONGRESSI VISTA 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Sala Congressi',
      imageSrc: 'img/vista-02.jpg',
      imageAlt: "Sala Congressi.",
      description:"SALA CONGRESSI VISTA 2",
      primary: true,
    },

    {
      id: 2,
      name: 'Ingresso',
      imageSrc: 'img/vista-03.jpg',
      imageAlt: "Ingresso.",
      description:"SALA CONGRESSI INGRESSO",
      primary: true,
    },
    {
      id: 4,
      name: 'Esploso',
      imageSrc: 'img/vista-04-assometria.jpg',
      imageAlt: "Esploso.",
      description:"SALA CONGRESSI ESPLOSO",
      primary: true,
    },
    {
      id: 5,
      name: 'Planimetria',
      imageSrc: 'img/pianta-piano-terreno.jpg',
      imageAlt: "Planimetria.",
      description:"SALA CONGRESSI PLANIMETRIA",
      primary: true,
    },
    {
      id: 6,
      name: 'Stato di fatto',
      imageSrc: 'img/20170415_173308-BN-1.jpg',
      imageAlt: "Stato di fatto.",
      description:"STATO DI FATTO",
      primary: true,
      status:"STATO DI FATTO"
    },
  ],

  description: `
    <p>L’intervento prevede la rifunzionalizzazione del locale autorimessa dell’azienda Telecontrol Spa a Rivoli (To) con l’obbiettivo di trasformarlo in una nuova Sala Congressi per complessivi 400 mq compresi di un soppalco.
Il progetto prevede di creare uno spazio polifunzionale per soddisfare le esigenze del cliente che richiedeva la massima flessibilità nelle possibili funzioni di tale spazio. Le principali destinazioni d’uso dello spazio sono state così individuate: area lounge, area break, area supporto per allestimenti catering, spazio per riunioni e convention, sala per feste e presentazioni, locale deposito / guardaroba.
Scatolari metallici sospesi sostengono i corpi illuminanti e si ancorano ai pilastri esistenti creando una rete che delimita idealmente le varie aree. Pareti in legno a soffietto possono essere tenute aperte o chiuse a seconda dell’attività che si sta svolgendo.</p>`,

  info:[
    {name: 'Luogo', info:'Rivoli (TO)'},
    {name:'Stato', info:'Progetto preliminare / Progetto esecutivo'},
    {name:'Cliente', info:'Telecontrol Spa'},
    {name:'Team di progettazione', info:'Claudio Fava, Giorgio Fava'},
  ]

}

export default {

  setup() {
    return {
      product,
    }
  },
}
</script>
