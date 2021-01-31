<template>
  <main>
    <h3>Расположение имущества {{ userGetter.department.title }}</h3>
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

import PropertyTable from "./../components/PropertyTable.vue";

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
