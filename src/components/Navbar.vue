<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark"
    aria-label="Fourth navbar example"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        >Электромеханик Онлайн</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <!--<li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">Главная</a>
          </li> -->

          <li class="nav-item">
            <router-link class="nav-link" to="/property">Имущество</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/work">Работы</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/docs">Документация</router-link>
          </li>
        </ul>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          @click="$router.push('/login')"
        >
          Войти
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Navbar extends Vue {}
</script>