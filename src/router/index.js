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
import C_r_c from "../components/C_r_c.vue";
import Press from '../components/Press.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Privacy from '../views/Privacy.vue'

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
                title: 'Home - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Un team di architetti con sede a Torino che si occupa di progettazione architettonica a diversi livelli, dall\'interior design al recupero dell\'esistente, fino a edifici ex-novo. Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente. La nostra filosofia è di creare progetti cuciti su misura attraverso arredi personalizzati, curando ogni particolare.'
                  },
                  {
                    property: 'og:title',
                    content: "Home - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/PRO_7700.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/home page"
                  },
                  {
                    property: 'og:description',
                    content: 'Un team di architetti con sede a Torino che si occupa di progettazione architettonica a diversi livelli, dall\'interior design al recupero dell\'esistente, fino a edifici ex-novo. Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente. La nostra filosofia è di creare progetti cuciti su misura attraverso arredi personalizzati, curando ogni particolare.'
                  }
                ]
              }
            },
            {
              path: '/projects',
              name: 'projects',
              component: Projects,
              meta: {
                title: 'Progetti - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Un team di architetti con sede a Torino che si occupa di progettazione architettonica a diversi livelli, dall\'interior design al recupero dell\'esistente, fino a edifici ex-novo. Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente. La nostra filosofia è di creare progetti cuciti su misura attraverso arredi personalizzati, curando ogni particolare.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetti - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_dante"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/dante/PR_R0550%20copy-min.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Un team di architetti con sede a Torino che si occupa di progettazione architettonica a diversi livelli, dall\'interior design al recupero dell\'esistente, fino a edifici ex-novo. Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente. La nostra filosofia è di creare progetti cuciti su misura attraverso arredi personalizzati, curando ogni particolare.'
                  }
                ]
              }
            },
            {
              path: '/privacy-policy',
              name: 'Privacy',
              component: Privacy,
              meta: {
                title: 'Privacy Policy - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Leggi la nostra informativa sulla privacy per scoprire come proteggiamo i tuoi dati e la tua sicurezza online. Fava Claudio Architetto si impegna a garantire trasparenza e sicurezza nella gestione delle informazioni personali.'
                  },
                  {
                    property: 'og:title',
                    content: "Privacy Policy - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/privacy-policy"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/PRO_7700.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website"
                  },
                  {
                    property: 'og:description',
                    content: 'Leggi la nostra informativa sulla privacy per scoprire come proteggiamo i tuoi dati e la tua sicurezza online. Fava Claudio Architetto si impegna a garantire trasparenza e sicurezza nella gestione delle informazioni personali.'
                  }
                ]
              }
            },
    {
              path: '/press',
              name: 'press',
              component: Press,
              meta: {
                title: 'Pubblicazioni - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Un team di architetti con sede a Torino che si occupa di progettazione architettonica a diversi livelli, dall\'interior design al recupero dell\'esistente, fino a edifici ex-novo. Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente. La nostra filosofia è di creare progetti cuciti su misura attraverso arredi personalizzati, curando ogni particolare.'
                  },
                  {
                    property: 'og:title',
                    content: "Pubblicazioni - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/press"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_1.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/press page"
                  },
                  {
                    property: 'og:description',
                    content: 'Un team di architetti con sede a Torino che si occupa di progettazione architettonica a diversi livelli, dall\'interior design al recupero dell\'esistente, fino a edifici ex-novo. Progettiamo spazi dalla forte identità coniugando estetica ed esigenze del cliente. La nostra filosofia è di creare progetti cuciti su misura attraverso arredi personalizzati, curando ogni particolare.'
                  }
                ]
              }
            },
            {
              path: '/project_camera_bimbi',
              name: 'project_camera_bimbi',
              component: Project_camera_bimbi,
              meta: {
                title: 'Progetto Camera Bimbi- Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Il progetto mira a disporre gli arredi lungo le pareti perimetrali, lasciando libero il centro della stanza. Sfruttare l’altezza della stanza è possibile con il letto a castello, l\'armadio, e mobili a diverse profondità che alternano spazi aperti e chiusi.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Camera Bimbi- Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_camera_bimbi"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/vista-03_crop.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Il progetto mira a disporre gli arredi lungo le pareti perimetrali, lasciando libero il centro della stanza. Sfruttare l’altezza della stanza è possibile con il letto a castello, l\'armadio, e mobili a diverse profondità che alternano spazi aperti e chiusi.'
                  }
                ]
              }
            },
            {
              path: '/project_casa_nel_parco',
              name: 'project_casa_nel_parco',
              component: Project_casa_nel_parco,
              meta: {
                title: 'Progetto casa nel parco - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Dalla ristrutturazione di un fienile di un piccolo paese in Provicia di Torino, nasce questo progetto dal carattere sospeso tra tradizione e contemporaneità.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto casa nel parco - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_casa_nel_parco"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/vista-esterna-01.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Dalla ristrutturazione di un fienile di un piccolo paese in Provicia di Torino, nasce questo progetto dal carattere sospeso tra tradizione e contemporaneità.'
                  }
                ]
              }
            },
            {
              path: '/project_casa_r',
              name: 'project_casa_R',
              component: Project_casa_R,
              meta: {
                title: 'Progetto Casa R - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Il progetto di ristrutturazione di questa casa sita in Rivalta di Torino prevede di ampliare il soggiorno per soddisfare le esigenze del cliente che richiedeva un open space collegato direttamente con la cucina.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Casa R - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_casa_R"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/vista-01-versione-A.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Il progetto di ristrutturazione di questa casa sita in Rivalta di Torino prevede di ampliare il soggiorno per soddisfare le esigenze del cliente che richiedeva un open space collegato direttamente con la cucina.'
                  }
                ]
              }
            },
            {
              path: '/project_casa_rivoli',
              name: 'project_casa_rivoli',
              component: Project_casa_rivoli,
              meta: {
                title: 'Progetto Casa Rivoli - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Il progetto di ristrutturazione di questa casa a Rivoli, in provincia di Torino, è caratterizzato da un contrasto bianco e legno che diventa il segno di continuità degli ambienti. Il parquet in rovere sbiancato è presente in tutti gli ambienti, tranne nei bagni dove l’utilizzo di ceramiche e marmi connotano questi ambienti con freschezza e luminosità.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Casa Rivoli - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_casa_rivoli"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/PRO_7700.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Il progetto di ristrutturazione di questa casa a Rivoli, in provincia di Torino, è caratterizzato da un contrasto bianco e legno che diventa il segno di continuità degli ambienti. Il parquet in rovere sbiancato è presente in tutti gli ambienti, tranne nei bagni dove l’utilizzo di ceramiche e marmi connotano questi ambienti con freschezza e luminosità.'
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
              path: '/project_concorso_rasoparete',
              name: 'project_concorso_rasoparete',
              component: Project_concorso_rasoparete,
              meta: {
                title: 'Progetto Concorso Rasoparete - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Il progetto della casa-studio FLUSH HOUSE è stato pensato per rispondere alle esigenze del terzo millennio, un\'epoca in cui estetica, funzionalità e ottimizzazione dello spazio sono imprescindibili.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Concorso Rasoparete - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_concorso_rasoparete"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/rasoparete/vista-03-1-scaled.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Il progetto della casa-studio FLUSH HOUSE è stato pensato per rispondere alle esigenze del terzo millennio, un\'epoca in cui estetica, funzionalità e ottimizzazione dello spazio sono imprescindibili.'
                  }
                ]
              }
            },
            {
              path: '/project_oragiusta_moncalieri',
              name: 'project_oragiusta_moncalieri',
              component: Project_oragiusta_moncalieri,
              meta: {
                title: 'Progetto L\'Ora Giusta Moncalieri - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Collocato in piazza Caduti per la Liberta’ nel centro di Moncalieri, il locale cattura subito l\'attenzione per il bancone in cui un gioco di volumi neri si contrappone al top in rovere.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto L'Ora Giusta Moncalieri - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_oragiusta_moncalieri"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/loragiusta/foto-1-scaled.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Collocato in piazza Caduti per la Liberta’ nel centro di Moncalieri, il locale cattura subito l\'attenzione per il bancone in cui un gioco di volumi neri si contrappone al top in rovere.'
                  }
                ]
              }
            },
            {
              path: '/project_dante',
              name: 'project_dante',
              component: Project_dante,
              meta: {
                title: 'Progetto Dante - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'La richiesta del cliente era di progettare un mobile che potesse contenere TV e collezione di vinili, valutando la possibilità di eliminare il tramezzo che divideva la cucina dal soggiorno.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto L'Ora Giusta Moncalieri - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_dante"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/dante/PR_R0550%20copy-min.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'La richiesta del cliente era di progettare un mobile che potesse contenere TV e collezione di vinili, valutando la possibilità di eliminare il tramezzo che divideva la cucina dal soggiorno.'
                  }
                ]
              }
            },
            {
              path: '/project_torrerinalda',
              name: 'project_torrerinalda',
              component: Project_torrerinalda,
              meta: {
                title: 'Progetto Torrerinalda - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'La torre del belvedere è stata costruita all\'interno di Torre Rinalda cercando di minimizzare i danni al monumento storico, che è rimasto inalterato.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Torrerinalda - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_torrerinalda"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/torre/01-min.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'La torre del belvedere è stata costruita all\'interno di Torre Rinalda cercando di minimizzare i danni al monumento storico, che è rimasto inalterato.'
                  }
                ]
              }
            },
            {
              path: '/project_villa_perrault',
              name: 'project_villa_perrault',
              component: Project_villa_perrault,
              meta: {
                title: 'Progetto Villa Perrault - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Il progetto d\'interni prevede ristrutturazione degli spazi interni rispettando e valorizzando la struttura a muri portanti e soffitti cassettonati. In contrasto con il contesto, lo stile dell’intervento è decisamente contemporaneo ma in armonia con il linguaggio architettonico della villa. '
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Villa Perrault - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_villa_perrault"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/villaperrault/vista-01-scaled.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Il progetto d\'interni prevede ristrutturazione degli spazi interni rispettando e valorizzando la struttura a muri portanti e soffitti cassettonati. In contrasto con il contesto, lo stile dell’intervento è decisamente contemporaneo ma in armonia con il linguaggio architettonico della villa. '
                  }
                ]
              }
            },
            {
              path: '/project_vivere_20',
              name: 'project_vivere_20',
              component: Project_vivere_20,
              meta: {
                title: 'Progetto Vivere in 20 mq - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Questa è stata la sfida. Soddisfare l\'esigenza di una famiglia di avere un mini-appartamento indipendente all\'interno della loro abitazione.'
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Vivere in 20 mq - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_vivere_20"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/vivere20metri/01-scaled.jpg"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Questa è stata la sfida. Soddisfare l\'esigenza di una famiglia di avere un mini-appartamento indipendente all\'interno della loro abitazione.'
                  }
                ]
              }
            },
            {
              path: '/project_casa_gramsci',
              name: 'project_casa_gramsci',
              component: Project_casa_gramsci,
              meta: {
                title: 'Progetto Casa Gramsci - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d\'interni che lascia in comunicazione gli ambienti. '
                  },
                  {
                    property: 'og:title',
                    content: "Progetto Casa Gramsci - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/project_casa_gramsci"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/casagramsci/01.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d\'interni che lascia in comunicazione gli ambienti. '
                  }
                ]
              }
            },

            {
              path: '/cose_di_casa',
              name: 'Cose_di_casa',
              component: Cose_di_casa,
              meta: {
                title: 'Pubblicazione Cose di Casa Agosto 2022 - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d\'interni che lascia in comunicazione gli ambienti.'
                  },
                  {
                    property: 'og:title',
                    content: "Pubblicazione Cose di Casa Agosto 2022 - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/cose_di_casa"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/pubblicazioni/cosedicasa_luglio2022/cosedicasa_luglio2022_1.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'Situato in un edificio anni ’60 multifamiliare, su due piani, con uso comune di giardino e posti auto, l’appartamento è stato completamente riconfigurato puntando su praticità, durata, sostenibilità e con un progetto d\'interni che lascia in comunicazione gli ambienti.'
                  }
                ]
              }
            },

            {
              path: '/come_ristrutturare_la_casa',
              name: 'C_r_c',
              component: C_r_c,
              meta: {
                title: 'Pubblicazione Come Ristrutturare La Casa Marzo Aprile 2024 - Fava Claudio Architetto',
                metaTags: [
                  {
                    name: 'description',
                    content: 'La trasformazione di un bilocale a Viareggio in un open space dominato dal nero, con dettagli in legno di rovere, un opera di design su misura che ottimizza spazio e funzionalità.'
                  },
                  {
                    property: 'og:title',
                    content: "Pubblicazione Come Ristrutturare La Casa Marzo Aprile 2024 - Fava Claudio Architetto - Fava Claudio Architetto"
                  },
                  {
                    property: 'og:url',
                    content: "https://www.favaclaudio.com/come_ristrutturare_la_casa"
                  },
                  {
                    property: 'og:image',
                    content: "https://www.favaclaudio.com/img/pubblicazioni/CRC_marzo_aprile_2024/crc_marzo_2024_copertina.webp"
                  },
                  {
                    property: 'og:type',
                    content: "website/project page"
                  },
                  {
                    property: 'og:description',
                    content: 'La trasformazione di un bilocale a Viareggio in un open space dominato dal nero, con dettagli in legno di rovere, un opera di design su misura che ottimizza spazio e funzionalità.'
                  }
                ]
              }
            },


    {
      path: '/Cento_idee',
      name: 'Cento_idee',
      component: Cento_idee,
      meta: {
        title: 'Pubblicazione 100 Idee per Ristrutturare Luglio 2022 - Fava Claudio Architetto',
        metaTags: [
          {
            name: 'description',
            content: 'Un viaggio nel mondo del salus per aquam alla ricerca delle soluzioni più idonee all\'area wellness connessa direttamente alla zona notte, per una rigenerazione totale. La spa è stata realizzata ricercando il giusto linguaggio di integrazione tra arredo e tecnologie contemporanee.'
          },
          {
            property: 'og:title',
            content: "Pubblicazione 100 Idee per Ristrutturare Luglio 2022 - Fava Claudio Architetto"
          },
          {
            property: 'og:url',
            content: "https://www.favaclaudio.com/cento_idee"
          },
          {
            property: 'og:image',
            content: "https://www.favaclaudio.com/img/pubblicazioni/100idee_luglio2022/100idee_luglio2022_2.webp"
          },
          {
            property: 'og:type',
            content: "website/project page"
          },
          {
            property: 'og:description',
            content: 'Un viaggio nel mondo del salus per aquam alla ricerca delle soluzioni più idonee all\'area wellness connessa direttamente alla zona notte, per una rigenerazione totale. La spa è stata realizzata ricercando il giusto linguaggio di integrazione tra arredo e tecnologie contemporanee.'
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

export default router

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



