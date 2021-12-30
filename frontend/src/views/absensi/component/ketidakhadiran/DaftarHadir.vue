<template>
  <v-card :height="455" :width="'100%'">
    <div id="card-title">
      <h3 align="start" class="font-weight-medium white--text">Validasi Ketidakhadiran</h3>
    </div>
    <v-row v-if="length == 0">
      <v-col>
        <p align="center">Tidak ada data.</p>
      </v-col>
    </v-row>
    <v-row v-for="(mhs, index) in mahasiswa" :key="index">
      <v-col>
        <v-card max-height="1000" :width="'100%'" @click="openDialog(mhs)">
          <div class="body">
            <v-row>
              <v-col cols="4">
                <p class="font-weight-bold">NIM</p>
              </v-col>
              <v-col>
                <p>{{ mhs.nim }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <p class="font-weight-bold">Nama</p>
              </v-col>
              <v-col>
                <p>{{ mhs.nama }}</p>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <Dialog
      @clicked="onClickChild"
      :dialogs="dialogs"
      :dataMhs="dataMhs"
      :kelas="ketidakhadiran.kode_kelas"
    ></Dialog>
  </v-card>
</template>

<script>
import Dialog from "./DialogKetidakhadiran.vue";
import Keterangan from "@/datasource/network/absensi/keterangan";

export default {
  components: { Dialog },
  data() {
    return {
      dialogs: {
        dialog: false,
      },
      dataMhs: [],
      mahasiswa: [],
      kelas: 1803,
      ketidakhadiran: [],
      page: 1,
      perPage: 3,
      pages: [],
      length: 0,
    };
  },
  methods: {
    openDialog(mhs) {
      this.dataMhs = mhs;
      this.dialogs.dialog = true;
    },
    onClickChild(value) {
      this.getKeterangan();
    },
    getKeterangan() {
      Keterangan.getKeterangan(this.kelas)
        .then((response) => {
          this.ketidakhadiran = response.data;
          this.getMhsIzin();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getMhsIzin() {
      this.mahasiswa = [];
      for (var i = 0; i < this.ketidakhadiran.mhs_izin.length; i++) {
        if (this.ketidakhadiran.mhs_izin[i].keterangans[0].isAccepted === -1) {
          this.mahasiswa.push(this.ketidakhadiran.mhs_izin[i]);
        }
      }
      this.length = this.mahasiswa.length;
    },
  },
  beforeMount() {
    this.getKeterangan();
    this.getMhsIzin();
  },
};
</script>
<style scoped>
p {
  margin: 0px;
}
.body {
  padding: 20px;
}
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
