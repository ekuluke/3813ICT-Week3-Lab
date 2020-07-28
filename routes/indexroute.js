module.exports = function(app,path){
    app.get('/index', function (req, res) {
        let filePath = path.resolve("./www/form.html");
        res.sendFile(filePath);
    });
    }


