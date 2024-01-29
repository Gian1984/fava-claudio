<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          CASA NEL PARCO
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivalta di Torino (TO) - 2016
        </h3>

        <!-- Image gallery -->

        <div class=" lg:mt-0 lg:col-start-1 lg:col-span-8 lg:mr-32 lg:row-start-1 lg:row-span-3">

            <div class="w-100 grid grid-cols-1 lg:grid-cols-1 lg:gap-8 mt-3">
              <div v-for="image in product.images" :key="image.id">
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
            CASA NEL PARCO
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Rivalta di Torino (TO) - 2012
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
  name: 'CASA NEL PARCO',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Casa nel Parco vista  1',
      imageSrc: 'img/vista-esterna-01.jpg',
      imageAlt: "Casa nel parco vista esterna 1",
      description:"Casa nel parco vista esterna 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Casa nel parco vista esterna 2',
      imageSrc: 'img/vista-esterna-02.jpg',
      imageAlt: "Casa nel parco vista esterna 2",
      description:"Casa nel parco vista esterna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Casa nel parco vista interna 1',
      imageSrc: 'img/vista-interna-01.jpg',
      imageAlt: "Casa nel parco vista interna 1",
      description:"Casa nel parco vista interna 1",
      primary: true,
    },
    {
      id: 4,
      name: 'Casa nel parco vista interna 2',
      imageSrc: 'img/vista-interna-04-.jpg',
      imageAlt: "Casa nel parco vista interna 2",
      description:"Casa nel parco vista interna 2",
      primary: true,
    },
    {
      id: 5,
      name: 'Casa nel parco vista interna 3',
      imageSrc: 'img/vista-interna-02.jpg',
      imageAlt: "Casa nel parco vista interna 3",
      description:"Casa nel parco vista interna 3",
      primary: true,
    },
    {
      id: 6,
      name: 'Casa nel parco vista esploso',
      imageSrc: 'img/vista-esploso-04.jpg',
      imageAlt: "Casa nel parco vista esploso",
      description:"Casa nel parco vista esploso",
      primary: true,
    },
    {
      id: 7,
      name: 'Casa nel parco planimetria piano terra',
      imageSrc: 'img/PIANO-TERRA.jpg',
      imageAlt: "Casa nel parco planimetria piano terra",
      description:"Casa nel parco planimetria piano terra",
      primary: true,
    },
    {
      id: 8,
      name: 'Casa nel parco planimetria primo piano',
      imageSrc: 'img/PIANO-PRIMO-_-CON-VUOTO-PICCOLO.jpg',
      imageAlt: "Casa nel parco planimetria primo piano",
      description:"Casa nel parco planimetria primo piano",
      primary: true,
    },
    {
      id: 9,
      name: 'Casa nel parco stato di fatto',
      imageSrc: 'img/stato-di-fatto.jpg',
      imageAlt: "Casa nel parco stato di fatto",
      description:"Casa nel parco stato di fatto",
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
    {name:'Team di progettazione', info:'Claudio Fava, Stefano Carera, Eirini Giannakopoulou'},
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
