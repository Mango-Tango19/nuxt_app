<template>
    <div class="container">
        <MyItem 
        v-for="myitem in myOrders"
        :key="myitem.id"
        :item='myitem'
        />
    </div>
</template>

<script>

import { mapState } from 'vuex'

    export default {
        layout: 'no-nav',
        computed: {
            ...mapState(['myOrders'])
        }
    }
</script>

<style scoped>

</style>