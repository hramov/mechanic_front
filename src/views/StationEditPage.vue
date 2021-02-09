<template>
  <main>
    <h3>Изменить данные станции {{ singleStationGetter.title }}</h3>
    <StationAddTable
      :stationData="singleStationGetter"
      method="put"
      v-if="singleStationGetter.id"
    />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import StationAddTable from "./../components/pieces/StationAddTable.vue";

@Options({
  components: {
    StationAddTable,
  },
  async mounted() {
    this.getSingleStation(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getSingleStation"]),
  },
  computed: {
    ...mapGetters(["singleStationGetter"]),
  },
})
export default class StationEditPage extends Vue {}
</script>