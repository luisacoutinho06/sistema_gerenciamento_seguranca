<template>
  <div class="container users-container">
    <div class="users-card">
      <h1 class="title">Gestão de Usuários - Indústrias Wayne</h1>

      <table class="users-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo de usuário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span v-if="user.role === 'funcionario'">Funcionário</span>
              <span v-if="user.role === 'gerente'">Gerente</span>
              <span v-if="user.role === 'administrador'">Administrador</span>
            </td>
            <td class="actions">
              <button class="edit-btn" @click="editUser(user, user._id)">Editar</button>
              <button class="delete-btn" @click="deleteUser(user._id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="isLoading" class="loading">Carregando...</div>
    </div>
    <!-- Modal -->
    <div v-if="isModalVisible" class="modal-overlay">
      <div class="modal">
        <h2>Editar Usuário</h2>
        <form @submit.prevent="saveUser">
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="editingUser.name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="editingUser.email" required />

          <label for="role">Tipo de usuário:</label>
          <select id="role" v-model="editingUser.role" required>
            <option value="funcionario" :selected="editingUser.role === 'funcionario'">
              Funcionário
            </option>
            <option value="gerente" :selected="editingUser.role === 'gerente'">
              Gerente
            </option>
            <option
              value="administrador"
              :selected="editingUser.role === 'administrador'"
            >
              Administrador
            </option>
          </select>

          <div class="modal-actions">
            <button type="submit" class="save-btn">Salvar</button>
            <button type="button" @click="closeModal" class="back-btn">Voltar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import userPageScript from './Users';

export default {
  name: 'UsersPage',
  mixins: [userPageScript],
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

.users-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #1b1b1b, #0d0d0d);
  padding: 1rem;
  max-width: 1000vh;
}

.users-card {
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

.users-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
}

.users-table th,
.users-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  color: black;
}

.users-table th {
  background-color: #333;
  color: white;
}

.users-table tr:nth-child(even) {
  background-color: #f4f4f4;
}

.users-table tr:hover {
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

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

.form-group-inline {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.form-group-inline .dropdown {
  width: 48%;
}

input[type="text"],
input[type="email"],
select {
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
