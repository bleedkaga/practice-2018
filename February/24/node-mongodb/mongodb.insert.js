var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/orders'

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db('bleed');
	var myobj =  {  product_id: 154, status: 1 }
	dbo.collection('orders').insertOne(myobj, function(err, res) {
		if(err) throw err;
		console.log('文档插入成功')
		db.close();
	})
})