export default defineNuxtConfig({
  app: {
    head: {
      title: 'What does this site do?',
      htmlAttrs: {
        lang: 'en-US'
      },
      link: [
        {
          rel: 'icon',
          href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>'
        },
        {
          rel: 'canonical',
          href: 'https://what-does-this-site-do.vercel.app'
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'AI to tell you what a wonderful site you have. Using GPT-3.5. Enter your URL and find out what it is about.'
        },
        {
          name: 'author',
          content: 'Gaute Meek Olsen'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: '@GauteMeekOlsen'
        },
        {
          property: 'og:title',
          content: 'What does this site do?'
        },
        {
          property: 'og:url',
          content: 'https://what-does-this-site-do.vercel.app'
        },
        {
          property: 'og:description',
          content: 'AI to tell you what a wonderful site you have. Using GPT-3.5. Enter your URL and find out what it is about.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: 'https://what-does-this-site-do.vercel.app/og_image.png'
        },
      ]
    }
  },
  runtimeConfig: {
    openAiApiKey: '',
  },
})
