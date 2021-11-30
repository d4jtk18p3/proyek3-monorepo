<template>
  <v-flex>
    <v-card width="300" class="d-flex pa-3" height="530">
      <div class="flex-column">
        <div>
          <p class="text-h5 text-center font-weight-bold">
            Rekap Presensi Dosen
          </p>
          <v-card-text class="text-center ma-0 pa-0"
            >*total mengajar selama perkuliahan 1 semester</v-card-text
          >
        </div>
        <div class="flex-column">
          <v-card-text class="mt-3 ma-0 pa-0">Nama Mata Kuliah</v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-col cols="10">
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
              <v-col cols="2">
                <v-card-text class="ml-3 ma-0 pa-0">60%</v-card-text>
              </v-col>
            </v-row>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PersentaseMengajar",

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
