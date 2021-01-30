<template>
  <main>
    <h3>Панель старшего электромеханика</h3>
    <div class="card">
      <div class="card-body">
        <div class="card-title">Добавить имущество</div>
        <hr />
        <div class="card-title">Добавить работника</div>
        <form class="form">
          <input type="text" class="form-control" placeholder="Фамилия" />
          <input type="text" class="form-control" placeholder="Имя" />
          <input type="text" class="form-control" placeholder="Отчество" />
          <select name="position">
            <option v-for="position in positionGetter" :key="position.id">
              {{ position.title }}
            </option>
          </select>
          <br />
          <select name="Отдел">
            <option v-for="position in positionGetter" :key="position.id">
              {{ position.title }}
            </option>
          </select>
          <br />
          <input type="text" class="form-control" placeholder="Телефон" />
          <input type="text" class="form-control" placeholder="Логин" />
          <input type="text" class="form-control" placeholder="Пароль" />
          <br />
          <button class="btn btn-primary">Добавить</button>
        </form>
        <hr />
        <div class="card-title">Добавить станцию</div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapActions } from "vuex";

@Options({
  async mounted() {
    await this.getDistance();
  },
  computed: mapGetters(["distanceGetter"]),
  methods: {
    ...mapActions(["getDistance"]),
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
  },
})
export default class Home extends Vue {}
</script>