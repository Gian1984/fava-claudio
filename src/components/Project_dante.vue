<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          DANTE
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Torino (TO) - 2023
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
            DANTE
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Torino (TO) - 2023
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
  name: 'PROGETTO DANTE',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Progetto Dante vista 1',
      imageSrc: 'img/dante/PR_R0550 copy-min.webp',
      imageAlt: "Progetto Dante vista 1",
      description:"Progetto Dante vista 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Progetto Dante vista 2',
      imageSrc: 'img/dante/PR_R0609-HDR-min.webp',
      imageAlt: "Progetto Dante vista 2",
      description:"Progetto Dante vista 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Progetto Dante vista 3',
      imageSrc: 'img/dante/PR_R0646-min.webp',
      imageAlt: "Progetto Dante vista 3",
      description:"Progetto Dante vista 3",
      primary: true,
    },
    {
      id: 4,
      name: 'Progetto Dante vista 4',
      imageSrc: 'img/dante/PR_R0656-min.webp',
      imageAlt: "Progetto Dante vista 4",
      description:"Progetto Dante vista 4",
      primary: true,
    },
    {
      id: 5,
      name: 'Progetto Dante vista 5',
      imageSrc: 'img/dante/PR_R0667-min.webp',
      imageAlt: "Progetto Dante vista 5",
      description:"Progetto Dante vista 5",
      primary: true,
    },
    {
      id: 6,
      name: 'Progetto Dante vista 6',
      imageSrc: 'img/dante/PR_R0683-min.webp',
      imageAlt: "Progetto Dante vista 6",
      description:"Progetto Dante vista 6",
      primary: true,
    },
    {
      id: 7,
      name: 'Progetto Dante vista 7',
      imageSrc: 'img/dante/PR_R0701-min.webp',
      imageAlt: "Progetto Dante vista 7",
      description:"Progetto Dante vista 7",
      primary: true,
    },
    {
      id: 8,
      name: 'Progetto Dante Pianta',
      imageSrc: 'img/dante/PIANTA.webp',
      imageAlt: "Progetto Dante Pianta",
      description:"Progetto Dante Pianta",
      primary: true,
    },
    {
      id: 9,
      name: 'Progetto Dante Prospettiva',
      imageSrc: 'img/dante/prospettiva.webp',
      imageAlt: "Concorso Rasoparete pianta piano terreno",
      description:"Concorso Rasoparete pianta piano terreno",
      primary: true,
    },
  ],

  description: `
    <p>
    <strong>Un unico contenitore con TV, stereo e cucina, senza soluzione di continuità.</strong><br><br>

    La richiesta del cliente era di progettare un mobile che potesse contenere TV e collezione di vinili, valutando la possibilità di eliminare il tramezzo che divideva la cucina dal soggiorno.<br>


L’appartamento è stato rinnovato con un intervento mirato e al tempo stesso rispettoso dell’esistente. Sono stati conservati elementi introdotti in precedenti ristrutturazioni, come gli impianti, i controsoffitti e il parquet.
Mentre le componenti di novità sono costituite dai rivestimenti in gres della cucina e dagli arredi su misura.<br><br>


Per connettere cucina e soggiorno, è stato eliminato il tramezzo di divisione ed è stato progettato un grande blocco multifunzione che al proprio
interno ha la cucina, frigo, mobile tv, stereo, e scaffali per i vinili.<br><br>

Si è giocato sull’effetto visivo di continuità grazie alle linee continue e all’impiego dello stesso materiale per entrambi
gli spazi, in questo caso il laminato Fenix grigio bromo.<br><br>

La parte in sfondato in legno ALPIWOOD Sienna Cherry dona un’atmosfera calda e accogliente. <br><br>

    </p>`,

  info:[
    {name: 'Luogo', info:'Torino (TO)'},
    {name:'Stato', info:'Realizzato'},
    {name:'Cliente', info:'Privato'},
    {name:'Tipologia', info:'Residenza privata'},
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

