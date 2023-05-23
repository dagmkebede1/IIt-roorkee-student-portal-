import connectionInfo from "../server.js"
let uploadMtechFile = (req,res)=>{

    if(req.file){
        let pdfFileName = req.file.filename
        let mtechFilePath = req.file.path
        const {user_department,Document_type,Course_Code,Course_name,Course_given_by} = req.body
    let currentDate = new Date();
    let dateString = currentDate.toLocaleString();
    if(
        Course_Code==""||
        Course_name==""||
        Course_given_by==""
    ){
        res.send({
            successMessage: "All Input Fields are Required To Be Filled",
            redirect: "/signup",
            message:"click here to go to signup page"
          });
    }else{
        let upperCaseCourseCode = Course_Code.toUpperCase()
        let upperCaseCourseName = Course_name.toUpperCase()
        let upperCaseCourseGivenBy = Course_given_by.toUpperCase()
        let upperCaseUserDepartment = user_department.toUpperCase()
        let upperCaseDocumentType = Document_type.toUpperCase()
        let MtechDoc = `INSERT INTO educationaldocument(Section,Department,Document_type,Course_Code,Course_name,Course_given_by,Document,Document_path,Date_of_file_upload) VALUES (?)`
          let value =["Mtech",upperCaseUserDepartment,upperCaseDocumentType,upperCaseCourseCode,upperCaseCourseName,upperCaseCourseGivenBy,pdfFileName,mtechFilePath,dateString]
          connectionInfo.query(MtechDoc,[value],(err,result,field)=>{
               res.send({
            successMessage: "File Successfully Uploaded",
            redirect: "/dashbord",
            message:"Click Here To Go To Home page"
               })
          })
    }
    }
    



}

export default uploadMtechFile