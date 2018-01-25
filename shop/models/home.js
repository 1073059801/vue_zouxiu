var pool = require('./pool')

class HomeModel{
	constructor(){}
	getHomeData(callback){
		pool.getConnection(function(err,connection){
			
			if(err) throw err;
			connection.query("select * from shouye",function(err,results){
				if(err) throw err;
				var data = [];
				results.forEach(ele=>{
					if(!ele.content_id){
						ele.children = [];
						data.push(ele)
					}else{
						data.forEach((el,index)=>{
							if(el.str_id==ele.content_id){
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

module.exports = HomeModel