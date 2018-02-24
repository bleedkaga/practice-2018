var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bleed'

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('bleed')
	dbo.collection('orders').drop((err, delOK) => {  // 执行成功 delOK 返回 true，否则返回 false
		if(err) throw err;
		if(delOK){
			console.log('集合删除成功')
			
		}
		else  {
			console.log('集合删除失败');
		}
				db.close()
	})

})