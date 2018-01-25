var pool = require('./pool')

class FirstModel{
	constructor(){}
	getFirstData(callback){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			connection.query("select * from firstpage",function(err,results){
				if(err) throw err;
			
				callback(results)
				connection.release()
			})
		})
	}
}
module.exports = FirstModel
