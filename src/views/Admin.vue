<template>
  <main>
    <h3>Панель старшего электромеханика</h3>
    <div class="card">
      <div class="card-body">
        <div class="card-title h5">Добавить имущество</div>
        <form class="form" @submit.prevent>
          <input
            type="text"
            class="form-control"
            placeholder="Название"
            v-model="property.title"
            required
          />
          <input
            type="number"
            class="form-control"
            placeholder="Инвентарный номер"
            v-model="property.invNumber"
            required
          />
          <input
            type="number"
            class="form-control"
            placeholder="Количество"
            v-model="property.quantity"
          />
          <label for="station">Станция</label>
          <select
            name="station"
            v-model="property.stationId"
            class="form-select"
            required
          >
            <option
              v-for="station in distanceGetter"
              :key="station.id"
              :value="station.id"
            >
              {{ station.title }}
            </option>
          </select>
          <input
            type="text"
            class="form-control"
            placeholder="Расположение"
            v-model="property.location"
            required
          />
          <input
            type="text"
            class="form-control"
            placeholder="Дата получения"
            v-model="property.dateCome"
            required
          />
          <input
            type="text"
            class="form-control"
            placeholder="Дата проверки"
            v-model="property.dateCheck"
            required
          />
          <input
            type="text"
            class="form-control"
            placeholder="Дата списания"
            v-model="property.timeToLive"
            required
          />
          <label for="device">Тип оборудования</label>
          <select
            name="device"
            class="form-select"
            v-model="property.deviceId"
            required
          >
            <option
              v-for="device in deviceGetter"
              :key="device.id"
              :value="device.id"
            >
              {{ device.title }}
            </option>
          </select>
          <label for="departmentForProperty">Цех</label>
          <select
            name="departmentForProperty"
            v-model="property.departmentId"
            class="form-select"
            required
          >
            <option :value="userGetter.department.id">
              {{ userGetter.department.title }}
            </option>
          </select>
          <button class="btn btn-primary" @click="savePropertyMethod">
            Добавить
          </button>
        </form>
        <hr />
        <div class="card-title h5">Добавить работника</div>
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
          <button class="btn btn-primary" @click="saveEmployeeMethod">
            Добавить
          </button>
        </form>
        <hr />
        <div class="card-title h5">Добавить станцию</div>
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
              v-for="employee in employeeGetter"
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
          <button class="btn btn-primary" @click="saveStationMethod">
            Добавить
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from "vuex";

@Options({
  data() {
    return {
      employee: {
        lastName: "",
        name: "",
        otherName: "",
        departmentId: null,
        positionId: null,
        phone: null,
        login: "",
        password: "",
      },
      property: {
        title: "",
        invNumber: null,
        quantity: null,
        stationId: null,
        location: "",
        dateCome: "",
        dateCheck: "",
        timeToLive: "",
        deviceId: null,
        departmentId: null,
      },
      station: {
        title: "",
        position: "",
        departmentId: 0,
        workerId: 0,
        ots: "",
        obts: "",
      },
    };
  },
  async mounted() {
    await this.getDistance();
    await this.getPosition();
    await this.getDepartment();
    await this.getDevice();
    await this.getEmployee();
  },
  computed: mapGetters([
    "distanceGetter",
    "positionGetter",
    "departmentGetter",
    "deviceGetter",
    "userGetter",
    "employeeGetter",
  ]),
  methods: {
    ...mapActions([
      "getDistance",
      "getPosition",
      "getDepartment",
      "getDevice",
      "getEmployee",
      "saveEmployee",
      "saveProperty",
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
    async saveEmployeeMethod() {
      console.log(await this.saveEmployee(this.employee));
    },
    async savePropertyMethod() {
      this.property.dateCome = new Date(
        this.property.dateCome
      ).toLocaleDateString();
      this.property.dateCheck = new Date(
        this.property.dateCheck
      ).toLocaleDateString();
      this.property.timeToLive = new Date(
        this.property.timeToLive
      ).toLocaleDateString();
      console.log(await this.saveProperty(this.property));
    },
    async saveStationMethod() {
      console.log(await this.saveStation(this.station));
    },
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.form-control {
  margin-bottom: 10px !important;
}

.form-select {
  margin-bottom: 10px !important;
}
</style>