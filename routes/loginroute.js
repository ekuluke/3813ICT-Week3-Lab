module.exports = function(app,path){
    // app passes in the express object needed for the route.
    // path passes in a path object needed to find the file.
    app.get('/login',function(req,res){
    let filepath = path.resolve('./www/login.html');
    res.sendFile(filepath);
    });
}
    