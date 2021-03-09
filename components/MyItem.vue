<template>
    <div class="item-container">
        <img :src="item.image" alt="">
        <div class="text-container">
            <h4> {{item.title}} </h4>
            <p> {{item.description}} </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style scoped>
    .item-container {
        border: 1px solid #3333;
        border-radius: 5px;
        display: flex;
        margin: 1rem 0;
        padding: 1rem;
        background-color: rgba(100, 148, 237, 0.103);
    }
    .text-container {
        padding: 0 1rem
    }
    img {
        width: 17.5rem;
        border-radius: 0.5rem;
        height: 11rem
    }
    p {
        font-size: 0.8rem;
        color: grey
    }
</style>