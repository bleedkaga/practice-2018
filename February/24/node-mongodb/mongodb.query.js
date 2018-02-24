var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bleed'

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('bleed')
	// 可以使用 find()  方法来查找数据， find() 可以返回匹配条件的所有数据。 
	// 如果未指定查询条件， find()  返回集合中的所有数据;
	
	dbo.collection('site').find({}).toArray( function(err, result) {
		if(err) throw err;
		console.log('--------------------result-------------------')
		console.log(result)
		console.log('--------------------result-------------------')
		db.close();
	})
})