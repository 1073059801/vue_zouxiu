var express = require('express');
var router = express.Router();

var kind = require("../models/kind");
var myKind = new kind()

router.get('/getKindData',function(req,res,next){
	myKind.getKindData(function(kindData){
		res.send(JSON.stringify(kindData))
	})
})


module.exports = router;
