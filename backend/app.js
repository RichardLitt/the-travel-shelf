const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const bookstores = require('./routes/bookstores')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/bookstores', bookstores)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
  })
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
