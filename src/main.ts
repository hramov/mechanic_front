import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight, faPencilAlt, faPencilRuler, faTrash, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret);
library.add(faPencilAlt);
library.add(faPencilRuler);
library.add(faTrash);
library.add(faArrowCircleRight);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')