module.exports = {
  pages: {
    app: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      excludeChunks: ['silentrenewoidc']
    },
    notfound: {
      entry: 'src/main.ts',
      template: 'public/404.html',
      filename: '404.html',
      excludeChunks: ['silentrenewoidc']
    },
    silentrenewoidc: {
      entry: 'src/silent-renew-oidc.ts',
      template: 'public/silent-renew-oidc.html',
      filename: 'silent-renew-oidc.html',
      excludeChunks: ['app', 'notfound']
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo-vue-oidc/'
    : '/demo-vue-oidc/'
}
