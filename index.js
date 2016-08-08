const http = require('http');
const path = require('path');
const koala = require('koala');
const render = require('koa-ejs');
const config = require('./config');
const controllers = require('./controllers');

const app = koala();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout/index',
  viewExt: 'ejs',
  cache: false,
  debug: true
});

app.use(controllers.routes());
app.use(controllers.allowedMethods());

http.createServer(app.callback()).listen(config.port, () => console.log(config.port));
