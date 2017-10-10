var express = require('express');

var home = require('./routes/home');

var app = express();

app.use('/', home);

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

  // Send an error message
  res.status(err.status || 500);
  res.send('error');
});

app.listen(4000, function(){
    console.log("Serving app on port 4000");
});

module.exports = app;

