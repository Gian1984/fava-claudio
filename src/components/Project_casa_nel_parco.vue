<template>
  <div class="bg-white">

    <main class="pt-20 max-w-2xl mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-7xl lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
        <div class="lg:col-start-8 lg:col-span-5">
          <div class="flex justify-between">
            <h1 class="text-xl font-medium text-gray-900">
              {{ product.name }}
            </h1>
          </div>

        </div>

        <!-- Image gallery -->
        <div class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
          <h2 class="sr-only">Images</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 group-hover:opacity-75">
            <img v-for="image in product.images" :key="image.id" :src="image.imageSrc" :alt="image.imageAlt" :class="[image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block', 'rounded-lg']" />
          </div>

        </div>

        <div class="mt-8 lg:col-span-5">

          <!-- Product details -->
          <div class="mt-10">
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

      <!-- Related products -->
      <section aria-labelledby="related-heading" class="mt-12 sm:mt-12">
        <h2 id="related-heading" class="text-lg font-medium text-gray-900">Related Photos</h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="group relative">
            <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ relatedProduct.name }}
              </h3>
              <img :src="relatedProduct.imageSrc" :alt="relatedProduct.imageAlt" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
            </div>
          </div>
        </div>
      </section>

    </main>

  </div>
</template>

<script>

const product = {
  name: 'CASA NEL PARCO\n',
  href: '#',
  images: [
    {
      id: 1,
      imageSrc: 'img/vista-esterna-01.jpg',
      imageAlt: "Imagine Casa Nel Parco.",
      primary: true,
    },
  ],

  description: `
    <p>Dalla ristrutturazione di un fienile di un piccolo paese in Provicia di Torino, nasce questo progetto dal carattere sospeso tra tradizione e contemporaneità. Un edificio tipicamente agricolo, collocato all’interno di un parco, viene trasformato in una residenza senza stravolgerne la natura.
La volumetria principale, il tetto a falde, le travi in legno e i pilastri in mattoni sono tutti elementi che vengono mantenuti in quanto caratterizzanti il manufatto storico.
Il contatto diretto con il parco viene accentuato attraverso l’apertura di nuove finestrature che garantiscono una maggiore illuminazione degli ambienti interni e una migliore fruizione del verde circostante.
All’interno dell’edificio uno spazio a doppia altezza amplifica la percezione dello spazio e mette in comunicazione la zona giorno al piano terra con la camera da letto posizionata al piano primo.</p>`,

  info:[
    {name: 'Luogo', info:'Rivalta di Torino (TO)'},
    {name:'Stato', info:'Progetto preliminare, studio di fattibilità'},
    {name:'Cliente', info:'Privato'},
    {name:'Team di progettazione', info:'Claudio Fava, Giorgio Fava'},
  ]

}


const relatedProducts = [
  {
    id: 1,
    name: 'Vista Esterna',
    imageSrc: 'img/vista-esterna-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
  },
  {
    id: 2,
    name: 'Salone',
    imageSrc: 'img/vista-interna-01.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
  },
  {
    id: 3,
    name: 'Cucina',
    imageSrc: 'img/vista-interna-04-.jpg',
    imageAlt: "Cucina.",
  },
  {
    id: 4,
    name: 'Camera da letto',
    imageSrc: 'img/vista-interna-02.jpg',
    imageAlt: "Camera da letto.",
  },
  {
    id: 5,
    name: 'Esploso',
    imageSrc: 'img/vista-esploso-04.jpg',
    imageAlt: "Esploso.",
  },
  {
    id: 6,
    name: 'Planimetria piano terra',
    imageSrc: 'img/PIANO-TERRA.jpg',
    imageAlt: "Planimetria piano terra.",
  },
  {
    id: 7,
    name: 'Planimetria primo piano ',
    imageSrc: 'img/PIANO-PRIMO-_-CON-VUOTO-PICCOLO.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
  },
  {
    id: 8,
    name: 'Stato di fatto',
    imageSrc: 'img/stato-di-fatto.jpg',
    imageAlt: "Stato di fatto.",
  },
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