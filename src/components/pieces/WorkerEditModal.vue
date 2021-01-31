<template>
  <div
    class="modal fade"
    id="workerEditModal"
    tabindex="-1"
    aria-labelledby="workerEditModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="workerEditModalLabel">
            Изменить данные работника Храмов С.И.
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <WorkerAddTable />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>
          <!--<button type="button" class="btn btn-primary">Сохранить</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import WorkerAddTable from "./WorkerAddTable.vue";

@Options({
  components: {
    WorkerAddTable,
  },
})
export default class WorkerTable extends Vue {}
</script>