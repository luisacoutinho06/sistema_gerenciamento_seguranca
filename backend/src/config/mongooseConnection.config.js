// DESCRIÇÃO: Arquivo responsável por fazer a conexão via mongoose.

const express = require("express");
const mongoose = require("mongoose");

// ===> Importar o arquivo: 'db.config.js'
const database = require("./db.config"); // ==> Conexão local da base de dados.

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
