import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Links',
  description: '友情链接',
  base: '/links/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/links/icon.svg' }],
    ['meta', { name: 'theme-color', content: '#22C55E' }]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Friends', link: '/friends' },
      { text: 'Submit', link: '/submit' },
      { text: 'Gateway', link: 'https://chenyuheee.github.io/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/chenyuheee' }]
  }
})
