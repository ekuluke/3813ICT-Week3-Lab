var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./routes/accountroute.js')(app,path); 
require('./routes/loginroute.js')(app,path); 
var http = require('http').Server(app);

app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
    });


    app.get('/', function (req, res) {
        res.sendFile(__dirname + "/www/form.html");
    });

    app.post('/api/login', function(res,req){

        if(!req.body) {
            return res.sendStatus(400);
        }
        let userCredentials = [["Sam", "pass"], ["Zhu", "Xia"], ["Ethan", "Jones"]];
        var customer = {};
        customer.email = req.body.email;
        customer.pass = req.body.password;

        userCredentials.forEach(function(element) {
            if (element[0] == customer.email && element[1] == customer.password){
                customer.valid = true;
            }
            else{
                customer.valid = false;
            }

        })
    }
}


