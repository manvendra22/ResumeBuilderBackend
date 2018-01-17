const express = require('express'),
// path = require('path');
 favicon = require('serve-favicon'),
 logger = require('morgan'),
 cookieParser = require('cookie-parser'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose'),

 index = require('./routes/index'),
 db = require('./config/db'),

 app = express();

// connecting to mongodb database
mongoose.connect(db.url, {
  useMongoClient: true
})

mongoose.connection.on('error', function() {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});

mongoose.connection.once('open', function() {
  console.log("Successfully connected to the database");
})


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

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
