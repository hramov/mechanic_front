<template>
  <div
    class="modal fade"
    id="propertyEditModal"
    tabindex="-1"
    aria-labelledby="propertyEditModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="propertyEditModalLabel">
            Изменить параметры оборудования
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <PropertyAddTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import PropertyAddTable from "./PropertyAddTable.vue";

@Options({
  components: {
    PropertyAddTable,
  },
})
export default class PropertyEditModal extends Vue {}
</script>