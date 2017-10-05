var mysql = require("mysql");

var connection;// = mysql.createConnection({
	//port: 3306,
	//host: "localhost",
	//user: "root",
	//password: "cookie",
	//database: "burgers_db",

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "cookie",
		database: "burgers"
	});
	}
//});



connection.connect(function(err) {
	if(err) {
		console.error("error connecting");
		return
	}
	console.log("connected!")
});

module.exports = connection;