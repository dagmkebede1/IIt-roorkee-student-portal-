import express from 'express'
import forGoods from '../middleware/forgoodspic.js'
import uploadGoodsFile from '../controllers/uploadgoodsC.js'

let goodsFileUploadR = express.Router()

goodsFileUploadR.post('/uploadGoods',forGoods,uploadGoodsFile)

export default goodsFileUploadR;