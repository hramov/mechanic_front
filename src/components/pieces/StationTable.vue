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
      <tr>
        <td>Камень-на-Оби</td>
        <td>600 км, 1 пк</td>
        <td>5</td>
        <td>
          <WarningButton editType="station" />
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
export default class StationTable extends Vue {}
</script>