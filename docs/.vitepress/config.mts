import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NDK",
  description: "NDK Docs",
  base: "/ndk/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Usage', link: '/getting-started/usage' },
          { text: 'Signers', link: '/getting-started/signers' },
        ]
      },
      {
        text: 'Tutorial',
        items: [
          { text: 'Local-first', link: '/tutorial/local-first' },
          { text: 'Publishing', link: '/tutorial/publishing' },
        ]
      },
      {
        text: "Cache",
        items: [
          { text: 'Dexie Adapter', link: '/cache/dexie' },
        ]
      },
      {
        text: 'Signers',
        items: [
          { text: "Private key", link: '/signers/private-key' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nostr-dev-kit/ndk' }
    ]
  }
})