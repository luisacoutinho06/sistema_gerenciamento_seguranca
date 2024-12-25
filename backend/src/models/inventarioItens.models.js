const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nome: { type: String, maxlength: 25, required: true },
    descricao: { type: String, maxlength: 1000, required: true },
    quantidade: { type: String, maxlength: 10, required: true },
    tipoDeItem: { type: String, required: true, default: 'funcionario'},
    valor: { type: Number, required: true },
    dataDeCriacao: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    collection: "inventarioItens",
  }
);

const Itens = mongoose.model("Itens", userSchema);

module.exports = Itens;