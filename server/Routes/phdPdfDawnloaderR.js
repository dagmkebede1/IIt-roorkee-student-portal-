import phdPdfDawnloader from '../controllers/phdPdfDawnloaderC.js'
import express from 'express'


let phdPdfSender = express.Router()
phdPdfSender.get('/download/:PhdFileName',phdPdfDawnloader)

export default phdPdfDawnloader