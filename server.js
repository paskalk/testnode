var express = require('express');
var app = express()
var chokidar = require('chokidar')
var watcher = chokidar.watch('../')
watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /dist/ module cache from server")
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
    })
  })
})
app.use(function (req, res, next) {
  //require('hotswap')(req, res, next)
  let router = express.Router()
router.get('/', function (req, res) {
  res.send('Hello Meclearium.com')
})
})
app.listen(3000)