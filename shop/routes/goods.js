var express = require('express');
var router = express.Router();

var goods = require("../models/goods");
var myGoods = new goods()

router.get('/getGoodsData',function(req,res,next){
	myGoods.getGoodsData(function(goodsData){
		res.send(JSON.stringify(goodsData))
	})
});

router.post('/add',function(req,res,next){
	myGoods.add(req.body,function(err){
		res.send({
			msgCode:err?2:1,
			err
		})
	})
});

module.exports = router;
