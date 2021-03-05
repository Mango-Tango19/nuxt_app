<template>
  <nuxt-link :to="`/products/${cardDesc.alias}`" class="card">
    <h3 class="header">
      {{ cardDesc.title }}
    </h3>
    <img :src="cardDesc.image" />
    <p class="snippet">
      {{ cardDesc.description }}
    </p>
    <div class="tags">  
      <TagSection :tagSection="tagDesc" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["cardDesc"],
  data() {
      return {
          tagDesc : this.cardDesc.properties
      }
  }
};
</script>

<style scoped>
.card {
  width: 31.5%;
  border: solid 1px #3333;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  margin-bottom: 1.2em;
}
.image {
  height: 65%;
  border-radius: 0.5rem;
}
.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
.snippet {
  color: grey;
}
</style>
