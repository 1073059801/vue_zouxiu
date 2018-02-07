var pool =require('./pool')


class ClassModel{
    constructor(){}
    getListData(callback){
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query("select * from kindRight",function(err,results){
                
                var data = [];
                results.forEach(ele=>{
                    if(!ele.proId){
                        ele.children = [];
                        data.push(ele)
                    }else {
                        data.forEach((el,index)=>{
                            if(el.LogoId==ele.proId){
                                data[index].children.push(ele)
                            }
                        })
                    }
                })
                callback(data)
                //释放连接
                connection.release()    
            })
        })
    }
     getCateData(params,callback){
        pool.getConnection(function(err,connection){
            if(err) throw err;
            var proId = params.proId ||0 
            connection.query("select * from kindRight where proId="+proId,function(err,results){
                callback(results)
                //释放连接
                connection.release()    
            })
        })
    }
    add({name,proId=0,brandImg=""},callback){
        pool.getConnection(function(err,connection){
            if(err) throw err;
            proId = proId ||0 
            console.log(`insert into kindRight(name,proId,brandImg) values('${name}',${proId},${brandImg}) `)
            connection.query(`insert into kindRight(name,proId,brandImg) values('${name}',${proId},'${brandImg}') `,function(err){
                callback(err)
                //释放连接
                connection.release()    
            })
        })
    }
   
}

module.exports = ClassModel