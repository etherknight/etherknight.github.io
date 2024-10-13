import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({ 
    navbar: [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Projects',
            link: '/projects/'
        }
    ]
  }),
  dest: "./dist",
  lang: 'en-GB',
  title: 'Hello VuePress',
  description: 'Just playing around',
})