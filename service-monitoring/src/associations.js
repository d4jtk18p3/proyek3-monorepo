const mataKuliah = require('./models/Mata_Kuliah')
const programStudi = require('./models/Program_Studi')
const mahasiswa = require('./models/Mahasiswa')
const kelas = require('./models/Kelas')
const perkuliahan = require('./models/Perkuliahan')
const dosen = require('./models/Dosen')
const jabatan = require('./models/Jabatan')
const jurusan = require('./models/Jurusan')
const tugas = require('./models/Tugas')
const subtugas = require('./models/Subtugas')
const studi = require('./models/Studi')

const setAssociations = () => {
  programStudi.hasMany(mataKuliah, {
    foreignKey: 'kode_program_studi'
  })
  mahasiswa.belongsToMany(perkuliahan, {
    through: 'Studi'
  })
  kelas.hasMany(mahasiswa, {
    foreignKey: 'kode_kelas'
  })
  kelas.hasMany(perkuliahan, {
    foreignKey: 'kode_kelas'
  })
  mataKuliah.hasMany(perkuliahan, {
    foreignKey: 'id'
  })
  perkuliahan.hasMany(studi, {
    foreignKey: 'id'
  })
  mahasiswa.hasMany(studi, {
    foreignKey: 'id'
  })
  dosen.belongsToMany(perkuliahan, {
    through: 'Pengajar'
  })
  perkuliahan.belongsToMany(dosen, {
    through: 'Pengajar'
  })
  dosen.hasMany(kelas, {
    foreignKey: 'nip'
  })
  dosen.hasMany(programStudi, {
    foreignKey: 'nip'
  })
  dosen.hasMany(jurusan, {
    foreignKey: 'nip'
  })
  dosen.hasMany(jabatan, {
    through: 'menjabat'
  })
  // jabatan.hasOne(dosen, {
  //   foreignKey: 'id_jabatan'
  // })
  programStudi.hasMany(mataKuliah, {
    foreignKey: 'kode_program_studi'
  })
  programStudi.hasMany(kelas, {
    foreignKey: 'kode_program_studi'
  })
  jurusan.hasMany(programStudi, {
    foreignKey: 'kode_jurusan'
  })
  perkuliahan.hasMany(tugas, {
    foreignKey: 'id_perkuliahan'
  })
  studi.hasMany(subtugas, {
    foreignKey: 'id_studi'
  })
  tugas.hasMany(subtugas, {
    foreignKey: 'id_tugas'
  })
  // subtugas.belongsToMany(kriteria, {
  //   through: 'id_subtugas'
  // })
  // mahasiswa.belongsToMany(kriteria, {
  //   through: 'id_mahasiswa'
  // })
}

module.exports = setAssociations