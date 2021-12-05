import express from 'express'
import * as MataKuliahController from '../controller/Mata Kuliah'

const router = express.Router()

router.get('/list-semester', MataKuliahController.getListSemester)

export default router
