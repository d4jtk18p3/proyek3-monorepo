import Kategori_Nilai from '../models/Kategori_Nilai.js'
import Nilai from '../models/Nilai.js'
import Mahasiswa from '../models/Mahasiswa.js'

import sequelize from '../db.js'


export const insertOneNilai = async (id_nilai,id_kategori,nilai,nim) => {
  try {
    const kategori_nilai = await Kategori_Nilai.findOne({
      where : {id_kategori: id_kategori}
    })
    if(kategori_nilai === null){
      console.log("kategori nilai tidak ditemukan")
      throw error
    }
    const mhs = await Mahasiswa.findOne({
        where: {nim: nim}
      })
    if(mhs === null){
      console.log("Nim tidak ditemukan")
      throw error
    }
    const newNilai = await Nilai.create({
      id_nilai: id_nilai,
      id_kategori: id_kategori,
      nilai: nilai,
      nim: mhs.nim,
    })
    return newNilai
  } catch (error) {
    console.log(error)
  }
}

export const importNilai = async (idperkuliahan,dataKategori, dataNilai) => {
  try {
    var dataKategori = dataKategori
    var dataNilai = dataNilai
    const idPerkuliahan = idperkuliahan

    const kk = await Kategori_Nilai.findAll({
      where: { id_perkuliahan: idPerkuliahan}
    })
    if(kk !== null){
      await Kategori_Nilai.destroy({
          where: { id_perkuliahan: idPerkuliahan }
        })
    }
    const result = await Kategori_Nilai.bulkCreate(dataKategori)
    const result2 = await Nilai.bulkCreate(dataNilai)

    if(result === null){
      console.log("Kategori gagal di insert")
      throw error
    }
    if(result2 === null){
      console.log("Nilai gagal di insert")
      throw error
    }

    return result2
  } catch (error) {
    console.log(error)
  }
}

export const getNilaiByListKategoriPerkuliahan = async (kategoriPerkuliahan) => {
  try {
    var listKategori = kategoriPerkuliahan
    const allNilai = await Nilai.findAll({
      where: {
        kode_kategori: listKategori
      }
    })
    return allNilai
  } catch (error) {
    return Promise.reject(new Error('Get nilai by kategori perkuliahan gagal'))
  }
}

export const getOneNilaibyMahasiswa= async (NIM) => {
  try {
    const nilai = await Nilai.findAll({
      where: {
        NIM
      }
    })
    return nilai[0]
  } catch (error) {
    return Promise.reject(new Error('Get nilai by Mahasiswa gagal'))
  }
}

export const getAllNilai = async () => {
  try {
    const nilai = await Nilai.findAll()
    return nilai
  } catch (error) {
    return Promise.reject(new Error('Get all nilai gagal'))
  }
}

export const updateNilaibyMahasiswa = async (NIM, nilai) => {
  try {
    const nilai_mahasiswa = await Nilai.update(
      {
        nilai_mahasiswa: nilai
      },
      {
        where: {
          NIM
        },
        silent: true
      }
    )
    return nilai_mahasiswa[0]
  } catch (error) {
    console.error(error)
  }
}

export const destroyNilaiByMahasiswa = async (NIM) => {
  try {
    const nilai = await Mahasiswa_nilai.destroy({
      where: {
        NIM
      }
    })
    return nilai
  } catch (error) {
    return Promise.reject(new Error('Delete Nilai by Mahasiswa gagal'))
  }
}

export const getNilaiByKelasMKSemester = async (kelas, matkul, semester) => {
  try {
    const sql_query =
    `SELECT "Nilai".id, "Nilai".nim, "Nilai".nilai, "Kategori_Nilai".kode_kategori,
    "Perkuliahan".id, "id_mata_kuliah", "kode_kelas", "semester" FROM "Perkuliahan"
    INNER JOIN "Mata_Kuliah" ON "Perkuliahan".id_mata_kuliah = "Mata_Kuliah".id
    INNER JOIN "Kategori_Nilai" ON "Perkuliahan".id = "Kategori_Nilai".id_perkuliahan
    INNER JOIN "Nilai" ON "Kategori_Nilai".kode_kategori = "Nilai".kode_kategori
    WHERE "kode_kelas" = ${kelas} AND "id_mata_kuliah" = ${matkul} AND "semester" = ${semester};`;

    return await sequelize.query(sql_query, { type: sequelize.QueryTypes.SELECT });

  } catch (error) {
    return Promise.reject(new Error('Get Nilai by Kelas, Mata Kuliah, and Semester gagal'))
  }
}
