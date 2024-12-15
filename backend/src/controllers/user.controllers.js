// DESCRIÇÃO: Arquivo responsável pelo CRUD da classe: 'User'

const User = require("../models/user.models");

// ==> Async e await

// ==> Método responsável por registrar novo usuário.
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

// ==> Método responsável por logar o usuário.
exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res.status(401).json({
        error: "Erro ao realizar o Login! Verifique suas credenciais.",
      });
    }

    const token = await user.generateAuthToken();

    res
      .status(201)
      .json({ messsage: "Usuário(a) logado(a) com sucesso!", user, token });
  } catch (err) {
    resizeBy.status(400).json({
      err: err,
    });
  }
};

exports.returnUserProfile = async (req, res) => {
  try {
    await res.json(req.userData);
  } catch (err) {
    resizeBy.status(400).json({
      err: err,
    });
  }
};
