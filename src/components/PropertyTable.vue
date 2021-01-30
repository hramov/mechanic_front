<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Название</th>
        <th scope="col">Тип</th>
        <th scope="col">Количество</th>
        <th scope="col">Станция</th>
        <th scope="col">Местоположение</th>
        <th scope="col">Дата проверки</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="property in properties" :key="property.id">
        <td>{{ property.title }}</td>
        <td>{{ property.device.title }}</td>
        <td>{{ property.quantity }}</td>
        <td>{{ property.station.title }}</td>
        <td>{{ property.location }}</td>
        <td>
          {{ new Date(property.dateCheck).toLocaleDateString() }}
          (осталось
          {{
            Math.ceil(
              Math.abs(
                new Date(property.dateCheck).getTime() -
                  new Date(Date.now()).getTime()
              ) /
                (1000 * 3600 * 24)
            )
          }}
          дня)
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["properties"],
})
export default class PropertyTable extends Vue {}
</script>