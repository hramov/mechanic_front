<template>
  <form class="form" @submit.prevent>
    <input
      type="text"
      class="form-control"
      placeholder="Название"
      v-model="property.title"
      required
    />
    <textarea
      class="form-control"
      rows="5"
      v-model="property.description"
      placeholder="Описание"
    ></textarea>
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
      Сохранить
    </button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

@Options({
  props: ["propertyData", "method"],
  data() {
    return {
      property: {
        id: this.propertyData["id"] || "",
        title: this.propertyData["title"] || "",
        description: this.propertyData["description"] || "",
        invNumber: this.propertyData["invNumber"] || "",
        quantity: this.propertyData["quantity"] || "",
        stationId: this.propertyData["stationId"] || "",
        location: this.propertyData["location"] || "",
        dateCome: this.propertyData["dateCome"] || "",
        dateCheck: this.propertyData["dateCheck"] || "",
        timeToLive: this.propertyData["timeToLive"] || "",
        deviceId: this.propertyData["deviceId"] || "",
        departmentId: this.propertyData["departmentId"] || "",
      },
    };
  },
  async mounted() {
    await this.getDistance();
    await this.getDepartment();
    await this.getDevice();
  },
  computed: mapGetters([
    "distanceGetter",
    "departmentGetter",
    "deviceGetter",
    "userGetter",
  ]),
  methods: {
    ...mapActions([
      "getDistance",
      "getDepartment",
      "getDevice",
      "saveProperty",
      "updateProperty",
      "saveStation",
    ]),
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

      if (this.method === "post") await this.saveProperty(this.property);
      else if (this.method === "put")
        await this.updateProperty({
          property: this.property,
          id: this.property.id,
        });
      else console.log("Method is not defined");
      this.$router.push("/property");
    },
  },
})
export default class PropertyAddTable extends Vue {}
</script>

<style scoped>
.form-control,
.form-select {
  margin-bottom: 10px;
}
</style>