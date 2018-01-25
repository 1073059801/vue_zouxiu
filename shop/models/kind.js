var pool = require('./pool')

class KindModel{
	constructor(){}
	getKindData(callback){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			connection.query("select * from kindright",function(err,results){
				if(err) throw err;
				var data = [];
				results.forEach(ele=>{
					if(!ele.proId){
						ele.children = [];
						data.push(ele)
					}else{
						data.forEach((el,index)=>{
							if(el.LogoId==ele.proId){
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

module.exports = KindModel
