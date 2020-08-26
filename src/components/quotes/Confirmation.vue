<template>
    <div class="confirmation">
        <DeleteModal  @close="showModal = false" v-if="showModal"/>
        <div v-if="!step1" class="proceed-to-payment">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 left-sec">
                        <img src="../../assets/mixed/proceed-to-payment.png" />
                        <div>Your Car is Ready</div>
                        <Button title="Proceed To Payment" url="/#####"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">

            <div class="row">
                <div class="col-12 position-relative" :class="{ 'mt-85' : step1 }">
                    <Back/>
                    <h2 class="title text-center">Your Estimate is Almost Ready</h2>
                    <p class="title-text text-center mb-5">
                       We’ve locked in your guaranteed price and <br>
                       are confirming the availability of our state of the art repair shop on wheels.
                    </p>

                    <CallAppointment button="true"/>

                </div>
            </div>

            <div class="wizard-parent">
                <div class="row justify-content-center">
                    <div class="col-md-3 text-center">
                        <div class="wizard-item">
                            <div class="circle active">1</div>
                            <div class="text right-c">Generating Quote</div>
                        </div>
                    </div>
                    <div class="col-1">
                        <img src="../../assets/mixed/circles.png" alt="">
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="wizard-item">
                            <div class="circle" :class="{ 'active' : !step1 }">2</div>
                            <div class="text right-c">Confirm Appointment</div>
                        </div>
                    </div>
                    <div class="col-1">
                        <img src="../../assets/mixed/circles.png" alt="">
                    </div>
                    <div class="col-md-2 text-center">
                        <div class="wizard-item">
                            <div class="circle">3</div>
                            <div class="text">Checkout</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div v-if="step1">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-6 text-left bold-black-text">
                        Your Quote
                    </div>
                    <div class="col-md-6 col-6 text-right header-blue-text">
                        Guaranteed Price
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="your-quote-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpyZRLw7j0LVCBREVt6ZgX0ySsCGtNfxEN7fWvzaE-BGlMGS_CEnxYLgjJAgDOTnvM13CbV9e2SQ-aXW3rTjHUKj4qHe50wcv99g&usqp=CAU&ec=45690273" alt="">
                            <div class="q-title">Acura MDX</div>
                            <div class="q-subtitle">2018 - 3.0L V6 Hybrid - 15,200 miles</div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-12">
                        <EstimatePreview
                            @show="showModal = true" 
                            :clickable="true"
                            :pending="false"
                            :name="'Synthetic Oil Change'"
                            :price="'$90.00'"
                        />
                        <EstimatePreview
                            @show="showModal = true" 
                            :clickable="true"
                            :pending="true"
                            :name="'Replace Battery'"
                            :price="'Pending'"
                        />
                        <EstimatePreview
                            :clickable="false"
                            :pending="false"
                            :name="'Replace Maintenance'"
                            :price="'$5.00'"
                        />
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-right">
                        <router-link to="/get-quote/service-summary" class="add-service">
                            <span>&#x2b;</span>
                            Add Additional Service
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="blue-background total-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-left">
                            <span class="title">Total</span>
                        </div>
                        <div class="col-md-6 text-right">
                            <span class="title">$140.00</span>
                        </div>
                        <div class="col-md-12">
                            <span class="blue">Excludes tax where applicable.</span>
                        </div>
                        <div class="col-md-5">
                            <PromoCode />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-12 your-appointent">
                        <div class="title text-center">Your Appointment</div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-9">
                        <div class="requested-times">
                            <div class="requested-times__header">
                                <div>Requested Times</div>
                                <div>Reschedule</div>
                            </div>
                            <div class="requested-times__body">
                                <div>Monday</div>
                                <div>30 Jun</div>
                                <div>9:00 AM</div>
                                <div></div>
                            </div>
                            <div class="requested-times__footer">
                                <div>Cancel</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="lax-logo">
                            <img src="../../assets/mixed/logo.png" alt="">
                        </div>
                        <div class="title text-center mb-30">What to Expect?</div>
                    </div>
                </div>
                <div class="row justify-content-center what-to-expect__text">
                    <div class="col-md-5">
                        <div>We will confirm your appointment</div>
                        <ul>
                            <li>Our certified mechanic will meet you at your address</li>
                            <li> Have your keys ready for us to inspect your vehicle</li>
                            <li>You’re covered by our 12-Month | 12,000-Mile Warranty</li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <div class="key-img-parent">
                            <img src="../../assets/mixed/car-key.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="blue-background bottom-button-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <Button title="New Appointment" url="/#"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
import Back from "../mixed/Back";
import EstimatePreview from "./EstimatePreview";
import PromoCode from "./PromoCode";
import Button from "../mixed/CircleButton";
import CallAppointment from "../home/CallAppointment";
import DeleteModal from "../mixed/DeleteModal";

export default {
    name: 'Confirmation',
    components: { Back, EstimatePreview, PromoCode, Button, CallAppointment, DeleteModal },
    data() {
        return {
            showModal: false,
            step1: true,
        }
    },
}
</script>


<style lang="scss">

.mt-85 {
    margin-top: 85px;
}

.confirmation {
    // padding: 85px 0 0;

    @media (max-width: 767px) { 
        .title.text-center {
            margin-top: 30px;
        }
        .wizard-parent {
            .col-1 {
                display: none;
            }
            .col-md-3 {
                margin-bottom: 10px;
            }
        }
        .bottom-button-wrapper {
            text-align: center
        }
        
    }
}

.proceed-to-payment {
    width: 100%;
    box-shadow: 0px 3px 6px #00000029;
    margin: 40px 0;
    padding: 17px 0;

    .left-sec {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-right: 3px solid #00000029;

        img {
            margin-right: 25px;
        }
        div {
            margin-right: 30px;
            font-size: 16px;
            font-family: PoppinsRegular, sans-serif;
            color: #4A4A4A;
        }
    }
}

.your-appointent {
    margin: 64px 0;
} 

.requested-times {
    width: 100%;
    margin-bottom: 100px;
    box-shadow: 0px 2px 10px #221F1F26;
    padding: 32px 24px;
    font-family: PoppinsRegular, sans-serif;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            &:nth-child(1) {
                color: #4A4A4A;
                font-size: 18px;
            }
            &:nth-child(2) {
                color: #31569C;
                font-size: 16px;
            }
        }
    }
    
    &__body {
        margin-top: 16px;
        width: 100%;
        background-color: #D8E4FB;
        border-left: 6px solid #31569C;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;

        div {
            flex: 1;

            &:nth-child(1) {
                color: #31569C;
                font-size: 16px;
            }
            &:nth-child(2) {
                color: #A2A2A2;
                font-size: 16px;
            }
            &:nth-child(3) {
                color: #A2A2A2;
                font-size: 16px;
            }
        }
    }

    &__footer {
        margin-top: 13px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        div {
            color: #31569C;
            font-size: 16px;
            cursor: pointer;
        }
    }
}

.lax-logo {
    text-align: center;
    margin-bottom: 15px;
    img {
        width: 125px;
        height: 40;
    }
}

.what-to-expect__text {
    margin: 30px 0 100px;
    font-size: 16px;
    font-family: PoppinsRegular, sans-serif;

    .col-md-5 {
        @media (min-width: 767px) { 
            padding: 0;
        }
    }

    .key-img-parent {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
       
        img {
                margin-bottom: 30px;
        }
    }

    div {
        color: #252525;
        margin-bottom: 8px;
    }

    ul {
        padding-left: 20px;
        color: #31569C;
        line-height: 2.15;
    }
}

.total-wrapper {
    padding: 65px 0;
    margin-top: 35px;

    .title {
        font-size: 18px;
        font-family: PoppinsRegular, sans-serif;
        color: #4A4A4A;
    }

    .blue {
        font-family: PoppinsRegular, sans-serif;
        letter-spacing: 0.16px;
        color: #31569C;
        font-size: 16px;
    }
}

.header-blue-text {
    font-size: 18px;
    color: #31569C;
    font-family: PoppinsRegular, sans-serif;
}

.add-service{
    color: #31569C !important;
    font-family: MontSemiBold, sans-serif;
    text-decoration: none!important;
    display: flex;
    align-items: center;
    float: right;

    span {
        font-size: 24px;
        margin-right: 5px;
    }
}

.bold-black-text {
    font-size: 24px;
    font-family: MontSemiBold, sans-serif;
    color: #252525;
}

.your-quote-item {
    margin-top: 22px;
    width: 100%;
    background-color: #D8E4FB;
    border-left: 6px solid #31569C;
    padding: 10px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;

    img {
        width: 28px;
        height: 28px;
        margin-right: 10px;
    }

    .q-title {
        font-family: MontSemiBold, sans-serif;
        color:  #4A4A4A;
        margin-right: 15px;
    }
    .q-subtitle {
        font-family: PoppinsRegular, sans-serif;
        color: #A2A2A2;
    }
}

.nav-item  {
    a {
        color: #252525 !important;
    }
}

.wizard-parent {
    margin: 60px 0 80px;

    .col-1 {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex: 0 0 5%;
        padding: 0;

        img {
            margin-bottom: 7px;
        }
    }

    .wizard-item {
        text-align: center;
        font-family: MontSemiBold, sans-serif;
        font-size: 18px;

        .circle {
            position: relative;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            margin-bottom: 15px;
            background: #45AFDB;
            color: #fff;

            display: inline-flex;
            justify-content: center;
            align-items: center;

            &.active {

                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    border-radius: 50%;
                    background: #31569C;
                    background-image: url("../../assets/mixed/check.png");
                    background-repeat: no-repeat;
                    background-size: 55%;
                    background-position: center;
                }
            }
        }

        .text {
            position: relative;
            color: #31569C;

            &.right-c {
                // &:before {
                //     content: '';
                //     position: absolute;
                //     width: 45px;
                //     height: 15px;
                //     background-image: url("../../assets/mixed/circles.png");
                //     background-repeat: no-repeat;
                //     right: -8%;
                //     top: 18%;
                // }
            }
        }
    } 
}

.bottom-button-wrapper {
    width: 100%;
    padding: 3.2rem 0;
    text-align: right;
}
</style>