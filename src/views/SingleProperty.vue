<template>
  <main>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div class="propertyImage">
          <!--<img :src="propertyImage()" class="propertyImage" />-->
          <img
            src="https://www.irz.ru/uploads/images/products/p133_src_2.jpg"
            class="propertyImage"
          />
        </div>
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
        <div class="propertyDescription">
          <span
            ><strong>Название:</strong>
            Стационарная симплексная радиостанция РС-46МЦ
            <!--{{ singlePropertyGetter.title }}--></span
          ><br />
          <!-- <span>Тип: {{ singlePropertyGetter.device.title }}</span>
          <br /> -->
          <span
            ><strong>Инвентарный номер:</strong>
            <!--{{ singlePropertyGetter.invNumber }}-->
            0001123125322
          </span>
          <br />
          <span
            ><strong>Расположение:</strong>
            <!--{{ singlePropertyGetter.location }}-->
            Дом связи, 3 этаж, ВОЛС
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
            <!--{{
              new Date(singlePropertyGetter.dateCome).toLocaleDateString()
            }}-->
            23.01.2017</span
          >
          <br />
          <span
            ><strong>Дата списания:</strong>
            <!--{{
              new Date(singlePropertyGetter.timeToLive).toLocaleDateString()
            }}-->
            23.01.2027</span
          >
          <hr />
          <span
            ><strong>Дата проверки:</strong>
            <!--{{ new Date(singlePropertyGetter.dateCheck).toLocaleDateString() }}-->
            04.02.2021
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
        <!--{{ singlePropertyGetter.description }}-->
        Радиостанции обеспечивают управление по линейному каналу связи со
        стороны распорядительной станции и со стороны пультов управления,
        которые могут находиться как непосредственно в месте установки
        радиостанции, так на расстоянии до 20 км по физическим линиям или с
        использованием каналов связи. Электрические параметры и характеристики
        радиостанции обеспечивают совместную работу с эксплуатируемыми на сети
        железных дорог радиосредствами. В диапазоне гектометровых волн
        радиостанция обеспечивает работу в режиме одночастотного симплекса на
        одной из двух частот 2,130 и 2,150 МГц. В диапазоне метровых волн
        радиостанция обеспечивает работу в режиме одно- и двухчастотного
        симплекса на любой из 171 рабочих частот в диапазоне от 151,725 до
        156,000 МГц с разносом частот между соседними каналами 25 кГц. Блок
        питания обеспечивает электропитание радиостанции от основного и
        резервного первичных источников. Переключение с основного источника на
        резервный и обратно происходит автоматически.
      </span>
      <br />
    </div>
    <br />
    <div align="center">
      <WarningButton customSize="1x" />
      <DangerButton customSize="1x" />
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";

import WarningButton from "./../components/pieces/WarningButton.vue";
import DangerButton from "./../components/pieces/DangerButton.vue";

@Options({
  components: {
    WarningButton,
    DangerButton,
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
      if (daysToCheck < 4) {
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
  line-height: 100px;
  text-align: center;
}
.propertyImage img {
  margin-top: 70px;
  width: 300px;
  vertical-align: middle;
}
</style>