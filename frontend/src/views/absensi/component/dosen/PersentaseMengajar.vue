<template>
  <v-flex>
<<<<<<< HEAD
    <v-card class="d-flex pa-0" :height="455" :width="541">
      <div class="flex-column w-100">
        <div id="card-title">
          <h3 class="white--text mt-2">
=======
    <v-card width="300" class="d-flex pa-3" height="530">
      <div class="flex-column">
        <div>
          <p class="text-h5 text-center font-weight-bold">
>>>>>>> parent of 102c2d4 (Merge branch 'Absensi/FE1101' of https://github.com/PengembanganWeb-D4-B-JTK-2019/proyek3-monorepo into Absensi/FE1101)
            Rekap Presensi Dosen
          </p>
          <v-card-text class="text-center ma-0 pa-0"
            >*total mengajar selama perkuliahan 1 semester</v-card-text
          >
        </div>
<<<<<<< HEAD
        <div class="flex-column mx-2 mt-2">
          <v-card-actions>
            <v-row no-gutters>
              <v-col cols="8">
                <PersentaseMengajarModal
                  :matakuliah="'PCD TE'"
                />
=======
        <div class="flex-column">
          <v-card-text class="mt-3 ma-0 pa-0">Nama Mata Kuliah</v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-col cols="10">
>>>>>>> parent of 102c2d4 (Merge branch 'Absensi/FE1101' of https://github.com/PengembanganWeb-D4-B-JTK-2019/proyek3-monorepo into Absensi/FE1101)
                <v-progress-linear
                  class="ma-0 pa-0"
                  :height="25"
                  rounded
                  :value="60"
                  color="#59DCDC"
                  background-color="#DADADA"
                >
                </v-progress-linear>
              </v-col>
<<<<<<< HEAD
              <v-col cols="4">
                <v-card-text
                  class="responsive ml-3 mt-3 ma-0 pa-0 font-weight-bold text-center"
                  id="dark-blue"
                  >60%</v-card-text
                >
                <v-card-text
                  class="responsive ml-3 ma-0 pa-0 text-center"
                  id="dark-blue"
                  >Total Jam Mengajar</v-card-text
                >
=======
              <v-col cols="2">
                <v-card-text class="ml-3 ma-0 pa-0">60%</v-card-text>
>>>>>>> parent of 102c2d4 (Merge branch 'Absensi/FE1101' of https://github.com/PengembanganWeb-D4-B-JTK-2019/proyek3-monorepo into Absensi/FE1101)
              </v-col>
            </v-row>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-flex>
</template>
<<<<<<< HEAD
<style scoped>
@media screen and (max-width: 768px) {
  .responsive {
    font-size: 12px;
  }
  h3 {
    font-size: 14px;
  }
}

@media screen and (min-width: 1200px) {
  .responsive {
    font-size: 16px;
  }
  h3 {
    font-size: 18px;
  }
}

.w-100 {
  width: 100%;
}

#card-title {
  background: #272343;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-top: 2px;
  height: 63.5px;
}

#card-title h3 {
  margin: 3px;
  padding: 10px 10px;
}

#dark-blue {
  color: #272343;
}

#rounded-bar {
  border-radius: 15px;
  border-style: solid;
  border-color: black;
  border-width: thin;
}
</style>
=======
>>>>>>> parent of 102c2d4 (Merge branch 'Absensi/FE1101' of https://github.com/PengembanganWeb-D4-B-JTK-2019/proyek3-monorepo into Absensi/FE1101)

<script>
import { mapGetters } from "vuex";
import PersentaseMengajarModal from "./PersentaseMengajarModal.vue";

export default {
  name: "PersentaseMengajar",
  components: {
    PersentaseMengajarModal
  },
  data() {
    return {
      persenTidakMengajar: 0,
    };
  },
  props: {
    persentaseMengajar: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor",
    }),
  },
};
</script>
