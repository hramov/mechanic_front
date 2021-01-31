<template>
  <main>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="propertyImage">
          <img :src="propertyImage()" class="propertyImage" />
        </div>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
        <div class="propertyDescription">
          <span
            ><strong>Название:</strong> {{ singlePropertyGetter.title }}</span
          ><br />
          <span
            ><strong>Описание:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident numquam non, ab officia error officiis
            suscipit, veniam nihil magnam eos, temporibus aperiam harum quod
            rerum sint necessitatibus. Minus, animi repellat.</span
          ><br />
          <!-- <span>Тип: {{ singlePropertyGetter.device.title }}</span>
          <br /> -->
          <span
            ><strong>Инвентарный номер:</strong>
            {{ singlePropertyGetter.invNumber }}</span
          >
          <br />
          <span
            ><strong>Количество:</strong>
            {{ singlePropertyGetter.invNumber }}</span
          >
          <br />
          <span
            ><strong>Расположение:</strong>
            {{ singlePropertyGetter.location }}</span
          >
          <br />
          <span><strong>Документация:</strong> </span>
          <hr />
          <span
            ><strong>Дата поступления:</strong>
            {{
              new Date(singlePropertyGetter.dateCome).toLocaleDateString()
            }}</span
          >
          <br />
          <span
            ><strong>Дата списания:</strong>
            {{
              new Date(singlePropertyGetter.timeToLive).toLocaleDateString()
            }}</span
          >
          <hr />
          <span
            ><strong>Дата проверки:</strong>
            {{ new Date(singlePropertyGetter.dateCheck).toLocaleDateString() }}
            <div v-if="needToCheck()">
              <span style="color: red">Нужно проверить!</span>
              <hr />
              <form class="form" @submit.prevent>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Дата очередной проверки"
                  required
                  v-model="dateCheck"
                /><br />
                <button
                  type="button"
                  class="btn btn-success"
                  @click="updateProperty({ singlePropertyGetter, dateCheck })"
                >
                  Проверить
                </button>
              </form>
            </div></span
          >
          <br />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

@Options({
  data() {
    return {
      dateCheck: "",
    };
  },
  async mounted() {
    await this.getSingleProperty(this.$route.params.id);
  },

  methods: {
    ...mapActions(["getSingleProperty", "updateProperty"]),
    propertyImage() {
      let fileName = "";
      if (!this.singlePropertyGetter.image) return;
      fileName = this.singlePropertyGetter.image;
      return require(`./../assets/${fileName}`);
    },
    needToCheck() {
      const daysToCheck = Math.ceil(
        Math.abs(
          new Date(this.singlePropertyGetter.dateCheck).getTime() -
            new Date(Date.now()).getTime()
        ) /
          (1000 * 3600 * 24)
      );
      if (daysToCheck < 7) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(["singlePropertyGetter"]),
  },
})
export default class SingleProperty extends Vue {}
</script>

<style scoped>
.propertyImage {
  width: 200px;
}
</style>