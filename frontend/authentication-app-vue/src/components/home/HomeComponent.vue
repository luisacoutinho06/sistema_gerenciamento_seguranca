<template>
  <div>
    <MenuComponent />
    <div class="hero-container">
      <div class="hero-content">
        <div class="mission-box">
          <h1 class="mission-title">Missão Secreta: Indústrias Wayne</h1>
          <p class="mission-description">
            As Indústrias Wayne, uma empresa renomada e inovadora liderada pelo lendário
            Bruce Wayne (também conhecido como Batman), está buscando uma solução
            tecnológica para otimizar seus processos internos e melhorar a segurança de
            Gotham City. Este foi o projeto desenvolvido fullstack que atende às
            necessidades da empresa. Minha missão era criar uma plataforma que aborde os
            requisitos que serão descritos na próxima página do arquivo.
          </p>

          <h2 class="sub-title">Sistema de Gerenciamento de Segurança:</h2>
          <p class="mission-description">
            Desenvolvi um sistema de controle de acesso que permite apenas usuários
            autorizados a acessar áreas restritas das instalações das Indústrias Wayne.
            Implementei autenticação e autorização para diferentes tipos de usuários, como
            funcionários, gerentes e administradores de segurança.
          </p>

          <h2 class="sub-title">Gestão de Recursos:</h2>
          <p class="mission-description">
            Desenvolvi uma interface para gerenciar recursos internos, como inventário de
            equipamentos, veículos e dispositivos de segurança. Permiti que os
            administradores possam adicionar, remover e atualizar informações sobre esses
            recursos de forma eficiente.
          </p>

          <h2 class="sub-title">Dashboard de Visualização:</h2>
          <p class="mission-description">
            Criei um painel de controle visualmente atraente que exibe dados relevantes
            sobre segurança, recursos e atividades dentro das Indústrias Wayne.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../../assets/batman_background.jpg") no-repeat center center fixed;
  background-size: cover;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-content {
  text-align: center;
  max-width: 100%;
  margin: 20px;
}

.mission-box {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 1000px;
}

.mission-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #f1c40f;
}

.mission-description {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #fff;
}

.sub-title {
  font-size: 1.8em;
  font-weight: bold;
  margin-top: 30px;
  color: #f1c40f;
}
</style>
