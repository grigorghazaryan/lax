<template>
    <span class="back" @click="$router.go(-1)"><img src="@/assets/mixed/back.png" class="img-fluid" alt="Back Arrow">Back</span>
</template>

<script>
    export default {
        name: "Back"
    }
</script>

<style scoped>
    .back{
        position: absolute;
        color: #4A4A4A;
        font-family: PoppinsRegular, sans-serif;
        cursor: pointer;
    }
</style>
