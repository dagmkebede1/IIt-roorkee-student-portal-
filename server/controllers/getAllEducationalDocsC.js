import connectionInfo   from '../server.js'

let getAllEducationalDocPhd= (req,res)=>{
    let phdQuery = `SELECT * FROM educationaldocument WHERE Section='Phd'`
    connectionInfo.query(phdQuery,(err,data,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({
                data: data
            })
        }
    })
}
let getAllEducationalDocBtech= (req,res)=>{
    let btechQuery = `SELECT * FROM educationaldocument WHERE Section='Btech'`
    connectionInfo.query(btechQuery,(err,data,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({
                data: data
            })
        }
    })
}
let getAllEducationalDocMetch= (req,res)=>{
    let metchQuery = `SELECT * FROM educationaldocument WHERE Section='Mtech'`
    connectionInfo.query(metchQuery,(err,data,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send({
                data: data
            })
        }
    })
}


export {getAllEducationalDocMetch,getAllEducationalDocBtech,getAllEducationalDocPhd}