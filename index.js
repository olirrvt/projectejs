const express = require("express");
const app = express();
const port = 10500

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
    console.log("Requisição a página principal recebida!")
    response.render('index')
})

app.get('/login', (request, response) => {
    console.log("Requisição a página de login recebida!")
    response.render('pages/entrar')
})

app.get('/adicionar', (request, response) => {
    console.log("Requisição da página adicionar recebida!")
    response.render('pages/adicionar')
})

app.get('/sobre', (request, response) => {
    console.log("Requisição da página sobre recebida!")
    response.render('pages/sobre')
})

app.listen(port, () => {
    console.log(`Serviço rodando na porta: ${port}`)
})