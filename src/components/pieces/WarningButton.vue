<template>
  <button
    class="btn btn-outline-warning"
    style="margin-right: 10px; margin-top: -5px"
    data-bs-toggle="modal"
    :data-bs-target="`#${editType}`"
  >
    <font-awesome-icon icon="pencil-ruler" />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["customSize", "editType"],
  mounted() {
    console.log(this.editType);
  },
})
export default class WarningButton extends Vue {}
</script>