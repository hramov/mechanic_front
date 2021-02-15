<template>
  <main>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="propertyImage">
          <img
            :src="propertyImage()"
            class="propertyImage"
            v-if="singlePropertyGetter.image"
          />
        </div>
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
        <div class="propertyDescription">
          <span>
            <!--<strong>Название:</strong> {{ singlePropertyGetter.title }}--></span
          ><br />
          <span>Тип: {{ deviceTitle }}</span>
          <br />
          <span
            ><strong>Инвентарный номер:</strong>
            {{ singlePropertyGetter.invNumber }}
          </span>
          <br />
          <span
            ><strong>Расположение:</strong>
            {{ singlePropertyGetter.location }}
          </span>
          <br />
          <span
            ><strong>Документация:</strong>
            <br />
            <a href="#">documentation.pdf</a>
            <br />
            <a href="#">maintaining.pdf</a>
          </span>
          <hr />
          <span
            ><strong>Дата поступления:</strong>
            {{
              new Date(singlePropertyGetter.dateCome).toLocaleDateString(
                "en-GB"
              )
            }}</span
          >
          <br />
          <span
            ><strong>Дата списания:</strong>
            {{
              new Date(singlePropertyGetter.timeToLive).toLocaleDateString(
                "en-GB"
              )
            }}</span
          >
          <hr />
          <span
            ><strong>Дата проверки:</strong>
            {{
              new Date(singlePropertyGetter.dateCheck).toLocaleDateString(
                "en-GB"
              )
            }}
            <div v-if="needToCheck()">
              <span style="color: red">Нужно проверить!</span>
              <hr />
              <form class="form" @submit.prevent>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Дата очередной проверки"
                      required
                      v-model="dateCheck"
                    />
                  </div>
                  <div class="col">
                    <button
                      type="button"
                      class="btn btn-success"
                      @click="
                        updateProperty({ singlePropertyGetter, dateCheck })
                      "
                    >
                      Проверить
                    </button>
                  </div>
                </div>
              </form>
            </div></span
          >
          <br />
        </div>
      </div>
    </div>
    <div>
      <span>
        <strong>Описание:</strong>
        <br />
        {{ singlePropertyGetter.description }}
      </span>
      <br />
    </div>
    <br />
    <div align="center">
      <WarningButton customSize="1x" editType="propertyEditModal" />
      <DangerButton customSize="1x" />
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import WarningButton from "./../components/pieces/WarningButton.vue";
import DangerButton from "./../components/pieces/DangerButton.vue";
import PropertyEditModal from "./../components/pieces/PropertyEditModal.vue";
@Options({
  components: {
    WarningButton,
    DangerButton,
    PropertyEditModal,
  },
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
      if (daysToCheck < 4 && daysToCheck > 0) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(["singlePropertyGetter"]),
    deviceTitle: function () {
      const deviceT = this.singlePropertyGetter.device;
      if (deviceT) return deviceT.title;
    },
  },
})
export default class SingleProperty extends Vue {}
</script>

<style scoped>
.propertyImage {
  line-height: 100px;
  text-align: center;
}
.propertyImage img {
  margin-top: 70px;
  width: 300px;
  vertical-align: middle;
}
</style>