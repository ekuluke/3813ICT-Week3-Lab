module.exports = function(app,path){
    // app passes in the express object needed for the route.
    // path passes in a path object needed to find the file. The
    app.get('/account',function(req,res){
    let filepath = path.resolve('./www/account.html');
    res.sendFile(filepath);
    });
}
    