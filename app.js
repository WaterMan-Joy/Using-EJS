const express = require('express');
const ejsMate = require('ejs-mate')
const path = require('path')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // so you can render('index')

app.engine('ejs', ejsMate)



app.get('/', (req, res) => {
    res.send('Hi')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/page1', (req, res) => {
    res.render('pages/page1')
})

app.get('/page2', (req, res) => {
    res.render('pages/page2')
})


app.listen(3000, () => {
    console.log('LESTENING ON PORT 3000')
})