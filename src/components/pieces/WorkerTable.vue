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
      <tr>
        <td>РЦСН</td>
        <td>Храмов С.И.</td>
        <td style="color: green">Работает</td>
        <td>
          <WarningButton editType="worker" />
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

@Options({
  components: {
    WarningButton,
    DangerButton,
  },
})
export default class WorkerTable extends Vue {}
</script>