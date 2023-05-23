import express from 'express'
import phdMulter from '../middleware/forPhd.js'
import uploadPhdFile from '../controllers/phdFileUploadC.js'

let phdFileUploadR = express.Router()

phdFileUploadR.post('/phdUpload',phdMulter,uploadPhdFile)

export default phdFileUploadR;