import * as Keycloak from "keycloak-js"

const keycloak = Keycloak({
  url: process.env.VUE_APP_KEYCLOAK_BASE_URL,
  realm: process.env.VUE_APP_KEYCLOAK_REALM,
  clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID
})

const authentication = {
  state: () => ({
    identity: null
  }),

  mutations: {
    SET_IDENTITY (state, identity) {
      state.identity = identity
    }
  },

<<<<<<< HEAD
  
getters: {
=======
  getters: {
>>>>>>> parent of 102c2d4 (Merge branch 'Absensi/FE1101' of https://github.com/PengembanganWeb-D4-B-JTK-2019/proyek3-monorepo into Absensi/FE1101)
    identity: state => {
      console.log(state.identity)
      return {
        realm_access: {
          roles: ["dosen"]
        },
        preferred_username: "196111091993032000"
      }
    }
  },


<<<<<<< HEAD

=======
>>>>>>> parent of 102c2d4 (Merge branch 'Absensi/FE1101' of https://github.com/PengembanganWeb-D4-B-JTK-2019/proyek3-monorepo into Absensi/FE1101)
  actions: {
    async authenticate ({ commit }, forceLogin = false) {
      const auth = await keycloak.init({ onLoad: "login-required" })

      commit("SET_IDENTITY", keycloak.tokenParsed)

      if (!auth) {
        window.location.reload()
      } else {
        setInterval(async () => {
          try {
            await keycloak.updateToken(70)
          } catch (err) {
            console.error(err)
          } finally {
            commit("SET_IDENTITY", keycloak.tokenParsed)
          }
        }, 6000)
      }
    },

    async logout ({ state }, router) {
      await router.push("/home")
      keycloak.logout()
    }
  }
}

export default authentication
