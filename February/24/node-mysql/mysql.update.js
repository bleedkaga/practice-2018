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

var modSql = 'UPDATE Persons SET FirstName=?, LastName=? WHERE Age=1';
var modSqlParams = ['菜鸟移动站 update', 'https://m.runoob.com',6]; 

connection.query(modSql, modSqlParams, (err, result) => {
	if(err){
		console.log('[UPDATE ERROR] - ', err.message);
		return;
	}

	console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
})


setTimeout( () => {
	connection.end( err => {
		if(err){
			console.log(err)
		}
		console.log('disconnect')
	})
}, 2000)
