// DESCRIÇÃO: Arquivo responsável por toda a configuração e execução da aplicação.

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const mongooseConnection = require('./config/mongooseConnection.config');

const app = express();

// ===> Rotas da API:
const index = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const itensRoutes = require("./routes/inventarioItens.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));
app.use(cors());

app.set('mongoose connection', mongooseConnection);

app.use(index);
app.use("/api/v1", userRoutes);
app.use("/api/v1", itensRoutes);

module.exports = app;
