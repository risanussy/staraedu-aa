import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

router.afterEach(() => {
  setTimeout(() => {
    document.querySelectorAll('.faq .item .q').forEach((q) => {
      q.onclick = () => q.parentElement.classList.toggle('open')
    })
  }, 50)
})

app.use(router).mount('#app')
  