// dependencies
var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    config     = require('./config'),
    mongoose   = require('mongoose');
// connect database
mongoose.connect(config.db.database);
// config api
app.set('port', 1337)
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(bodyParser.json({limit: '5mb'}));
app.use(function(req, res, next) {
  res.header('X-Modelo-now');
  next();
});
// == Router ==
var router = express.Router();
app.use(router)
// == endpoints ==
var articles = require('./controllers/articles')(router);
// listen server
app.listen(app.get('port'), function(err){
  if(!err){
    console.log('Server listen on port: ' + app.get('port'));
  }
})