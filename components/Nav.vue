  
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary padding">
    <nuxt-link class="navbar-brand" to="/">Fitness</nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <nuxt-link to="/products" class="nav-link">Products <span class="sr-only">(current)</span></nuxt-link>
            </li>
            <li class="nav-item active">
                <nuxt-link to="/my-items" class="nav-link">My Items <span class="sr-only">(current)</span></nuxt-link>
            </li>
        </ul>
    </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .padding {
        padding: 1.5rem;
        background-color: black;
    }
    .nav-left {
        margin-left: auto;
    }
</style>

