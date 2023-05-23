import multer from "multer";

const storage = multer.diskStorage({
    destination : function (req,file,cb){
        // cb(null,"../Resources/fileFromPhd")
        cb(null,"./Resources/fileFromPhd")
    },
    filename : function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`)
    }
});

//* pdf format checker
const fileChecker = function (req,file,cb){
    if (file.mimetype !== 'application/pdf') {
        return cb(new Error('Only PDF files are allowed'))
      }
      cb(null, true)
}

// *initializing multer
const pdfUploader = multer({
    storage:storage,
    fileFilter:fileChecker
})
export default pdfUploader.single('Course_file')

