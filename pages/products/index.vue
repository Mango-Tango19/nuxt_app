<template>
<div>
    <Nav />
        <div class="container">
    <CardSection 
    :cardSection="cardsInfo"
    />
        </div>
</div>
</template>

<script>
import { largeCardsSection } from '@/assets/data.js' 

    export default {
        data() {
            return {
                cardsInfo : largeCardsSection
            }
        }
        
    }
</script>

<style  scoped>

</style>