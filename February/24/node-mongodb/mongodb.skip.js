var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bleed'

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('bleed')
	// 如果要指定跳过的条数； 可以使用skip 方法
	dbo.collection('site').find().skip(2).limit(2).toArray(function(err, result){
		if(err) throw err;
		console.log('skip for limit by', result)
		db.close();
	})

})