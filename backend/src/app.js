// DESCRIÇÃO: Arquivo responsável por toda a configuração e execução da aplicação.

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

// ===> Importar o arquivo: 'db.config.js'
const database = require("./config/db.config"); // ==> Conexão local da base de dados.

mongoose.Promise == global.Promise;

//==> Conexão da base de dados.
mongoose
  .connect(database.local.localDatabaseUrl)
  .then(() => {
    console.log("A base de dados foi conectada com sucesso!");
  })
  .catch((err) => {
    console.error(`Erro ao conectar à base de dados: ${err}`);
    process.exit();
  });

// ===> Rotas da API:
const index = require("./routes/index");
//TODO: DECLARAR ROTA user.routes.js;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(morgan("dev"));

app.use(index);
// TODO: Incluir depois a chamada da rota 'user.routes.js';

module.exports = app;
