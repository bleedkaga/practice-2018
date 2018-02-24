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


var  sql = 'SELECT * FROM Persons';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
})

setTimeout( () => {
	connection.end( err => {
		if(err){
			console.log(err)
		}
		console.log('disconnect')
	})
}, 2000)
