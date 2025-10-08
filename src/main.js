import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Crée une seule instance de Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// On ajoute Pinia et le router à l’app
app.use(pinia)
app.use(router)

app.mount('#app')
