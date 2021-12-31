<template>
  <v-dialog v-model="dialog" :width="'80%'">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#2196F3" v-on="on" v-bind="attrs" dark>Generate BAP</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card :min-height="'90vh'">
        <v-card-actions class="justify-end">
          <v-btn icon @click="dialog.value = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-container>
          <v-card-title class="pt-0 pb-0">
            <h2 class="font-weight-bold w100 text-center">
              Berita Acara Perkuliahan
            </h2>
          </v-card-title>
          <v-form>
            <v-container style="width: 80%" class="mt-5">
              <div class="mb-4">
                <p class="mb-1">Materi</p>
                <v-text-field
                  v-model="materi"
                  single-line
                  outlined
                  hide-details
                  required
                ></v-text-field>
              </div>
              <div class="mb-4">
                <p class="mb-1">Kegiatan Mahasiswa</p>
                <v-text-field
                  v-for="(item, index) in kegiatan"
                  v-model="item.value"
                  :key="index"
                  single-line
                  outlined
                  hide-details
                  required
                  class="mt-2"
                ></v-text-field>
                <div class="d-flex justify-end mt-4">
                  <v-btn color="#2196F3" dark rounded @click="addKegiatan()">+</v-btn>
                  <v-btn class="ml-2" color="#FF5252" dark rounded @click="removeKegiatan()">-</v-btn>
                </div>
              </div>
              <div class="mb-4">
                <p class="mb-1">Bukti Perkuliahan</p>
                <Upload
                  @updateBukti="updateBuktiKuliah"
                  :multiple="true"
                ></Upload>
              </div>
              <div class="d-flex justify-end mt-16">
                <v-btn color="#00C853" dark class="pl-8 pr-8" @click="submitBAP()">Save</v-btn>
              </div>
            </v-container>
          </v-form>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import Upload from "@/views/absensi/component/perkuliahan/Upload";
import kehadiran from "@/datasource/network/absensi/perkuliahan";
import bapApi from "@/datasource/network/absensi/bap";

export default {
  props: {
    perkuliahan: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      materi: "",
      kegiatan: [
        {
          value: "",
        },
      ],
      buktiKuliah: [],
      kehadiranMhs: [],
      currentDate: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    updateBuktiKuliah(value) {
      this.buktiKuliah = value;
    },
    async getKehadiran() {
      try {
        const response = await kehadiran.getKehadiranMhs(
          this.perkuliahan.kelas.kode_kelas,
          this.perkuliahan.id_jadwal,
          this.currentDate
        );
        this.kehadiranMhs = response.data.mahasiswa;
      } catch (error) {
        console.log(error);
      }
    },
    addKegiatan() {
      this.kegiatan.push({ value: "" });
    },
    removeKegiatan() {
      this.kegiatan.pop();
    },
    async submitBAP () {
      await this.getKehadiran();

      const hadir = this.kehadiranMhs.filter((item) => item.isHadir === true).length
      const tidak_hadir = this.kehadiranMhs.length - hadir;

      const fileData = new FormData();
      fileData.append("file", this.buktiKuliah[0]);

      const BAP = {
        nip: this.identity.preferred_username,
        id_jadwal: this.perkuliahan.id_jadwal,
        tanggal: this.currentDate,
        materi: this.materi,
        kegiatan: this.kegiatan.map((item) => {return item.value}),
        // NOT WORKING, IDK WHY
        bukti: this.buktiKuliah[0],
        hadir,
        tidak_hadir
      };

      console.log(BAP);
      try {
        const response = await bapApi.postBAP(BAP);
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    Upload,
  },
  computed: {
    ...mapGetters({
      currentTheme: "theme/getCurrentColor",
    }),
    identity: function () {
      return this.$store.getters.identity
    }
  },
};
</script>
