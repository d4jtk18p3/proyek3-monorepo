import MataKuliah from '../models/Mata_Kuliah'
// import sequelize from '../db.js'

export const findMatkulById = async (id) => {
  try {
    const matkul = await MataKuliah.findAll({
      where: {
        id: id
      }
    })
    return matkul[0]
  } catch (error) {
    return Promise.reject(new Error('Find Matkul by ID gagal'))
  }
}

export const insertOneMatkul = async (
  id,
  semester,
  namaMataKuliah,
  sksTeori,
  sksPraktik,
  kodeProgramStudi
) => {
  try {
    const matkul = await MataKuliah.create({
      id: id,
      semester: semester,
      nama_mata_kuliah: namaMataKuliah,
      sks_teori: sksTeori,
      sks_praktek: sksPraktik,
      kode_program_studi: kodeProgramStudi
    })
    return matkul
  } catch (error) {
    console.error(error)
  }
}

export const findAllMatkul = async () => {
  try {
    const matkul = await MataKuliah.findAll()
    return matkul
  } catch (error) {
    return Promise.reject(new Error('Find all mata kuliah gagal'))
  }
}

export const updateDataMatkul = async (
  id,
  semester,
  namaMataKuliah,
  sksTeori,
  sksPraktik,
  kodeProgramStudi
) => {
  try {
    const matkul = await MataKuliah.update(
      {
        semester: semester,
        nama_mata_kuliah: namaMataKuliah,
        sks_teori: sksTeori,
        sks_praktek: sksPraktik,
        kode_program_studi: kodeProgramStudi
      },
      {
        where: {
          id
        },
        silent: true
      }
    )
    return matkul[0]
  } catch (error) {
    console.error(error)
  }
}

export const deleteMatkulbyId = async (Id) => {
  try {
    const result = await MataKuliah.destroy({
      where: {
        id: Id
      }
    })
    return result
  } catch (error) {
    console.log(error)
  }
}

export const getListSemester = async (req, res) => {
  try {
    const matkul = await MatkulDAO.findAllMatkul()
    const listSemester = []
    let i
    for (i = 0; i < matkul.length; i++) {
      const semester = matkul[i].semester
      listSemester.push(semester)
    }

    const listSemesterUnique = listSemester.filter((c, index) => {
      return listSemester.indexOf(c) === index
    }).sort()

    res.status(200).json({
      status: res.statusCode,
      message: 'get list semester from tabel semester sukses',
      data: {
        listSemesterUnique
      }
    })
  } catch (error) {
    res.status(error.status).json({ error })
  }
}
