/*var express = require('express');
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

app.post('/api/login', function(req,res){

    if(!req.body) {
        return res.sendStatus(400);
    }
    const userCredentials = [
        {email: "zhu@email.com", pass: "pass"},
        {email: "jon@email.com", pass: "pass"},
        {email: "ethan@email.com", pass: "pass"}
    ]
    var customer = {};
    customer.email = req.body.email;
    customer.pass = req.body.pass;
    var item = {"ok": false};
    for (var i = 0; i < userCredentials.length;i++) {
        if (req.body.email == userCredentials[i].email && req.body.pass == userCredentials[i].pass){
            item.ok = true;
            break;
        }
    }

    res.send(item);
    /*if(req.body.email == "zhu@email.com" && req.body.pass == "pass"){
        customer.valid =true;
    }else{
        customer.valid = false;
    } */

   /* userCredentials.forEach(function(element) {
        if (req.body.email == element.email  && req.body.pass == element.pass){
            customer.valid = true;
        }
        else{
            customer.valid = false;
        }
    }); 
    //res.write(customer);


});


*/