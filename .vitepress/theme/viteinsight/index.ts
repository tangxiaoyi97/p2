import type { App } from 'vue'
import spoiler from './spoiler.vue'

export default {
  install(app: App) {
    app.component('spoiler', spoiler)
  }
}