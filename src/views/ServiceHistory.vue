<template>
    <div class="service-history">
        <div class="service-history-background">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Service History</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 d-flex left">
                        <img src="../assets/mixed/service-history-left.svg" alt="">
                    </div>
                    <div class="col-10">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="service-history-carousel-item" :class="{ 'opacity' : openBottom }">
                                    <img src="https://cdn.freebiesupply.com/logos/large/2x/bmw-logo-png-transparent.png" alt="">
                                    <div>BMW</div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="service-history-carousel-item" @click="openBottomBlock">
                                    <img src="https://cdn.freebiesupply.com/logos/large/2x/bmw-logo-png-transparent.png" alt="">
                                    <div>BMW 2</div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="service-history-carousel-item" :class="{ 'opacity' : openBottom }">
                                    <img src="https://cdn.freebiesupply.com/logos/large/2x/bmw-logo-png-transparent.png" alt="">
                                    <div>BMW 3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 d-flex right">
                         <img src="../assets/mixed/service-history-right.svg" alt="">
                    </div>
                </div>
                <div class="row open-exist-cars" v-if="openBottom">
                    <!-- This logic will be removed -->
                    <div class="col-md-12 exist-car-item" 
                        :class="{ 'active' : f1 }"
                        @click="f1 = true, f2 = false"
                    >
                        <img src="../assets/mixed/check-blue.svg" alt="check">
                        2018 - 3.0L V6 Hybrid - 15,200 miles
                    </div>
                     <!-- This logic will be removed -->
                    <div class="col-md-12 exist-car-item" 
                         :class="{ 'active' : f2 }"
                         @click="f2 = true, f1 = false"
                    >
                        <img src="../assets/mixed/check-blue.svg" alt="check">
                        2020 - 430xDrive Gran Coupe
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <GarageItem v-for="i in 3" :key="i"
                    :history="{ name: 'Monday, Apr 16', color: '#9C314A' }"
                />
            </div>
        </div>
    </div>
</template>

<script>
import GarageItem from "../components/garageItem/GarageItem";

export default {
    name: 'ServiceHistory',
    components: {GarageItem},
    data() {
        return {
            openBottom: false,
            f1: true,
            f2: false,
        }
    },
    methods: {
        openBottomBlock() {
            this.openBottom = !this.openBottom
        }
    }

}
</script>

<style lang="scss">
#main-header {
    padding-bottom: 40px;
}

.nav-item a {
    color: black !important;
}

.service-history{
    margin-bottom: 100px;

    &-background {
        background-color: #D8E4FB;
        padding: 30px 0 60px;
        margin-bottom: 90px;

        .right, .left {
            cursor: pointer;

            img {
                opacity: .8;
                transition: .3s;

                &:hover {
                    opacity: 1;
                }
            }
        }

        .open-exist-cars {
            margin-top: 30px;

            .exist-car-item {
                padding: 16px 5px;
                color: #4A4A4A;
                font-size: 16px;
                font-family: PoppinsRegular;
                transition: .3s;
                cursor: pointer;

                &:first-child {
                    border-bottom: 1px solid #4a4a4a6c;
                }

                img {
                    visibility: hidden;
                }

                &.active {
                    background: #fff;

                    & img {
                        visibility: visible;
                    }
                }

                &:hover {
                    background: #fff;
                }
            }
        }

        .service-history-carousel-item {
            width: 100%;
            height: 115px;
            background: #fff;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            img {
                width: 44px;
                height: 44px;
                margin-bottom: 15px;
            }

            div {
                color: #4A4A4A;
                font-size: 18px;
                font-family: MontBold;
            }
        }
    }

    h1 {
        letter-spacing: 0.32px;
        color: #4A4A4A;
        font-size: 32px;
        font-family: MontBold;
        text-align: center;
        margin-bottom: 60px;
    }

    .opacity {
        opacity: .5;
    }
}
</style>