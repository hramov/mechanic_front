<template>
  <Navbar />
  <br />
  <div class="container">
    <router-view />
  </div>
  <br />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style scoped>
</style>
