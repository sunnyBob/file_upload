var express = require('express')
var router = express.Router()
var multer = require('multer')
var path = require('path')
var upload = multer({ dest: path.join(__dirname, '/../public/uploads/')})
var fs = require('fs')
var arr = []
function isEmptyObject(obj){  
    for(var key in obj){  
        break;  
        return false  
    }
    return true  
}
router.post('/upload', upload.single('img'), function (req, res, next) {
	var file = req.file
	if(isEmptyObject(file)) {
		arr.push({path: file.originalname})
		fs.createReadStream(file.path)
		   .pipe(fs.createWriteStream(path.join(__dirname, '/../public/images/', file.originalname)))
        res.send("文件上传成功")	
	}
})
router.get('/open', function(req, res, next) {
	res.json({img: arr})
})
module.exports = router