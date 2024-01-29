<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          CENTRALE OPERATIVA TELECONTROL
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivoli (TO) - 2014
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
            CENTRALE OPERATIVA TELECONTROL
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Rivoli (TO) - 2014
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
  name: 'CENTRALE OPERATIVA TELECONTROL',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Centrale operativa vista interna 1',
      imageSrc: 'img/PRO_7906.jpg',
      imageAlt: "Centrale operativa vista interna 1",
      description:"Centrale operativa vista interna 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Centrale operativa vista interna 2',
      imageSrc: 'img/PRO_7912.jpg',
      imageAlt: "Centrale operativa vista interna 2",
      description:"Centrale operativa vista interna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Centrale operativa vista interna 3',
      imageSrc: 'img/PRO_7943.jpg',
      imageAlt: "Centrale operativa vista interna 3",
      description:"Centrale operativa vista interna 3",
      primary: true,
    },
    {
      id: 4,
      name: 'Centrale operativa vista interna 4',
      imageSrc: 'img/PRO_7933.jpg',
      imageAlt: "Centrale operativa vista interna 4",
      description:"Centrale operativa vista interna 4",
      primary: true,
    },
    {
      id: 5,
      name: 'Centrale operativa vista interna 5',
      imageSrc: 'img/PRO_7942.jpg',
      imageAlt: "Centrale operativa vista interna 5",
      description:"Centrale operativa vista interna 5",
      primary: true,
    },
    {
      id: 6,
      name: 'Centrale operativa vista interna 6',
      imageSrc: 'img/PRO_7948.jpg',
      imageAlt: "Centrale operativa vista interna 6",
      description:"Centrale operativa vista interna 6",
      primary: true,
    },
    {
      id: 7,
      name: 'Spaccato assonometrico',
      imageSrc: 'img/spaccato-assonometrico.jpg',
      imageAlt: "Spaccato assonometrico",
      description:"Spaccato assonometrico",
      primary: true,
    },
    {
      id: 8,
      name: 'Tavola progetto',
      imageSrc: 'img/2017-01-09_Progetto-Centrale-operativa-Tav-A1.jpg',
      imageAlt: "Tavola progetto",
      description:"Tavola progetto",
      primary: true,
    },
    {
      id: 9,
      name: 'Stato di fatto',
      imageSrc: 'img/20170415_173308-BN-copy.jpg',
      imageAlt: "Stato di fatto",
      description:"Stato di fatto",
      primary: true,
    },

  ],

  description:
      `<p>
           Il progetto di ristrutturazione della CENTRALE OPERATIVA TELECONTROL è pensato per creare uno spazio di lavoro di alta rappresentanza per
           un'azienda leader nel campo della sicurezza e della vigilanza.<br><br>
           Gli ambienti sono eleganti ed essenziali, all’insegna della funzionalità e dell’accoglienza.<br><br>
           Lo spazio si sviluppa orizzontalmente ed è scandito da uffici e sale riunioni, disposti sulle fasce esterne per sfruttare l’abbondante illuminazione naturale.
           Si configurano così uffici luminosi e permeabili, caratterizzati da vetrate e lamiere forate a tutta altezza.
           Differenti colori per la pavimentazione indicano la separazione ideale tra il percorso distributivo e gli spazi lavorativi.<br><br>
           Il progetto consente ai visitatori di poter osservare “il cuore pulsante" dell’azienda, senza tuttavia disturbare l’attività lavorativa dei dipendenti.
       </p>`,

  info:[
    {name: 'Luogo', info:'Rivoli (TO)'},
    {name:'Stato', info:'Realizzato'},
    {name:'Cliente', info:'Telecontrol Spa'},
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

