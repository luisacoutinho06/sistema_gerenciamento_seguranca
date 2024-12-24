import { ref, onMounted } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Chart } from 'chart.js';
import dashboardService from '../../services/dashboardService';

export default {
  name: 'DashboardPage',
  data() {
    return {
      totalEmployees: 0,
      securityIncidents: 0,
      availableResources: 0,
      recentActivities: 0,
      latestUsers: [],
      recentActivitiesLast24Hours: 0,
      last10Activities: [],
      itemsChartData: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const usersResponse = await dashboardService.getAllUsers();
        const { users } = usersResponse;
        const items = await dashboardService.getAllItens();

        // Total de Usuários
        this.totalEmployees = users.length.count();

        // Últimos 3 Usuários
        this.latestUsers = users.slice(0, 3);

        // Últimas 10 Atividades
        this.last10Activities = items.slice(0, 10);

        // Atividades nas últimas 24 horas
        const now = new Date();
        const last24Hours = items.filter((item) => {
          const creationDate = new Date(item.DataDeCriacao);
          return (now - creationDate) <= (24 * 60 * 60 * 1000);
        });
        this.recentActivitiesLast24Hours = last24Hours.length;

        // Gráfico de Tipos de Itens Cadastrados no Último Mês
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        const itemTypesCount = {
          1: 0, // Veículos
          2: 0, // Equipamentos
          3: 0, // Dispositivos de Segurança
        };
        items.forEach((item) => {
          const creationDate = new Date(item.DataDeCriacao);
          if (creationDate > lastMonth) {
            itemTypesCount[item.tipoId] += 1;
          }
        });
        this.itemsChartData = itemTypesCount;

        // Outras lógicas de cálculo (como segurançaIncidents, etc.)
        // Simulei o valor de atividades como exemplo
        this.securityIncidents = 5;
        this.availableResources = 120;
        this.recentActivities = 50;
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    },

    // Método para desenhar o gráfico
    drawChart() {
      const ctx = document.getElementById('itemsChart').getContext('2d');
      // eslint-disable-next-line no-new, no-undef
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Veículos', 'Equipamentos', 'Dispositivos de Segurança'],
          datasets: [{
            label: 'Quantidade de Itens no Último Mês',
            data: [this.itemsChartData[1], this.itemsChartData[2], this.itemsChartData[3]],
            backgroundColor: ['#28a745', '#007bff', '#dc3545'],
          }],
        },
      });
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    itemsChartData() {
      this.drawChart();
    },
  },
};
