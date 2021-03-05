<template>
    <div class="tag-desc">
       <Tag 
       :tagDesc="tag"
       v-for="tag in tagSection" :key="tag.id"
       />
    </div>
</template>

<script>
    export default {
        props: ['tagSection'],
    }
</script>

<style scoped>

</style>