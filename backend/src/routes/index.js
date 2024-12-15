// DESCRIÇÃO: Arquivo responsável pela rota default da aplicação.

const express = require("express");

const router = express.Router();

router.get("/api/v1", (req, res) => {
  res.status(200).send({
    success: true,
    message:
      "Seja bem-vindo(a) a API do sistema de gerenciamento do Batman - Node.js ++ MongoDb",
    version: "1.0.0",
  });
});

module.exports = router;
