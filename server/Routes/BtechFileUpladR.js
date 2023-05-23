import express from 'express'
import BtechMulter from '../middleware/forBtech.js'
import uploadBtechFile from '../controllers/BtechFileUploadC.js'

let BtechFileUploadR = express.Router()

BtechFileUploadR.post('/btechUpload',BtechMulter,uploadBtechFile)

export default BtechFileUploadR;