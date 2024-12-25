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
            <th>Tipo de Item</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in inventory" :key="item._id">
            <td>{{ item.nome }}</td>
            <td>
              <span v-if="item.descricao.length > 80" :title="item.descricao">
                {{ item.descricao.slice(0, 80) }}...</span
              >
              <span v-else>{{ item.descricao }}</span>
            </td>
            <td>{{ item.quantidade }}</td>
            <td>{{ formatBRL(item.valor) }}</td>
            <td>
              <span v-if="parseFloat(item.tipoDeItem) === 1">Veículo</span>
              <span v-else-if="parseFloat(item.tipoDeItem) === 2">Equipamento</span>
              <span v-else-if="parseFloat(item.tipoDeItem) === 3">Dispositivo de Segurança</span>
              <span v-else>Outro</span>
            </td>
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
        <h2>{{ isEditMode ? "Editar Item" : "Adicionar Item" }}</h2>
        <form @submit.prevent="saveItem">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="editingItem.nome" required />

          <label for="descricao">Descrição:</label>
          <textarea
            id="descricao"
            v-model="editingItem.descricao"
            required
            maxlength="1000"
          >
          </textarea>

          <label for="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            v-model.number="editingItem.quantidade"
            required
            min="1"
          />

          <label for="valor">Valor:</label>
          <input
            type="text"
            id="valor"
            v-model="editingItem.valor"
            @input="formatCurrency"
            required
          />

          <label for="tipoDeItem">Tipo de Item:</label>
          <select id="tipoDeItem" v-model="editingItem.tipoDeItem" required>
            <option value="1">Veículos</option>
            <option value="2">Equipamentos</option>
            <option value="3">Dispositivos de Segurança</option>
          </select>

          <div class="modal-actions">
            <button type="submit" class="save-btn">
              {{ isEditMode ? "Salvar Alterações" : "Adicionar Item" }}
            </button>
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
  max-width: 2000px;
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
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.modal h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
input[type="number"],
textarea,
select {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  box-sizing: border-box;
}

textarea {
  resize: none;
  height: 80px;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
}

.save-btn,
.back-btn {
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.save-btn {
  background-color: #28a745;
  color: white;
  border: none;
}

.save-btn:hover {
  background-color: #218838;
}

.back-btn {
  background-color: #ccc;
  border: none;
}

.back-btn:hover {
  background-color: #999;
}
</style>
