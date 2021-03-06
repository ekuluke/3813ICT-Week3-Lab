var express = require('express');
var path = require('path');
var app = express();
var loginAPI = require('./routes/loginroute.js');
var indexRoute = require('./routes/indexroute.js');
var accountRoute = require('./routes/accountroute.js');


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

indexRoute(app, path);

accountRoute(app,path);

loginAPI(app);


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
    }); */
    //res.write(customer);




