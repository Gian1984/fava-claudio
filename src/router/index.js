import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Project_camera_bimbi from '../components/Project_camera_bimbi.vue'
import Project_casa_nel_parco from '../components/Project_sala_congressi_telecontrol.vue'
import Project_casa_R from '../components/Project_casa_nel_parco.vue'
import Project_casa_rivoli from '../components/Project_casa_rivoli.vue'
import Project_centrale_operativa_telecontrol from '../components/Project_centrale_operativa_telecontrol.vue'
import Project_sala_congressi_telecontrol from '../components/Project_sala_congressi_telecontrol.vue'
import Project_tavolo_operativo from '../components/Project_tavolo_operativo.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Project_camera_bimbi',
    name: 'Project_camera_bimbi',
    component: Project_camera_bimbi
  },
  {
    path: '/Project_casa_nel_parco',
    name: 'Project_casa_nel_parco',
    component: Project_casa_nel_parco
  },
  {
    path: '/Project_casa_R',
    name: 'Project_casa_R',
    component: Project_casa_R
  },
  {
    path: '/Project_casa_rivoli',
    name: 'Project_casa_rivoli',
    component: Project_casa_rivoli
  },
  {
    path: '/Project_centrale_operativa_telecontrol',
    name: 'Project_centrale_operativa_telecontrol',
    component: Project_centrale_operativa_telecontrol
  },
  {
    path: '/Project_sala_congressi_telecontrol',
    name: 'Project_sala_congressi_telecontrol',
    component: Project_sala_congressi_telecontrol
  },
  {
    path: '/Project_tavolo_operativo',
    name: 'Project_tavolo_operativo',
    component: Project_tavolo_operativo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
