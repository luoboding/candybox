//this is a http server of project
var koa = require('koa');
// app.use(route.get('/', index));
// app.use(route.get('/login', login));
var server = koa();
require('./components/manager')(server);
server.listen(8088);
console.log('server running on port 8008');
