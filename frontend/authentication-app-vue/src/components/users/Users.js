/* eslint-disable no-underscore-dangle */
import userService from '../../services/UsersService';

export default {
  data() {
    return {
      users: [],
      isLoading: false,
      isModalVisible: false,
      editingUser: {
        id: null,
        name: '',
        email: '',
        role: '',
      },
    };
  },
  computed: {
    roleName() {
      const roleMapping = {
        usuarioComum: 'Usuário Comum',
        funcionario: 'Funcionário',
        gerente: 'Gerente',
        administrador: 'Administrador',
      };
      return roleMapping[this.editingUser.role] || this.editingUser.role;
    },
  },
  methods: {
    // Método para buscar todos os usuários
    async fetchUsers() {
      this.isLoading = true;
      try {
        const response = await userService.getAllUsers();
        this.users = response.data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error);
      }
    },

    // Método para editar um usuário
    editUser(user) {
      this.editingUser = { ...user };
      this.isModalVisible = true;
    },

    // Método para salvar a edição do usuário
    async saveUser() {
      try {
        await userService.updateUser(this.editingUser._id, this.editingUser);
        this.isModalVisible = false;
        this.fetchUsers();
      } catch (error) {
        console.error('Erro ao salvar usuário:', error);
      }
    },

    closeModal() {
      this.isModalVisible = false;
    },

    async deleteUser(userId) {
      try {
        await userService.deleteUser(userId);
        this.fetchUsers();
      } catch (error) {
        console.error('Erro ao deletar usuário:', error);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
