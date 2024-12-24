export default {
  data() {
    return {
      inventory: [],
      isLoading: false,
      isAddModalVisible: false,
      isEditModalVisible: false,
      newItem: {
        name: '',
        description: '',
        quantity: '',
        price: '',
      },
      editingItem: {
        id: '',
        name: '',
        description: '',
        quantity: '',
        price: '',
      },
    };
  },
  methods: {
    openAddModal() {
      this.isAddModalVisible = true;
    },
    closeAddModal() {
      this.isAddModalVisible = false;
      this.resetNewItem();
    },
    openEditModal(item) {
      this.editingItem = { ...item };
      this.isEditModalVisible = true;
    },
    closeEditModal() {
      this.isEditModalVisible = false;
      this.resetEditingItem();
    },
    resetNewItem() {
      this.newItem = {
        name: '', description: '', quantity: '', price: '',
      };
    },
    resetEditingItem() {
      this.editingItem = {
        id: '', name: '', description: '', quantity: '', price: '',
      };
    },
    saveItem() {
      console.log('Novo item salvo:', this.newItem);
      this.closeAddModal();
    },
    updateItem() {
      console.log('Item atualizado:', this.editingItem);
      this.closeEditModal();
    },
    deleteItem(id) {
      console.log('Item excluído:', id);
    },
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.inventory = [
      ];
    }, 1000);
  },
};
