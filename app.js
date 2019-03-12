const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
  express: app,
  autoescape: true
})

app.set('view engine', 'html')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3009, () => console.log('Start on 3009 port'))
