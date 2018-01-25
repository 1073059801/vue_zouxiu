var express = require('express');
var router = express.Router();

var home = require("../models/home");
var myHome = new home()

router.get('/getHomeData',function(req,res,next){
	myHome.getHomeData(function(homeData){
		res.send(JSON.stringify(homeData))
	})
})

module.exports = router;
