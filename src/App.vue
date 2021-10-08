<template>
  <nav class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10" id="header">
    <div class="flex items-center">
      <img src="img/logo_black.png" alt="Logo" class="block h-8 w-auto lg:h-12" />
    </div>
    <div class="flex items-center">
      <div v-if="this.$route.path == '/' || this.$route.path == '/home'" class="text-black">
        <button class="mr-2" aria-label="Open Menu" @click="drawer">
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div v-else class="text-black">
        <button class="mr-2" aria-label="Open Menu" @click="this.$router.push({ name: 'Home' })">
          <ArrowLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>

    <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
    >
      <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
        <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
      </div>
    </transition>
    <aside class="transform top-0 left-0 w-64 bg-cyan-700 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <span @click="isOpen = false" class="flex w-full items-center p-2 border-b">
        <img src="img/cropped-logo-small.png" alt="Logo" class="block h-12 w-auto mx-auto" />
      </span>
      <div class="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto space-y-1 p-2" aria-label="Sidebar">



          <button @click="isOpen = false" class="bg-cyan-800 text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md" v-on:click="scrolltohome()">
            <HomeIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Home</span>
          </button>

          <button @click="isOpen = false" class="bg-cyan-800 text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md" v-on:click="scrolltocosafacciamo()">
            <ColorSwatchIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Cosa Facciamo</span>
          </button>

          <button @click="isOpen = false" class="bg-cyan-800 text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md" v-on:click="scrolltocomeprogettiamo()">
            <PresentationChartBarIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Come Progettiamo</span>
          </button>


          <button @click="isOpen = false" class="bg-cyan-800 text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md" v-on:click="scrolltocomelavoriamo()">
            <TemplateIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Come Lavoriamo</span>
          </button>

          <button @click="isOpen = false" class="bg-cyan-800 text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md" v-on:click="scrolltoprofilo()">
            <UsersIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Profilo</span>
          </button>

          <button @click="isOpen = false" class="bg-cyan-800 text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md" v-on:click="scrolltoprogetti()">
            <FolderOpenIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Progetti</span>
          </button>

          <button @click="isOpen = false" class="bg-cyan-800 text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md" v-on:click="scrolltocontatti()">
            <ChatAltIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-2">Contatti</span>
          </button>


      </div>
    </aside>
  </nav>

  <router-view/>

  <footer class="bg-white" aria-labelledby="footer-heading" id="contatti">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <img class="h-10" src="img/cropped-logo-small.png" alt="Company name" />
          <p class="text-gray-500 text-base">
            Making the world a better place through constructing elegant hierarchies.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <LocationMarkerIcon class="h-6 w-6 mb-3" aria-hidden="true" />
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Sede
              </h3>
              <p  class="mt-4 space-y-4">
                  Via Frejus 21, Torino
              </p>
            </div>
            <div class="mt-12 md:mt-0">
              <PhoneIncomingIcon class="h-6 w-6 mb-3" aria-hidden="true" />
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Telefono
              </h3>
              <p class="mt-4 space-y-4">
                +39 328 864 8607
              </p>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <BriefcaseIcon class="h-6 w-6 mb-3" aria-hidden="true" />
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <p class="mt-4 space-y-4">
                  Claudio Fava Arch
              </p>
            </div>
            <div class="mt-12 md:mt-0">
              <ChatAltIcon class="h-6 w-6 mb-3" aria-hidden="true" />
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Mail
              </h3>
              <p class="mt-4 space-y-4">
                  info@favaclaudio.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center space-x-6 mt-5">
        <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>

    </div>

    <a href="https://www.gianlucatiengo.com/">
      <p class="text-center text-base text-gray-400 hover:text-black underline">
        &copy; 2021  Gianluca Tiengo. All rights reserved.
      </p>
    </a>

    <a class="top-link hide" href="" id="feed" v-on:click="scrolltotop()">
      <ArrowUpIcon class="h-6 w-6"  id="top"/>
    </a>

  </footer>


</template>

<script>
import { MenuIcon, HomeIcon, FolderOpenIcon, UsersIcon, TemplateIcon, PresentationChartBarIcon, ColorSwatchIcon, ChatAltIcon, ArrowLeftIcon, ArrowUpIcon, LocationMarkerIcon, PhoneIncomingIcon, BriefcaseIcon } from '@heroicons/vue/outline'
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/vue/solid'
import { defineComponent, h } from 'vue'

const timeline = [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: 'home',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: HomeIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: ThumbUpIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 3,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: ThumbUpIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: ThumbUpIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-gray-400',
  },
]


const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/search/top?q=claudiofava.arch',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/claudiofava.arch/',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d:
                    'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
              }),
            ]),
      }),
    },
  ],
}

export default {


  setup() {
    return {
      navigation,
      CheckIcon,
      ThumbUpIcon,
      UserIcon,
      timeline,

    }
  },

  components: {
    MenuIcon,
    HomeIcon,
    FolderOpenIcon,
    UsersIcon,
    TemplateIcon,
    PresentationChartBarIcon,
    ColorSwatchIcon,
    ArrowLeftIcon,
    ChatAltIcon,
    ArrowUpIcon,
    LocationMarkerIcon,
    PhoneIncomingIcon,
    BriefcaseIcon
  },

  data() {
    return {
      isOpen: false
    };
  },
  methods: {

    scrolltohome() {
      const element = document.getElementById('home');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltocosafacciamo() {
      const element = document.getElementById('cosa_facciamo');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltocomeprogettiamo() {
      const element = document.getElementById('come_progettiamo');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltocomelavoriamo() {
      const element = document.getElementById('come_lavoriamo');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltoprofilo() {
      const element = document.getElementById('profilo');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltoprogetti() {
      const element = document.getElementById('progetti');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltocontatti() {
      const element = document.getElementById('contatti');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltotop() {
      const element = document.getElementById('header');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};

</script>

<style>
#feed {
  position: fixed;
  bottom: 0;
  right: 0;
  display: inline-flex;

  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 0 1em 1em 0;
  border-radius: 50%;
  padding: 0.25em;
  width: 30px;
  height: 30px;
  background-color: #f8f8f8;
}

h1,
h3,
button,
a,
h2,
p{
  font-family: "Gruppo" !important;
}

.gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
}

.item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  transition: flex 0.8s ease;
}

.item:hover {
  flex: 7;
}

@media only screen and (max-width: 736px) {

  .gallery-wrap {
    display: flex;
    flex-direction: column !important;
    width: 100%;
    height: 70vh;
  }

  .item {
    flex: 1;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: none;
    transition: flex 0.8s ease;
  }

  .item:hover {
    flex: 7;
  }
}
</style>
