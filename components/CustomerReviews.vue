<template>
    <div>
        <h3>Отзывы клиентов</h3>
        <div v-if="!$fetchState.pending">
                <ReviewCard 
                v-for="reviewer in reviews.results"
                :key="reviewer.login.uuid"
                :review='reviewer'
                />
        </div>
        <div v-else>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        
    </div>
</template>

<script>
  export default {
    data() {
      return {
        reviews: []
      }
    },
    async fetch() {
      this.reviews = await fetch(
        'https://randomuser.me/api/?results=5'
      ).then(res => res.json())
    }
  }
</script>

<style lang="scss" scoped>

</style>