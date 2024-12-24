import Api from './Api';

export default {
  async adicionandoItem(itemData) {
    try {
      const response = await Api.post('/adicionandoItem', itemData);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
      throw error;
    }
  },

  async getAllItens() {
    try {
      const response = await Api.get('/itens');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter itens:', error);
      throw error;
    }
  },

  async deleteItem(id) {
    try {
      const response = await Api.delete(`/deleteItem/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar item:', error);
      throw error;
    }
  },

  async updateItem(id, updatedData) {
    try {
      const response = await Api.put(`/editItem/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
  },
};
