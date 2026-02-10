import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import fs from 'node:fs'
import path from 'node:path'
// @ts-ignore
import texmath from 'markdown-it-texmath'
import katex from 'katex'
// @ts-ignore
import markdownItMark from 'markdown-it-mark'

const firstfile = (subDir: string) => {
  const docsRoot = '.'
  const fullPath = path.join(process.cwd(), docsRoot, subDir)
  
  try {
    if (!fs.existsSync(fullPath)) return '#'
    const files = fs.readdirSync(fullPath)
      .filter(file => file.endsWith('.md') && !file.toLowerCase().includes('index'))
      .sort()
    return files.length > 0 ? `/${subDir}/${files[0].replace('.md', '')}` : '#'
  } catch (e) {
    return '#'
  }
}

const folders = ['PHYSIK']

export default defineConfig({
  base: "/p2/",
  title: "Archive",
  ignoreDeadLinks: true,
  description: "Physics Archive",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.min.css' }]
  ],
  markdown: {
    config: (md) => {
      md.use(markdownItMark)
      md.use(texmath, {
        engine: katex,
        delimiters: 'dollars',
        katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }
      })
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/physik' },
      { text: 'Weltbild', link: firstfile('physik/01 weltbild') },
      { text: 'Elektrizität', link: firstfile('physik/02 elektrizitaet') },
      { text: 'Elektromagnetismus', link: firstfile('physik/03 elektromagnetismus') },
      { text: 'Gravitationstheorie', link: firstfile('physik/04 gravitationstheorie') }
    ],
sidebar: generateSidebar(
      folders.map(folder => ({
        scanStartPath: folder,
        resolvePath: `/${folder}/`,
        useTitleFromFrontmatter: true,
        collapsed: true,
        hyphenToSpace: true,
        sortByFileName: true,
      }))
    ),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})