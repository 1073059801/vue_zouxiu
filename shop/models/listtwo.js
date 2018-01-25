var pool = require('./pool')

class ListTwoModel{
	constructor(){}
	getListTwoData(callback){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			connection.query("select * from listtwo",function(err,results){
				if(err) throw err;
				var data = [];
				results.forEach(ele=>{
					if(!ele.content_id){
						ele.list = [];
						data.push(ele)
					}else{
						data.forEach((el,index)=>{
							if(el.str_id==ele.content_id){
								data[index].list.push(ele)
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

module.exports = ListTwoModel