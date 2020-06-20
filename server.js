const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')



const server = express() // após puxar o express ele vira uma função.


server.use(express.urlencoded({ extended: true })) // linha responsável por configurar o express para receber a requisição do corpo (body - formulário)
server.use(express.static('public')) //local onde o server vai ouvir nossos arquivos estáticos.
server.use(methodOverride('_method'))
server.use(routes)


// configuração do nunjucks.

server.set("view engine", "njk")  
nunjucks.configure("views", {   
    express: server,
    autoescape: false,
    noCache: true
})



server.listen(3333, function(){
    console.log('server is running')

})