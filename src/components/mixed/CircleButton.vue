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
        background: #31569C!important;
        font-family: MontBold, sans-serif;
        color: white!important;
        border-radius: 25px 25px;
        text-decoration: none!important;
        transition: .3s;
    }
    .circled-button:hover {
        background: #45AFDB!important;
    }
    img{
        height: 18px;
    }
</style>
