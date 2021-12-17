import MataKuliah from '../models/Mata_Kuliah'
import sequelize from '../db.js'

export const findMatkulById = async (id) => {
<<<<<<< HEAD
    try {
      const matkul = await MataKuliah.findAll({
        where: {
          id: id
        }
      })
      return matkul[0]
    } catch (error) {
      return Promise.reject(new Error('Find Pengajar by NIP gagal'))
    }
  }
=======
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
>>>>>>> parent of f383a09 (Merge remote-tracking branch 'origin/Penilaian/BE1002')
