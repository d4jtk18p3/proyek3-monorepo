import * as PengajarDAO from '../dao/Pengajar'
import * as PerkuliahaDAO from '../dao/Perkuliahan'
import * as MatkulDAO from '../dao/Mata Kuliah'
import * as KelasDAO from '../dao/Kelas'
import expressValidator from 'express-validator/check'
const { validationResult } = expressValidator

export const getMatkulAjarByDosen = async (req, res) => {
    try {
        const nip = req.params.nip
        const idKelas = req.params.id_kelas
        const pengajar = await PengajarDAO.findPengajarByNIP(nip)
        var i
        var id_perkuliahan = []
        var listIdPerkuliahan = []
        var listMatkul = []
        for (i = 0; i < pengajar.length; i++) {
            var idPerkuliahan = pengajar[i].id_perkuliahan
            listIdPerkuliahan.push(idPerkuliahan)
        }
        for (i = 0; i < listIdPerkuliahan.length; i++) {
            var perkuliahan = await PerkuliahaDAO.findPerkuliahanById(listIdPerkuliahan[i])
            if (perkuliahan.kode_kelas == idKelas) {
                var matkul = await MatkulDAO.findMatkulById(perkuliahan.id_mata_kuliah)
                listMatkul.push(matkul)
                id_perkuliahan.push(perkuliahan.id)
            }
        }
        res.status(200).json({
            message: 'get matkul by dosen sukses',
            data: {
                listMatkul,
                id_perkuliahan
            }
        })
    }
    catch (error) {
        res.status(error.status).json({ error })
    }
}


export const postNewMatkul = async (req, res, next) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            error.status = 400
            throw error
        }

        const {
            id,
            semester,
            namaMataKuliah,
            sksTeori,
            sksPraktik,
            kodeProgramStudi
        } = req.body

        const matkul = await MatkulDAO.insertOneMatkul(
            id,
            semester,
            namaMataKuliah,
            sksTeori,
            sksPraktik,
            kodeProgramStudi
        )

        if (typeof matkul === 'undefined') {
            error.status = 500
            error.message = 'Insert Matkul gagal'
            throw error
        }

        res.status(200).json({
            message: 'insert matkul sukses',
            data: {
                matkul
            }
        })
    } catch (error) {
        next(error)
    }
}