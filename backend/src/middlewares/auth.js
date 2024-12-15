// DESCRIÇÃO: Arquivo responsável por confirmar se um determinado(a) 'User' tem autenticação para acessar determinado recurso.

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);

    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      error: "Falha na autenticação!",
    });
  }
};
