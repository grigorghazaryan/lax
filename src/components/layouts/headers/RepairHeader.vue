<template>
    <div id="header">
        <nav class="navbar navbar-dark navbar-expand-lg">
            <router-link to="/">
                <img class="img-fluid logo" src="@/assets/mixed/logo.png" alt="LAX Auto Repair Logo">
            </router-link>

            <div class="menu-cont">
                <p class="text">Identify Your Car</p>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "RepairHeader",
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/style.scss";
    .text{
        color: $black;
        font-size: 24px;
        font-family: MontSemiBold, sans-serif;
    }

    #header{
        position: relative;
        z-index: 999999999;
        padding-top: $pt;
    }


</style>
