module.exports = {
  pages: {
    app: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      excludeChunks: ['silent-renew-oidc']
    },
    silentrenewoidc: {
      entry: 'src/silent-renew-oidc.ts',
      template: 'public/silent-renew-oidc.html',
      filename: 'silent-renew-oidc.html',
      excludeChunks: ['app']
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo-vue-oidc/'
    : '/demo-vue-oidc/'
}
