import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import tyhUi2 from './tyhUi'
import 'tyh-ui2/style/index.css'

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hlVue from "@highlightjs/vue-plugin"
hljs.registerLanguage('javascript', javascript)

const app = createApp(App)
app.use(router)
app.use(hlVue)
app.use(tyhUi2)
app.mount('#app')
