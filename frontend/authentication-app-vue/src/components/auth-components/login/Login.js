// DESCRIÇÃO: Arquivo responsável pela lógica do componente.

import { required, email } from 'vuelidate/lib/validators';
import swal from 'sweetalert';
import LoginService from '../../../services/LoginService';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },

  validations: {
    loginForm: {
      email: { required, email },
      password: { required },
    },
  },

  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitted = true;
        this.$v.$touch();

        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa preencher todos os campos obrigatórios.',
            icon: 'error',
          });
          return;
        }

        await LoginService.loginUser(this.loginForm);
        this.$router.push('/home');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Ocorreu um erro!',
          icon: 'error',
        });
      }
    },
  },
};
