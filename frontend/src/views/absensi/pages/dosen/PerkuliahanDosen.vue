<template>
<v-container>
 <v-row :style="{color: currentTheme.onBackground}">
  <v-col cols="12">
   <h1 class="font-weight-bold">Perkuliahan</h1>
   <breadcumbs class="pt-2" :breadcrumb-items="breadcrumbItems"/>
  </v-col>
 </v-row>
 <v-row>
    <HeaderPerkuliahan :item="item"></HeaderPerkuliahan>
 </v-row>
  <v-divider>
    </v-divider>
  <br>
  <v-row :style="{ color: currentTheme.onBackground }">
    <v-col>
      <p class="text-h4 font-weight-bold">Daftar Kehadiran Mahasiswa</p>
    </v-col>
    <v-col
    cols = "2" class="d-flex justify-end">
      <UploadBAP :perkuliahan="item"></UploadBAP>
    </v-col>
  </v-row>
  <v-card>
    <v-col class="pb-0">
      <h2>Rekap Presensi Mahasiswa</h2>
    </v-col>
    <TabelAbsensi :perkuliahan="item">
    </TabelAbsensi>

  </v-card>
</v-container>
</template>

<script>
import Breadcumbs from "@/views/shared/navigation/Breadcumbs"
import { mapGetters } from "vuex"
import HeaderPerkuliahan from "@/views/absensi/component/perkuliahan/HeaderPerkuliahan"
import UploadBAP from "@/views/absensi/component/perkuliahan/UploadBAP"
import TabelAbsensi from "@/views/absensi/component/perkuliahan/TabelAbsensi"

export default {
  name: "PerkuliahanDosen",
  props: {
    item: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  components: { Breadcumbs, HeaderPerkuliahan, UploadBAP, TabelAbsensi },
  data () {
    return {
      breadcrumbItems: [
        {
          text: "Home",
          disabled: false,
          href: "/home"
        },
        {
          text: "Dashboard",
          disabled: false,
          href: "absensi"
        },
        {
          text: "Perkuliahan",
          disabled: true
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor"
    })
  },
  methods: {
    getData () {
      console.log(this.item)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
