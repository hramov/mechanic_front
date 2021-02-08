<template>
  <main>
    <h3>
      Изменить данные работника {{ singleWorkerGetter.lastName }}
      {{ singleWorkerGetter.name }}
    </h3>
    <WorkerAddTable
      :workerData="singleWorkerGetter"
      method="put"
      v-if="singleWorkerGetter.id"
    />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import WorkerAddTable from "./../components/pieces/WorkerAddTable.vue";

@Options({
  components: {
    WorkerAddTable,
  },
  async mounted() {
    this.getSingleWorker(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getSingleWorker"]),
  },
  computed: {
    ...mapGetters(["singleWorkerGetter"]),
  },
})
export default class WorkerEditPage extends Vue {}
</script>