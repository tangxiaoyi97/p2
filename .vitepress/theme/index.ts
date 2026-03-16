import { h } from 'vue'
import raspberry from 'vp-raspberry' 
import viteInsight from './viteinsight'

export default {
  extends: raspberry,
  enhanceApp({ app }) {
    app.use(viteInsight)
  }
}