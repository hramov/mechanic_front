<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Название</th>
        <th scope="col">Расположение</th>
        <th scope="col">Оборудование</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="station in distanceGetter" :key="station.id">
        <td>{{ station.title }}</td>
        <td>{{ station.position }}</td>
        <td>{{ station.propertyCount }}</td>
        <td>
          <WarningButton editType="stationEditModal" />
          <DangerButton />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import WarningButton from "./WarningButton.vue";
import DangerButton from "./DangerButton.vue";
import { mapActions, mapGetters } from "vuex";

@Options({
  components: {
    WarningButton,
    DangerButton,
  },

  methods: mapActions(["getDistance"]),
  async mounted() {
    await this.getDistance();
  },
  computed: mapGetters(["distanceGetter"]),
})
export default class StationTable extends Vue {}
</script>