<template>
  <div
    class="modal fade"
    id="stationEditModal"
    tabindex="-1"
    aria-labelledby="stationEditModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="stationEditModalLabel">
            Изменить данные станции Камень-на-Оби
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <StationAddTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import StationAddTable from "./StationAddTable.vue";

@Options({
  components: {
    StationAddTable,
  },
})
export default class StationEditModal extends Vue {}
</script>