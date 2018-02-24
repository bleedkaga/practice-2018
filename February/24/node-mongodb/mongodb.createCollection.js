var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bleed'

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	console.log('数据库已创建')
	var dbase = db.db('bleed');

	//使用 createCollection() 方法创建集合
	dbase.createCollection('products', function(err, res){
		if(err) throw err;
		console.log('创建集合')
		db.close()
	})

})