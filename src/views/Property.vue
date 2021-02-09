<template>
  <main>
    <h3>
      Расположение оборудования {{ userGetter.department.title }} /
      <router-link to="/property/operated"> Необходимо проверить</router-link>
    </h3>
    <div class="card">
      <div class="card-body">
        <PropertyTable :properties="propertyGetter" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from "vuex";

import PropertyTable from "./../components/pieces/PropertyTable.vue";

@Options({
  data: () => {
    return {
      property: [],
    };
  },
  components: {
    PropertyTable,
  },
  computed: mapGetters(["propertyGetter", "userGetter"]),
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
