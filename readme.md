# Portfólio Acadêmico 

Este é um **Portfólio Acadêmico** desenvolvido com:

- Node.js  
- Express  
- Sequelize  
- MySQL  
- EJS (template engine)  

O projeto contém páginas como: **Início, Sobre Mim, Disciplinas, Projetos, Contato e Dashboard**, todas renderizadas dinamicamente.

---

##  1. Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (v18+)
- **NPM**
- **MySQL Server**
- Cliente MySQL (WorkBench, DBeaver, etc)

Verifique as versões:

node -v
npm -v

---

## 🗄️ 2. Configuração do BD (MySQL + Sequelize)

### 2.1 Criar o banco de dados no MySQL

Abra o MySQL pelo terminal

mysql -u root -p

Após acessar, crie o banco utilizado pelo Sequelize:

CREATE DATABASE portfolio_db;

### 2.1 Criar o banco de dados no MySQL

No arquivo

/models/index.js

Atualize as informações do banco de dados

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'portfolio_db',      
  'root',              // nome de usuario do MySQL
  'fatec',    // sua senha do MySQL
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate()
  .then(() => console.log("Conectado ao MySQL"))
  .catch(err => console.log("Erro ao conectar ao MySQL:", err));

module.exports = sequelize;

### 2.3 Criar as Models

//Disciplinas

const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Disciplina = sequelize.define("Disciplina", {
  nome: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false } // "cursando" | "concluída"
});

module.exports = Disciplina;

//Projetos

const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Projeto = sequelize.define("Projeto", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT, allowNull: false },
  link: { type: DataTypes.STRING }
});

module.exports = Projeto;

### 2.4 Sicronizar as tabelas automaticamente

//No server.js adicione

const sequelize = require("./models/index");
require("./models/Disciplina");
require("./models/Projeto");

sequelize.sync()
  .then(() => console.log("✔ Tabelas sincronizadas"))
  .catch(err => console.log("Erro ao sincronizar tabelas:", err));

---

## 3. Rodar o Projeto

No terminal insira esse comandos:

node server.js
npm install -g nodemon  ou nodemon server.js
npm start
npm run dev

Assim que você digitar todos os comandos no terminal irá aparecer:
 Conectado ao MySQL
 Tabelas sincronizadas
Servidor rodando em http://localhost:3000


