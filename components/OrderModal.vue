<template>
  <div>
    <b-button id="show-btn" @click="showModal">Заказать</b-button>

    <b-modal ref="my-modal" hide-footer title="Закрыть">
      <div class="calendar-container">
        <div class="text-cotainer">
          <p>Выберите дату первого посещения, наш менеджер с вами свяжется</p>
        </div>
        <vc-date-picker :value="null" color="indigo" is-dark is-range />
      </div>
      <b-button
        id="show-btn"
        @click="
          () => {
            addItem(product.alias);
            hideModal();
          }">
        Выбрать дату
        </b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["product"],
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    ...mapMutations(["addItem"])
  }
};
</script>

<style scoped>
button {
  width: 100%;
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}
.calendar-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
p {
  color: grey;
}
.text-container {
  padding: 0.5rem;
}
</style>
