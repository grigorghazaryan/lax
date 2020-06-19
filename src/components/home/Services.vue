<template>
    <div class="services mt-5 pt-4">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-3">
                    <div class="title-part">
                        <h3 class="title">At Your Service</h3>
                        <h5 class="subtitle">Check out what we can do for you and more!</h5>
                        <p class="title-text">LAX Auto Repair is a full-service professional auto repair shop. We offer a wide variety of mechanical repair services, as well as basic maintenance services to keep your vehicle running smoothly. We guarantee that our highly trained mechanics will help resolve your auto repair issues and get you back on the road quickly, because we’re committed to delivering satisfied customers.</p>
                    </div>
                </div>
                <ServiceBox img="oil.png" title="Oil Change" text="We provide our customers with high-quality oil technology that is formulated to perform, and at a competitive price." />
                <ServiceBox img="brake-repair.png" title="Brake Repair" text="We’ve all heard it – that squeaking or grinding sound when your car or truck is coming to a stop. These sounds are good indicators you may need new brake pads and/or rotors." />
                <ServiceBox img="engine.png" title="Check Engine Light" text="There are a number of reasons why your check engine light will turn on, so it is important to bring your vehicle in to get a diagnostic test right away."/>
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
    .subtitle {
        font-family: PoppinsRegular, sans-serif;
    }
</style>
