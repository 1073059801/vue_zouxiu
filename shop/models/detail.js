var pool = require('./pool')

class DetailModel{
	constructor(){}
	getDetailData(callback){
		pool.getConnection(function(err,connection){
			if(err) throw err;
			connection.query("select * from detail",function(err,results){
				if(err) throw err;
				callback(results)
				connection.release()
			})
		})
	}
}

module.exports = DetailModel
