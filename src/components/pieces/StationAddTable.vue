<template>
  <form class="form" @submit.prevent>
    <input
      type="text"
      class="form-control"
      placeholder="Название"
      v-model="station.title"
      required
    />
    <input
      type="text"
      class="form-control"
      placeholder="Расположение (км, пк)"
      v-model="station.position"
      required
    />
    <input
      type="number"
      class="form-control"
      placeholder="Телефон ОТС"
      v-model="station.ots"
    />
    <input
      type="number"
      class="form-control"
      placeholder="Телефон ОбТС"
      v-model="station.obts"
    />

    <label for="device">Цех</label>
    <select
      name="departmentForStation"
      class="form-select"
      v-model="station.departmentId"
      required
    >
      <option :value="userGetter.department.id">
        {{ userGetter.department.title }}
      </option>
    </select>

    <label for="departmentForProperty">Ответственный</label>
    <select
      name="departmentForProperty"
      v-model="station.workerId"
      class="form-select"
      required
    >
      <option
        v-for="employee in employeesGetter"
        :key="employee.id"
        :value="employee.id"
      >
        {{
          nameGenerator(
            employee.position.title,
            employee.lastName,
            employee.name,
            employee.otherName
          )
        }}
      </option>
    </select>
    <button class="btn btn-primary" @click="saveStationMethod">Добавить</button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

@Options({
  props: ["stationData"],
  data() {
    return {
      station: {
        title: this.stationData["title"] || "",
        position: this.stationData["position"] || "",
        departmentId: this.stationData["departmentId"] || 0,
        workerId: this.stationData["workerId"] || 0,
        ots: this.stationData["ots"] || "",
        obts: this.stationData["obts"] || "",
      },
    };
  },
  async mounted() {
    await this.getDistance();
    await this.getDepartment();
    await this.getEmployees();
  },
  computed: mapGetters([
    "distanceGetter",
    "departmentGetter",
    "userGetter",
    "employeesGetter",
  ]),
  methods: {
    ...mapActions([
      "getDistance",
      "getDepartment",
      "getEmployees",
      "saveStation",
    ]),
    nameGenerator(
      position: string,
      lastName: string,
      name: string,
      otherName: string
    ): string {
      return `${position} ${lastName} ${name.slice(0, 1)}. ${otherName.slice(
        0,
        1
      )}.`;
    },
    async saveStationMethod() {
      const result = await this.saveStation(this.station);
      alert(result.message);

      this.station = {};

      await this.getDistance();
      await this.getDepartment();
      await this.getEmployees();
    },
  },
})
export default class StationAddTable extends Vue {}
</script>