<template>
    <router-link :to="url" class="circled-button"> {{ title }} <img v-if="img" :src="require('@/assets/mixed/' + img)" alt="Arrow"></router-link>
</template>

<script>
    export default {
        name: "CircleButton",
        props: ['title', 'url', 'img']
    }
</script>

<style scoped>
    .circled-button{
        padding: 13px 25px;
        background: #31569C;
        font-family: MontBold, sans-serif;
        color: white;
        border-radius: 25px 25px;
        text-decoration: none;
        transition: .3s;
    }
    .circled-button:hover {
        background: #45AFDB;
    }
</style>
