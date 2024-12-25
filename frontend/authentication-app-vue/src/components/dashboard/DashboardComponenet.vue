<!-- eslint-disable max-len -->
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
        <h3>Veículos Cadastrados no Dia</h3>
        <p>{{ parseFloat(veiculosCadastradosNoDia) }}</p>
      </div>
      <div class="card">
        <h3>Dispositivos de Segurança Cadastrados no Dia</h3>
        <p>{{ dispositivosDeSegurancaCadastrados }}</p>
      </div>
      <div class="card">
        <h3>Inventário de Equipamento Cadastrado no Dia</h3>
        <p>{{ inventarioDeEquipamentoCadastrado }}</p>
      </div>
    </div>

    <!-- Últimos 3 Usuários Cadastrados -->
    <div class="recent-users">
      <h3>Últimos 3 Usuários Cadastrados</h3>
      <ul>
        <li v-html="latestUsers"></li>
      </ul>
    </div>

    <!-- Atividades nas Últimas 24 Horas -->
    <div class="recent-activities">
      <h3>Atividades Recentes</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Tipo de Item</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in last5Activities" :key="index">
              <td>{{ item.nome }}</td>
              <td>
                <span class="description" :title="item.descricao">
                  {{
                    item.descricao.length > 80
                      ? item.descricao.slice(0, 80) + "..."
                      : item.descricao
                  }}
                </span>
              </td>
              <td>{{ item.quantidade }}</td>
              <td>{{ formatBRL(item.valor) }}</td>
              <td>
                <span v-if="parseFloat(item.tipoDeItem) === 1">Veículo</span>
                <span v-else-if="parseFloat(item.tipoDeItem) === 2">Equipamento</span>
                <span v-else-if="parseFloat(item.tipoDeItem) === 3"
                  >Dispositivo de Segurança</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
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

.recent-users {
  margin-top: 2rem;
  background-color: #1f1f1f;
  padding: 1rem;
  border-radius: 8px;
}

.recent-users ul {
  list-style: none;
  padding: 0;
}

.recent-users li {
  padding: 0.5rem 0;
  color: #fff;
}

.recent-activities {
  margin-top: 2rem;
  background-color: #1f1f1f;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.recent-activities h3 {
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Estilo para tabela */
.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  border-radius: 8px;
  background-color: #2c2c2c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

table thead {
  background-color: #333;
  color: #fff;
  font-size: 1rem;
}

table th,
table td {
  padding: 1rem;
  text-align: left;
}

table tbody tr:nth-child(even) {
  background-color: #3c3c3c;
}

table tbody tr:hover {
  background-color: #444;
}

table td {
  color: #ccc;
  font-size: 1rem;
}

table th {
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-weight: 600;
}

/* Estilo para tooltip e limitação de descrição */
.description {
  display: inline-block;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description:hover {
  cursor: pointer;
}

.description[title]:hover {
  position: relative;
  z-index: 2;
  background-color: #333;
  padding: 5px;
  border-radius: 4px;
}
</style>
