const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const path = require('path');
const moment = require('moment')

app.use(express.static('public'))

nunjucks.configure('views', {
  express: app,
  autoescape: true
})

app.set('view engine', 'html')

app.get('/', (req, res) => {
  let relatedNews = [{
    title: 'News one',
    description: 'Olalala'
  }, {
    title: 'News two',
    description: 'Blablabla'
  }, {
    title: 'News three',
    description: 'Ohohoho'
  }]

  res.render('index', { relatedNews: relatedNews, time: moment().locale('ru').format('llll') })
})

app.listen(3009, () => console.log('Start on 3009 port'))
