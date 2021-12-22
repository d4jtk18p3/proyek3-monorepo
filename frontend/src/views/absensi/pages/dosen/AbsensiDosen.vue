<template>
  <v-container fulid :style="{ color: currentTheme.onBackground }">
    <v-row>
      <v-col>
        <p class="responsive font-weight-bold mb-1">
          Dashboard Presensi
        </p>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col cols="12" class="pa-0">
        <breadcumbs :breadcrumb-items="breadcrumbItems" />
      </v-col>
    </v-row>
    <!-- :justify="$vuetify.breakpoint.sm ? 'left' : 'center'" -->
    <v-row no-gutters :justify="left">
      <v-col
        cols="auto"
        offset-md="2"
        :class="$vuetify.breakpoint.mobile ? 'ma-8 ml-0' : 'ml-0 mr-8'"
      >
        <PersentaseMengajar
          :persentaseMengajar="persentaseMengajar"
        ></PersentaseMengajar>
      </v-col>
      <v-col cols="auto">
        <LogAktivitas :jadwalDsn="jadwalDsn"></LogAktivitas>
      </v-col>
      <v-col cols="auto" offset-md="2" v-if="isWali">
        <h2 align="center" class="text-h5 font-weight-bold">
          Validasi Ketidakhadiran
        </h2>
        <DaftarHadir :ketidakhadiran="ketidakhadiran"> </DaftarHadir>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <AbsenCardDosen
          :jadwalDsn="jadwalDsn"
          :username="username"
        ></AbsenCardDosen>
      </v-col>
    </v-row>
    <v-overlay :value="isLoading">
      <v-progress-circular
        indeterminate
        size="32"
        :color="currentTheme.colorSecondary"
      >
      </v-progress-circular>
    </v-overlay>
  </v-container>
</template>
<style scoped>
@media screen and (max-width: 768px) {
  .responsive {
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.117px;
    font-family: sans-serif;
  }
}

@media screen and (min-width: 1200px) {
  .responsive {
    font-size: 34px;
    line-height: 40px;
    letter-spacing: 0.117px;
    font-family: sans-serif;
  }
}
</style>

<script>
import { mapGetters } from "vuex";
import Breadcumbs from "@/views/shared/navigation/Breadcumbs";
import AbsenCardDosen from "@/views/absensi/component/dosen/AbsenCardDosen";
import LogAktivitas from "@/views/absensi/component/dosen/LogAktivitasDosen";
import PersentaseMengajar from "@/views/absensi/component/dosen/PersentaseMengajar";
import JadwalDosen from "@/datasource/network/absensi/jadwalDosen";
import DashboardDosen from "@/datasource/network/absensi/dashboardDosen";

// const schedule = require("node-schedule")
const INTERVAL = 1000 * 60 * 60;

export default {
  name: "AbsensiDosen",
  components: {
    AbsenCardDosen,
    LogAktivitas,
    PersentaseMengajar,
    Breadcumbs
  },
  created() {
    const tasks = [];
    if (this.$route.meta.requiresAuth) {
      tasks.push(this.waitAuthenticated());
    }
    Promise.all(tasks).then(result => {
      this.username = this.identity.preferred_username;
      this.isLoading = false;
      var current = new Date();
      this.currentDay = current.getDay();
      this.currentDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      this.getJadwalDsn();
      // setTimeout(() => {
      //   this.getJadwalDsn()
      // }, 3000)
      this.getPersentaseMengajar();
      setInterval(() => {
        this.currentDay = current.getDay();
        this.getJadwalDsn();
        this.getPersentaseMengajar();
      }, INTERVAL);
    });
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: "Home",
          disabled: false,
          href: "/home"
        },
        {
          text: "Dashboard",
          disabled: true,
          href: ""
        }
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      jadwalDsn: [],
      persentaseMengajar: [],
      currentDay: null,
      isLoading: true,
      username: "",
      isWali: false
    };
  },
  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor",
      isDark: "theme/getIsDark"
    }),
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    },
    identity: function() {
      return this.$store.getters.identity;
    }
  },
  methods: {
    getJadwalDsn() {
      JadwalDosen.getJadwalDosen(
        this.currentDay,
        this.identity.preferred_username
      )
        .then(response => {
          response.data.jadwal.forEach(function(element) {
            element.absen = false;
            element.active = true;
            element.hadir = false;
            element.duration = 0;
            element.currentDuration = 0;
            element.progress = 0;
            element.id_jadwal_kedua = 0;
            element.id_studi_kedua = 0;
          });
          this.jadwalDsn = response.data.jadwal;
          // setTimeout(() => {
          //   this.cekMatkulSama()
          // }, 3000)
          this.isLoading = false;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPersentaseMengajar() {
      DashboardDosen.persentaseMengajar(this.identity.preferred_username)
        .then(response => {
          this.persentaseMengajar = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    cekMatkulSama() {
      var i = 0;

      while (i < this.jadwalDsn.length - 1) {
        if (
          this.jadwalDsn[i].mata_kuliah.nama_mata_kuliah ===
          this.jadwalDsn[i + 1].mata_kuliah.nama_mata_kuliah
        ) {
          this.jadwalDsn[i].id_jadwal_kedua = this.jadwalDsn[i + 1].id_jadwal;
          this.jadwalDsn[i].id_studi_kedua = this.jadwalDsn[i + 1].id_studi;
          this.jadwalDsn[i].waktu_selesai = this.jadwalDsn[i + 1].waktu_selesai;
          this.jadwalDsn[i].jenis = "TE-PR";
          this.jadwalDsn.splice(i + 1, 1);
        }
        i++;
      }
    },
    async waitAuthenticated() {
      return new Promise(resolve => {
        const unwatch = this.$store.watch(
          state => {
            return this.$store.getters.identity;
          },
          value => {
            if (!value) {
              return;
            }
            // if (!value.isActive) {
            //   this.$router.replace({ path: "/reset-password" })
            // }
            unwatch();
            resolve();
          },
          {
            immediate: true
          }
        );
      });
    }
  }
};
</script>
