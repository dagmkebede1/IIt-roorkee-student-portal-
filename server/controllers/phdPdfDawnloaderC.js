let phdPdfDawnloader = (req,res)=>{
    let reqParams = req.params.PhdFileName
     res.send(reqParams)
}

export default phdPdfDawnloader