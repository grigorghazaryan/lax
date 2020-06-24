<template>
    <div class="col-md-4 col-12 mb-3 mb-sm-0">
        <div class="client-box">
            <div class="text-center mb-3">
                <img src="@/assets/home/quotes.png" class="img-fluid d-inline" alt="Quotes">
            </div>
            <h4 class="client-box-title text-center">{{ title }}</h4>
            <p class="client-box-text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClientTalkBoxes",
        props: ["title", "text"],
    }
</script>

<style scoped>
    .client-box-title{
        font-size: 12px;
    }
    img{
        height: 25px;
    }
    .client-box{
        padding: 20px;
        background: url("../../assets/home/client-box-bg.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        margin-bottom: 15px;
        border: 1px solid #FFFFFF;
    }
    .client-box-title, .client-box-text{
        color: white;
    }
    .client-box-title{
        font-family: MontSemiBold, sans-serif;
        font-size: 18px;
    }
    .client-box-text {
        font-size: 14px;
        margin-bottom: 0;
    }

</style>
