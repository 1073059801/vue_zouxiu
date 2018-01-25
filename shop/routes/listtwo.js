var express = require('express');
var router = express.Router();

var listtwo = require("../models/listtwo");
var myList = new listtwo()


router.get('/getListTwoData',function(req,res,next){
	myList.getListTwoData(function(listTwoData){
		res.send(JSON.stringify(listTwoData))
	})
})

module.exports = router;
