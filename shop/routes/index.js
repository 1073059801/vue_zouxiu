var express = require('express');
var router = express.Router();

var index = require("../models/index");
var myFirst = new index()

router.get('/getFirstData',function(req,res,next){
	myFirst.getFirstData(function(firstData){
		res.send(JSON.stringify(firstData))
	})
})

module.exports = router;
