const Koa = require('koa');
const app = new Koa();
var _ = require('koa-route');

var db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};
var pets = {
  list: (ctx) => {
    var names = Object.keys(db);
    ctx.body = 'pets: ' + names.join(', ');
  },
 
  show: (ctx, name) => {
    var pet = db[name];
    if (!pet) return ctx.throw('cannot find that pet', 404);
    ctx.body = pet.name + ' is a ' + pet.species;
  }
};

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
});

app.use(_.get('/pets', pets.list));
app.use(_.get('/test', pets.list));

app.listen(3001);
console.log('listening on port 3001');