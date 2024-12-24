import swal from 'sweetalert';
import Api from './Api';

export default {
  async getAllItens() {
    try {
      const token = localStorage.getItem('jwt');
      const response = await Api().get('/itens', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter itens:', error);
      throw error;
    }
  },
  async getAllUsers() {
    try {
      const token = localStorage.getItem('jwt');
      const response = await Api().get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar os usuários');
    }
  },
};
