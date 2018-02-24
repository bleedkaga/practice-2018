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

var delSql = 'DELETE FROM Persons where Age=35'
connection.query(delSql, (err, result) => {
	if(err){
    console.log('[DELETE ERROR] - ',err.message);
    return;
  }        

 console.log('--------------------------DELETE----------------------------');
 console.log('DELETE affectedRows',result.affectedRows);
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
