/* eslint-disable no-underscore-dangle */
import swal from 'sweetalert';
import ItemService from '../../services/InventariosService';

export default {
  data() {
    return {
      inventory: [],
      isLoading: false,
      isModalVisible: false,
      isEditMode: false,
      editingItem: {
        nome: '',
        descricao: '',
        quantidade: 1,
        valor: '',
        tipoDeItem: 'equipamentos',
      },
    };
  },
  methods: {
    async loadItems() {
      this.isLoading = true;
      try {
        const items = await ItemService.getAllItens();
        this.inventory = items.itens;
      } catch (error) {
        swal('Erro', 'Não foi possível carregar os itens.', 'error');
      } finally {
        this.isLoading = false;
      }
    },

    openModal() {
      this.isModalVisible = true;
      this.isEditMode = false;
      this.editingItem = {
        nome: '',
        descricao: '',
        quantidade: 1,
        valor: '',
        tipoDeItem: 'equipamentos',
      };
    },

    closeModal() {
      this.isModalVisible = false;
    },

    async saveItem() {
      if (this.isEditMode) {
        await this.updateItem();
      } else {
        await this.addItem();
      }
    },

    async addItem() {
      try {
        await ItemService.adicionandoItem(this.editingItem);
        swal('Sucesso', 'Item adicionado com sucesso!', 'success');
        this.loadItems();
        this.closeModal();
      } catch (error) {
        swal('Erro', 'Não foi possível adicionar o item.', 'error');
      }
    },

    async updateItem() {
      try {
        await ItemService.updateItem(this.editingItem._id, this.editingItem);
        swal('Sucesso', 'Item atualizado com sucesso!', 'success');
        this.loadItems();
        this.closeModal();
      } catch (error) {
        swal('Erro', 'Não foi possível atualizar o item.', 'error');
      }
    },

    async editItem(item, id) {
      this.isEditMode = true;
      this.editingItem = { ...item };
      this.isModalVisible = true;
    },

    async deleteItem(id) {
      try {
        await ItemService.deleteItem(id);
        swal('Sucesso', 'Item excluído com sucesso!', 'success');
        this.loadItems();
      } catch (error) {
        swal('Erro', 'Não foi possível excluir o item.', 'error');
      }
    },

    formatCurrency(event) {
      let { value } = event.target;
      value = value.replace(/\D/g, '');
      value = (value / 100).toFixed(2);
      value = value.replace('.', ',');
      this.editingItem.valor = `R$ ${value}`;
    },
    formatBRL(value) {
      if (typeof value === 'number') {
        return `R$ ${value.toFixed(2).replace('.', ',')}`;
      } if (typeof value === 'string') {
        // eslint-disable-next-line no-param-reassign
        value = value.replace(/\D/g, '');
        // eslint-disable-next-line no-param-reassign
        value = (parseInt(value, 10) / 100).toFixed(2);
        return `R$ ${value.replace('.', ',')}`;
      }
      return value;
    },

  },
  created() {
    this.loadItems();
  },
};
