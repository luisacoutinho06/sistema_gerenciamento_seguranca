<template>
  <div>
    <nav class="navbar">
      <div class="navbar-left">
        <a href="/home" class="logo">
          <img src="../../assets/onlyW_logo.png" alt="Logo" class="logo-img" />
        </a>

        <ul class="navbar-items">
          <li><a href="/users">Lista de Usuários</a></li>
          <li><a href="/home">Inventário de Itens</a></li>
          <li><a href="/home">Painel de Controle</a></li>
        </ul>
      </div>

      <div class="navbar-right">
        <div class="user-menu">
          <button class="user-button" @click="toggleDropdown">
            <img src="../../assets/logo_user.webp" alt="Usuário" class="user-icon" />
          </button>
        </div>

        <div class="user-dropdown" v-if="isDropdownVisible">
          <ul>
            <li><a href="/home">Perfil</a></li>
            <li>
              <button @click="logOutUser" class="logout-btn">LogOut</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'MenuComponent',
  data() {
    return {
      user: {},
      isDropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    getUser() {
      const token = localStorage.getItem('jwt');
      if (token) {
        const tokenDecoded = VueJwtDecode.decode(token);
        this.user = tokenDecoded;
      }
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #333;
  color: white;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 50px;
  height: 50px;
}

.navbar-items {
  list-style: none;
  margin-left: 20px;
  display: flex;
}

.navbar-items li {
  margin-right: 20px;
}

.navbar-items li a {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}

.navbar-items li a:hover {
  text-decoration: underline;
}

.navbar-right {
  position: relative;
}

.user-icon {
  width: 75px;
  height: 40px;
  cursor: pointer;
}

.user-dropdown {
  position: absolute;
  top: 45px;
  right: 0;
  background-color: #444;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.user-dropdown ul {
  list-style: none;
  padding: 10px 0;
  margin: 0;
}

.user-dropdown li {
  padding: 10px 20px;
}

.user-dropdown li a {
  color: white;
  text-decoration: none;
  display: block;
}

.user-dropdown li a:hover {
  background-color: #555;
}
</style>
