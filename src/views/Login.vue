<template>
  <main>
    <div class="row">
      <div class="col">
        <form class="form-signin text-center" width="300px" @submit.prevent>
          <h3 class="mb-3 font-weight-normal">Войдите в учетную запись</h3>
          <input
            type="text"
            id="inputLogin"
            class="form-control"
            placeholder="Логин"
            required
            autofocus
            style="width: 400px; margin: 0 auto; margin-bottom: 10px"
            v-model="login"
          />
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Пароль"
            required
            style="width: 400px; margin: 0 auto; margin-bottom: 10px"
            v-model="password"
          />
          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            @click="loginMethod"
          >
            Войти
          </button>
        </form>
      </div>
      <div class="col">
        <h3>Как получить учетную запись?</h3>
        <p>- Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        <p>
          - Et labore, consequuntur sit nesciunt necessitatibus at amet ab
          dolore, molestiae dolorem beatae sed soluta quis sequi eius quia
          deserunt commodi veritatis
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";

@Options({
  data() {
    return {
      login: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(["loginAction"]),
    async loginMethod() {
      await this.loginAction({ login: this.login, password: this.password });
    },
  },
})
export default class Home extends Vue {}
</script>