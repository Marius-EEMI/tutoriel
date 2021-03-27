import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#4299E1'
  },
  i18n: {
    locales: () => [{
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }],
    defaultLocale: 'fr'
  }
})
