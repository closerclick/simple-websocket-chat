import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/theme.css'
import './style.css'
import App from './App.vue'
import '@closerclick/closer-click-support'
import { createBackNav } from '@closerclick/closer-click-nav'

// Navegación "volver" unificada del ecosistema (botón físico de Android / gesto
// de iOS / atrás del navegador / chevron del header → cierra modal o sale a
// closer.click).
createBackNav()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
