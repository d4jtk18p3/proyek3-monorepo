<template>
  <v-flex>
    <v-card class="d-flex pa-0" :height="455" :width="'100%'">
      <div class="flex-column w-100">
        <div id="card-title">
          <h3 class="white--text mt-2">
            Rekap Presensi Dosen
          </h3>
        </div>
        <div class="flex-column mx-2 mt-2">
          <v-card-actions>
            <v-row no-gutters align="center">
              <v-col cols="8">
                <PersentaseMengajarModal
                  :matakuliah="'PCD TE'"
                />
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
                  class="responsive ml-3 mt-3 ma-0 pa-0 font-weight-bold text-center"
                  id="dark-blue"
                  >60%</v-card-text
                >
                <v-card-text
                  class="responsive ml-3 ma-0 pa-0 text-center"
                  id="dark-blue"
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
