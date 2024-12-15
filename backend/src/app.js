// DESCRIÇÃO: Arquivo responsável por toda a configuração e execução da aplicação.

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

// ===> Rotas da API:
const index = require("./routes/index");
//TODO: DECLARAR ROTA user.routes.js;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(morgan('dev'));

app.use(index);
// TODO: Incluir depois a chamada da rota 'user.routes.js';

module.exports = app;

