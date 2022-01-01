<template>
  <v-flex>
    <v-card class="d-flex pa-0" :height="455" :width="'100%'">
      <div class="flex-column w100">
        <div id="card-title">
          <h3 class="white--text mt-2 font-weight-medium">
            Rekap Presensi Dosen
          </h3>
        </div>
        <v-virtual-scroll :items="items" :item-height="120" height="390">
          <template v-slot:default="{ item }">
            <div class="flex-column mx-2 mt-2">
              <v-card-actions>
                <v-row no-gutters align="center">
                  <v-col cols="8">
                    <PersentaseMengajarModal :matakuliah="item.matkul" />
                    <v-progress-linear
                      class="mr-3 pa-0"
                      id="rounded-bar"
                      :height="25"
                      :value="item.percent"
                      color="#59DCDC"
                      background-color="#DADADA"
                    >
                      <!-- :value="persentaseMengajar.persentaseJamMengajarDosen" -->
                    </v-progress-linear>
                  </v-col>
                  <v-col cols="4">
                    <v-card-text
                      class="
                        responsive
                        ml-3
                        mt-3
                        ma-0
                        pa-0
                        font-weight-black
                        text-center
                      "
                      id="dark-blue"
                      ><h1 class="font-weight-black">
                        {{ item.percent }}%
                      </h1></v-card-text
                    >
                    <v-card-text
                      class="
                        responsive
                        ml-3
                        ma-0
                        pa-0
                        text-center
                        font-weight-bold
                      "
                      id="dark-blue"
                      >Total Jam Mengajar</v-card-text
                    >
                  </v-col>
                </v-row>
              </v-card-actions>
            </div>
          </template>
        </v-virtual-scroll>
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
</style>

<script>
import { mapGetters } from "vuex";
import PersentaseMengajarModal from "./PersentaseMengajarModal.vue";

export default {
  name: "PersentaseMengajar",
  components: {
    PersentaseMengajarModal,
  },
  data() {
    return {
      persenTidakMengajar: 0,
      items: [
        {
          matkul: "PCD TE",
          percent: "60",
        },
        {
          matkul: "PCD TE",
          percent: "60",
        },
        {
          matkul: "PCD TE",
          percent: "60",
        },
        {
          matkul: "PCD TE",
          percent: "60",
        },
        {
          matkul: "PCD TE",
          percent: "60",
        },
        {
          matkul: "PCD TE",
          percent: "60",
        },
      ],
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
