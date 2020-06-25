<template>
    <div id="header">
        <nav class="navbar navbar-dark navbar-expand-lg justify-content-between">
            <div class="name-cont">
                <h2 class="name">{{ name }}</h2>
            </div>
            <div class="menu-cont">
                <img src="@/assets/mixed/car.png" class="img-fluid car-little float-md-right" alt="Car Little">
            </div>
        </nav>
    </div>
</template>


<script>
    export default {
        name: "QuoteHeader",
        props:['name']
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/style.scss";

    .name{
        color: $black;
        font-family: MontSemiBold, sans-serif;
        letter-spacing: 0.24px;
        font-size: 24px;
    }
    .name-cont{
        min-width: 300px;
    }
    #header{
        padding-top: $pt;
    }
    .car-little{
        height: 29px;
    }



</style>
