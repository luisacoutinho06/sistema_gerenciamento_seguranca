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
      return response;
    } catch (error) {
      throw new Error('Erro ao buscar os usuários');
    }
  },
};
