module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/experiment',
        '/research'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
