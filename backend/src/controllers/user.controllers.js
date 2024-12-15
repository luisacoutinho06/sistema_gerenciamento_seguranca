// DESCRIÇÃO: Arquivo responsável pelo CRUD da classe: 'User'

const User = require("../models/user.models");

// ==> Async e await

// ==> Método responsável
exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ email: req.body.email });
    console.log(isUser);

    if (isUser.length >= 1) {
      return res
        .status(409)
        .json({ message: "Desculpe! Este email já está registrado!" });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();

    res
      .status(201)
      .json({ message: "Usuário criado com sucesso!", user, token });
  } catch (err) {
    resizeBy.status(400).json({
      err: err,
    });
  }
};

// TODO LOGIN
exports.loginUser = async (req, res) => {};

// TODO LOGIN
exports.returnUserProfile = async (req, res) => {};