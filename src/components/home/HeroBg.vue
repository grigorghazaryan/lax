<template>
    <div class="hero-bg">
        <div class="text-and-image">
            <div class="text-part">
                <div class="text-cont">
                    <p class="text-uppercase first mb-0">Getting your car</p>
                    <p class="text-uppercase second">Back on the road</p>
                </div>
                <div class="button-cont mt-4">
                    <Button title="Start Repair" url="/repair"/>
                </div>
            </div>
            <div class="car-part pl-5">
                <img src="../../assets/home/car.png" class="img-fluid car" alt="Car">
            </div>
        </div>
        <div class="below-text">
            <div class="below-text-cont">
                <h3 class="below-title">Schedule your repairs in minutes</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "@/components/mixed/CircleButton";

    export default {
        name: "HeroBg",
        components: {
            Button
        }
    }
</script>

<style scoped>
    .car{
        height: 230px;
    }
    .hero-bg{
        height: 100vh;
        margin-top: -80px;
        background-image: url("../../assets/home/home_bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }

    .text-and-image{
        position: relative;
        display: flex;
        align-items: center;
        padding: 50% 17% 0 17%;
        transform: translateY(-50%);
    }
    .first{
        color: #4A4A4A;
    }
    .first, .second {
        font-size: 33px;
        letter-spacing: 0;
        font-family: MontBold, sans-serif;
    }
    .second{
        color: #45AFDB;
    }
    .below-text {
        padding: 0 17px;
        position: relative;
        bottom: 0;
    }
    .below-title{
        font-family: MontBold, sans-serif;
        color: #31569C;
        font-size: 24px;
    }
</style>