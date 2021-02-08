<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Должность</th>
        <th scope="col">ФИО</th>
        <th scope="col">Статус</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="worker in employeesGetter" :key="worker.id">
        <td>{{ worker.position.title }}</td>
        <td>
          {{ worker.lastName }} {{ worker.name.slice(0, 1) }}.
          {{ worker.otherName.slice(0, 1) }}.
        </td>
        <td style="color: green">Работает</td>
        <td>
          <WarningButton @click="$router.push(`/worker/edit/${worker.id}`)" />
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
  methods: mapActions(["getEmployees"]),
  async mounted() {
    await this.getEmployees();
  },
  computed: mapGetters(["employeesGetter"]),
})
export default class WorkerTable extends Vue {}
</script>