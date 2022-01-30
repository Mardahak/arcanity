const express = require('express');
const app = express();
const articleRouter = require('./routes/articles')
// const expressLayouts = require('express-ejs-layouts')

// const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')

app.use('/public', express.static('public'));

app.use('/articles', articleRouter)
// app.set('views', __dirname + '/views')
// app.set('layout', 'layouts/layout')
// app.use(expressLayouts)
// app.use(express.static('public'))

// app.use('/', indexRouter)

const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
},
{
    title: 'Test Article 2',
    createdAt: new Date(),
    description: 'Test description 2'
}
]

app.get('/', (req, res) => {
    res.render('index', { articles: articles })
})


app.listen(5000)