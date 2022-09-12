import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import FsLightbox from "fslightbox-vue/v3";

createApp(App).use(router).use(FsLightbox).mount('#app')
