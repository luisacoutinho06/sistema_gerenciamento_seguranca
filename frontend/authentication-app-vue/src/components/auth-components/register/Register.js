// DESCRIÇÃO: Arquivo responsável pela lógica do componente.

import { required, email, minLength } from 'vuelidate/lib/validators';
import swal from 'sweetalert';
import RegisterService from '../../../services/RegisterService';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },

  validations: {
    registerForm: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
    },
  },
  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
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
        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push('/');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Você precisa preencher todos os campos obrigatórios.',
          icon: 'error',
        });
      }
    },
  },
};
