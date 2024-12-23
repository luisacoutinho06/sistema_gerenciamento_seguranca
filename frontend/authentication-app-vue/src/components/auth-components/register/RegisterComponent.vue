<template>
  <div class="container register-container">
    <div class="row justify-content-center align-items-center">
      <div>
        <div class="register-card">
          <div class="register-header text-center">
            <img
              src="../../../assets/wayne_industrias_logo.png"
              alt="Wayne Industries Logo"
              class="wayne-logo"
            />
            <h1 style="color: white">Indústrias Wayne</h1>
            <p class="subtitle" style="color: white">A tecnologia do futuro, hoje.</p>
          </div>

          <form v-on:submit.prevent="registerSubmitUserForm">
            <div class="form-group" style="margin-bottom: 15px">
              <label for="name" style="color: white">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                color="white"
                class="form-control"
                placeholder="Insira o seu nome"
                v-model="registerForm.name"
                :class="{ 'is-invalid': isSubmitted && $v.registerForm.name.$error }"
              />
              <div
                v-if="isSubmitted && !$v.registerForm.name.required"
                class="invalid-feedback"
                style="color: white"
              >
                O campo nome é obrigatório!
              </div>
            </div>

            <div class="form-group">
              <label for="email" style="color: white">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                color="white"
                placeholder="Insira o seu e-mail"
                v-model="registerForm.email"
                :class="{ 'is-invalid': isSubmitted && $v.registerForm.email.$error }"
              />
              <div
                v-if="isSubmitted && !$v.registerForm.email.required"
                class="invalid-feedback"
                style="color: white"
              >
                O campo e-mail é obrigatório!
              </div>
              <div
                v-if="isSubmitted && !$v.registerForm.email.email"
                class="invalid-feedback"
                style="color: white"
              >
                O e-mail inserido não é válido!
              </div>
            </div>

            <div class="form-group" style="margin-top: 15px; margin-bottom: 15px">
              <label for="password" style="color: white">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                color="white"
                class="form-control"
                placeholder="Insira sua senha"
                v-model="registerForm.password"
                :class="{ 'is-invalid': isSubmitted && $v.registerForm.password.$error }"
              />
              <div class="invalid-feedback">
                <span
                  v-if="isSubmitted && !$v.registerForm.password.required"
                  style="color: white"
                >
                  O campo senha é obrigatório!
                </span>
                <span
                  v-if="isSubmitted && !$v.registerForm.password.minLength"
                  style="color: white"
                >
                  O campo senha deve ter obrigatoriamente mais de 8 caracteres!
                </span>
              </div>
            </div>

            <div class="form-footer text-center">
              <p style="color: white">
                Já possui um login cadastrado?
                <router-link to="/">Faça o login</router-link>
              </p>
              <button
                @click="submitRegisterUser"
                class="btn btn-primary btn-block register-btn"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style scoped>
body {
  background-color: #121212;
  color: #fff;
  font-family: "Roboto", sans-serif;
  height: 100%; /* Garante que o corpo ocupe toda a altura da tela */
  margin: 0;
}

.register-container {
  min-height: 100vh; /* Ocupa toda a altura da tela */
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #1b1b1b, #0d0d0d);
  padding: 1rem;
  max-width: 1000vh;
}

.register-card {
  background: #1f1f1f;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 700px;
}

.register-header {
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

.register-btn {
  background: #007bff;
  border: none;
  transition: all 0.3s;
}

.register-btn:hover {
  background: #0056b3;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5);
}

.register-btn:active {
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
  .register-card {
    padding: 2rem;
  }

  .register-header h1 {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.8rem;
  }

  .register-btn {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .register-header h1 {
    font-size: 1.25rem;
  }

  .subtitle {
    font-size: 0.75rem;
  }

  .register-btn {
    font-size: 0.8rem;
  }
}

.wayne-logo {
  width: 150px;
  margin-bottom: 1rem;
}

.form-control::placeholder {
  color: rgb(141, 141, 141);
  opacity: 1;
}
</style>
