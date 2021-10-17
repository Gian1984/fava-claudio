import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project_camera_bimbi from '../components/Project_camera_bimbi.vue'
import Project_casa_nel_parco from '../components/Project_casa_nel_parco.vue'
import Project_casa_R from '../components/Project_casa_R.vue'
import Project_casa_rivoli from '../components/Project_casa_rivoli.vue'
import Project_centrale_operativa_telecontrol from '../components/Project_centrale_operativa_telecontrol.vue'
import Project_sala_congressi_telecontrol from '../components/Project_sala_congressi_telecontrol.vue'
import Projects from '../components/Projects.vue'
import PageNotFound from '../views/PageNotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: "/:catchAll(.*)",
    name: 'Page_not_found',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
