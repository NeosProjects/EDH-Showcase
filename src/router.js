import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Pedagogie from '@/views/Pedagogie.vue'
import Equipe from '@/views/Equipe.vue'
import Infrastructure from '@/views/Infrastructure.vue'
import Ouverture from '@/views/Ouverture.vue'
import FindUs from '@/views/FindUs.vue'
import Inscriptions from '@/views/Inscriptions.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/pedagogie', component: Pedagogie },
  { path: '/equipe', component: Equipe },
  { path: '/infrastructure', component: Infrastructure },
  { path: '/ouverture-sur-le-monde', component: Ouverture },
  { path: '/nous-trouver', component: FindUs },
  { path: '/inscriptions-tarifs', component: Inscriptions },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})