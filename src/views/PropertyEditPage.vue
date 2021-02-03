<template>
  <main>
    <h3>Изменить данные оборудования {{ singlePropertyGetter.title }}</h3>
    <PropertyAddTable
      :propertyData="singlePropertyGetter"
      method="put"
      v-if="singlePropertyGetter.id"
    />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import PropertyAddTable from "./../components/pieces/PropertyAddTable.vue";

@Options({
  components: {
    PropertyAddTable,
  },
  async mounted() {
    this.getSingleProperty(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getSingleProperty"]),
  },
  computed: {
    ...mapGetters(["singlePropertyGetter"]),
  },
})
export default class Home extends Vue {}
</script>