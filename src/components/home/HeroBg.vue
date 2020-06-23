<template>
    <div class="main">
        <div class="hero-bg">
            <div class="text-and-image container text-center">
                <div class="row text-cont">

                    <div class="text-part col-md-6">
                        <div class="text-cont">
                            <p class="text-uppercase first mb-0">Getting your car</p>
                            <p class="text-uppercase second">Back on the road</p>
                        </div>
                        <div class="button-cont mt-4">
                            <Button title="Start Repair" url="/repair"/>
                        </div>
                    </div>
                    <div class="car-part col-md-6 d-none d-md-block">
                        <img src="../../assets/home/car.gif" class="img-fluid car" alt="Car">
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
            <div class="below-text-cont">
                <div class="container">
                    <div class="below-text-cont row">
                        <div class="col-3 line-cont d-none d-md-block" style="padding-left: 10%;"><hr></div>
                        <div class="col-md-6 col-12">
                            <h3 class="below-title text-center">Schedule your repairs in minutes</h3>
                        </div>
                        <div class="col-3 line-cont d-none d-md-block" style="padding-right: 10%;"><hr></div>
                        <div class="col-12">
                            <p class="text-center below-text">Have us come to you for ultimate convenience or drop it off at our shop.
                                <br> Same guaranteed quality</p>
                        </div>
                    </div>
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
        height: 300px;
    }
    .text-cont{
        width: 100%;
        /*justify-content: center;*/
        align-items: center;
    }
    .main{
        height: 100vh;
        max-height: 1080px;
        min-height: 400px;
        width: 100%;
    }
    .hero-bg{
        height: 100%;
        max-width: 1920px;
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
        position: relative;
        width: 100%;
        top: 33%;
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
    /*.line-cont hr{*/
    /*    width: 100px;*/
    /*    display: inline-block;*/
    /*}*/
    .line-cont{
        text-align: right;
    }
    @media (min-width: 990px) {
        .text-and-image{
            /*padding: 0 17%;*/
        }
    }

    @media (max-width: 768px) {
        .text-and-image{
            padding: 0 25px;
        }
        .hero-bg{
            background: #fff;
        }
        .main{
            max-height: 400px;
        }
        .services{
            font-size: 80% !important;
        }
    }
</style>
