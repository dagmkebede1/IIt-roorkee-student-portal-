import connectionInfo from "../server.js"
let uploadGoods = (req,res)=>{
    console.log(req.file)
    if(req.file){
        let picutreFileName = req.file.filename
        const {item_name,item_price,item_description} = req.body
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    if(
        item_name==""||
        item_price==""||
        item_description==""
    ){
        res.send({
            successMessage: "All Input Fields are Required To Be Filled",
            redirect: "/signup",
            message:"click here to go to signup page"
          });
    }else{

        let goodsToSell = `INSERT INTO market(item_name,item_price,item_description,item_photo,status_check,date_of_notification) VALUES (?)`
          let value =[item_name,item_price,item_description,picutreFileName,"true",dateString]
          console.log(value)
          connectionInfo.query(goodsToSell,[value],(err,result,field)=>{
            if(err){
                console.log(err)
            }else{
                res.send({
                    successMessage: "File Successfully Uploaded",
                    redirect: "/dashboard",
                    message:"Click Here To Go To Home page"
                    })
            }
          })
    }
    }
}

export default uploadGoods