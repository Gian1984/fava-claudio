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
import Project_dante from '../components/Project_dante.vue'
import Project_torrerinalda from "../components/Project_torrerinalda.vue";
import Project_villa_perrault from '../components/Project_villa_perrault.vue'
import Project_vivere_20 from '../components/Project_vivere_20.vue'
import Project_casa_gramsci from '../components/Project_casa_gramsci.vue'
import Project_paint_it_black from '../components/Project_paint_it_black.vue'
import Projects from '../components/Projects.vue'
import Cose_di_casa from '../components/Cose_di_casa.vue'
import Cento_idee from '../components/Cento_idee.vue'
import Press from '../components/Press.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
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
              path: '/Press',
              name: 'Press',
              component: Press,
              meta: {
                title: 'Pubblicazioni Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Pubblicazioni  dello Studio di Architettura Fava Claudio.'
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
              path: '/project_paint_it_black',
              name: 'Project_paint_it_black',
              component: Project_paint_it_black,
              meta: {
                title: 'Progetto Paint it Black - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'In ogni stanza qualcosa di nero. E’ il colore preferito del padrone di casa e si trova dappertutto: cucina, boiserie del soggiorno, pareti del bagno e complementi d’arredo.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Paint it Black - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_paint_it_black"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/PaintIt/SantAmbrogio_21bis.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'In ogni stanza qualcosa di nero. E’ il colore preferito del padrone di casa e si trova dappertutto: cucina, boiserie del soggiorno, pareti del bagno e complementi d’arredo.'
                  }
                ]
              }
            },
            {
              path: '/project_centrale_operativa_telecontrol',
              name: 'Centrale Operativa telecontrol',
              component: Project_centrale_operativa_telecontrol,
              meta: {
                title: 'Progetto Centrale Operativa telecontrol - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Il progetto di ristrutturazione della CENTRALE OPERATIVA TELECONTROL è pensato per creare uno spazio di lavoro di alta rappresentanza per un\'azienda leader nel campo della sicurezza e della vigilanza.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Centrale Operativa telecontrol - Fava Claudio Architett"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_centrale_operativa_telecontrol"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/PRO_7942.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Il progetto di ristrutturazione della CENTRALE OPERATIVA TELECONTROL è pensato per creare uno spazio di lavoro di alta rappresentanza per un\'azienda leader nel campo della sicurezza e della vigilanza.'
                  }
                ]
              }
            },
            {
              path: '/project_sala_congressi_telecontrol',
              name: 'Project_sala_congressi_telecontrol',
              component: Project_sala_congressi_telecontrol,
              meta: {
                title: 'Progetto Sala congressi Telecontrol - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'L’intervento prevede la rifunzionalizzazione del locale autorimessa dell’azienda Telecontrol Spa a Rivoli (To) con l’obbiettivo di trasformarlo in una nuova Sala Congressi per complessivi 400 mq compresi di un soppalco. '
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Sala congressi Telecontrol - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_sala_congressi_telecontrol"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/vista-01.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'L’intervento prevede la rifunzionalizzazione del locale autorimessa dell’azienda Telecontrol Spa a Rivoli (To) con l’obbiettivo di trasformarlo in una nuova Sala Congressi per complessivi 400 mq compresi di un soppalco. '
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
              path: '/Project_dante',
              name: 'Project_dante',
              component: Project_dante,
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
              path: '/Project_torrerinalda',
              name: 'Project_torrerinalda',
              component: Project_torrerinalda,
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
              path: '/Project_casa_gramsci',
              name: 'Project_casa_gramsci',
              component: Project_casa_gramsci,
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
              path: '/Project_casa_gramsci',
              name: 'Project_casa_gramsci',
              component: Project_casa_gramsci,
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
              path: '/Cose_di_casa',
              name: 'Cose_di_casa',
              component: Cose_di_casa,
              meta: {
                title: 'Pubblicazioni Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Pubblicazioni dello Studio di Architettura Fava Claudio.'
                  },
                  {
                    property: 'og:description',
                    content: 'Fava Claudio Architetto è uno studio di Architettura specializzato in recupero di edifici esistenti e design d\'interni. Lo studio professionale accompagna il cliente lungo tutto il processo edilizio: dalla scelta dell\'immobile e l\'analisi delle potenzialità trasformative, passando per un accurata attenzione al progetto, fino alle ultime finiture d\'arredo e le pratiche catastali.'
                  }
                ]
              }
            },

            {
              path: '/Cento_idee',
              name: 'Cento_idee',
              component: Cento_idee,
              meta: {
                title: 'Pubblicazioni Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Pubblicazioni dello Studio di Architettura Fava Claudio.'
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
          ],


})

router.beforeEach((to, from, next) => {

  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router

