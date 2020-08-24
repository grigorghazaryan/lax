<template>
    <div class="summary">
        <DeleteModal @close="showModal = false" v-if="showModal"/>
        <div class="selected-part">
            <div class="container">
                <div class="row">
                    <div class="col-12 position-relative">
                        <Back/>
                        <h2 class="title text-center">Selected Services</h2>
                    </div>
                </div>
                <div class="row selected-services-container">
                    <ServiceBox @click.native="showModal = true" 
                        class="chosen-boxes" title="Synthetic Oil Change" 
                        class-name="title-box" ></ServiceBox>

                    <ServiceBox @click.native="showModal = true" class="chosen-boxes" title="Replace Battery" class-name="title-box"/>
                    <ServiceBox @click.native="showModal = true" class="chosen-boxes" title="Replace Starter Motor" class-name="title-box"/>
                    <ServiceBox @click.native="showModal = true" class="chosen-boxes" title="Check Engine Light Diagnosis" class-name="title-box"/>
                </div>
                <div class="row">
                    <div class="col-12">
                        <router-link to="/get-quote" class="add-service"> <span>+</span>Add Additional Service</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="related-part">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="title text-center">Related Services</h2>
                        <p class="title-text text-center">We base this on the services in your cart. Your car may need <br> some of these additional repairs, which are commonly performed together.</p>
                    </div>
                </div>
                <div class="row">
                    <ServiceBox class="chosen-boxes" title="Replace Spark Plugs" class-name="title-box add-box"/>
                    <ServiceBox class="chosen-boxes" title="Replace Catalytic Converter" class-name="title-box add-box"/>
                </div>
            </div>
        </div>
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-12 text-md-right">
                    <CircleButton title="Get a Quote" url="request-form"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Back from "../mixed/Back";
    import ServiceBox from "../home/ServiceBox";
    import DeleteModal from "../mixed/DeleteModal";
    import CircleButton from "../mixed/CircleButton";

    export default {
        name: "ServiceSummary",
        data: () => ({
            showModal: false,
        }),
        methods: {
           
        },

        components: {CircleButton, DeleteModal, ServiceBox, Back}
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/style";

    .title-text{
        color: $black;
    }
    .title{
        color: $black;
        font-size: 30px;
        font-family: MontSemiBold, sans-serif;
    }
    .related-part{
        padding: 70px 0;
        background: #D8E4FB;

        .title-text { 
            font-size: 16px;
            margin-bottom: 32px 
        }
    }
    .selected-part{
        padding: 80px 0 20px 0;
    }
    .selected-services-container{
        padding-top: 50px;
    }

    .add-service{
        color: $blue;
        font-family: MontSemiBold, sans-serif;
        text-decoration: none!important;
        display: flex;
        align-items: center;
        float: right;
    }

    .add-service span{
        font-size: 24px;
        margin-right: 5px;
    }
    
    @media (min-width: 1200px) {
        .chosen-boxes{
            margin-bottom: 40px;
        }
    }
</style>
