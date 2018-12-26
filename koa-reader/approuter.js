var Koa = require('koa');
var app = new Koa();
var Router = require('koa-router');
var router = new Router();

router.get('/test', (ctx, next) => {
  ctx.body = 'Hello World!';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001);
console.log('listening on port 3001');