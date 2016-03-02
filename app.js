var express = require('express')
var swig = require('swig')

var app = express()

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/')

app.use(express.static('./'))
 
app.get('/', function (req, res) {
  res.render('index')
})
 
app.get('/addPost', function (request, response) {
  // console.log(request.body)
  console.log(request.query.content)
})
 
app.listen(3000)