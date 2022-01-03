module.exports = {
  devServer: {
    port: 14415,
    allowedHosts: [
      "akun.localhost",
      "frontend.localhost"
    ]
  },
  transpileDependencies: [
    "vuetify"
  ],
  pwa: {
    name: "Sistem Absensi dan Penilaian",
    manifestOptions: {
      short_name: "SAP",
      start_url: "/home"
    },
    themeColor: "#f5f5f5",
    msTileColor: "#FFFFFF"
  }
}
