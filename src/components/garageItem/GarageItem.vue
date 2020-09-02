<template>
    <div class="col-md-12 garage-item">
        <div class="garage-top">
            <div class="garage-top-logo">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/bmw-2-logo-png-transparent.png" alt="logo">
            </div>
            <div class="garage-top-name">
                <div>BMW</div>
                <div>2020 - 430xDrive Gran Coupe - 2.OL L4 Turbo - 30,520 miles</div>
            </div>
            <div class="garage-top-status">
                <img src="../../assets/mixed/confirm-1.png" alt="confirm">
                <div>Generating Quote</div>
            </div>
        </div>
        <div class="row garage-body">
            <ServiceBox @click.native="showModal = true" class="chosen-boxes" title="Replace Battery" class-name="title-box"/>
            <ServiceBox @click.native="showModal = true" class="chosen-boxes" title="Synthetic Oil Change" class-name="title-box"/>
            <ServiceBox @click.native="showModal = true" class="chosen-boxes" title="Replace Starter Motor" class-name="title-box"/>
            <ServiceBox @click.native="showModal = true" class="chosen-boxes" title="Check Engine Light Diagnosis" class-name="title-box"/>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="view-details text-right"
                    :class="{ 'd-flex justify-content-between' : this.history}"
                >
                    <span v-if="this.history" :style="{ 'color': this.history.color }"> {{ this.history.name }} </span>
                    View Details
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceBox from "../home/ServiceBox";

export default {
    name: 'GarageItem',
    components: {ServiceBox},
    props: ['history'],
    created() {
        console.log('history: ', this.history)
    }
}
</script>

<style lang="scss" scoped>
.garage-item {
    // height: 300px; 
    box-shadow: 0px 2px 10px #221F1F26;  
    border-radius: 5px;
    margin-bottom: 65px;
    padding: 26px 23px;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 35px;
        top: -10%;
        left: 0;
        background-image: url(/img/garage-top.8068adbf.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .garage-top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #A2A2A2;
        padding-bottom: 5px;

        &-logo {
            img {
                width: 77px;
            }
        }

        &-name {
            flex: 2;
            padding-left: 25px;

            div {
                &:first-child {
                    font-size: 18px;
                    font-family: MontBold;
                    color: #4A4A4A;
                    margin-bottom: 8px;
                }
                &:last-child {
                    font-size: 16px;
                    font-family: PoppinsRegular;
                    color: #4A4A4A;
                }
            }
        }

        &-status {
            text-align: right;

            img {
                width: 85px;
            }

            div {
                color: #4A4A4A;
                font-size: 14px;
                font-family: PoppinsRegular;
                margin-top: 8px;
            }
        }
    }

    .garage-body {
        padding: 20px;

        .col-md-4 {
            margin-bottom: 0;
            padding: 0;
        }
    }

    .view-details {
        color: #31569C;
        font-size: 16px;
        font-family: MontBold;
        cursor: pointer;
    }
}
</style>