module.exports = {
  devServer: {
    port: 8080,
    watchOptions: {
      poll: true
    },
    allowedHosts: [
      "akun.localhost",
      "absensi.localhost",
      "frontend.localhost"
    ]
  },
  transpileDependencies: [
    "vuetify"
  ]
}
