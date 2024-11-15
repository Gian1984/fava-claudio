<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          FLUSH HOUSE
        </h1>
        <h2 class="text-base text-gray-900 text-center lg:hidden">
          Concorso Rasoparete
        </h2>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          “Lo spazio abitativo del terzo millennio” - 2020
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
            FLUSH HOUSE
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Concorso Rasoparete
          </h2>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            “Lo spazio abitativo del terzo millennio” - 2020
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
  name: 'CONCORSO RASOPARETE',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Concorso Rasoparete vista esterna 1',
      imageSrc: 'img/rasoparete/vista-03-1-scaled.jpg',
      imageAlt: "Concorso Rasoparete vista esterna 1",
      description:"Concorso Rasoparete vista esterna 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Concorso Rasoparete vista esterna 2',
      imageSrc: 'img/rasoparete/vista-02-1-scaled.jpg',
      imageAlt: "Concorso Rasoparete vista esterna 2",
      description:"Concorso Rasoparete vista esterna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Concorso Rasoparete vista esterna 3',
      imageSrc: 'img/rasoparete/vista-01-1-scaled.jpg',
      imageAlt: "Concorso Rasoparete vista esterna 3",
      description:"Concorso Rasoparete vista esterna 3",
      primary: true,
    },
    {
      id: 4,
      name: 'Concorso Rasoparete vista esterna 4',
      imageSrc: 'img/rasoparete/vista-03b-scaled.jpg',
      imageAlt: "Concorso Rasoparete vista esterna 4",
      description:"Concorso Rasoparete vista esterna 4",
      primary: true,
    },
    {
      id: 5,
      name: 'Concorso Rasoparete vista interna 1',
      imageSrc: 'img/rasoparete/vista-04-1-scaled.jpg',
      imageAlt: "Concorso Rasoparete vista interna 1",
      description:"Concorso Rasoparete vista interna 1",
      primary: true,
    },
    {
      id: 6,
      name: 'Concorso Rasoparete vista interna 2',
      imageSrc: 'img/rasoparete/vista-05-1-scaled.jpg',
      imageAlt: "Concorso Rasoparete vista interna 2",
      description:"Concorso Rasoparete vista interna 2",
      primary: true,
    },
    {
      id: 7,
      name: 'Concorso Rasoparete vista interna 3',
      imageSrc: 'img/rasoparete/vista-06-1-scaled.jpg',
      imageAlt: "Concorso Rasoparete vista interna 3",
      description:"Concorso Rasoparete vista interna 3",
      primary: true,
    },
    {
      id: 8,
      name: 'Concorso Rasoparete spaccato',
      imageSrc: 'img/rasoparete/SPACCATO-scaled.jpg',
      imageAlt: "Concorso Rasoparete spaccato",
      description:"Concorso Rasoparete spaccato",
      primary: true,
    },
    {
      id: 9,
      name: 'Concorso Rasoparete pianta piano terreno',
      imageSrc: 'img/rasoparete/pianta-piano-TERRENO-scaled.jpg',
      imageAlt: "Concorso Rasoparete pianta piano terreno",
      description:"Concorso Rasoparete pianta piano terreno",
      primary: true,
    },
    {
      id: 10,
      name: 'Concorso Rasoparete pianta primo piano',
      imageSrc: 'img/rasoparete/pianta-piano-PRIMO-scaled.jpg',
      imageAlt: "Concorso Rasoparete pianta primo piano",
      description:"Concorso Rasoparete pianta primo piano",
      primary: true,
    },
  ],

  description: `
    <p>
    Il progetto della casa-studio FLUSH HOUSE è stato pensato per rispondere alle esigenze del terzo
millennio, un'epoca in cui estetica, funzionalità e ottimizzazione dello spazio sono imprescindibili.<br>

Il progetto si basa su 4 punti fondamentali:<br><br>
1 - SEPARAZIONE DEI FLUSSI<br>
Posizionando la scala all'ingresso, vengono separati i flussi tra fruitori dello studio e gli abitanti
della casa. In questo modo le attività lavorative non interferiscono con gli spazi privati.
La comunicazione tra i piani della casa è garantita da uno spazio a doppia altezza collocato al
centro della pianta.
L'orientamento dell'edificio è ottimizzato posizionando verso sud il living e la cucina, verso sudovest
lo studio, e verso sud-est le camere da letto.<br><br>

2 - ARREDI INTEGRATI<br>
Il progetto è caratterizzato da arredi concepiti come parte integrante dell'ambiente. Librerie, armadi e cassetti rasomuro sfruttano ogni singolo spazio.
In cucina armadi filomuro nascondono al loro interno frigo, forno, microonde e
dispensa, rendendoli invisibili dall'esterno.
I letti delle camere sono progettati per essere strutture in cartongesso diventano sistemi contenitivi.
Il sottoscala ospita caldaia e unità esterna AC che grazie ai pannelli forati rimangono
nascosti dall'esterno garantendo i ricambi d'aria.<br><br>

3 - SPAZIO FLESSIBILE<br>
Lo spazio è organizzato in modo flessibile per poter sfruttare gli ambienti a seconda del momento
della giornata.
Al piano terreno la parete vetrata con cristalli scorrevoli non fa disperdere la luce pur
dividendo living e cucina. In questo modo i due ambienti possono essere ben separati (ad
esempio, mentre si cucina) mentre in altri momenti si può godere di un grande open space.
Nel disimpegno del primo piano un armadio ospita al suo interno lavatrice e
asciugatrice e diventa una lavanderia attrezzata accessibile da un corridoio comune, per sfruttare
meglio l'ambiente.<br><br>

4 - SISTEMI FRANGISOLE<br>
Le facciate esterne presentano grandi aperture vetrate verso il lato sud, est e ovest per godere
dell'apporto dei raggi solari durante il periodo invernale, mentre nel periodo estivo pannelli forati
rasoparete fungono da filtro e proteggono dal surriscaldamento solare.
La particolare foratura dei pannelli e il colore dell'intonaco caratterizzano la facciata in modo unico.
All'interno della casa, la regolazione della luminosità è garantita da tende a rullo incassate a raso soffitto.

    </p>`,

  info:[
    {name:'Team di progettazione', info:'Claudio Fava'},
    {name:'Cliente', info:'Rasoparete'}

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
