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

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

let routes = require('./api/routes/apiRoutes');
routes(app);

app.listen(port);
console.log("Progys API started on port: " + port);
}

console.log("Progys API is starting...");
start();
