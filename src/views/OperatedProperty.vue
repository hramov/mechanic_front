<template>
  <main>
    <h3 v-if="$route.path === 'property/operated'">
      Расположение имущества {{ userGetter.department.title }} /
      <router-link to="/property/operated"> Необходимо проверить</router-link>
    </h3>
    <h3>
      <router-link to="/property"
        >Расположение имущества {{ userGetter.department.title }}</router-link
      >
      / Необходимо проверить
    </h3>
    <div class="card">
      <div class="card-body">
        <PropertyTable :properties="operatedPropertyGetter" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PropertyTable from "./../components/pieces/PropertyTable.vue";
import { mapActions, mapGetters } from "vuex";
@Options({
  data: () => {
    return {
      property: [],
    };
  },
  components: {
    PropertyTable,
  },
  computed: mapGetters(["operatedPropertyGetter", "userGetter"]),
  async mounted() {
    await this.getPropertyMethod();
  },
  methods: {
    ...mapActions(["getOperatedProperty"]),
    async getPropertyMethod() {
      await this.getOperatedProperty();
    },
  },
})
export default class OperatedProperty extends Vue {}
</script>