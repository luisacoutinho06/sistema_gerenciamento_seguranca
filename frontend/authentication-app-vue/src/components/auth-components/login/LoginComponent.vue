<template>
  <div class="container login-container">
    <div class="row justify-content-center align-items-center">
      <div>
        <div class="login-card">
          <div class="login-header text-center">
            <img
              src="../../../assets/wayne_industrias_logo.png"
              alt="Wayne Industries Logo"
              class="wayne-logo"
            />
            <h1>Indústrias Wayne</h1>
            <p class="subtitle">A tecnologia do futuro, hoje.</p>
          </div>

          <form v-on:submit.prevent="loginSubmitUserForm">
            <div class="form-group">
              <label for="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="Digite seu e-mail"
                v-model="loginForm.email"
                :class="{ 'is-invalid': isSubmitted && $v.loginForm.email.$error }"
              />
              <div
                v-if="isSubmitted && !$v.loginForm.email.required"
                class="invalid-feedback"
              >
                O campo e-mail é obrigatório!
              </div>
              <div
                v-if="isSubmitted && !$v.loginForm.email.email"
                class="invalid-feedback"
              >
                O e-mail inserido não é válido!
              </div>
            </div>

            <div class="form-group" style="margin-top: 15px; margin-bottom: 15px">
              <label for="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="Digite sua senha"
                v-model="loginForm.password"
                :class="{ 'is-invalid': isSubmitted && $v.loginForm.password.$error }"
              />
              <div
                v-if="isSubmitted && !$v.loginForm.password.required"
                class="invalid-feedback"
              >
                O campo senha é obrigatório!
              </div>
            </div>

            <div class="form-footer">
              <p>
                Não tem uma conta?
                <router-link to="/register">Cadastre-se aqui</router-link>
              </p>
              <button
                @click="submitLoginUser"
                class="btn btn-primary btn-block login-btn"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style scoped>
body {
  background-color: #121212;
  color: #fff;
  font-family: "Roboto", sans-serif;
  height: 100%; /* Garante que o corpo ocupe toda a altura da tela */
  margin: 0;
}

.login-container {
  min-height: 100vh; /* Ocupa toda a altura da tela */
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #1b1b1b, #0d0d0d);
  padding: 1rem;
  max-width: 1000vh;
}

.login-card {
  background: #1f1f1f;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 700px;
}

.login-header {
  margin-bottom: 2rem;
}

.wayne-logo {
  width: 80px;
  margin-bottom: 1rem;
}

.subtitle {
  color: #6c757d;
  font-size: 0.9rem;
}

.form-control {
  background: #292929;
  color: #fff;
  border: 1px solid #444;
  border-radius: 5px;
}

.form-control:focus {
  background: #292929;
  color: #fff;
  border-color: #007bff;
  box-shadow: 0 0 5px #007bff;
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
}

.login-btn {
  background: #007bff;
  border: none;
  transition: all 0.3s;
}

.login-btn:hover {
  background: #0056b3;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5);
}

.login-btn:active {
  background: #003f7f;
}

.router-link {
  color: #007bff;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .login-card {
    padding: 2rem;
  }

  .login-header h1 {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.8rem;
  }

  .login-btn {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .login-header h1 {
    font-size: 1.25rem;
  }

  .subtitle {
    font-size: 0.75rem;
  }

  .login-btn {
    font-size: 0.8rem;
  }
}

.wayne-logo {
  width: 150px;
  margin-bottom: 1rem;
}
</style>
