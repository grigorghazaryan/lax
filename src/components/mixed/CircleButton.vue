<template>
    <router-link :to="url" class="circled-button">
         {{ title }} 
         <img v-if="img" :src="require('@/assets/mixed/' + img)" alt="Arrow">
    </router-link>
</template>

<script>
    export default {
        name: "CircleButton",
        props: ['title', 'url', 'img']
    }
</script>

<style scoped >

        a.circled-button {
            padding: 13px 25px;
            background: #31569C;
            font-family: MontBold, sans-serif;
            color: white !important;
            border-radius: 25px 25px;
            text-decoration: none !important;
            outline: none;
            transition: .3s;
        }

        .circled-button:focus {
            outline: none;
        }
        .circled-button:hover {
            background: #45AFDB!important;
        }

        img {
            height: 18px;
        }

        
    a.circled-button.disabled {
        background: #f0f0f0;
        border-color: #b9b9b9;
        color: #b9b9b9 !important;
    }

</style>
