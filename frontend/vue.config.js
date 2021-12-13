module.exports = {
  devServer: {
    port: 14415,
    proxy:{
      '/api/penilaian':{
          target: 'http://localhost:5002'
      },
      '/api/absensi' :{
          target: 'http://localhost:5001'
      }
    },
    allowedHosts: [
      "akun.localhost",
      "frontend.localhost"
    ]
  },
  transpileDependencies: [
    "vuetify"
  ]
}
