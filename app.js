var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

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
    handlebars.templates[name] = handlebars.handlebars.compile(fs.readFileSync(`./views/parts/${name}.hbs`, 'UTF-8'));
  } catch (err) {
    console.error(err);
  }
  return handlebars.templates[name](Object.assign({}, opts), { helpers: handlebars.helpers });
});

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.use(express.static('./statics'));
app.get('/', function (req, res) {
  res.render('home', {
    listElements: [
      { 'name': 'some random text' },
      { 'name': 'some random text2' },
      { 'name': 'some random text 3' }
    ]
  });
});

app.get('/about', function (req, res) {
  res.render('about');
});



app.listen(3000, function () {
  console.log('App listening on port 3000!');
});