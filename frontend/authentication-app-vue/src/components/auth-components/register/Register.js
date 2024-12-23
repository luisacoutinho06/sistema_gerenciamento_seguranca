// DESCRIÇÃO: Arquivo responsável pela lógica do componente.

import { required, email } from 'vuelidate/lib/validators';

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
      password: { required },
    },
  },
  methods: {
    registerSubmitUserForm() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert('SUCCESS!' + JSON.stringify(this.registerForm));
    },

    async submitRegisterUser() {},
  },
};
