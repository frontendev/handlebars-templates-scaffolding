const express = require('express');
const exphbs  = require('express-handlebars');
const fs = require('fs');
const app = express();
const home = require('./dev/mws/home');

const helpers = {};
const handlebars = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers,
});

handlebars.templates = {};
handlebars.registerHelper = (name, cb) => {
  helpers[name] = cb;
};

handlebars.registerHelper('include', function include(name, opts) {
  try {
    handlebars.templates[name] = handlebars.handlebars.compile(fs.readFileSync(`./views/components/${name}.hbs`, 'UTF-8'));
  } catch (err) {
    console.error(err);
  }
  return handlebars.templates[name](Object.assign({}, opts), { helpers: handlebars.helpers });
});

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.use(express.static('./statics'));

app.get('/', home);
app.get('/about', function (req, res) {
  res.render('about');
});
app.listen(1184);