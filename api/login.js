module.exports.login = function(app) {

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
})}