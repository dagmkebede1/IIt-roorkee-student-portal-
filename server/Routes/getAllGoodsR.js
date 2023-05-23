import express from 'express'
import getAllGoods from '../controllers/displayGoodsC.js'

let goodsShowerR = express.Router()
goodsShowerR.get('/getGoods',getAllGoods)
export default goodsShowerR
