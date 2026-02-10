import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData } from 'vitepress'
import './style.css'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,

  // 扩展布局，插入自定义标题
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 'doc-before' 插槽位于 Markdown 正文内容的上方
      'doc-before': () => {
        const { frontmatter } = useData()
        
        // 只有当 frontmatter 中存在 title 时才渲染
        if (frontmatter.value.title) {
          return h('div', { class: 'newspaper-headline' }, frontmatter.value.title)
        }
      }
    })
  },

  enhanceApp({ app }) {
    // 注册全局组件（如果有的话）
  }
} satisfies Theme