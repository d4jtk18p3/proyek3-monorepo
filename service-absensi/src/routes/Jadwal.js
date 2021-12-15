import express from 'express'
import * as JadwalController from '../controller/Jadwal'

const router = express.Router()

router.get('/dosen', JadwalController.getJadwalDosenHrTertentuHandler)
router.get('/mahasiswa', JadwalController.getJadwalMhsHrTertentuHandler)
router.get('/all', JadwalController.getAllJadwal)
router.post('', JadwalController.postNewJadwal)
// new router from 19
router.get('/get/:NIP/:hari', JadwalController.getJadwalDosenHariTertentu)
//
export default router
