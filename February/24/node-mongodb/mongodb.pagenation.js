var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bleed'

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('bleed')
	dbo.collection('site').find().limit(2).toArray(function(err, result){
		if(err) throw err;
		console.log('limit by', result)
		db.close();
	})

})