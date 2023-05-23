import connectionInfo from "../server.js"

let getStudentInfo = (req,res)=>{
    let getAllStudents = `SELECT * FROM userinfo`
    connectionInfo.query(getAllStudents,(err,result,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({
                data:result
            })
        }
    })
}

export default getStudentInfo
