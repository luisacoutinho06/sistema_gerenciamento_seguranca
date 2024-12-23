// DESCRIÇÃO: Arquivo responsável pelos métodos de requisições das APIs via HTTP.

import swal from 'sweetalert';
import Api from './Api';

export default {
  async registerNewUser(newUser) {
    try {
      const response = await Api().post('/register', newUser);
      const { token } = response.data;

      if (token) {
        localStorage.setItem('jwt', token);
        swal({
          title: 'Sucesso!',
          text: 'Usuário(a) cadastrado(a) com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao criar um novo cadastro!',
        icon: 'error',
      });
    }
  },
};
