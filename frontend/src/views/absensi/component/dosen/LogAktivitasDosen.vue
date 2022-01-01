<template>
  <v-card width="auto" :class="$vuetify.breakpoint.mobile ? 'ml-0' : 'ml-4'">
    <v-app-bar :style="{ background: currentTheme.onBackground }">
      <v-toolbar-title class="responsive" style="color: white"
        ><h3 class="font-weight-medium">Jadwal</h3></v-toolbar-title
      >
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-card height="393" width="auto" class="px-5 rounded-md">
      <p
        class="responsive text-h6 font-weight-bold ml-5 text-left pt-4 my=0"
        :style="{ color: currentTheme.onBackground }"
      >
        {{ getDay }}
      </p>
      <p
        class="text-h7 font-weight-bold ml-7 text-left py-0"
        :style="{ color: currentTheme.onBackground }"
      >
        {{ currentHour }}:{{ currentMinute }}
      </p>
      <v-timeline dense>
        <v-timeline-item
          class="text-h8 pr-0 pl-0 small"
          small
          v-for="(item, index) in jadwalDsn"
          :key="index"
        >
          <v-container class="grey lighten-5 py-0">
            <v-row class="mb-2" no-gutters align="center">
              <v-col sm="5" md="7">
                <v-card
                  class="pa-2 pl-0 font-weight-bold"
                  outlined
                  color="transparent"
                  tile
                  :style="{ color: currentTheme.onBackground }"
                >
                  {{ item.mata_kuliah.nama_mata_kuliah }} {{ item.jenis }}
                </v-card>
              </v-col>
              <v-col sm="5" offset-sm="0" md="5" offset-md="0">
                <v-card
                  class="pa-2 px-0 font-weight-bolder"
                  outlined
                  color="transparent"
                  tile
                >
                  {{ item.waktu_mulai.slice(0, 5) }} -
                  {{ item.waktu_selesai.slice(0, 5) }}
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-card>
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

const ONE_HOURS = 1000 * 60 * 60;

export default {
  created() {
    var current = new Date();
    this.currentDay = current.getDay();
    setInterval(() => {
      current = new Date();
      this.currentDay = current.getDay();
    }, ONE_HOURS);

    this.currentTime = current.getHours() + ":" + current.getMinutes();
    this.currentHour = current.getHours();
    this.currentHour = ("0" + this.currentHour).slice(-2);
    setInterval(() => {
      current = new Date();
      this.currentHour = current.getHours();
      this.currentHour = ("0" + this.currentHour).slice(-2);
    }, 1000);
    this.currentMinute = current.getMinutes();
    this.currentMinute = ("0" + this.currentMinute).slice(-2);
    setInterval(() => {
      current = new Date();
      this.currentMinute = current.getMinutes();
      this.currentMinute = ("0" + this.currentMinute).slice(-2);
    }, 1000);
  },
  data() {
    return {
      currentTime: "",
      currentHour: "",
      currentMinute: "",
      currentDay: null
    };
  },
  name: "LogAktivitasDosen",

  props: {
    jadwalDsn: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor"
    }),
    getDay() {
      switch (this.currentDay) {
        case 1:
          var currentDay = "Senin";
          break;
        case 2:
          currentDay = "Selasa";
          break;
        case 3:
          currentDay = "Rabu";
          break;
        case 4:
          currentDay = "Kamis";
          break;
        case 5:
          currentDay = "Jumat";
          break;
        case 6:
          currentDay = "Sabtu";
          break;
        case 0:
          currentDay = "Minggu";
          break;
      }
      return currentDay;
    }
  }
};
</script>
