<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
          <!-- Inserindo os campos referente ao registro: -->
          <label for="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control mb-5"
            placeholder="Insira o seu nome"
            v-model="registerForm.name"
          />

          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control mb-5"
            placeholder="Insira o seu E-mail"
            v-model="registerForm.email"
          />

          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control mb-5"
            placeholder="Insira a sua senha"
            v-model="registerForm.password"
          />

          <p class="center">
            Já possui um login cadastrado?
            <router-link to="/">Faça o login</router-link>
          </p>

          <center>
            <button
              @click="submitRegisterUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
              Registrar
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style src="" scoped></style>
