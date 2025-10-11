import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'

const solidIconList = Object.values(solidIcons).filter(i => i.iconName)
const brandIconList = Object.values(brandIcons).filter(i => i.iconName)

library.add(...solidIconList)
library.add(...brandIconList)

const app = createApp(App)
app.component('Icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
