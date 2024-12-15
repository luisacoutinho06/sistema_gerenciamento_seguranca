// DESCRIÇÃO: Arquivo responsável pelas rotas do 'User'

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");

// ==> Rota responsável por criar um novo 'User': (POST) localhost:3000/api/v1/register
router.post("/register", userController.registerNewUser);

// ==> Rota responsável por logar o 'User': (POST) localhost:3000/api/v1/login
router.post("/login", userController.loginUser);

// ==> Rota responsável por trazer os dados do 'User': (POST) localhost:3000/api/v1/userProfile
router.post("/userProfile", userController.returnUserProfile);

module.exports = router;
