import VueJwtDecode from 'vue-jwt-decode';
import MenuComponent from '../menu/MenuComponent.vue';

export default {
  name: 'HomeComponent',
  components: {
    MenuComponent,
  },
  data() {
    return {
      user: {},
    };
  },

  methods: {
    getUser() {
      const token = localStorage.getItem('jwt');
      if (token) {
        try {
          const tokenDecoded = VueJwtDecode.decoded(token);
          this.user = tokenDecoded;
        } catch (error) {
          console.error('Erro ao decodificar o token', error);
          this.user = {};
        }
      } else {
        this.user = {};
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
