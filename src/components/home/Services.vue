<template>
    <div class="services">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="title-part">
                        <h3 class="title">At Your Service</h3>
                        <h5 class="subtitle">Check out what we can do for you and more!</h5>
                        <p class="title-text">LAX Auto Repair is a full-service professional auto repair shop. We offer a wide variety of mechanical repair services, as well as basic maintenance services to keep your vehicle running smoothly. We guarantee that our highly trained mechanics will help resolve your auto repair issues and get you back on the road quickly, because we’re committed to delivering satisfied customers.</p>
                    </div>
                </div>
                <ServiceBox gif="oil.gif" img="oil.png" title="Oil Change" text="We provide our customers with high-quality oil technology that is formulated to perform, and at a competitive price." />
                <ServiceBox gif="brake.gif" img="brake-repair.png" title="Brake Repair" text="If your brakes squeal or grind, grab causing jerky stops or your warning light flashes it may be time for a free brake in-shop system inspection." />
                <ServiceBox gif="engine.gif" img="engine.png" title="Check Engine Light" text="From check engine lights and spark plugs to serpentine belts and radiator hoses, We can help maintain your engine’s optimal performance."/>
            </div>
        </div>
    </div>
</template>

<script>
    import ServiceBox from "@/components/home/ServiceBox";

    export default {
        name: "Services",
        components: {
            ServiceBox
        }
    }
</script>

<style scoped>
    .title, .subtitle, .title-text{
        color: #4A4A4A;
        text-align: center;
    }
    .title {
        margin-bottom: 10;
        font-size: 32px;
    }
    .subtitle {
        margin-bottom: 20px;
    }
    .title-text {
        margin-bottom: 32px;
    }
    .subtitle {
        font-family: PoppinsRegular, sans-serif;
    }
    .services{
        background: #FCF9F9;
        padding-top: 100px;
        padding-bottom: 80px;
        box-shadow: 4px 0px 8px #4A4A4A80;
    }
</style>
