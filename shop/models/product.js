var pool =require('./pool')


class Product{
    constructor(){}
    getListData(params,callback){
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
    del({pid},callback){
    	pool.getConnection((err,connection)=>{
    		var sqlStr = `delete from goods where pid=${pid}`
    		connection.query(sqlStr,function(err,results){
    			callback(err)
    			connection.release()
    		})
    	})
    }
    editor(params,callback){
        const {pid} = params
        //img_list = JSON.stringify(img_list)
       
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            //查询
            console.log("select * from goods where pid="+pid,)
            connection.query("select * from goods where pid="+pid,function(err,results){
                if(err) throw err;
                console.log(results[0])
                if(results[0]){
                    var pro = results[0];
                    var sqlStr = "update goods"
                    //判断不同的 字段
                    Object.keys(params).forEach(key=>{
                        if(pro[key]&&pro[key]!=params[key]){
                            sqlStr+=` set ${key}='${params[key]}'`
                        }
                    })
                    sqlStr+=` where pid=${pid}`
                    //执行修改
                    console.log(sqlStr)
                    connection.query(sqlStr,err=>{
                        callback(err)
                        connection.release()
                    })
                    
                }else{
                    callback("没有该商品")
                    connection.release()
                }
                //释放连接
                
            })
       })
   }
    add({goodsName,price,img_url,total_number,seller_number,discount,pid},callback){
         img_url = JSON.stringify(img_url)
         pool.getConnection((err,connection)=>{
             if(err) throw err;
             var sqlStr = `insert into goods(goodsName,price,total_number,img_url,seller_number,discount,pid) values('${goodsName}','${price}','${total_number}','${img_url}','${seller_number}','${discount}','${pid}')`
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

module.exports = Product
