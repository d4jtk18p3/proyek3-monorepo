import express from 'express'
import * as MataKuliahController from '../controller/Mata Kuliah'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()

router.post('/new-matkul', ValidatorSanitizer.postNewMatkul, MataKuliahController.postNewMatkul)

export default router