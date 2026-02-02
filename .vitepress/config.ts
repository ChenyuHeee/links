import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Links',
  description: '友情链接',
  base: '/links/',
  themeConfig: {
    nav: [
      { text: 'Friends', link: '/friends' },
      { text: 'Submit', link: '/submit' },
      { text: 'Gateway', link: 'https://chenyuheee.github.io/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/chenyuheee' }]
  }
})
