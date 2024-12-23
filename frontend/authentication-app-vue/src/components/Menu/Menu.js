// DESCRIÇÃO: Arquivo responsável pela lógica do componente.

import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'MenuComponent',
  data() {
    return {
      user: {},
      isDropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    getUser() {
      const token = localStorage.getItem('jwt');
      if (token) {
        const tokenDecoded = VueJwtDecode.decode(token);
        this.user = tokenDecoded;
      }
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
  created() {
    this.getUser();
  },
};
