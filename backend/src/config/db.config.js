// DESCRIÇÃO: Arquivo responsável por fazer a conexão com a base de dados: MongoDB


const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  // Criando uma chave
  local:{
    localDatabaseUrl: process.env.DB_URI,
    secret: "password"
  }
}