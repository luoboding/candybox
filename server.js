//this is a http server of project
var koa = require('koa');
var router = require('koa-router')();
var server = koa();
require('./components/manager')(router);
var authFilter = require('./components/common/filters/auth-filter');
server.use(router.routes())
      .use(router.allowedMethods());
server.listen(8088);
console.log('server running on port 8088');
