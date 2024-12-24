<template>
  <div class="container users-container">
    <div class="users-card">
      <h1 class="title">Gestão de Usuários - Indústrias Wayne</h1>

      <table class="users-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Claim</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td class="actions">
              <button class="edit-btn" @click="editUser(user)">Editar</button>
              <button class="delete-btn" @click="deleteUser(user.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="isLoading" class="loading">Carregando...</div>
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

.users-table th, .users-table td {
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

.edit-btn, .delete-btn {
  background-color: #007bff;
  border: none;
  padding: 6px 12px;
  margin: 2px;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.edit-btn:hover, .delete-btn:hover {
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
</style>
