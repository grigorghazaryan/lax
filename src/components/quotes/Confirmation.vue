<template>
    <div class="confirmation">
        <DeleteModal  @close="showModal = false" v-if="showModal"/>
        <div v-if="step2" class="proceed-to-payment">
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
                <div class="col-12 position-relative" :class="{ 'mt-85' : !step2 }">
                    <Back/>
                    <h2 class="title text-center">
                        {{ 
                            step1 ? 'Your Estimate is Almost Ready' : 
                            step2 ? 'Your Estimate is Ready' : 
                            'Payment'
                        }}
                    </h2>
                    <p class="title-text text-center mb-5" v-if="step1 || step2">
                        We’ve locked in your guaranteed price and <br> are confirming the availability of our state of the art repair shop on wheels.
                    </p>
                    <p class="title-text text-center mb-5" v-else>
                       Choose a payment option and fill out <br> the appropriate information
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
                            <div class="circle" :class="{ 'active' : step2 || step3 }">2</div>
                            <div class="text right-c">Confirm Appointment</div>
                        </div>
                    </div>
                    <div class="col-1">
                        <img src="../../assets/mixed/circles.png" alt="">
                    </div>
                    <div class="col-md-2 text-center">
                        <div class="wizard-item">
                            <div class="circle" :class="{ 'active' : step3 }">3</div>
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

        <div v-if="step2">
            <div class="step-2-parent">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="row step-2__list-parent">
                                <div class="col-md-12 step-2__list-item">
                                    <div class="row">
                                        <div class="col-md-3 d-flex">
                                            <img src="https://blog.consumerguide.com/wp-content/uploads/sites/2/2013/06/acura-logo.gif" alt="">
                                            <div class="bold black">Acura MDX</div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="normal gray">2018 - 3.0L V6 Hybrid - 15,200 miles</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 step-2__list-item">
                                    <div class="row">
                                        <div class="col-md-3 d-flex">
                                            <div class="bold black">Requested Times</div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="normal gray">Monday - 30 Jun - 9:00 AM</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 step-2__list-item">
                                    <div class="row">
                                        <div class="col-md-3 d-flex">
                                            <div class="bold black">Repair Address</div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="normal gray">104 North Belmont Street, Glendale</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 step-2__list-item">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="bold black mb-2">Services</div>
                                        </div>

                                        <div class="col-md-6 text-left mb-1">
                                            <div class="normal gray">Oil Change</div>
                                        </div>
                                        <div class="col-md-6 text-right mb-1">
                                            <div class="bold black">$90.00</div>
                                        </div>

                                        <div class="col-md-6 text-left mb-1">
                                            <div class="normal gray">Replace Battery</div>
                                        </div>
                                        <div class="col-md-6 text-right mb-1">
                                            <div class="bold black">$25.00</div>
                                        </div>

                                        <div class="col-md-6 text-left mb-1">
                                            <div class="normal gray">Replace Spark Plugs</div>
                                        </div>
                                        <div class="col-md-6 text-right mb-1">
                                             <div class="bold black">$5.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 step-2__list-item">
                                    <div class="row">
                                        <div class="col-md-6 text-left">
                                            <div> <span class="bold black">Tax</span> (10.25% of total Service amount)</div>
                                        </div> 
                                        <div class="col-md-6 text-right">
                                            <div class="bold black">$4.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 step-2__list-item">
                                    <div class="row">
                                        <div class="col-md-6 text-left">
                                            <div class="bold blue">Total</div>
                                        </div>
                                        <div class="col-md-6 text-right">
                                             <div class="bold blue">$144.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 text-right">
                            <button class="next-button" 
                            @click="goToCheckout">
                                Next
                                <img src="../../assets/mixed/forward.png" alt="forward">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="step3">
            <div class="step-3-parent">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="row step-3__checkout">
                                <div class="col-md-12 d-flex justify-contnet-center">
                                    <div>
                                        <img src="../../assets/mixed/visa.svg" alt="">
                                    </div>
                                    <div>
                                        <img src="../../assets/mixed/master.svg" alt="">
                                    </div>
                                    <div>
                                        <img src="../../assets/mixed/paypal.svg" alt="">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <md-field class="md-cont position-relative">
                                        <label for="card-number">Card number</label>
                                        <md-input 
                                            name="card-number" 
                                            class="form-md" 
                                            id="card-number" 
                                            autocomplete="off"
                                            v-model="cardNumber"
                                        />
                                    </md-field>
                                </div>
                                <div class="col-md-12">
                                    <md-field class="md-cont position-relative">
                                        <label for="cardholder-name">Cardholder name</label>
                                        <md-input 
                                            name="cardholder-name" 
                                            class="form-md" 
                                            id="cardholder-name" 
                                            autocomplete="off"
                                            v-model="cardholderName"
                                        />
                                    </md-field>
                                </div>
                                <div class="col-md-12">
                                    <md-field class="md-cont position-relative">
                                        <label for="expireDate">Expire date</label>
                                        <md-input 
                                            name="expire-date" 
                                            class="form-md" 
                                            id="expireDate" 
                                            autocomplete="off"
                                            v-model="expireDate"
                                        />
                                    </md-field>
                                </div>
                                <div class="col-md-12">
                                    <md-field class="md-cont position-relative">
                                        <label for="cvv">CVV</label>
                                        <md-input 
                                            name="expire-date" 
                                            class="form-md" 
                                            id="cvv" 
                                            autocomplete="off"
                                            v-model="cvv"
                                        />
                                    </md-field>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 text-right">
                            <button class="next-button" 
                                @click="goToCheckout">
                                Pay
                            </button>
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
            step1: false,
            step2: true,
            step3: false,
            cardNumber: '',
            cardholderName: '',
            expireDate: '',
            cvv: '',
        }
    },
    methods: {
        goToCheckout() {
            this.step2 = false;
            this.step3 = true;
        }
    }
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

// step 2
.step-2-parent  {
    margin: 60px 0 80px;

    .step-2__list-parent {
        border-left: 6px solid #31569C;
        box-shadow: 0px 2px 10px #221F1F26;
        margin-bottom: 60px;

        .step-2__list-item {
            padding: 25px; 
            border-bottom: 1px solid #A2A2A2;

            &:last-child {
                border-bottom: none;
            }

            &:nth-child(odd) {
                background: #D8E4FB;
            }
            &:nth-child(even) {
                background: #fff;
            }

            img {
                width: 28px;
                margin-right: 10px;
            }

            .bold {
                font-family: MontSemiBold, sans-serif;
                font-size: 16px;

                &.black {
                    color: #4A4A4A;
                }
                &.blue {
                    color: #31569C;
                }
            }

            .normal {
                font-family: PoppinsRegular, sans-serif;
                font-size: 16px;

                &.gray {
                    color: #A2A2A2;
                }
            }
            
        }
    }
}

// Step 3
@import "src/assets/css/style";
.step-3-parent {
    margin: 60px 0 80px;

    .step-3__checkout {
        border: 1px solid #31569c78;
        margin-bottom: 60px;
        padding: 25px 70px 50px;
    }

    .md-cont  {
        & label {
            color: #31569C !important;
        }
    }
}

.next-button {
    width: 173px;
    height: 54px;
    border-radius: 50px;
    background: #31569C;
    border: none;
    color: #fff;
    font-family: MontSemiBold, sans-serif;
    transition: .3s;
    outline: none;

    img {
        width: 10px;
    }

    &:hover {
        background: #45AFDB;
    }
    &:focus, &:active {
        outline: none;
    }
}
</style>