<template>
  <main>
    <h3>Панель старшего электромеханика</h3>
    <div class="card">
      <div class="card-body">
        <ExpandButtons />
        <div class="collapse" id="collapseProperty">
          <div class="card-title h5">Добавить имущество</div>
          <PropertyAddTable :propertyData="property" />
        </div>
        <div class="collapse" id="collapseWorker">
          <div class="card-title h5">Добавить работника</div>
          <WorkerAddTable />
        </div>
        <div class="collapse" id="collapseStation">
          <div class="card-title h5">Добавить станцию</div>
          <StationAddTable />
        </div>
        <hr />
        <div class="row">
          <div class="col">
            <h4 class="text-center">Мои работники</h4>
            <WorkerTable />
            <WorkerEditModal />
          </div>
          <div class="col">
            <h4 class="text-center">Мои Станции</h4>
            <StationTable />
            <StationEditModal />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import PropertyAddTable from "./../components/pieces/PropertyAddTable.vue";
import WorkerAddTable from "./../components/pieces/WorkerAddTable.vue";
import StationAddTable from "./../components/pieces/StationAddTable.vue";

import StationTable from "./../components/pieces/StationTable.vue";
import WorkerTable from "./../components/pieces/WorkerTable.vue";
import ExpandButtons from "./../components/pieces/ExpandButtons.vue";

import WorkerEditModal from "./../components/pieces/WorkerEditModal.vue";
import StationEditModal from "./../components/pieces/StationEditModal.vue";

@Options({
  data() {
    return {
      property: {
        title: "",
        description: "",
        invNumber: "",
        quantity: "",
        stationId: "",
        location: "",
        dateCome: "",
        dateCheck: "",
        timeToLive: "",
        deviceId: "",
        departmentId: "",
      },
    };
  },
  components: {
    PropertyAddTable,
    WorkerAddTable,
    StationAddTable,
    StationTable,
    WorkerTable,
    ExpandButtons,
    WorkerEditModal,
    StationEditModal,
  },
})
export default class Home extends Vue {}
</script>

<style>
.form-control {
  margin-bottom: 10px !important;
}

.form-select {
  margin-bottom: 10px !important;
}

.expandButton {
  margin-right: 20px;
}

.expandDiv {
  text-align: center;
}
</style>