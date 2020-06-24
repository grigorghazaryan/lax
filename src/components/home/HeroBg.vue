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
                    <div class="car-part col-md-6">
                        <img src="../../assets/home/car.gif" class="img-fluid car" alt="Car">
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
            <div class="below-text-cont">
                <div class="container">
                    <div class="row">
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
        position: absolute;
        width: 100%;
        bottom: 50px;
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
    .line-cont{
        text-align: right;
    }

    @media (max-width: 768px) {
        .text-and-image{
            padding: 0 25px;
        }
        .main{
            max-height: 800px;
        }
        .hero-bg{
            background-image: url("../../assets/home/hero_bg_mob.png");
            background-size: contain;
            background-repeat: no-repeat;
            height: 100%;
        }
        .text-cont{
            flex-direction: column-reverse;
        }
        .text-and-image{
            top: 50%;
            transform: translateY(-50%);
            justify-content: center;
        }
        .car{
            height: 200px;
        }

        .text-cont p{
            font-size: 22px!important;
        }
        .services{
            font-size: 80% !important;
        }

    }
    @media (max-width: 480px) {
        .hero-bg{
            background-size: 110% 312px;
        }
    }
</style>
