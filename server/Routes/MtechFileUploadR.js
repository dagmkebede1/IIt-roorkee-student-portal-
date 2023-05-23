import express from 'express'
import MtechMulter from '../middleware/forMtech.js'
import uploadMtechFile from '../controllers/MtechFileUploadC.js'

let MtechFileUploadR = express.Router()

MtechFileUploadR.post('/mtechUpload',MtechMulter,uploadMtechFile)

export default MtechFileUploadR;