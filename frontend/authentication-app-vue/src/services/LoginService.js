// DESCRIÇÃO: Arquivo responsável pelos métodos de requisições das APIs via HTTP.
import swal from 'sweetalert';
import Api from './Api';

export default {
  async loginUser(user) {
    try {
      const response = await Api().post('/login', user);
      const { token } = response.data;

      if (token) {
        localStorage.setItem('jwt', token);
        swal({
          title: 'Sucesso!',
          text: 'Usuário(a) logado(a) com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao logar no sistema!',
        icon: 'error',
      });
      this.$router.push('/');
    }
  },
};
