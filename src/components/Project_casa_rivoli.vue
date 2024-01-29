<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          CASA RIVOLI
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivoli (TO) - 2016
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
            CASA RIVOLI
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Rivoli (TO) - 2016
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
  name: 'CASA RIVOLI',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Casa Rivoli vista interna 1',
      imageSrc: 'img/PRO_7700.jpg',
      imageAlt: "Casa Rivoli vista interna 1",
      description:"Casa Rivoli vista interna 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Casa Rivoli vista interna 2',
      imageSrc: 'img/PRO_7728.jpg',
      imageAlt: "Casa Rivoli vista interna 2",
      description:"Casa Rivoli vista interna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Casa Rivoli vista interna 3',
      imageSrc: 'img/PRO_7764.jpg',
      imageAlt: "Casa Rivoli vista interna 3",
      description:"Casa Rivoli vista interna 3",
      primary: true,
    },
    {
      id: 4,
      name: 'Casa Rivoli vista interna 4',
      imageSrc: 'img/PRO_7774.jpg',
      imageAlt: "Casa Rivoli vista interna 4",
      description:"Casa Rivoli vista interna 4",
      primary: true,
    },
    {
      id: 5,
      name: 'Casa Rivoli vista interna 5',
      imageSrc: 'img/PRO_7701.jpg',
      imageAlt: "Casa Rivoli vista interna 5",
      description:"Casa Rivoli vista interna 5",
      primary: true,
    },
    {
      id: 6,
      name: 'Casa Rivoli vista interna 6',
      imageSrc: 'img/PRO_7711.jpg',
      imageAlt: "Casa Rivoli vista interna 6",
      description:"Casa Rivoli vista interna 6",
      primary: true,
    },
    {
      id: 7,
      name: 'Casa Rivoli vista interna 7',
      imageSrc: 'img/PRO_7721.jpg',
      imageAlt: "Casa Rivoli vista interna 7",
      description:"Casa Rivoli vista interna 7",
      primary: true,
    },
    {
      id: 8,
      name: 'Casa Rivoli vista interna 8',
      imageSrc: 'img/PRO_7722.jpg',
      imageAlt: "Casa Rivoli vista interna 8",
      description:"Casa Rivoli vista interna 8",
      primary: true,
    },
    {
      id: 9,
      name: 'Casa Rivoli vista interna 9',
      imageSrc: 'img/PRO_7805.jpg',
      imageAlt: "Casa Rivoli vista interna 9",
      description:"Casa Rivoli vista interna 9",
      primary: true,
    },
    {
      id: 10,
      name: 'Casa Rivoli vista interna 10',
      imageSrc: 'img/PRO_7840.jpg',
      imageAlt: "Casa Rivoli vista interna 10",
      description:"Casa Rivoli vista interna 10",
      primary: true,
    },
    {
      id: 11,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/PRO_7860-.jpg',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
  ],

  description: `
    <p>Il progetto di ristrutturazione di questa casa a Rivoli, in provincia di Torino, è caratterizzato da un contrasto bianco e legno che diventa il segno di continuità degli ambienti. Il parquet in rovere sbiancato è presente in tutti gli ambienti, tranne nei bagni dove l’utilizzo di ceramiche e marmi connotano questi ambienti con freschezza e luminosità.
Il disegno di mobili su misura dona un nuovo linguaggio alla casa, che viene arricchita da una seguenza di librerie incassate, boiserie in legno e una scala a sbalzo.
Il camino diventa il fulcro del soggiorno e lo divide idealmente in due spazi comunicanti.
Lo spazio verso l’ingresso principale è corredato da comode poltrone per favorire la conversazione e la lettura, mentre la zona verso il giardino è caratterizzata da divani e sedute lounge per favorire il relax.
Una parete in rovere con porta a doppia anta scorrevole mette in comunicazione il soggiorno con la cucina, dove il contrasto tra bianco e legno è accentuato ulteriormente. L’isola centrale con piano di lavoro in marmo di carrara sostiene il piano in massello di abete grigio, orientato per poter ammirare il giardino esterno.
La scala a sbalzo oltre a connettere il piano terreno con la zona notte posizionata al piano primo, diventa un oggetto di arredo con integrato il mobile tv in rovere.</p>`,

  info:[
    {name: 'Luogo', info:'Rivoli (TO)'},
    {name:'Stato', info:'Realizzato'},
    {name:'Cliente', info:'Privato'},
    {name:'Team di progettazione', info:'Claudio Fava, Giorgio Fava'},
    {name:'Foto', info:'Paolo Properzi'}
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
