var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var application = require('./routes/application'); // application配下
var transmit = require('./routes/transmit'); // transmit配下

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// application配下
app.use('/application', application); 
app.use('/application/item', application);
app.use('/application/confirm', application);
 // transmit配下
app.use('/transmit', transmit);
app.use('/transmit/reservation', transmit);
app.use('/transmit/done', transmit);
app.use('/transmit/confirm', transmit);
app.use('/transmit/web', transmit);
app.use('/transmit/db', transmit);
app.use('/transmit/delete', transmit);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
