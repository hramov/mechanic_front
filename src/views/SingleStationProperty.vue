<template>
  <main>
    <h3>Расположение имущества на станции {{ getStation() }}</h3>
    <div class="card">
      <div class="card-body">
        <PropertyTable :properties="stationPropertyGetter" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import PropertyTable from "./../components/PropertyTable.vue";
@Options({
  data() {
    return {};
  },
  components: {
    PropertyTable,
  },
  computed: mapGetters(["stationPropertyGetter"]),
  async mounted() {
    await this.getPropertyForStation(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getPropertyForStation"]),
    getStation() {
      let station = "";
      let prevStation = "";
      for (let i = 0; i < this.stationPropertyGetter.length; i++) {
        station = this.stationPropertyGetter[i].station.title;
        if (prevStation === station) break;
        prevStation = station;
      }
      return station;
    },
  },
})
export default class Property extends Vue {}
</script>