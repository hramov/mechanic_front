<template>
  <div>
    {{ propertyDataProp }}
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Тип</th>
          <th scope="col">Количество</th>
          <th scope="col">Станция</th>
          <th scope="col">Местоположение</th>
          <th scope="col">Дата проверки</th>
          <th scope="col">Действия</th>
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
            {{ new Date(property.dateCheck).toLocaleDateString("en-GB") }}
            (осталось дней:
            {{ daysToCheck(property.dateCheck) }})
          </td>
          <td>
            <router-link :to="`/property/${property.id}`"
              ><font-awesome-icon
                size="lg"
                icon="arrow-circle-right"
                style="margin-right: 10px"
            /></router-link>

            <WarningButton
              @click="$router.push({ path: `/property/edit/${property.id}` })"
            />

            <DangerButton />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <PropertyEditModal
      :propertyData="propertyDataProp"
      v-if="propertyDataProp"
    /> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WarningButton from "./WarningButton.vue";
import DangerButton from "./DangerButton.vue";
import PropertyEditModal from "./PropertyEditModal.vue";

@Options({
  props: ["properties"],
  data() {
    return {
      propertyDataProp: undefined,
    };
  },
  mounted() {
    console.log(this.properties);
  },
  components: {
    WarningButton,
    DangerButton,
    PropertyEditModal,
  },
  methods: {
    dateFormatted(date: string): string {
      const dateArray = date.split(".");
      const middleString: string = dateArray[0];
      dateArray[0] = dateArray[1];
      dateArray[1] = middleString;
      return new Date(dateArray.join(".")).toLocaleDateString();
    },

    daysToCheck(dateCheck: string): number {
      const result = Math.ceil(
        Math.abs(
          new Date(dateCheck).getTime() - new Date(Date.now()).getTime()
        ) /
          (1000 * 3600 * 24) -
          1
      );
      return result;
    },
  },
})
export default class PropertyTable extends Vue {}
</script>