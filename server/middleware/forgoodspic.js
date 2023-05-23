import multer from 'multer';

const storage = multer.diskStorage({
  destination : function (req,file,cb){
    cb(null,"./Resources/goodsPicture")
  },
  filename : function(req,file,cb){
    cb(null,`${Date.now()}_${file.originalname}`)
  }
});

//* for image format filtration
const fileFilter = function (req,file,cb){
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null,true)
    }else{
        cb(new AppError("Not a proper image format. please upload image with jpeg and png extension",400),false)
    }
}

//* initializing multer 
const uploadFromStaff = multer({
    storage:storage,
    fileFilter:fileFilter
})


export default uploadFromStaff.single('item_photo');