import swal from 'sweetalert';
import Api from './Api';

export default {
  async adicionandoItem(itemData) {
    try {
      const token = localStorage.getItem('jwt');
      const response = await Api().post('/adicionandoItem', itemData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
      throw error;
    }
  },

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

  async deleteItem(id) {
    try {
      const token = localStorage.getItem('jwt');
      const response = await Api().delete(`/deleteItem/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar item:', error);
      throw error;
    }
  },

  async updateItem(id, updatedData) {
    try {
      const token = localStorage.getItem('jwt');
      const response = await Api().put(`/editItem/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
  },
};
