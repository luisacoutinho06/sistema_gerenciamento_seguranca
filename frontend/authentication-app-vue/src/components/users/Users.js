import userService from '../../services/UsersService';

export default {
  data() {
    return {
      users: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchUsers() {
      this.isLoading = true;
      try {
        const response = await userService.getAllUsers();

        this.users = response.data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    },
    editUser(user) {
      alert(`Editando usuário: ${user.name}`);
    },
    deleteUser(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
  created() {
    this.fetchUsers();
  },
};
