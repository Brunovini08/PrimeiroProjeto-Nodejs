//conectando o banco de dados na sua api
const Sequelize = require('sequelize'); 
// Conexao com o banco de dadas MySql
const sequelize = new Sequelize('postagens', 'root', 'bruno123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}