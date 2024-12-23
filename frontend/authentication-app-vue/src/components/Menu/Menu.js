// DESCRIÇÃO: Arquivo responsável pela lógica do componente.

import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'MenuComponent',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUser() {
      const token = localStorage.getItem('jwt');
      if (token) {
        const tokenDecoded = VueJwtDecode.decoded(token);
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
