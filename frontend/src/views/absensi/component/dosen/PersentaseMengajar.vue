<template>
  <v-flex>
    <v-card class="d-flex pa-0" :height="450" :width="541">
      <div class="flex-column w-100">
        <div id="card-title">
          <h3 class="white--text">
            Rekap Presensi Dosen
          </h3>
        </div>
        <div class="flex-column mx-2">
          <v-card-actions>
            <v-row no-gutters>
              <v-col cols="8">
                <v-card-text class="ma-0 ml-1 mb-2 pa-0"
                  >Nama Mata Kuliah</v-card-text
                >
                <v-progress-linear
                  class="mr-3 pa-0"
                  id="rounded-bar"
                  :height="25"
                  :value="60"
                  color="#59DCDC"
                  background-color="#DADADA"
                >
                  <!-- :value="persentaseMengajar.persentaseJamMengajarDosen" -->
                </v-progress-linear>
              </v-col>
              <v-col cols="4">
                <v-card-text
                  class="ml-3 mt-3 ma-0 pa-0 font-weight-bold text-center"
                  id="dark-blue"
                  >60%</v-card-text
                >
                <v-card-text class="ml-3 ma-0 pa-0 text-center" id="dark-blue"
                  >Total Jam Mengajar</v-card-text
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-flex>
</template>
<style scoped>
p {
  font-size: 16px;
}

.w-100 {
  width: 100%;
}

#card-title {
  background: #272343;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-top: 2px;
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

<script>
import { mapGetters } from "vuex";

export default {
  name: "PersentaseMengajar",

  data() {
    return {
      persenTidakMengajar: 0
    };
  },
  props: {
    persentaseMengajar: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor"
    })
  }
};
</script>
