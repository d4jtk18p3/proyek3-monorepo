<template>
  <v-row class="justify-center">
    <v-col xl="4" lg="6" md="8" sm="10" xs="12">
      <v-card class="rounded-0" elevation="10">
        <v-row style="background: #ecebee" class="px-0 py-1 ma-0">
          <v-col cols="12" class="top d-flex justify-center align-center">
            <img src="../../../assets/polban.png" alt="Logo Polban" />
            <div class="ml-2 text-subtitle-2" style="color: #272343">
              Politeknik Negeri Bandung
            </div>
          </v-col>
        </v-row>
        <v-row class="px-0 py-2 ma-0">
          <v-col cols="12" class="d-flex justify-center mt-5">
            <div style="color: #272343" class="text-h5 font-weight-bold">
              Masuk
            </div>
          </v-col>
          <v-col cols="12" class="pa-0 mt-5">
            <v-form ref="form" v-model="valid" @submit.prevent="handleSubmit">
              <v-row class="pa-0 ma-0">
                <v-col
                  :cols="isMobile ? '12' : '10'"
                  :offset="isMobile ? '0' : '1'"
                  :class="isMobile ? 'px-5' : ''"
                  class="pt-0 mt-1"
                >
                  <v-select
                    :items="items"
                    v-model="dropdown"
                    filled
                    label="Masuk sebagai"
                    dense
                    :rules="dropdownRules"
                    required
                  ></v-select>
                </v-col>
                <v-col
                  :cols="isMobile ? '12' : '10'"
                  :offset="isMobile ? '0' : '1'"
                  :class="isMobile ? 'px-5' : ''"
                  class="pt-0 mt-1"
                >
                  <v-text-field
                    name="username"
                    v-model="nomorInduk"
                    filled
                    dense
                    :rules="nomorIndukRules"
                    :color="currentTheme.colorPrimary"
                    label="Masukan NIM/NIP anda disini"
                  />
                </v-col>
                <v-col cols="4" offset="4" class="d-flex justify-center">
                  <v-btn
                    :color="currentTheme.colorSecondary"
                    style="color: white"
                    :disabled="!isInputValid"
                    type="submit"
                    required
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
        <v-row style="background: #ecebee" class="px-0 ma-0 mt-5 py-6">
          <v-col
            cols="12"
            class="top d-flex justify-center align-center pa-0 ma-0"
          >
            <div class="ml-2 text-subtitle-2 message-text">Lupa password?</div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import * as Keycloak from "keycloak-js";
import { mapGetters } from "vuex";
import { checkNIPDosen, checkNIMMahasiswa } from "@/datasource/network/auth/auth";

export default {
  data: () => ({
    valid: false,
    locationHref: "",
    method: "",
    action: undefined,
    nomorInduk: "",
    dropdown: "",
    token: "",
    items: ["dosen", "mahasiswa"],
    dropdownRules: [
      (value) => !!value || "Dropdown tidak boleh kosong",
      (value) => (value && value.length > 0) || "Dropdown tidak boleh kosong",
    ],
    nomorIndukRules: [
      (value) => !!value || "NIM/NIP tidak boleh kosong",
    ],
    rules: {
      emptyDropdown: (value) => !!value || "Dropdown tidak boleh kosong",
      emptyUsername: (value) => !!value || "NIM/NIP tidak boleh kosong",
    },
    isPasswordShown: false,
  }),

  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor",
    }),
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    },
    isInputValid() {
      return true;
    },
    identity: function () {
      return this.$store.getters.identity
    },
  },

  methods:{
    async handleSubmit () {
      this.$refs.form.validate();
      if (this.valid) {
        let response = {};
        
        if (this.dropdown === "dosen") {
          response = await checkNIPDosen(this.nomorInduk);
        } else if (this.dropdown === "mahasiswa") {
          response = await checkNIMMahasiswa(this.nomorInduk);
        }

        if (Object.keys(response).length !== 0) {
          this.$store.dispatch("logAuthStorage", {
            nomorInduk: this.nomorInduk,
            realm: this.dropdown
          });
          this.$router.push({path: "/home"}, () => {
            location.reload();
          });
        } else {
          alert("User tidak terdaftar");
        }
      }
    }
  },

  async created() {
    if (this.identity.preferred_username) {
      this.$router.push({path: "/home"});
    }
    // this.locationHref = (sessionStorage.getItem("login.locationHref") ||
    //                      window.location.href)
    // sessionStorage.removeItem("login.locationHref")
    // const queryString = Object.fromEntries(
    //   new URL(this.locationHref).searchParams
    // )
    // const errors = sessionStorage.getItem("login.errors")
    // sessionStorage.removeItem("login.errors")
    // this.action = sessionStorage.getItem("login.action")
    // sessionStorage.removeItem("login.action")
    // this.username = sessionStorage.getItem("login.username") || ""
    // sessionStorage.removeItem("login.username")
    // this.method = this.$route.query.method || queryString.method
    // this.token = this.$route.query.value
    // const keycloak = Keycloak({
    //   url: process.env.VUE_APP_KEYCLOAK_BASE_URL,
    //   realm: process.env.VUE_APP_KEYCLOAK_REALM,
    //   clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID
    // })
    // const auth = await keycloak.init({ onLoad: "check-sso" })
    // if (auth) {
    //   setInterval(async () => {
    //     try {
    //       await keycloak.updateToken(70)
    //     } catch (err) {
    //       console.error(err)
    //     }
    //   }, 6000)
    //   this.$router.replace({ path: "/" })
    //   return
    // }
    // if (!this.action) {
    //   sessionStorage.setItem("login.locationHref", window.location.href)
    //   await keycloak.init({ onLoad: "login-required" })
    //   window.location.reload()
    //   return
    // }
    // if (Object.keys(queryString).length === 0) {
    //   this.$router.replace({
    //     path: "/login",
    //     query: {
    //       method: "form-action"
    //     }
    //   })
    // } else {
    //   this.$router.replace({
    //     path: "/login",
    //     query: queryString
    //   })
    // }
    // if (this.method === "form-action") {
    //   if (errors && errors.length > 0) {
    //     this.rules.invalidUsernameOrPassword = true
    //     this.password = null
    //     const stopUsernameWatcher = this.$watch("username", () => {
    //       this.rules.invalidUsernameOrPassword = false
    //       stopUsernameWatcher()
    //     })
    //     const stopPasswordWatcher = this.$watch("password", () => {
    //       this.rules.invalidUsernameOrPassword = false
    //       stopPasswordWatcher()
    //     })
    //   }
    // } else if (this.method === "token") {
    //   const form = document.createElement("form")
    //   form.method = "POST"
    //   form.action = this.action
    //   document.body.appendChild(form)
    //   const locationHrefField = document.createElement("input")
    //   locationHrefField.type = "hidden"
    //   locationHrefField.name = "locationHref"
    //   locationHrefField.value = window.location.href
    //   form.appendChild(locationHrefField)
    //   form.submit()
    // }
  },
};
</script>

<style scoped>
.top img {
  width: 40px;
  height: 40px;
}
.message-text {
  color: rgba(39, 35, 67, 0.72);
}
</style>
