const express = require("express");
const app = express();
const port = 3040;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/login', (request, response) => {
    response.render('pages/entrar')
})

app.get('/recrutar', (request, response) => {
    response.render('pages/adicionar')
})

app.get('/sobre', (request, response) => {
    response.render('pages/sobre')
})

app.listen(port, () => {
    console.log(`Serviço rodando na porta: ${port}`)
})