import connectionInfo from '../server.js'
let emialCheker = (req,res)=>{
    let getEmail = `SELECT user_email FROM userinfo`
   connectionInfo.query(getEmail,[],(err,data)=>{
    if(err){
        res.send(err)
    }else{
        res.send(data)
    }
   })
}

export default emialCheker;