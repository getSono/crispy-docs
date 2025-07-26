import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Crispy Wiki",
  description: "The official Wiki for the minecraft server Crispy",
  themeConfig: {
        search: {
      provider: 'local'
    },
    logo: "https://file.garden/aHqYRbUS6QhALKNZ/crispy.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guidelines', link: '/guidelines' },
      { text: 'Companies', link: '/company' }
    ],

    sidebar: [
      {
        text: 'Server Guidelines',
        items: [
          { text: 'Home', link: '/guidelines' },
          { text: 'Train Building', link: '/guidelines/train-building' },
          { text: 'Platform Building', link: '/guidelines/platform' }
        ]
      },
      {
        text: 'Companies',
        items: [
          { text: 'Home', link: '/company' },
          { text: 'SonoRails', link: '/company/sonorails' },
          { text: 'WEG', link: '/company/weg' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/XTQTnqrNa9' }
    ]
  }
})
