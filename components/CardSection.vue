<template>
    <div class="cards-container ">
        <LargeCard 
         v-for="card in cardSection" :key="card.id"
         :cardDesc="card"
        />
    </div>
</template>

<script>
import LargeCard from './LargeCard.vue'

export default {
  components: { LargeCard },
    props: ['cardSection']
}

</script>

<style scoped>

.header {
    font-weight: 700;
    font-size: 1.5rem;
}
.snippet {
    color: grey;
    margin-bottom: 1.5rem;
}
.cards-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>