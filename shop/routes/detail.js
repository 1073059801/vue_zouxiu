var express = require('express');
var router = express.Router();


var Detail = require("../models/detail");
var myDetail = new Detail()

router.get('/getDetailData',function(req,res,next){
	myDetail.getDetailData(function(detailData){
		res.send(JSON.stringify(detailData))
	})
})


module.exports = router;