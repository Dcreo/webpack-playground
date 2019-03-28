const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const path = require('path');
const moment = require('moment')
const localization = require('./locales/localization')

app.use(express.static('public'))

nunjucks.configure('views', {
  express: app,
  autoescape: true
})

app.set('view engine', 'html')

app.get('/:locale?/test', (req, res) => {
  let locale = req.params.locale || 'en'
  res.locals.l = localization[locale]

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
