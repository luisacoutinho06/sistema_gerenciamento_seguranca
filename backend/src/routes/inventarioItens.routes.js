const express = require("express");
const router = express.Router();
const inventarioItensController = require("../controllers/inventarioItens.controllers");

// ==> Rota responsável por criar um novo 'item': (POST) localhost:3000/api/v1/adicionandoItem
router.post("/adicionandoItem", inventarioItensController.adicioonandoItem);

// ==> Rota responsável por trazer todos os itens registrados: (GET) localhost:3000/api/v1/itens
router.get("/itens", inventarioItensController.getAllItens);

// ==> Rota responsável por deletar o item especifico: (DELETE) localhost:3000/api/v1/deleteItem
router.delete("/deleteItem/:id", inventarioItensController.deleteItem);

// ==> Rota responsável por editar o item especifico: (PUT) localhost:3000/api/v1/editItem
router.put("/editItem/:id", inventarioItensController.updateItem);

module.exports = router;