// DESCRIÇÃO: Arquivo responsável pelo modelo da classe 'User'

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, maxlength: 50, required: true },
    email: { type: String, maxlength: 30, required: true },
    role: { type: String, required: true, default: 'usuarioComum'    },
    password: { type: String, required: true },
    dataDeCriacao: { type: Date, default: Date.now },
    tokens: [
      {
        token: { type: String, require: true },
      },
    ],
  },
  {
    timestamps: true,
    collection: "users",
  }
);

// ==> Este método será responsável por fazer o Hash da senha antes de salvar a classe do modelo User.
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// ==> Este método será responsável por gerar uma autenticação Auth, para o User.
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email, role: user.role, dataDeCriacao: user.dataDeCriacao },
    "secret"
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// ==> Este método será responsável por fazer uma pesquisar do user por email, ou o password.
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);

  if (!user) {
    throw new Error({ error: "Login inválido!" });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error({ error: "Senha inválida!" });
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
