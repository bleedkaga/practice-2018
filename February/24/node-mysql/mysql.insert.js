var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'my_db',
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});
 
connection.connect( err => {
	if(err){
		console.error(err) ;
		return
	} 
	console.log('connected as id ' + connection.threadId)
});

// 插入数据
// var addSql = 'INSERT INTO Persons(Id, name, url, alexa, country) VALUES(0,?,?,?,?)';
var addSql = 'INSERT INTO Persons(FirstName, LastName, Age) VALUES(?,?,?)';
var addSqlParams = ['菜鸟工具', 'https://c.runoob.com','1234'];

connection.query(addSql, addSqlParams, function(error, result){
	if(error){
		console.log('[INSERT ERROR] - ', error.message);
		return;
	}

	console.log('-------------------INSERT--------------------')
	console.log('INSERT ID:', result)
	console.log('-------------------INSERT--------------------')
})
setTimeout( () => {
	connection.end( err => {
		if(err){
			console.log(err)
		}
		console.log('disconnect')
	})
}, 2000)
