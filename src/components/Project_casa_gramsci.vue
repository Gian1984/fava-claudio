<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          CASA GRAMSCI
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Condove (TO) - 2022
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
            CASA GRAMSCI
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Condove (TO) - 2022
          </h2>

          <div class="mt-10">
            <h2 class="text-lg font-medium text-gray-900 mt-10">Descrizione</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">La boiserie a nastro</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description1" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">Rovere "nordico"</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description2" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">Pura versatilità</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description3" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">Bagno con layout a zone</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description4" />
            <h2 class="text-lg font-medium text-gray-900 mt-10">Complice la luce</h2>
            <div class="mt-4 prose prose-sm text-gray-500" v-html="product.description5" />
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
  name: 'CASA GRAMSCI',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Casa Gramsci vista interna 1',
      imageSrc: 'img/casagramsci/01.webp',
      imageAlt: "Casa Gramsci vista interna 1",
      description:"Casa Gramsci vista interna 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Casa Gramsci vista interna 2',
      imageSrc: 'img/casagramsci/02.webp',
      imageAlt: "Casa Gramsci vista interna 2",
      description:"Casa Gramsci vista interna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Casa Rivoli vista interna 3',
      imageSrc: 'img/casagramsci/09.webp',
      imageAlt: "Casa Rivoli vista interna 3",
      description:"Casa Rivoli vista interna 3",
      primary: true,
    },
    {
      id: 4,
      name: 'Casa Rivoli vista interna 4',
      imageSrc: 'img/casagramsci/10.webp',
      imageAlt: "Casa Rivoli vista interna 4",
      description:"Casa Rivoli vista interna 4",
      primary: true,
    },
    {
      id: 5,
      name: 'Casa Rivoli vista interna 5',
      imageSrc: 'img/casagramsci/11.webp',
      imageAlt: "Casa Rivoli vista interna 5",
      description:"Casa Rivoli vista interna 5",
      primary: true,
    },
    {
      id: 6,
      name: 'Casa Rivoli vista interna 6',
      imageSrc: 'img/casagramsci/12.webp',
      imageAlt: "Casa Rivoli vista interna 6",
      description:"Casa Rivoli vista interna 6",
      primary: true,
    },
    {
      id: 7,
      name: 'Casa Rivoli vista interna 7',
      imageSrc: 'img/casagramsci/13.webp',
      imageAlt: "Casa Rivoli vista interna 7",
      description:"Casa Rivoli vista interna 7",
      primary: true,
    },
    {
      id: 8,
      name: 'Casa Rivoli vista interna 8',
      imageSrc: 'img/casagramsci/14.webp',
      imageAlt: "Casa Rivoli vista interna 8",
      description:"Casa Rivoli vista interna 8",
      primary: true,
    },
    {
      id: 9,
      name: 'Casa Rivoli vista interna 9',
      imageSrc: 'img/casagramsci/15.webp',
      imageAlt: "Casa Rivoli vista interna 9",
      description:"Casa Rivoli vista interna 9",
      primary: true,
    },
    {
      id: 10,
      name: 'Casa Rivoli vista interna 10',
      imageSrc: 'img/casagramsci/16.webp',
      imageAlt: "Casa Rivoli vista interna 10",
      description:"Casa Rivoli vista interna 10",
      primary: true,
    },
    {
      id: 11,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/17.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 12,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/18.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 13,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/19.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 14,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/20.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 15,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/21.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 16,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/22.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 17,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/23.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 18,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/24.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 19,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/25.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
    {
      id: 20,
      name: 'Casa Rivoli vista interna 11',
      imageSrc: 'img/casagramsci/26.webp',
      imageAlt: "Casa Rivoli vista interna 11",
      description:"Casa Rivoli vista interna 11",
      primary: true,
    },
  ],

  description: `
    <p>Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata,
sostenibilità e con un progetto d'interni che lascia in comunicazione gli ambienti. A una zona giorno open - ma con cucina, pranzo e salotto ben definiti dai materiali diversi - e alla camera doppia, si aggiungono un bagno extra confortevole, un invidiabile ripostiglio e una lavanderia con spazio dedicato. Doppio l'ingresso, di cui uno direttamente in cucina.
L'intero volume è modellato con arredi nella maggior parte su misura e materiali naturali.

La planimetria della casa è stata trasformata dalla nuova apertura ricavata nella parete portante tra soggiorno-pranzo e cucina. La doppia putrella in ferro a vista, aggiunta in compensazione, si inserisce
con armonia nel volume dove predominano toni di verde.
La ristrutturazione e il progetto affidano alla forza di materiali naturali come il rovere e il marmo verde Guatemala la caratterizzazione degli interni.
Grande identità anche nella stanza da bagno, grazie alla parete della doccia in gres porcellanato, sempre in verde, ma lucente.
Gran parte degli arredi è su misura. In cucina, un elemento a “elle” si collega visivamente al living grazie alla boiserie a mezza parete che fa da giunto di connessione. A pavimento, porzioni di graniglia e gres effetto parquet segnalano funzioni diverse all’interno dello stesso volume.
</p>`,

  description1: `
    <p>La soluzione che connette la cucina all'adiacente zona pranzo (i due ambienti sono stati resi comunicanti in fase di ristrutturazione) gioca soprattutto sull'effetto visivo di continuità dato dall'impiego dello stesso materiale per l'arredamento di entrambi gli spazi, in questo caso il legno di rovere. Il dialogo tra le due aree del soggiorno open è rafforzato dalla boiserie a mezza parete, che protegge il muro e funge da schienale alle sedute su un lato del tavolo. Prosegue poi estendendosi direttamente alla base a penisola del lavello, fino a
fondersi con i moduli della cucina. È composta da una serie di listelli allineati e fissati a parete.
</p>`,

  description2: `
    <p>Il nuovo layout del soggiorno open è stato personalizzato con arredi su misura, per i quali si è privilegiato il legno di rovere naturale dalla tonalità miele, con contrappunti di nero dati dalle sedute e dalla base a doppia slitta del tavolo. Le ante di basi e pensili, la panca, il piano del tavolo e la pannellatura a parete a mezza altezza che abbraccia la zona pranzo e si innesta nella penisola con il lavello, creano un'insieme armonioso.</p>`,

  description3: `
    <p>Raccolta, ma comoda e godibile a 360°, la zona relax con il divano e, a lato, un tavolino e una lampada da terra di ispirazione nordica. Protetta dall’ingresso, è addossata alla parete dall'ampia finestra (che diffonde luce naturale nel soggiorno) e rivolta verso la zona pranzo, con vista sulla cucina e sullo schermo tv (a sinistra). Un angolo pensato per essere vissuto in modo conviviale o per leggere usufruendo della piena luce.</p>`,

  description4: `
    <p>Il bagno è diviso in tre spazi, e quello con i sanitari è chiuso da un'ulteriore porta, con anta in vetro per far passare la luce naturale. Entrando, si accede all’antibagno centrale, con il lavabo ovale sul mobile in legno completo di ante. A sinistra, l’ampia doccia nella nicchia in muratura.</p>`,

  description5: `
    <p>Elemento forte della stanza da bagno è la doccia in nicchia a filo pavimento, con il rivestimento
a terra che prosegue nel vano in muratura. È stato necessario eseguire un adeguato lavoro di impermeabilizzazione e prevedere uno scarico idoneo (al quale converge l'acqua raccolta attraverso la piletta rettangolare in acciaio inox). Le pareti interne del box sono rivestite in tavelline di gres porcellanato blu mare, dall'effetto marezzato lucido, posate - tocco originale - in verticale.
Per valorizzare al meglio l'intero vano doccia walk-in è stato ritagliato un “pozzo di luce” nel soffitto, che crea un effetto molto suggestivo per chi sta sotto il getto d’acqua e diffonde luminosità nella stanza.
</p>`,

  info:[
    {name: 'Luogo', info:'Condove (TO)'},
    {name:'Stato', info:'Realizzato'},
    {name:'Cliente', info:'Privato'},
    {name:'Team di progettazione', info:'Claudio Fava'},
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
