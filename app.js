const express = require("express"); //Essa linha de codigo está fazendo o requerimento de biblioteca 'express'
const app = express(); //Essa linha de codigo está colocando a biblioteca 'express' dentro de uma variavel
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post') ;
const { where } = require("sequelize");
// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
/// Rotas

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cadastro', function(req, res){
        res.render('form')
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Houve um erro '+ erro)
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('Postagem deletada com sucesso')
        }).catch(function(erro){
            res.send('Esta postagem nao existe')
        })
    })

    app.get('/editar/:id', function(req, res){
        Post.update({where: {'id': req.params.id}}).then(function(){
            res.redirect('/cadastro')
        }).catch(function(erro){
            res.send('Esta postagem nao existe')
        })
    })

app.listen(8081, function(){ //Aqui estamos criando o servidor utilizando o metodo listen(), dentro  desse parametro passamos que porta nos queremos usar para abrir nosso servidor, essa linha de codigo sempre deve vir por ultimo
    console.log('Sevidor aberto')
});

