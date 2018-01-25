var pool = require('./pool')

class ListModel{
	constructor(){}
	getListData(callback){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			connection.query("select * from list",function(err,results){
				if(err) throw err;
				var data = [];
				results.forEach(ele=>{
					if(!ele.content_id){
						ele.content = [];
						data.push(ele)
					}else{
						data.forEach((el,index)=>{
							if(el.str_id==ele.content_id){
								data[index].content.push(ele)
							}
						})
					}
				})
				callback(data)
				connection.release();
			})
		})
	}
	
}

module.exports = ListModel
