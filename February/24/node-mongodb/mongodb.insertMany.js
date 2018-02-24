var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bleed'

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('bleed')
	var myobj =  [
              { _id: 154, name: '笔记本电脑' },
              { _id: 155, name: '耳机' },
              { _id: 156, name: '台式电脑' }
            ]
    dbo.collection('products').insertMany(myobj, function(err, res){
    	if(err) throw err;
    	console.log('插入的文档数量为', res.insertedCount, res)
    	db.close();
    })
})