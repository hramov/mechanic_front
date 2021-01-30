<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <span class="text-muted"
            >&copy; 2020 - 2021 "Электронный помощник старшего
            электромеханика"</span
          >
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <span class="text-muted text-right"
            >Разработчик:
            <a target="_blank" href="https://github.com/hramov">Храмов С.И.</a>
            | Социальные сети: @therealhramov</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: beige;
}
</style>