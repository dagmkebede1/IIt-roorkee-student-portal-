import express from 'express'
import {getAllEducationalDocMetch,getAllEducationalDocBtech,getAllEducationalDocPhd} from '../controllers/getAllEducationalDocsC.js'

let getAllEduDocR = express.Router()

getAllEduDocR.get('/getBtechDoc',getAllEducationalDocBtech)
getAllEduDocR.get('/getMtechDoc',getAllEducationalDocMetch)
getAllEduDocR.get('/getPhdDoc',getAllEducationalDocPhd)

export default getAllEduDocR
