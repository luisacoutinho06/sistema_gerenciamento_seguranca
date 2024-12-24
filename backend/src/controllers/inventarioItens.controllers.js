// DESCRIÇÃO: Arquivo responsável pelo CRUD da classe: 'Item'

const Itens = require("../models/inventarioItens.models");

// Método responsável por adicionar um novo item
exports.adicionandoItem = async (req, res) => {
  try {
    const { nome, descricao, quantidade, tipoDeItem, valor } = req.body;

    if (!nome || !descricao || !quantidade || !tipoDeItem || !valor) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const newItem = new Itens({
      nome,
      descricao,
      quantidade,
      tipoDeItem,
      valor
    });

    const item = await newItem.save();

    res.status(201).json({ message: "Item adicionado com sucesso!", item });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Método responsável por buscar todos os itens
exports.getAllItens = async (req, res) => {
  try {
    const itens = await Itens.find({}); // Retorna todos os itens da coleção

    res.status(200).json({ itens });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Método responsável por deletar o item
exports.deleteItem = async (req, res) => {
  try {
    const itemId = req.params.id;

    const item = await Itens.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: "Item não encontrado!" });
    }

    await Itens.findByIdAndDelete(itemId);

    res.status(200).json({ message: "Item deletado com sucesso!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Método responsável por atualizar o item
exports.updateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const { nome, descricao, quantidade, tipoDeItem, valor } = req.body;

    const item = await Itens.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: "Item não encontrado!" });
    }

    item.nome = nome || item.nome;
    item.descricao = descricao || item.descricao;
    item.quantidade = quantidade || item.quantidade;
    item.tipoDeItem = tipoDeItem || item.tipoDeItem;
    item.valor = valor || item.valor;

    const updatedItem = await item.save();

    res.status(200).json({ message: "Item atualizado com sucesso!", updatedItem });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
