//var pool = require('./pool')
//
//class GoodsModel{
//	constructor(){}
//	getGoodsDat(callback){
//		pool.getConnection(function(err,connection){
//			if(err) throw err;
//			connection.query("select * from goods",function(err,results){
//				if(err) throw err;
//				var data = [];
//				results.forEach(ele=>{
//					if(!ele.content_id){
//						ele.content = [];
//						data.push(ele)
//					}else{
//						data.forEach((el,index)=>{
//							if(el.shop_id == ele.content_id){
//								data[index].children.push(ele)
//							}
//						})
//					}
//				})
//				callback(data)
//				connection.release()
//			})
//		})
//	}
//}
//
//
//module.exports = GoodsModel




var pool =require('./pool')


class GoodsModel{
    constructor(){}
    getGoodsData(params,callback){
        var {pid,pageNum,pageSize} = params;
        
        pid*=1;  //把字符串 =》数字
        pool.getConnection(function(err,connection){
            if(err) throw err;
            //部分字段查询
            var sqlStr = "select * from goods"
            if(pid){
                //想要按照分类搜索  
                var sqlStr =sqlStr+" where pid="+pid
            }
            if(pageNum){
                pageSize = pageSize||10
                var startNum = pageSize * (pageNum-1)
                //0,5   5,5   10,5
                sqlStr+=` limit ${startNum},${pageSize}`
            }
            console.log(pageNum,sqlStr)
            
            connection.query(sqlStr,function(err,listData){
                //释放连接
                //
                connection.query("select count(*) as total from goods",function(err,results){
                    console.log(results[0].total)
                     callback({
                        listData,
                        count:results[0].total
                     })
                    connection.release()
                })
               
            })
        })
    }
    getDetailData({pid},callback){
        pool.getConnection((err,connection)=>{
             if(err) throw err;
             connection.query(`select * from goods where pid=${pid||1}`,function(err,results){
                 if(err) throw err;
                 callback(results[0])
                 //释放连接
                 connection.release()
             })
        })
    }
    add({goodsName,pid,price,discount,img_url,total_number,seller_number},callback){
         content_img = JSON.stringify(content_img)
         pool.getConnection((err,connection)=>{
             if(err) throw err;
             var sqlStr = `insert into goods(goodsname,pid,price,total_number,img_url) values('${goodsname}',${pid},'${price}','${total_number}','${img_url}')`
             console.log(sqlStr)
             connection.query(sqlStr,function(err,results){
                 if(err) throw err;
                 callback(results[0])
                 //释放连接
                 connection.release()
             })
        })
    }
}

module.exports = GoodsModel