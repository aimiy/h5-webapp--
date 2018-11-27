var koa = require('koa');
var controller = require('koa-route');

var views = require('koa-views'); // koa的中间件
var koa_static = require('koa-static-server') // 关于静态文件的请求
var service = require('./service/webAppService.js');
var qs = require('querystring');
var app = new koa();

var server = {
  port:3001
};

app.use(views(__dirname + '/view', {
  map: {
    html: 'ejs' // 用ejs渲染页面
  }
}));

app.use(koa_static({
  rootDir:'./static/',
  rootPath:'/static/',
    maxage:0 // 缓存
  }))

app.use(async (ctx, next) => {
  ctx.set('Content-Type', 'application/json');
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  await next();
});

app.use(controller.get('/api_index',(ctx) => {
  ctx.response.body = service.get_index_data();
}));

app.use(controller.get('/',(ctx) => {
  ctx.response.type = 'application/json';
  var content = JSON.parse(service.get_index_data());
  ctx.state = {title: '书城', data: content,str:service.get_index_data()};
  return ctx.render('index');
}));

app.use(controller.get('/route_test',(ctx) => {
  ctx.state = {'data':service.get_index_data()};
  return ctx.render('test');
}));

app.use(controller.get('/search',(ctx) => {
  ctx.state = {title:'搜索页'};
  return ctx.render('search');
}));

app.use(controller.get('/api_test',(ctx) => {
  ctx.state = {title:'fasf'};
  ctx.response.body = service.get_test_data();
    // return ctx.render('test');
  }));
app.use(controller.get('/book',(ctx) => {
  var params = qs.parse(ctx.querystring);
  var id = params.id;
  if (!id) {
    id='';
  }
  ctx.state = {bookId:id};
  return ctx.render('book');
}));

app.use(controller.get('/ajax/test',(ctx)=>{
  ctx.response.body = JSON.parse(service.get_test_data());
}));

app.use(controller.get('/ajax/test123',(ctx)=>{
  ctx.response.body = JSON.parse(service.get_test_data());
}));

app.use(controller.get('/ajax/book',(ctx) => {
  var params = qs.parse(ctx.querystring);
  var id = params.id;
  if (!id) {
    id='';
  }
  ctx.response.type = 'application/json';
  ctx.response.body = service.get_index_data();
}));

app.use(controller.get('/ajax/search',async (ctx) => {
  ctx.state = {title:'fasf'};
  var qs = require('querystring');
  var params = qs.parse(ctx.querystring);
  console.log(params);
  var start = params.start;
  var end = params.end;
  var keyword = params.keyword;
  console.log(service.get_search_data(start,end,keyword));
  ctx.response.type = 'application/json';
  await service.get_search_data(start,end,keyword).then((content)=>{
    ctx.response.body = content;
  })
}));


app.listen(server.port);
console.log('koa server is started at port:' + server.port + '!');
