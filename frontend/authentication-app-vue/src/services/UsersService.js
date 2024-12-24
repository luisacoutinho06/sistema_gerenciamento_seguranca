import Api from './Api';

export default {
  async getAllUsers() {
    try {
      const token = localStorage.getItem('jwt');
      const response = await Api().get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      throw new Error('Erro ao buscar os usuários');
    }
  },

  async deleteUser(userId) {
    try {
      const token = localStorage.getItem('jwt');
      const response = await Api().delete(`/deleteUser/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw new Error('Erro ao deletar o usuário');
    }
  },

  async updateUser(userId, userData) {
    try {
      const token = localStorage.getItem('jwt');
      const response = await Api().put(`/editUser/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      throw new Error('Erro ao atualizar o usuário');
    }
  },
};
