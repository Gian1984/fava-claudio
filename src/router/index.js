import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project_camera_bimbi from '../components/Project_camera_bimbi.vue'
import Project_casa_nel_parco from '../components/Project_casa_nel_parco.vue'
import Project_casa_R from '../components/Project_casa_R.vue'
import Project_casa_rivoli from '../components/Project_casa_rivoli.vue'
import Project_centrale_operativa_telecontrol from '../components/Project_centrale_operativa_telecontrol.vue'
import Project_sala_congressi_telecontrol from '../components/Project_sala_congressi_telecontrol.vue'
import Project_concorso_rasoparete from '../components/Project_concorso_rasoparete.vue'
import Project_oragiusta_moncalieri from '../components/Project_oragiusta_moncalieri.vue'
import Project_villa_perrault from '../components/Project_villa_perrault.vue'
import Project_vivere_20 from '../components/Project_vivere_20.vue'
import Projects from '../components/Projects.vue'
import PageNotFound from '../views/PageNotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
      path:'/Home/Progetti',
      name:'Overview',
      component:Projects
    }],
    meta: {
      title: 'Home Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Home page dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_camera_bimbi',
    name: 'Project_camera_bimbi',
    component: Project_camera_bimbi,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_casa_nel_parco',
    name: 'Project_casa_nel_parco',
    component: Project_casa_nel_parco,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_casa_R',
    name: 'Project_casa_R',
    component: Project_casa_R,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_casa_rivoli',
    name: 'Project_casa_rivoli',
    component: Project_casa_rivoli,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_centrale_operativa_telecontrol',
    name: 'Project_centrale_operativa_telecontrol',
    component: Project_centrale_operativa_telecontrol,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_sala_congressi_telecontrol',
    name: 'Project_sala_congressi_telecontrol',
    component: Project_sala_congressi_telecontrol,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_concorso_rasoparete',
    name: 'Project_concorso_rasoparete',
    component: Project_concorso_rasoparete,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_oragiusta_moncalieri',
    name: 'Project_oragiusta_moncalieri',
    component: Project_oragiusta_moncalieri,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_villa_perrault',
    name: 'Project_villa_perrault',
    component: Project_villa_perrault,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },
  {
    path: '/Project_vivere_20',
    name: 'Project_vivere_20',
    component: Project_vivere_20,
    meta: {
      title: 'Progetti Fava Claudio Architetto',
      metaTags: [
        {
          name: 'description',
          content: 'Progetti dello Studio di Architettura Fava Claudio.'
        },
        {
          property: 'og:description',
          content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
        }
      ]
    }
  },

  {
    path: "/:catchAll(.*)",
    name: 'Page_not_found',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  /*eslint-disable */
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {el: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})



export default router
