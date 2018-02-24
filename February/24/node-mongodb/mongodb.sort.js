var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bleed'

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('bleed')
	var mysort = { count : -1}
	// { count: 1 }  // 按 count 字段升序
	// { count: -1 } // 按 count 字段降序
	dbo.collection('site').find().sort(mysort).toArray(function(err, result){
		if(err) throw err;
		console.log('sort by', result)
		db.close();
	})
	db.close();
})