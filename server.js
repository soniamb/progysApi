function start(){
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

    const mysql = require('mysql');
    const mc = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'progys'
    });
    mc.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/apiRoutes');
routes(app);

app.listen(port);
console.log("Progys API started on port: " + port);
}

console.log("Progys API is starting...");
start();
