<template>



  <Disclosure as="nav" class="bg-white bg-opacity-50 shadow fixed z-50 w-full" v-slot="{ open }">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center lg:pr-44" v-if="this.$route.path != '/Projects' && this.$route.path != '/'">
            <button   @click="this.$router.push({name:'Home'})">
              <img src="img/logo_black.png" alt="Logo" class="block h-8 w-auto lg:h-12" />
            </Button>
          </div>
            <div class="flex-shrink-0 flex items-center lg:pr-44 " v-if="this.$route.path === '/'">
            <button @click="scrolltotop()">
              <img src="img/logo_black.png" alt="Logo" class="block h-8 w-auto lg:h-12" />
            </Button>
          </div>
        </div>

        <div class="flex justify-center space-x-6 mt-5 mx-auto hidden lg:flex">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" target="_blank" class="text-white hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>

        <div  class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
          <div v-if="this.$route.path == '/'" class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <button class="border-transparent text-gray-700 hover:border-gray-300 hover:text-black inline-flex items-center pt-1 border-b-2 text-sm font-medium" v-on:click="scrolltohome()">
              Home
            </button>
            <button class="border-transparent text-gray-700 hover:border-gray-300 hover:text-black inline-flex items-center pt-1 border-b-2 text-sm font-medium" v-on:click="scrolltoprofilo()">
              Chi Siamo
            </button>
            <button class="border-transparent text-gray-700 hover:border-gray-300 hover:text-black inline-flex items-center pt-1 border-b-2 text-sm font-medium" v-on:click="scrolltoprogetti()">
              Progetti
            </button>
            <button class="border-transparent text-gray-700 hover:border-gray-300 hover:text-black inline-flex items-center pt-1 border-b-2 text-sm font-medium" v-on:click="scrolltopubblicazioni()">
              Press
            </button>
            <button class="border-transparent text-gray-700 hover:border-gray-300 hover:text-black inline-flex items-center pt-1 border-b-2 text-sm font-medium" v-on:click="scrolltocontatti()">
              Contatti
            </button>
          </div>

          <div v-else-if="this.$route.path === '/Projects' && this.$route.path != '/' && this.$route.path != '/Press'">
            <router-link :to="{ name: 'Home', hash: '#progetti' }" class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-transparent focus:outline-none styled" id="style4">
              <span class="sr-only">Open main menu</span>
              <ArrowLeftIcon class="block h-6 w-6 styled" aria-hidden="true" />
            </router-link>
          </div>

          <div v-else-if="this.$route.path != '/Projects' && this.$route.path != '/' && this.$route.path != '/Press'">
            <router-link :to="{ name: 'Home', hash: '#progetti' }" class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-transparent focus:outline-none styled" id="style5">
              <span class="sr-only">Open main menu</span>
              <ArrowLeftIcon class="block h-6 w-6 styled" aria-hidden="true" />
            </router-link>
          </div>

          <div v-else-if="this.$route.path === '/Press' && this.$route.path != '/' && this.$route.path != '/Projects'">
            <router-link :to="{ name: 'Home', hash: '#pubblicazioni' }" class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-transparent focus:outline-none styled" id="style6">
              <span class="sr-only">Open main menu</span>
              <ArrowLeftIcon class="block h-6 w-6 styled" aria-hidden="true" />
            </router-link>
          </div>

        </div>

        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton v-if="this.$route.path == '/'" class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" id="close">
            <span class="sr-only">Open main menu</span>
            <span v-if="!open" class="block h-8 w-8 focus:outline-none active:bg-transparent"  aria-hidden="true">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64">
                  <g id="Layer_47" data-name="Layer 47">
                    <path d="M12,20.84H32a1.5,1.5,0,0,0,0-3H12A1.5,1.5,0,0,0,12,20.84Z"/>
                    <path d="M53.5,32A1.5,1.5,0,0,0,52,30.5H12a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,53.5,32Z"/>
                    <path d="M52,43.16H32a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,52,43.16Z"/>
                  </g>
              </svg>
            </span>
            <XIcon v-else class="block h-6 w-6 styled" aria-hidden="true" />
          </DisclosureButton>
          <router-link :to="{ name: 'Home', hash: '#progetti' }" v-else-if="this.$route.path === '/Projects' && this.$route.path != '/' && this.$route.path != '/Press'" class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" id="style1">
            <span class="sr-only">Open main menu</span>
            <ArrowLeftIcon class="block h-6 w-6" aria-hidden="true" />
          </router-link>
          <router-link :to="{ name: 'Home', hash: '#progetti' }" v-else-if="this.$route.path != '/Projects' && this.$route.path != '/' && this.$route.path != '/Press'" class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" id="style2">
            <span class="sr-only">Open main menu</span>
            <ArrowLeftIcon class="block h-6 w-6" aria-hidden="true" />
          </router-link>
          <router-link :to="{ path: '/', hash: '#pubblicazioni' }" v-else-if="this.$route.path === '/Press' && this.$route.path != '/' && this.$route.path != '/Projects'" class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" id="style3">
            <span class="sr-only">Open main menu</span>
            <ArrowLeftIcon class="block h-6 w-6" aria-hidden="true" />
          </router-link>

        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden" :value="isOpen">
      <div class="bg-white bg-opacity-75 shadow filter brightness-150">
        <button @click="drawer()" class="w-full text-gray-900 group flex block pl-3 pr-4 py-2 border-b border-gray-300 text-base" v-on:click="scrolltohome()">
          <HomeIcon class="h-6 w-6" aria-hidden="true" />
          <span class="ml-2">Home</span>
        </button>
        <button @click="drawer()" class="w-full text-gray-900 hover:bg-gray-50 group flex border-b border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base" v-on:click="scrolltoprofilo()">
          <UsersIcon class="h-6 w-6" aria-hidden="true" />
          <span class="ml-2">Chi siamo</span>
        </button>
        <button @click="drawer()" class="w-full text-gray-900 hover:bg-gray-50 group flex border-b border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base" v-on:click="scrolltoprogetti()">
          <FolderOpenIcon class="h-6 w-6" aria-hidden="true" />
          <span class="ml-2">Progetti</span>
        </button>
        <button @click="drawer()" class="w-full text-gray-900 hover:bg-gray-50 group flex border-b border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base" v-on:click="scrolltopubblicazioni()">
          <FolderOpenIcon class="h-6 w-6" aria-hidden="true" />
          <span class="ml-2">Press</span>
        </button>
        <button @click="drawer()" class="w-full text-gray-900 hover:bg-gray-50 group flex hover:text-gray-700 block pl-3 pr-4 py-2 text-base" v-on:click="scrolltocontatti()">
          <ChatAltIcon class="h-6 w-6" aria-hidden="true" />
          <span class="ml-2">Contatti</span>
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <router-view/>

  <footer class="bg-gray-700" aria-labelledby="footer-heading" id="contatti">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto py-5 px-4 sm:px-6 lg:py-10 lg:px-8">
        <div class="grid grid-cols-4 gap-y-10 lg:grid-cols-4">
          <div class="sm:flex lg:block mx-auto">


              <button v-if="this.$route.path != '/Projects' && this.$route.path != '/' && this.$route.path != '/Press'"   @click="this.$router.push({name:'Home', hash: '#header'})">
                <div class="md:mt-0">
                  <img src="img/cropped-logo-small.png" alt="Logo" class="h-12 mx-auto" />
                </div>
              </button>


              <button v-if="this.$route.path === '/'" @click="scrolltotop()">
                <div class="md:mt-0">
                  <img src="img/cropped-logo-small.png" alt="Logo" class="h-12 mx-auto" />
                </div>
              </Button>



<!--            <button v-if="this.$route.path != '/' " class="hover:text-white "  @click="this.$router.push({ name: 'Home' })">-->
<!--              <div class="md:mt-0">-->
<!--                <img src="img/cropped-logo-small.png" class="h-12 mx-auto" aria-hidden="true" />-->
<!--              </div>-->
<!--            </button>-->

<!--            <button v-else class="hover:text-gray-300"  v-on:click="scrolltohome()">-->
<!--              <div class="md:mt-0">-->
<!--                <img src="img/cropped-logo-small.png" class="h-12 mx-auto" aria-hidden="true" />-->
<!--              </div>-->
<!--            </button>-->

          </div>
          <div class="sm:flex lg:block mx-auto">
            <a href="https://goo.gl/maps/7KQYok6GATRFPZS68" class="text-white hover:text-gray-500">
              <span class="h-12 w-12 rounded-md flex items-center justify-center border border-white mx-auto">
                <LocationMarkerIcon class="h-6 w-6 mx-auto font-light" aria-hidden="true" />
              </span>
              <p  class="mt-4 space-y-4 hidden md:block lg:block text-xs">
                Corso Turati 19/b, Torino
              </p>
            </a>
          </div>
          <div class="sm:flex lg:block mx-auto">
            <a href="mailto:info@favaclaudio.com?subject=Mail from ClaudioFava.com" class="text-white hover:text-gray-500">
              <div class="md:mt-0">
                <span class="h-12 w-12 rounded-md flex items-center justify-center border border-white mx-auto">
                  <ChatAltIcon class="h-6 w-6 mx-auto" aria-hidden="true" />
                </span>
                <p class="mt-4 space-y-4 hidden md:block lg:block text-xs">
                  info@favaclaudio.com
                </p>
              </div>
            </a>
          </div>
          <div class="sm:flex lg:block mx-auto">
            <a href="tel:0039328648607" class="text-white hover:text-gray-500">
              <div class="md:mt-0 mx-auto">
                <span class="h-12 w-12 rounded-md flex items-center justify-center border border-white mx-auto">
                  <PhoneIncomingIcon class="h-6 w-6 mx-auto" aria-hidden="true" />
                </span>
                <p class="mt-4 space-y-4 hidden md:block lg:block text-xs">
                  +39 328 864 8607
                </p>
              </div>
            </a>
          </div>
        </div>

        <div class="flex justify-center space-x-6 mt-5">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-white hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
    </div>


    <div class="mx-auto max-w-md px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <a href="https://www.gianlucatiengo.com/">
        <p class="text-center text-xs text-white hover:text-gray-500 underline">
          &copy; 2021 Claudio Fava Architetto. All rights reserved. WebMaster Gianluca Tiengo.
        </p>
      </a>
      <a class="top-link hide" href="" id="feed" v-on:click="scrolltotop()">
        <ArrowUpIcon class="h-6 w-6"  id="top"/>
      </a>
    </div>


  </footer>


</template>

<script>
import { MenuIcon, HomeIcon, FolderOpenIcon, UsersIcon, TemplateIcon, PresentationChartBarIcon, ColorSwatchIcon, ChatAltIcon, ArrowLeftIcon, ArrowUpIcon, LocationMarkerIcon, PhoneIncomingIcon, BriefcaseIcon, BellIcon, XIcon } from '@heroicons/vue/outline'
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/vue/solid'
import { defineComponent, h } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'


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
      name: 'Pinterest',
      href: 'https://www.pinterest.it/cfava1949/',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 72 72' }, [
              h('path', {
                d:
                    'M32-.006a32.017 32.017 0 0 0-12.7 61.4 26.36 26.36 0 0 1 .6-7.3c.6-2.6 4.1-17.5 4.1-17.5a12.937 12.937 0 0 1-1-5.1c0-4.8 2.8-8.3 6.2-8.3 2.9 0 4.3 2.2 4.3 4.8 0 2.9-1.9 7.3-2.8 11.4a4.989 4.989 0 0 0 5.1 6.2c6.1 0 10.2-7.8 10.2-17.1 0-7-4.7-12.3-13.4-12.3-9.7 0-15.8 7.3-15.8 15.4a9.176 9.176 0 0 0 2.1 6.3 1.605 1.605 0 0 1 .5 1.8c-.2.6-.5 2-.7 2.6a1.11 1.11 0 0 1-1.6.8c-4.5-1.8-6.6-6.7-6.6-12.3 0-9.1 7.7-20.1 23-20.1 12.3 0 20.3 8.9 20.3 18.4 0 12.6-7 22-17.3 22-3.5 0-6.7-1.9-7.8-4 0 0-1.9 7.4-2.3 8.8a28.406 28.406 0 0 1-3.2 6.8 28.4 28.4 0 0 0 8.8 1.3 32 32 0 1 0 0-64z',
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
    BriefcaseIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    XIcon
  },

  data() {
    return {
      isOpen: true
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

    scrolltoprofilo() {
      const element = document.getElementById('profilo');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltoprogetti() {
      const element = document.getElementById('progetti');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    scrolltopubblicazioni() {
      const element = document.getElementById('pubblicazioni');
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
    document.getElementById('close').click();
    }
  },

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

body,
html,
h1,
li,
span,
h3,
button,
a,
h2,
p{
  font-family: "Raleway" !important;
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

 #close:hover{
    border:none!important;
    background-color: transparent !important;
    outline: none !important;
    text-decoration: none!important;
    box-shadow: none;
  }
  #close:active{
    border: transparent!important;
    background-color: transparent !important;
    outline: none !important;
    text-decoration: none !important;
    box-shadow: none !important;
  }
  #close:focus{
    border: transparent!important;
    background-color: transparent !important;
    outline: none !important;
    text-decoration: none !important;
    box-shadow: none !important;
  }

  .styled:hover{
    border: transparent!important;
    background-color: transparent !important;
    outline: none !important;
    text-decoration: none !important;
    box-shadow: none !important;
  }
  .styled:active{
    border: transparent!important;
    background-color: transparent !important;
    outline: none !important;
    text-decoration: none !important;
    box-shadow: none !important;
  }
  .styled:focus{
    border: transparent!important;
    background-color: transparent !important;
    outline: none !important;
    text-decoration: none !important;
    box-shadow: none !important;
  }

  #style1:focus, #style1:active, #style1:focus,
  #style2:focus, #style2:active, #style2:focus,
  #style3:focus, #style3:active, #style4:focus,
  #style5:focus, #style5:active, #style5:focus,
  #style6:focus, #style6:active, #style6:focus,
  #style4:focus, #style4:active, #style4:focus{
    border: transparent!important;
    background-color: transparent !important;
    outline: none !important;
    text-decoration: none !important;
    box-shadow: none !important;
  }
}
</style>
