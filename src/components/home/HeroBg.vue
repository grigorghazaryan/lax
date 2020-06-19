<template>
    <div class="main">
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
            <div class="below-text-cont">

                <div class="below-text-cont">
                    <h3 class="below-title text-center">Schedule your repairs in minutes</h3>
                    <p class="text-center below-text">Have us come to you for ultimate convenience or drop it off at our shop. Same guaranteed quality</p>
                </div>

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
    .main{
        height: 100vh;
        width: 100%;
    }
    .hero-bg{
        height: 100%;
        max-width: 1920px;
        /*margin-top: -80px;*/
        margin: -80px auto 0 auto;
        background-image: url("../../assets/home/home_bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
    }

    .text-and-image{
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 17%;
        top: 50%;
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
    .below-text-cont {
        padding: 0 17%;
        position: relative;
        top: 45%;
    }
    .below-title{
        font-family: MontBold, sans-serif;
        color: #31569C;
        font-size: 20px;
        text-transform: capitalize;
    }
    .below-text{
        font-size: 14px;
        color: #31569C;
        font-family: PoppinsRegular, sans-serif;
    }
</style>
