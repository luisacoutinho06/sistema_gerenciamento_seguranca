<template>
  <div class="dashboard">
    <h1 class="title">Painel de Controle - Indústrias Wayne</h1>

    <!-- Cards de Resumo -->
    <div class="summary-cards">
      <div class="card">
        <h3>Total de Usuários</h3>
        <p>{{ totalEmployees }}</p>
      </div>
      <div class="card">
        <h3>Atividades nas Últimas 24 Horas</h3>
        <p>{{ recentActivitiesLast24Hours }}</p>
      </div>
      <div class="card">
        <h3>Recursos Disponíveis</h3>
        <p>{{ availableResources }}</p>
      </div>
      <div class="card">
        <h3>Incidentes de Segurança</h3>
        <p>{{ securityIncidents }}</p>
      </div>
    </div>

    <!-- Últimos 3 Usuários Cadastrados -->
    <div class="recent-users">
      <h3>Últimos 3 Usuários Cadastrados</h3>
      <ul>
        <li v-for="user in latestUsers" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>

    <!-- Atividades nas Últimas 24 Horas -->
    <div class="recent-activities">
      <h3>Atividades Recentes</h3>
      <ul>
        <li v-for="activity in last10Activities" :key="activity.id">{{ activity.description }}</li>
      </ul>
    </div>

    <!-- Gráfico de Tipos de Itens -->
    <div class="charts">
      <div class="chart">
        <h3>Tipos de Itens Cadastrados no Último Mês</h3>
        <canvas id="itemsChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import dashboardPageScript from './Dashboard';

export default {
  name: 'DashboardPage',
  mixins: [dashboardPageScript],
};

</script>

<style scoped>
body {
  background-color: #121212;
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #f4f4f4;
}

/* Cards de Resumo */
.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.card {
  background: #1f1f1f;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.card p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #28a745;
}

/* Gráficos */
.charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.chart {
  background: #1f1f1f;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.chart h3 {
  margin-bottom: 1rem;
  color: #fff;
}

canvas {
  width: 100% !important;
  height: auto !important;
}

.recent-users, .recent-activities {
  margin-top: 2rem;
  background-color: #1f1f1f;
  padding: 1rem;
  border-radius: 8px;
}

.recent-users ul, .recent-activities ul {
  list-style: none;
  padding: 0;
}

.recent-users li, .recent-activities li {
  padding: 0.5rem 0;
  color: #fff;
}
</style>
