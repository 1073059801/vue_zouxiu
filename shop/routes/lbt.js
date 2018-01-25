var express = require('express');
var router = express.Router();

var lbt = require("../models/lbt");
var mylbt = new lbt()

router.get('/getLbtData',function(req,res,next){
	mylbt.getLbtData(function(lbtData){
		res.send(JSON.stringify(lbtData))
	})
})

module.exports = router;
