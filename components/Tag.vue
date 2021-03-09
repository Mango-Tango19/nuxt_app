<template>
    <div class="single-tag">
        <p>{{ tagDesc.title }} : {{ tagDesc.value }}</p>
    </div>
</template> 

<script>
    export default {
        props: ['tagDesc']
    }
</script>

<style scoped>
.single-tag {
    font-size: .8em;
    color: white;
}

p {
    display: inline-block;
    background-color: #9fb6b9;
    padding: 5px;
    border-radius: 5px;
}

p:hover {
    background-color: #4f9ba5;
    color: black;
}


</style>