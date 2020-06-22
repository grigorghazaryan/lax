<template>
    <div class="col-md-4 col-12 cont">
        <div class="box text-center">
            <img :src="require(`@/assets/home/${img}`)" class="img-fluid" :alt="title">
            <h5 class="service-title text-center">{{ title}}</h5>
            <p class="text-center service-text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceBox",
        props: ["img", "title", "text"]
    }
</script>

<style scoped>
    .cont{
        margin-bottom: 15px;
    }
    .box{
        padding: 40px 20px 20px 20px;
        box-shadow: 0px 2px 20px #221F1F33;
        height: 320px;
    }
    .service-title, .service-text {
        color: #4A4A4A;
    }
    .service-title {
        font-family: MontBold, sans-serif;
    }
    .service-text {
        font-family: PoppinsRegular, sans-serif;
    }
    img{
        height: 65px;
        margin-bottom: 50px;
    }

</style>
