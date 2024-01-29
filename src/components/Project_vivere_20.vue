<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          VIVERE IN 20 MQ
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Rivalta di Torino (TO) - 2020
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
            VIVERE IN 20 MQ
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Rivalta di Torino (TO) - 2020
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
  name: 'VIVERE IN 20 MQ',
  href: '#',
  images: [
    {
      id: 1,
      name: 'Vivere in 20 mq vista soluzione A',
      imageSrc: 'img/vivere20metri/01-scaled.jpg',
      imageAlt: "Vivere in 20 mq vista soluzione A",
      description:"Vivere in 20 mq vista soluzione A",
      primary: true,
    },
    {
      id: 2,
      name: 'Vivere in 20 mq vista spaccato soluzione A',
      imageSrc: 'img/vivere20metri/02-scaled.jpg',
      imageAlt: "Vivere in 20 mq vista spaccato soluzione A",
      description:"Vivere in 20 mq vista spaccato soluzione A",
      primary: true,
    },
    {
      id: 3,
      name: 'Vivere in 20 mq vista soluzione B1',
      imageSrc: 'img/vivere20metri/03-scaled.jpg',
      imageAlt: "Vivere in 20 mq vista soluzione B1",
      description:"Vivere in 20 mq vista soluzione B1",
      primary: true,
    },

    {
      id: 4,
      name: 'Vivere in 20 mq vista soluzione B2',
      imageSrc: 'img/vivere20metri/04-scaled.jpg',
      imageAlt: "Vivere in 20 mq vista soluzione B2",
      description:"Vivere in 20 mq vista soluzione B2",
      primary: true,
    },
    {
      id: 5,
      name: 'Vivere in 20 mq vista spaccato soluzione B',
      imageSrc: 'img/vivere20metri/05-scaled.jpg',
      imageAlt: "Vivere in 20 mq vista spaccato soluzione B",
      description:"Vivere in 20 mq vista spaccato soluzione B",
      primary: true,
    },
  ],

  description:
      `<p>
           Questa è stata la sfida.<br>
           Soddisfare l'esigenza di una famiglia di avere un mini-appartamento indipendente all'interno della loro abitazione.<br><br>
           Così la parete attrezzata e il letto rialzato nascondono a loro interno frigo, armadio e cassetti (soluzione A).<br><br>
           Mentre un letto a scomparsa con meccanismo a ribalta può essere la soluzione (B) per avere più libertà di utilizzo in ogni momento della giornata.<br><br>
           Il tutto inseguendo il concetto del "PICCOLO MA BELLO".
       </p>`,

  info:[
    {name: 'Luogo', info:'Rivalta di Torino (TO)'},
    {name:'Stato', info:'Concept, studio di fattibilità'},
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
