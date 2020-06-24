<template>
    <button :style="{'background': color || bg}" class="circled-button">{{ title }}</button>
</template>

<script>
    export default {
        name: "SubmitButton",
        props: ['title', 'url', 'color'],
        data: () => ({
            bg: "#31569C"
        })
    }
</script>

<style scoped>
    .circled-button{
        padding: 10px 35px;
        background: #31569C;
        font-family: MontBold, sans-serif;
        color: white;
        border-radius: 20px 20px;
        text-decoration: none;
        border: none;
        font-size: 12px;
        transition: .3s;
    }
    .circled-button:hover {
        background: #45AFDB!important;
    }
</style>
