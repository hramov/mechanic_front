import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight, faPencilAlt, faPencilRuler, faTrash, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import FlashMessage from '@smartweb/vue-flash-message';

library.add(faUserSecret);
library.add(faPencilAlt);
library.add(faPencilRuler);
library.add(faTrash);
library.add(faArrowCircleRight);

const app = createApp(App);

app.use(store);
app.use(router);
// app.use(FlashMessage);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')