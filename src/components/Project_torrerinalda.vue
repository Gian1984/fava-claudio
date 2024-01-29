<template>
  <div class="bg-white mb-6">

    <main class="pt-20 max-w-full mx-auto  px-4 sm:pb-12 sm:px-6 lg:max-w-full lg:pt-24 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">

        <h1 class="mt-3 text-l font-medium text-gray-900 text-center lg:hidden">
          TORRE RINALDA
        </h1>
        <h3 class="text-base text-gray-900 text-center lg:hidden">
          Lecce (LE) - 2023
        </h3>
        <h3 class="text-base text-gray-900 text-center lg:hidden mt-2">
          International architecture competition
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
            TORRE RINALDA
          </h1>
          <h2 class="text-lg font-base text-gray-900 hidden lg:block">
            Lecce (LE) - 2023
          </h2>
          <h3 class="text-lg font-base text-gray-900 hidden lg:block mt-2">
            International architecture competition
          </h3>

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
  name: 'TORRE RINALDA',
  href: '#',
  images: [
    {
      id: 1,
      name: 'International architecture competition Torre Rinalda vista esterna 1',
      imageSrc: 'img/torre/01-min.webp',
      imageAlt: "International architecture competition Torre Rinalda vista esterna 1",
      description:"International architecture competition Torre Rinalda vista esterna 1",
      primary: true,
    },
    {
      id: 2,
      name: 'International architecture competition Torre Rinalda vista esterna 2',
      imageSrc: 'img/torre/02-min.webp',
      imageAlt: "International architecture competition Torre Rinalda vista esterna 2",
      description:"International architecture competition Torre Rinalda vista esterna 2",
      primary: true,
    },

    {
      id: 3,
      name: 'International architecture competition Torre Rinalda vista esterna 3',
      imageSrc: 'img/torre/03-min.webp',
      imageAlt: "International architecture competition Torre Rinalda vista esterna 3",
      description:"International architecture competition Torre Rinalda vista esterna 3",
      primary: true,
    },
    {
      id: 4,
      name: 'International architecture competition Torre Rinalda vista esterna 4',
      imageSrc: 'img/torre/04-min.webp',
      imageAlt: "International architecture competition Torre Rinalda vista esterna 4",
      description:"International architecture competition Torre Rinalda vista esterna 4",
      primary: true,
    },
    {
      id: 5,
      name: 'International architecture competition Torre Rinalda vista esterna 5',
      imageSrc: 'img/torre/06_int-min.webp',
      imageAlt: "International architecture competition Torre Rinalda vista esterna 5",
      description:"International architecture competition Torre Rinalda vista esterna 5",
      primary: true,
    },
    {
      id: 6,
      name: 'International architecture competition Torre Rinalda vista esterna 6',
      imageSrc: 'img/torre/10_int-min.webp',
      imageAlt: "International architecture competition Torre Rinalda vista esterna 6",
      description:"International architecture competition Torre Rinalda vista esterna 6",
      primary: true,
    },
    {
      id: 7,
      name: 'International architecture competition Torre Rinalda progetto',
      imageSrc: 'img/torre/due.webp',
      imageAlt: "International architecture competition Torre Rinalda progetto",
      description:"International architecture competition Torre Rinalda progetto",
      primary: true,
    },
    {
      id: 8,
      name: 'International architecture competition Torre Rinalda progetto 2',
      imageSrc: 'img/torre/A1_IG8101_cut2-min.webp',
      imageAlt: "International architecture competition Torre Rinalda progetto 2",
      description:"International architecture competition Torre Rinalda progetto 2",
      primary: true,
    },
  ],

  description: `
    <p>
    The viewpoint tower is built inside Torre Rinalda trying to minimize damage on the historical monument, which remains unchanged.<br><br>


BUILT INSIDE HISTORY<br>
As not to disturb the dominant view towards the sea, access to the tower is given through a wooden platforms adapting to the terrain. The surrounding landscape remains untouched and wild.<br><br>

The building serves as an observation point and engages the viewer in a dialogue with the landscape. After parking your bicycle in the dedicated area, one can either climb up the stairs to enjoy the view over the sea and into the surrounding landscape from the viewing deck, or simply stay on the ground and get the view through the bench.<br><br>


Made entirely of wood, the tower is composed of an inner core of cross-laminated timber and an external wooden frame that serves as a load bearing structure. The inner core is built around the existing skylight, with stairs circling around it. <br><br>
When taking the stairs up or down one can experience a rich range of different views framed by the various openings cut into the wooden slats, similar to old loopholes. <br><br>

The structure is composed of prefabricated elements. The facades and the stairs are made of fir, a weather resistant wood that integrates with the limestone of Torre Rinalda. The details and the security netting are of steel.
If the wooden structures were dismantled, Torre Rinalda would be the same one that was found.<br><br>

The idea was to create a simple wooden structure easy to be replicated in other coastal towers.

    </p>`,

  info:[
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

