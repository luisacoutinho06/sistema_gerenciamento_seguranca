// DESCRIÇÃO: Arquivo responsável por inicializar o 'axios'' e as requisições da url base dos HTTP.

import axios from 'axios';

export default () => axios.create({
  // 'baseURL' do back-end -> Fará a comunicação do front com o back.
  baseURL: 'http://localhost:3000/api/v1',
});
