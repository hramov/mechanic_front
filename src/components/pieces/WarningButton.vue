<template>
  <button
    v-if="editType === 'worker'"
    class="btn btn-outline-warning"
    style="margin-right: 10px; margin-top: -5px"
    data-bs-toggle="modal"
    data-bs-target="#workerEditModal"
  >
    <font-awesome-icon :size="customSize" icon="pencil-ruler" />
  </button>
  <button
    v-else
    class="btn btn-outline-warning"
    style="margin-right: 10px; margin-top: -5px"
    data-bs-toggle="modal"
    data-bs-target="#stationEditModal"
  >
    <font-awesome-icon :size="customSize" icon="pencil-ruler" />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["customSize", "editType"],
})
export default class WorkerTable extends Vue {}
</script>