<template>
  <main>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Количество</th>
          <th scope="col">Станция</th>
          <th scope="col">Местоположение</th>
          <th scope="col">Дата проверки</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="property in stationPropertyGetter" :key="property.id">
          <td>{{ property.title }}</td>
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
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

@Options({
  data() {
    return {};
  },
  computed: mapGetters(["stationPropertyGetter"]),
  async mounted() {
    await this.getPropertyForStation(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getPropertyForStation"]),
  },
})
export default class Property extends Vue {}
</script>