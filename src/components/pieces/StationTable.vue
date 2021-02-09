<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Название</th>
        <th scope="col">Расп-е</th>
        <th scope="col">Кол-во оборуд.</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="station in distanceGetter" :key="station.id">
        <td>{{ station.title }}</td>
        <td>{{ station.position }}</td>
        <td>{{ station.propertyCount }}</td>
        <td>
          <WarningButton
            @click="$router.push(`/distance/edit/${station.id}`)"
          />
          <DangerButton @click="deleteHandler(station.id)" />
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

  methods: {
    ...mapActions(["getDistance", "deleteStation"]),

    async deleteHandler(id: number) {
      const isConfirm: boolean = confirm("Вы уверены, что хотите удалить?");
      if (!isConfirm) return;
      await this.deleteStation(id);
      alert("Станция успешно удалена");
      await this.getDistance();
    },
  },
  async mounted() {
    await this.getDistance();
  },
  computed: mapGetters(["distanceGetter"]),
})
export default class StationTable extends Vue {}
</script>