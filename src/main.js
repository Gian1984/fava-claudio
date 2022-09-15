import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueEasyLightbox from 'vue-easy-lightbox'



createApp(App).use(router).use(VueEasyLightbox).mount('#app')
