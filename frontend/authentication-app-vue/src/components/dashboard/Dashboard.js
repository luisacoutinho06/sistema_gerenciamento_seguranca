import dashboardService from '../../services/dashboardService';

export default {
  name: 'DashboardPage',
  data() {
    return {
      totalEmployees: 0,
      dispositivosDeSegurancaCadastrados: 0,
      veiculosCadastradosNoDia: 0,
      inventarioDeEquipamentoCadastrado: 0,
      latestUsers: [],
      recentActivitiesLast24Hours: 0,
      last10Activities: [],
    };
  },
  methods: {
    formatBRL(value) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    },
    async fetchData() {
      try {
        const usersResponse = await dashboardService.getAllUsers();
        const { users } = usersResponse;
        const items = await dashboardService.getAllItens();

        // Total de Usuários
        this.totalEmployees = users.length;

        // Mapeamento dos roles para nomes amigáveis
        const roleMapping = {
          usuarioComum: 'Usuário Comum',
          gerente: 'Gerente',
          administrador: 'Administrador',
          funcionario: 'Funcionário',
        };

        // Gerar os últimos 3 usuários formatados
        this.latestUsers = users
          .reverse()
          .slice(0, 3)
          .map((user) => {
            const roleFormatted = roleMapping[user.role] || user.role;
            return `${user.name} - ${user.email} - ${roleFormatted}`;
          })
          .join('<br>');

        // Últimas 5 Atividades
        this.last5Activities = items.itens.reverse().slice(0, 5);

        const now = new Date();
        const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);

        let veiculos = 0;
        let equipamentos = 0;
        let dispositivos = 0;
        let recentActivities = 0;

        const recentItems = [];

        // Iterar sobre os itens
        items.itens.forEach((item) => {
          const dataDeCriacao = new Date(item.dataDeCriacao);

          // Verifica se a dataDeCriacao é nas últimas 24 horas
          if (dataDeCriacao >= twentyFourHoursAgo) {
            // eslint-disable-next-line no-plusplus
            recentActivities++;
            recentItems.push(item);
          }
          if (parseFloat(item.tipoDeItem) === 1) {
            // eslint-disable-next-line no-plusplus
            veiculos++;
          } else if (parseFloat(item.tipoDeItem) === 2) {
            // eslint-disable-next-line no-plusplus
            equipamentos++;
          } else if (parseFloat(item.tipoDeItem) === 3) {
            // eslint-disable-next-line no-plusplus
            dispositivos++;
          }
        });

        // Atualiza as variáveis do Vue
        this.veiculosCadastradosNoDia = veiculos;
        this.dispositivosDeSegurancaCadastrados = dispositivos;
        this.inventarioDeEquipamentoCadastrado = equipamentos;
        this.recentActivitiesLast24Hours = recentActivities;

        console.log(this.veiculosCadastradosNoDia);
        console.log(this.dispositivosDeSegurancaCadastrados);
        console.log(this.inventarioDeEquipamentoCadastrado);
        console.log(this.recentActivitiesLast24Hours);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
