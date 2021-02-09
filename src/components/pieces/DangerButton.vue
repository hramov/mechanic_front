<template>
  <button
    class="btn btn-outline-danger"
    style="margin-right: 10px; margin-top: -5px"
  >
    <font-awesome-icon :size="customSize" icon="trash" />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class WorkerTable extends Vue {}
</script>