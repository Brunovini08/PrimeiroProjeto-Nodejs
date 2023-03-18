//Verificacao se o banco de dados foi aceito na api 
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('Falha ao se conectar:'+erro)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})
Postagem.create({
    titulo: "Boa noite",
    conteudo: "Ola, boa noite"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Bruno",
    sobrenome: "Vinicius",
    idade: 17,
    email:"bruno123@gmail.com"
})

//Usuario.sync({force: true})