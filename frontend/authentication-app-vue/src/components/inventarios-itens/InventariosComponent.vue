<template>
  <div class="container items-container">
    <div class="items-card">
      <h1 class="title">Gestão de Itens - Indústrias Wayne</h1>

      <!-- Botão para abrir o modal de adicionar item -->
      <button class="add-item-btn" @click="openModal">Adicionar Item</button>

      <!-- Tabela de Itens -->
      <table class="items-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item._id">
            <td>{{ item.nome }}</td>
            <td>{{ item.descricao }}</td>
            <td>{{ item.quantidade }}</td>
            <td>{{ item.valor }}</td>
            <td class="actions">
              <button class="edit-btn" @click="editItem(item, item._id)">Editar</button>
              <button class="delete-btn" @click="deleteItem(item._id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="isLoading" class="loading">Carregando...</div>
    </div>

    <!-- Modal de Adicionar/Editar Item -->
    <div v-if="isModalVisible" class="modal-overlay">
      <div class="modal">
        <h2>{{ isEditMode ? 'Editar Item' : 'Adicionar Item' }}</h2>
        <form @submit.prevent="saveItem">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="editingItem.nome" required />

          <label for="descricao">Descrição:</label>
          <input type="text" id="descricao" v-model="editingItem.descricao" required />

          <label for="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" v-model="editingItem.quantidade" required />

          <label for="valor">Valor:</label>
          <input type="text" id="valor" v-model="editingItem.valor" required />

          <div class="modal-actions">
            <button type="submit"
            class="save-btn">{{ isEditMode ? 'Salvar Alterações' : 'Adicionar Item' }}</button>
            <button type="button" @click="closeModal" class="back-btn">Voltar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import itemPageScript from './Inventarios';

export default {
  name: 'ItemsPage',
  mixins: [itemPageScript],
};
</script>

<style scoped>
body {
  background-color: #121212;
  color: #fff;
  font-family: "Roboto", sans-serif;
  height: 100%;
  margin: 0;
}

.items-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #1b1b1b, #0d0d0d);
  padding: 1rem;
  max-width: 1000vh;
}

.items-card {
  background: #1f1f1f;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 900px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

/* Botão de adicionar item */
.add-item-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.add-item-btn:hover {
  background-color: #218838;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
}

.items-table th,
.items-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  color: black;
}

.items-table th {
  background-color: #333;
  color: white;
}

.items-table tr:nth-child(even) {
  background-color: #f4f4f4;
}

.items-table tr:hover {
  background-color: #ddd;
}

.actions {
  text-align: center;
}

.edit-btn,
.delete-btn {
  background-color: #007bff;
  border: none;
  padding: 6px 12px;
  margin: 2px;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.edit-btn:hover,
.delete-btn:hover {
  background-color: #0056b3;
}

.delete-btn {
  background-color: #dc3545;
}

.delete-btn:hover {
  background-color: #c82333;
}

.loading {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal Content */
.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: auto;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 100%;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.save-btn,
.back-btn {
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.save-btn {
  background-color: #28a745;
  color: white;
}

.save-btn:hover {
  background-color: #218838;
}

.back-btn {
  background-color: #ccc;
}

.back-btn:hover {
  background-color: #999;
}
</style>
