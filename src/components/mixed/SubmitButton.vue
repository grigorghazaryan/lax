<template>
    <button :class="className" :style="{'background': colors|| bg}" class="circled-button">{{ title }}</button>
</template>

<script>
    export default {
        name: "SubmitButton",
        props: ['title', 'color', 'colors', 'className'],
        data: () => ({
            bg: "#31569C"
        })
    }
</script>

<style scoped>
    .circled-button{
        padding: 10px 35px;
        background: #31569C!important;
        font-family: MontBold, sans-serif;
        color: white!important;
        border-radius: 20px 20px;
        text-decoration: none!important;
        border: none;
        font-size: 12px;
        transition: .3s;
    }
    .circled-button:hover {
        background: #45AFDB!important;
    }
    .del.circled-button:hover{
        background: #eb2c7f!important;
    }
    .del{
        font-size: 16px;
    }
</style>
