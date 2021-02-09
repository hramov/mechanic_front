<template>
  <button
    class="btn btn-outline-warning"
    style="margin-right: 10px; margin-top: -5px"
  >
    <font-awesome-icon icon="pencil-ruler" />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class WarningButton extends Vue {}
</script>