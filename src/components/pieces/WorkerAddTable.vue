<template>
  <form class="form" @submit.prevent>
    <input
      type="text"
      class="form-control"
      placeholder="Фамилия"
      v-model="employee.lastName"
      required
    />
    <input
      type="text"
      class="form-control"
      placeholder="Имя"
      v-model="employee.name"
      required
    />
    <input
      type="text"
      class="form-control"
      placeholder="Отчество"
      v-model="employee.otherName"
    />
    <label for="department">Цех</label>
    <select
      name="department"
      v-model="employee.departmentId"
      required
      class="form-select"
    >
      <option :value="userGetter.departmentId">
        {{ userGetter.department.title }}
      </option>
    </select>
    <label for="position">Должность</label>
    <select
      name="position"
      v-model="employee.positionId"
      required
      class="form-select"
    >
      <option
        v-for="position in positionGetter"
        :key="position.id"
        :value="position.id"
      >
        {{ position.title }}
      </option>
    </select>
    <input
      type="number"
      class="form-control"
      placeholder="Телефон"
      v-model="employee.phone"
      required
    />
    <input
      type="text"
      class="form-control"
      placeholder="Логин"
      v-model="employee.login"
      required
    />
    <input
      type="text"
      class="form-control"
      placeholder="Пароль"
      v-model="employee.password"
      required
    />
    <div align="right">
      <button class="btn btn-primary" @click="saveEmployeeMethod">
        Сохранить
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

@Options({
  props: ["workerData"],
  data() {
    return {
      employee: {
        lastName: this.workerData["lastName"] || "",
        name: this.workerData["name"] || "",
        otherName: this.workerData["otherName"] || "",
        departmentId: this.workerData["departmentId"] || "",
        positionId: this.workerData["positionId"] || "",
        phone: this.workerData["phone"] || "",
        login: this.workerData["login"] || "",
        password: this.workerData["password"] || "",
      },
    };
  },
  async mounted() {
    await this.getDistance();
    await this.getPosition();
    await this.getDepartment();
    await this.getEmployees();
  },
  computed: mapGetters([
    "distanceGetter",
    "positionGetter",
    "departmentGetter",
    "userGetter",
    "employeesGetter",
  ]),
  methods: {
    ...mapActions([
      "getDistance",
      "getPosition",
      "getDepartment",
      "getEmployees",
      "saveEmployee",
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
    async saveEmployeeMethod() {
      console.log(await this.saveEmployee(this.employee));
    },
  },
})
export default class WorkerAddTable extends Vue {}
</script>
<style scoped>
.form-control,
.form-select {
  margin-bottom: 10px;
}
</style>