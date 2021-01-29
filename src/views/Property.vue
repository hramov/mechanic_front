<template>
  <main>
    <h2>Ст. Камень-на-Оби</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Количество</th>
          <th scope="col">Местоположение</th>
          <th scope="col">Дата проверки</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="property in propertyGetter" :key="property.id">
          <td>{{ property.title }}</td>
          <td>{{ property.quantity }}</td>
          <td>{{ property.location }}</td>
          <td>
            {{ new Date(property.dateCheck).toLocaleDateString() }} (осталось
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
import { mapGetters, mapActions } from "vuex";

@Options({
  data: () => {
    return {
      property: [],
    };
  },
  computed: mapGetters(["propertyGetter"]),
  async mounted() {
    await this.getPropertyMethod();
  },
  methods: {
    ...mapActions(["getProperty"]),
    async getPropertyMethod() {
      await this.getProperty();
    },
  },
})
export default class Property extends Vue {}
</script>
