<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          PAINT IT BLACK
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Viareggio (LU) - 2023
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
            PAINT IT BLACK
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Viareggio (LU) - 2023
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
  name: 'PAINT IT BLACK',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Paint it black vista interna 1',
      imageSrc: 'img/PaintIt/SantAmbrogio_21bis.webp',
      imageAlt: "Paint it black vista interna 1",
      description:"Paint it black vista interna 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Paint it black vista interna 2',
      imageSrc: 'img/PaintIt/SantAmbrogio_01b.webp',
      imageAlt: "Paint it black vista interna 2",
      description:"Paint it black vista interna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Paint it black vista interna 3',
      imageSrc: 'img/PaintIt/SantAmbrogio_07.webp',
      imageAlt: "Paint it black vista interna 3",
      description:"Paint it black vista interna 3",
      primary: true,
    },
    {
      id: 4,
      name: 'Paint it black vista interna 4',
      imageSrc: 'img/PaintIt/SantAmbrogio_08.webp',
      imageAlt: "Paint it black vista interna 4",
      description:"Paint it black vista interna 4",
      primary: true,
    },
    {
      id: 5,
      name: 'Paint it black vista interna 5',
      imageSrc: 'img/PaintIt/SantAmbrogio_09.webp',
      imageAlt: "Paint it black vista interna 5",
      description:"Paint it black vista interna 5",
      primary: true,
    },
    {
      id: 6,
      name: 'Paint it black vista interna 6',
      imageSrc: 'img/PaintIt/SantAmbrogio_11.webp',
      imageAlt: "Paint it black vista interna 6",
      description:"Paint it black vista interna 6",
      primary: true,
    },
    {
      id: 7,
      name: 'Paint it black vista interna 7',
      imageSrc: 'img/PaintIt/SantAmbrogio_15.webp',
      imageAlt: "Paint it black vista interna 7",
      description:"Paint it black vista interna 7",
      primary: true,
    },
    {
      id: 8,
      name: 'Paint it black vista interna 8',
      imageSrc: 'img/PaintIt/SantAmbrogio_17.webp',
      imageAlt: "Paint it black vista interna 8",
      description:"Paint it black vista interna 8",
      primary: true,
    },
    {
      id: 9,
      name: 'Paint it black vista interna 9',
      imageSrc: 'img/PaintIt/SantAmbrogio_20.webp',
      imageAlt: "Paint it black vista interna 9",
      description:"Paint it black vista interna 9",
      primary: true,
    },
    {
      id: 10,
      name: 'Paint it black vista interna 10',
      imageSrc: 'img/PaintIt/SantAmbrogio_21vert.webp',
      imageAlt: "Paint it black vista interna 10",
      description:"Paint it black vista interna 10",
      primary: true,
    },
    {
      id: 11,
      name: 'Paint it black vista interna 11',
      imageSrc: 'img/PaintIt/SantAmbrogio_22.webp',
      imageAlt: "Paint it black vista interna  11",
      description:"Paint it black vista interna  11",
      primary: true,
    },
    {
      id: 12,
      name: 'Paint it black vista interna 12',
      imageSrc: 'img/PaintIt/SantAmbrogio_23.webp',
      imageAlt: "Paint it black vista interna  12",
      description:"Paint it black vista interna  12",
      primary: true,
    },
    {
      id: 13,
      name: 'Paint it black vista interna 13',
      imageSrc: 'img/PaintIt/SantAmbrogio_24.webp',
      imageAlt: "Paint it black vista interna  13",
      description:"Paint it black vista interna  13",
      primary: true,
    },
    {
      id: 14,
      name: 'Paint it black vista interna 14',
      imageSrc: 'img/PaintIt/SantAmbrogio_25.webp',
      imageAlt: "Paint it black vista interna  14",
      description:"Paint it black vista interna  14",
      primary: true,
    },
    {
      id: 15,
      name: 'Paint it black vista interna 15',
      imageSrc: 'img/PaintIt/SantAmbrogio_27.webp',
      imageAlt: "Paint it black vista interna  15",
      description:"Paint it black vista interna  15",
      primary: true,
    },
    {
      id: 16,
      name: 'Paint it black vista interna 16',
      imageSrc: 'img/PaintIt/SantAmbrogio_30.webp',
      imageAlt: "Paint it black vista interna  16",
      description:"Paint it black vista interna  16",
      primary: true,
    },
    {
      id: 17,
      name: 'Paint it black vista interna 17',
      imageSrc: 'img/PaintIt/SantAmbrogio_32.webp',
      imageAlt: "Paint it black vista interna  17",
      description:"Paint it black vista interna  17",
      primary: true,
    },
    {
      id: 18,
      name: 'Paint it black vista interna 18',
      imageSrc: 'img/PaintIt/SantAmbrogio_36.webp',
      imageAlt: "Paint it black vista interna  18",
      description:"Paint it black vista interna  18",
      primary: true,
    },
    {
      id: 19,
      name: 'Paint it black vista interna 19',
      imageSrc: 'img/PaintIt/SantAmbrogio_38.webp',
      imageAlt: "Paint it black vista interna  19",
      description:"Paint it black vista interna  19",
      primary: true,
    },
    {
      id: 20,
      name: 'Paint it black vista interna 20',
      imageSrc: 'img/PaintIt/SantAmbrogio_39.webp',
      imageAlt: "Paint it black vista interna  20",
      description:"Paint it black vista interna  20",
      primary: true,
    },
    {
      id: 21,
      name: 'Paint it black vista interna 21',
      imageSrc: 'img/PaintIt/SantAmbrogio_42_bis_.webp',
      imageAlt: "Paint it black vista interna  21",
      description:"Paint it black vista interna  21",
      primary: true,
    },
    {
      id: 22,
      name: 'Paint it black assonometrie',
      imageSrc: 'img/PaintIt/230309_Casa Morelli_prog-ASSONOMETRIA.webp',
      imageAlt: "Paint it black assonometrie",
      description:"Paint it black assonometrie",
      primary: true,
    },
    {
      id: 23,
      name: 'Paint it black pianta',
      imageSrc: 'img/PaintIt/230309_Casa Morelli_prog-PIANTA.webp',
      imageAlt: "Paint it black pianta",
      description:"Paint it black pianta",
      primary: true,
    },
    {
      id: 24,
      name: 'Paint it black pianta rilievo',
      imageSrc: 'img/PaintIt/230309_Casa Morelli_prog-PIANTA RILIEVO.webp',
      imageAlt: "Paint it black pianta rilievo",
      description:"Paint it black pianta rilievo",
      primary: true,
    },
    {
      id: 25,
      name: 'Paint it black pianta sovrapposizioni',
      imageSrc: 'img/PaintIt/230309_Casa Morelli_prog-PIANTA SOVRAPPOSIZIONI.webp',
      imageAlt: "Paint it black pianta sovrapposizioni",
      description:"Paint it black pianta sovrapposizioni",
      primary: true,
    },
  ],

  description: `
    <p>In ogni stanza qualcosa di nero. E’ il colore preferito del padrone di casa e si trova in tutta la casa: la cucina, la boiserie del soggiorno, le pareti del bagno, i complementi d’arredo.
A Viareggio un appartamento è stato rinnovato con una soluzione che coniuga funzionalità ed estetica.
Il layout interno è stato modificato, eliminando i tramezzi di una camera, per ottenere una zona giorno aperta.
Nel centro della zona giorno è stata inserita <strong style="color: #000000;">un’isola rivestita in listelli di legno nero</strong> che si prolunga in una boiserie sulla parete.
Nella nicchia di fianco all’ingresso, un blocco nero contiene al suo interno frigo, cantinetta per i vini e la macchina del caffè.
Al fondo della zona giorno un mobile su misura con listelli in rovere nasconde al proprio interno il radiatore.

Anche il bagno ha una forte identità grazie alle pareti in resina nera in contrasto con i sanitari e il pavimento in rovere. Per diffondere luminosità alla stanza è stato ricavato un pozzo di luce nel soffitto, che crea un effetto suggestivo sulla parete rivestita con piastrelle chiare.
</p>
<p style="margin-top: 30px; margin-bottom: 10px"><i>Soggiorno:</i></p>
<ul>
<li><i>- lampada da parete  VITRA. Petite Potence;<i></li>
<li><i>- divano Chateau d’Ax, Avenue;<i></li>
<li><i>- cuscino decorativo FERM LIVING, Mirage leaf;</li>
<li><i>- Sedie Maison Du Monde, Mira;</li>
<li><i>- Faretti Wever & Ducre, Ray mini 1.0;</li>
<li><i>- Tavolino Maison Du Monde, Elione;</li>
<li><i>- Tavolino Maison Du Monde, Garry;</li>
<li><i>- tende a rullo MOTTURA;</li>
</ul>
<p style="margin-top: 30px; margin-bottom: 10px"><i>Bagno:</i></p>
<ul>
<li><i>- Rubinetteria CRISTINA; <i></li>
<li><i>- Lavabo FLAMINIA;<i></li>
</ul>
<p style="margin-top: 30px; margin-bottom: 10px"><i>Camera da letto:</i></p>
<ul>
<li><i>- lampada da tavolo HAY, Turn on; <i></li>
<li><i>- Parure da letto e comodini MAISON DU MONDE.<i></li>
</ul>
`,

  info:[
    {name: 'Luogo', info:'Viareggio (LU)'},
    {name:'Stato', info:'Realizzato'},
    {name:'Tipologia', info:'Residenza privata'},
    {name:'Superficie', info:'50 mq'},
    {name:'Team di progettazione', info:'Claudio Fava, Giorgio Fava'},
    {name:'Foto', info:'Francesca Cirilli (IG: @fran.cirilli)'}
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
