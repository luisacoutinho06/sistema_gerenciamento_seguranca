// DESCRIÇÃO: Arquivo responsável pela lógica do componente.

import { required, email } from 'vuelidate/lib/validators';

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
    loginSubmitUserForm() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert('SUCCESS!' + JSON.stringify(this.loginForm));
    },

    async submitLoginUser() {},
  },
};
