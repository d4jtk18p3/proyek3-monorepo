<template>
    <v-data-table
        :headers="headers"
        :items="rekap_absen_mhs"
        hide-default-header
        disable-sort
        class="font-weight-bolder"
    >

    <template v-slot:header="{ props: { headers } }">
        <thead>
          <tr>
            <th v-for="h in headers" class="v-data-header font-weight-bold text-body-2 text-center" :key="h">
              <span>{{h.text}}</span>
            </th>
          </tr>
        </thead>
    </template>
    </v-data-table>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Component",
    created() {
        
    },
    data () {
        return {
            headers:[
                { text: "No", value: "id_studi", align: "center" },
                { text: "NIM", value: "nim", align: "center" },
                { text: "Nama", value: "name", align: "center" },
                { text: "Presentase Kehadiran", value: "isHadir", align: "center" },
            ],
            rekap_absen_mhs : [
                {
                    id_daftar_hadir_mhs: "1",
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "1",
                    id_keterangan: "NULL",
                    nim: "191524033",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "3",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "2",
                    id_keterangan: "NULL",
                    nim: "191524034",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "5",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "3",
                    id_keterangan: "NULL",
                    nim: "191524035",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "4",
                    id_keterangan: "NULL",
                    nim: "191524036",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "5",
                    id_keterangan: "NULL",
                    nim: "191524037",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "6",
                    id_keterangan: "NULL",
                    nim: "191524038",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "7",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "7",
                    id_keterangan: "NULL",
                    nim: "191524040",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "8",
                    id_keterangan: "NULL",
                    nim: "191524041",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "9",
                    id_keterangan: "NULL",
                    nim: "191524042",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "4",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "10",
                    id_keterangan: "1",
                    nim: "191524043",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "11",
                    id_keterangan: "NULL",
                    nim: "191524044",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "12",
                    id_keterangan: "NULL",
                    nim: "191524045",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "8",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "13",
                    id_keterangan: "NULL",
                    nim: "191524046",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "9",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "14",
                    id_keterangan: "NULL",
                    nim: "191524047",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "15",
                    id_keterangan: "NULL",
                    nim: "191524048",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "10",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "16",
                    id_keterangan: "NULL",
                    nim: "191524049",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "17",
                    id_keterangan: "NULL",
                    nim: "191524050",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "18",
                    id_keterangan: "NULL",
                    nim: "191524051",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "19",
                    id_keterangan: "NULL",
                    nim: "191524052",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "20",
                    id_keterangan: "3",
                    nim: "191524053",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "8",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "21",
                    id_keterangan: "NULL",
                    nim: "191524054",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "22",
                    id_keterangan: "NULL",
                    nim: "191524057",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "23",
                    id_keterangan: "NULL",
                    nim: "191524058",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "24",
                    id_keterangan: "NULL",
                    nim: "191524059",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "4",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "25",
                    id_keterangan: "2",
                    nim: "191524061",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "0",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "26",
                    id_keterangan: "NULL",
                    nim: "191524062",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "9",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "27",
                    id_keterangan: "4",
                    nim: "191524063",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                },
                {
                    keterlambatan: "10",
                    tanggal: "11/22/21",
                    isHadir: "FALSE",
                    minggu: "4",
                    bulan: "11",
                    ja: "3",
                    jb: "4",
                    id_studi: "28",
                    id_keterangan: "NULL",
                    nim: "191524064",
                    createdAt: "NULL",
                    updatedAt: "NULL"
                }
            ]
        }
    },
    computed: {
        ...mapGetters({
            currentTheme: "theme/getCurrentColor",
            isDark: "theme/getIsDark"
        })
    },
    methods: {

    }
}
</script>

<style>
    .active {
        background: #272343;
        color: white;
    }
    .v-data-header{
        background: #272343 !important;
        color: white !important;
    }
    .v-data-footer{
        background: #272343 !important;
        color: white !important;
        font-weight: bold;
    }
    .v-select__selections{
        background: none;
        color: white !important;
    }
    .mdi-menu-down{
        color: white !important;
    }
    .mdi-chevron-right{
        background: none;
        color: white !important;
    }
    .mdi-chevron-left{
        background: none;
        color: white !important;
    }
    /* .mdi dan .v-icon class -> icon luar table keganti juga warnanya*/
</style>