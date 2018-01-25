var pool = require('./pool')


class LbtModel{
	constructor(){}
	getLbtData(callback){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			connection.query("select * from lbt",function(err,results){
				if(err) throw err;
				var data = [];
				results.forEach(ele=>{
					if(!ele.pic_id){
						ele.children = [];
						data.push(ele)
					}else{
						data.forEach((el,index)=>{
							if(el.page_id==ele.pic_id){
								data[index].children.push(ele)
							}
						})
					}
				})
				callback(data)
				connection.release()
			})
		})
	}
}

module.exports = LbtModel