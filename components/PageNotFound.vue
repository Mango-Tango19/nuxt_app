  
<template>
<div class="not-found">
    <div>
        <nuxt-link to="/">Go Home</nuxt-link>
    </div>
<div>
        <h1>Page Not Found</h1>
        <img :src="require('@/assets/svg/lotus.svg')" alt="">
    </div>
</div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .not-found {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50rem
    }
    
    h1 {
        font-size: 7.5rem;
    }
    img {
        width: 15rem;
        margin: 0 auto
    }
</style>