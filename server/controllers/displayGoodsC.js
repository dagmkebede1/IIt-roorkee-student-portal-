import connectionInfo from "../server.js"
let getAllGoods = (req,res)=>{
 console.log(req.user)
    let allGoodsToSell = `SELECT * FROM market`
    connectionInfo.query(allGoodsToSell,(err,data,field)=>{
       if(err){
        console.log(err)
       }else{
             res.send({
                data:data

             })
       }
    })
}

export default getAllGoods;