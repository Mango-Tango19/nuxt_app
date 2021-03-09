
<template>
    <div class="review-card">
        <div class="image-container">
            <img :src="review.picture.large" alt="">
        </div>
        <div class="text-container" >
            <h6>{{review.login.username}}</h6>
            <p> {{ joke.setup }} {{ joke.punchline }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['review'],
        data() {
            return {
                joke: ''
            }
        },
        async fetch() {
            this.joke = await fetch('https://official-joke-api.appspot.com/random_joke')
            .then(res => res.json())
        }
    }
</script>

<style scoped>
    .review-card {
        margin-top: 1.5rem;
        height: 4rem;
        display: flex;
    }
    .text-container {
        margin-left: 2rem;
        text-align: left;
    }
    
    img {
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
    }
    p {
        color: grey
    }
</style>