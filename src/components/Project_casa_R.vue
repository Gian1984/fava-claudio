<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          CASA R
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
            CASA R
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Rivalta di Torino (TO) - 2016
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
  name: 'CASA R',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Casa R vista 1',
      imageSrc: 'img/vista-01-versione-A.jpg',
      imageAlt: "Casa R vista 1",
      description:"Casa R vista 1",
      primary: true,
    },
    {
      id: 2,
      name: 'Casa R vista 2',
      imageSrc: 'img/vista-02-versione-A.jpg',
      imageAlt: "Casa R vista 2",
      description:"Casa R vista 2",
      primary: true,
    },

    {
      id: 3,
      name: 'Casa R vista tavola progettazione',
      imageSrc: 'img/Casa-R-pianta.jpg',
      imageAlt: "Casa R vista tavola progettazione",
      description:"Casa R vista tavola progettazione",
      primary: true,
    },
  ],

  description: `
    <p>Il progetto di ristrutturazione di questa casa sita in Rivalta di Torino prevede di ampliare il soggiorno per soddisfare le esigenze del cliente che richiedeva un open space collegato direttamente con la cucina. Lo spazio annesso al soggiorno è adibito a cucina e permette di includere un’altra finestra per garantire una migliore illuminazione degli spazi interni.</p>`,

  info:[
    {name: 'Luogo', info:'Rivalta di Torino'},
    {name:'Stato', info:'Progetto preliminare, progetto definitivo'},
    {name:'Cliente', info:'Privato'},
    {name:'Team di progettazione', info:'Claudio Fava'},
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
