var koa = require('koa');
var controller = require('koa-route');
var app = koa();


app.use(controller.get('/route_test', function*(){
	this.set('Cache-Control', 'no-cache');
	this.body = 'Hello koa';
}));

/*var server = app.listen(3001, function() {
    console.log("server listening at port 3001......");
});
server.setTimeout(0)*/
app.listen(3001);
console.log('KOa start!');