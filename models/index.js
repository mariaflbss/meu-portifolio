const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'portfolio_db',      
  'root',              // nome de usuario do MySQL
  'fatec',    // senha do MySQL
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate()
  .then(() => console.log("Conectado ao MySQL"))
  .catch(err => console.log("Erro ao conectar ao MySQL:", err));

module.exports = sequelize;
