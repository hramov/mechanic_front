<template>
  <button
    class="btn btn-outline-danger"
    style="margin-right: 10px; margin-top: -5px"
    @click="clickHandler"
  >
    <font-awesome-icon :size="customSize" icon="trash" />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["customSize"],
  methods: {
    clickHandler() {
      const isConfirm: boolean = confirm("Вы уверены, что хотите удалить?");
      if (!isConfirm) return;
      console.log("Confirm");
    },
  },
})
export default class WorkerTable extends Vue {}
</script>