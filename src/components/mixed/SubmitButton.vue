<template>
    <button :class="className" 
        :style="{'background': colors || bg}"
        :disabled="!disabled"
         class="circled-button">
            {{ title }}
    </button>
</template>

<script>
    export default {
        name: "SubmitButton",
        props: ['title', 'color', 'colors', 'className', 'disabled'],
        data: () => ({
            bg: "#31569C"
        })
    }
</script>

<style scoped lang="scss">
    .circled-button {
        padding: 10px 35px;
        background: #31569C;
        font-family: MontBold, sans-serif;
        color: white!important;
        border-radius: 20px 20px;
        text-decoration: none!important;
        border: none;
        font-size: 12px;
        transition: .3s;

        &:disabled {
            background: #A2A2A2 !important;
            color: #fff !important;
        }

        &:hover {
            background: #45AFDB !important
        }
    }
    .buttons .circled-button.cancel:hover {
        background: #45AFDB !important
    }
    .circled-button:focus {
        outline: none;
    }

    .del{
        font-size: 16px;
    }
    .buttons .circled-button.del:hover {
        background: #eb2c7fc7 !important
    }

</style>
