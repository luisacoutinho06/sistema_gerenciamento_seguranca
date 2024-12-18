<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
          <!-- Inserindo os campos referente ao login: -->
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control mb-5"
            placeholder="Digite o seu E-mail"
            v-model="loginForm.email"
          />

          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control mb-5"
            placeholder="Digite a sua senha"
            v-model="loginForm.password"
          />

          <p class="center">
            Não tem uma conta cadastrada?
            <router-link to="/register">Cadastre-se aqui</router-link>
          </p>

          <center>
            <button @click="submitLoginUser" class="btn btn-primary btn-block w-75 my-4">
              Logar
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style src="" scoped></style>
