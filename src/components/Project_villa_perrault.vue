<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          VILLA PERRAULT
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivoli (TO) - 2018
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
            VILLA PERRAULT
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Rivoli (TO) - 2018
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
  name: 'VILLA PERRAULT',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Villa Perrault vista interna 1',
      imageSrc: 'img/villaperrault/vista-01-scaled.jpg',
      imageAlt: "Villa Perrault vista 1",
      description:"Villa Perrault vista 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Villa Perrault vista interna 2',
      imageSrc: 'img/villaperrault/vista-02-scaled.jpg',
      imageAlt: "Villa Perrault vista interna 2",
      description:"Villa Perrault vista interna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Villa Perrault vista interna 3',
      imageSrc: 'img/villaperrault/vista-03-scaled.jpg',
      imageAlt: "Villa Perrault vista interna 3",
      description:"Villa Perrault vista interna 3",
      primary: true,
    },
    {
      id: 4,
      name: 'Villa Perrault vista interna 4',
      imageSrc: 'img/villaperrault/vista-04-scaled.jpg',
      imageAlt: "Villa Perrault vista interna 4",
      description:"Villa Perrault vista interna 4",
      primary: true,
    },
    {
      id: 5,
      name: 'Villa Perrault vista interna 5',
      imageSrc: 'img/villaperrault/vista-05-scaled.jpg',
      imageAlt: "Villa Perrault vista interna 5",
      description:"Villa Perrault vista interna 5",
      primary: true,
    },
    {
      id: 6,
      name: 'Villa Perrault vista interna 6',
      imageSrc: 'img/villaperrault/vista-06-scaled.jpg',
      imageAlt: "Villa Perrault vista interna 6",
      description:"Villa Perrault vista interna 6",
      primary: true,
    },
    {
      id: 7,
      name: 'Villa Perrault vista interna 7',
      imageSrc: 'img/villaperrault/vista-08-scaled.jpg',
      imageAlt: "Villa Perrault vista interna 7",
      description:"Villa Perrault vista interna 7",
      primary: true,
    },
    {
      id: 8,
      name: 'Villa Perrault vista interna 8',
      imageSrc: 'img/villaperrault/vista-09-scaled.jpg',
      imageAlt: "Villa Perrault vista interna 8",
      description:"Villa Perrault vista interna 8",
      primary: true,
    },
    {
      id: 9,
      name: 'Villa Perrault vista interna 9',
      imageSrc: 'img/villaperrault/vista-10-scaled.jpg',
      imageAlt: "Villa Perrault vista interna 9",
      description:"Villa Perrault vista interna 9",
      primary: true,
    },
    {
      id: 10,
      name: 'Villa Perrault pianta piano terra',
      imageSrc: 'img/villaperrault/pianta-piano-terreno-_1-100-scaled.jpg',
      imageAlt: "Villa Perrault pianta piano terra",
      description:"Villa Perrault pianta piano terra",
      primary: true,
    },
    {
      id: 11,
      name: 'Villa Perrault pianta primo piano',
      imageSrc: 'img/villaperrault/pianta-piano-primo-_1-100-scaled.jpg',
      imageAlt: "Villa Perrault pianta primo piano",
      description:"Villa Perrault pianta primo piano",
      primary: true,
    },
  ],

  description: `
    <p>
    VILLA PERRAULT è una edificio di impianto seicentesco strutturata su due livelli di circa 170 mq ciascuno.<br><br>
    Il progetto d'interni prevede ristrutturazione degli spazi interni rispettando e valorizzando la struttura a muri portanti e soffitti cassettonati.
    In contrasto con il contesto, lo stile dell’intervento è decisamente contemporaneo ma in armonia con il linguaggio architettonico della villa.
    Linee nette e pulite convivono con materiali caldi così come alcuni pezzi di design senza tempo sono accostati a mobili su misura.<br><br>
    L’uso della pavimentazione continua in legno nella classica posa a spina di pesce ha consentito di ottenere una continuità spaziale tra i vari ambienti.<br><br>
    Il soggiorno è un ampio open-space con comode sedute per il relax e la convivialità, magari ammirando il camino orginale dell'epoca.<br><br>
    L’ambiente cucina è concepito come un spazio completamente trasparente, costituito da un’isola centrale utilizzata sia per la cottura che per il breakfast.
    La separazione tra la cucina e la zona pranzo è assicurata da vetrate che all’occorrenza possono essere aperte per mettere in comunicazione i due ambienti.
</p>`,

  info:[
    {name: 'Luogo', info:'Rivoli (TO)'},
    {name:'Stato', info:'Progetto preliminare'},
    {name:'Cliente', info:'Privato'},
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
