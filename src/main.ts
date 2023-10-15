import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBriefcase, faCalendarDay, faCat, faDog, faHome, faKey, faMapLocationDot, faPaw, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'
import { faStackExchange } from '@fortawesome/free-brands-svg-icons'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// Use plugin with optional defaults


/* add icons to the library */
library.add(faCat, faDog, faPaw, faStackExchange, faHome, faSun, faKey, faBriefcase, faCalendarDay, faMapLocationDot, faSearch)

const app = createApp(App)

app.use(createPinia())
app.use(VCalendar, {})

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
