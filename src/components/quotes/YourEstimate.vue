<template>
    <div class="your-estimate-section">
        <DeleteModal  @close="showModal = false" v-if="showModal"/>
        <div class="container">
            <div class="row">
                <div class="col-12 position-relative">
                    <Back/>
                    <h2 class="title text-center">Your Estimate</h2>
                    <p class="title-text text-center mb-5">
                        This is the price you pay, period. If you need additional work, <br>
                        rest assured you qualify for the LAX Auto Repair Price for those repairs
                    </p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-6 text-left header-blue-text">
                    Selected Services
                </div>
                <div class="col-md-6 col-6 text-right header-blue-text">
                    Guaranteed Price
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
                <div class="row">
                    <div class="col-md-6 selected-car-wrapper">
                        <div class="selected-car">
                            <div class="logo-parent">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpyZRLw7j0LVCBREVt6ZgX0ySsCGtNfxEN7fWvzaE-BGlMGS_CEnxYLgjJAgDOTnvM13CbV9e2SQ-aXW3rTjHUKj4qHe50wcv99g&usqp=CAU&ec=45690273" alt="logo">
                            </div>
                            <div class="info-parent">
                                <div>Acura MDX</div>
                                <div>2018 - 3.0L V6 Hybrid - 15,200 miles</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fixed-button-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <Button title="Schedule Appointment" url="/get-quote/schedule-appointment"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import Back from "../mixed/Back";
import EstimatePreview from "./EstimatePreview";
import DeleteModal from "../mixed/DeleteModal";
import PromoCode from "./PromoCode";
import Button from "../mixed/CircleButton";

export default {
    name: "YourEstimate",
    components: { Back, EstimatePreview, DeleteModal, PromoCode, Button },
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
    }
}
</script>


<style lang="scss" scoped>

.your-estimate-section {
    padding: 85px 0 0;
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

.total-wrapper {
    padding: 65px 0;

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



.selected-car-wrapper {
    margin-top: 60px;
}

.selected-car {
    background: #fff;
    box-shadow: 0px 2px 10px #221F1F26;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 17px 23px;

    .logo-parent {
        img {
            width: 86px;
            height: 86px;
        }
    }

    .info-parent {
        display: flex;
        flex-direction: column;
        margin-left: 30px;

        div:nth-child(1) {
            font-family: PoppinsRegular, sans-serif;
            font-size: 18px;
            color: #4A4A4A;
        }

        div:nth-child(2) {
            font-family: PoppinsRegular, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
        }
    }
}

.fixed-button-wrapper {
    width: 100%;
    padding: 3.2rem 0;
    position: sticky;
    bottom: 0;
    background: #fff;
    text-align: right;
}

.blue-background {
    margin-top: 100px;
}


@media (max-width: 767px) {
    .header-blue-text {
        font-size: 17px;
    }
    .fixed-button-wrapper {
        text-align: center;
    }
    .selected-car {
        .logo-parent {
            img {
                height: auto;
            }
        }
    }
}



</style>