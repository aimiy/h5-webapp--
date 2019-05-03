var Koa = require('koa');
var Router = require('koa-router');
const serve = require('koa-static');
var service = require('./service/webAppService.js');

var app = new Koa();
var router = new Router();

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
});

app.use(serve('.'));

router.get('/test', (ctx, next) => {
  ctx.body = 'Hello World!';
});

router.get('/img', (ctx, next) => {
  ctx.body = service.get_test_data();
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001);
console.log('listening on port 3001');