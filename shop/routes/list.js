var express = require('express');
var router = express.Router();

var list = require("../models/list");
var myList = new list()

router.get('/getListData',function(req,res,next){
	myList.getListData(function(listData){
		res.send(JSON.stringify(listData))
	})
})

module.exports = router;
