var express = require('express');
var router = express.Router();

var hometwo = require("../models/hometwo");
var myPage = new hometwo()


router.get('/getHomeTwoData',function(req,res,next){
	myPage.getHomeTwoData(function(homeTwoData){
		res.send(JSON.stringify(homeTwoData))
	})
})

module.exports = router;
