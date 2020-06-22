<template>
    <div class="client-talk">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-5">
                    <h3 class="title text-center">Some Talk of Our Clients</h3>
                </div>
                <ClientTalkBoxes title="Martha. G" text="Quick and easy simple repair Art was nice and took care of what I needed. He gave more more information and was helpful about new brakes and tires."/>
                <ClientTalkBoxes title="Evette. W" text="Oil change light bulb change new battery friendly service reasonable price patient explains everything timely what more can you ask for, Happy customer"/>
                <ClientTalkBoxes title="Ricardo. M" text="I needed my brakes fixed. Took my vehicle LAX Auto repair. didn't cost me an arm and a leg they had great service and my vehicle was done within two hours. I will be bringing my vehicle back. I recommend this auto shop to anyone. They are very understanding and we'll work with you."/>
            </div>
        </div>
    </div>
</template>

<script>
    import ClientTalkBoxes from "@/components/home/ClientTalkBoxes";

    export default {
        name: "ClientTalk",
        components: {
            ClientTalkBoxes
        }
    }
</script>

<style scoped>
    .title{
        color: white;
    }
    .client-talk{
        min-height: 400px;
        width: 100%;
        background: #42A6D4;
        margin-top: 80px;
        padding-top: 80px;
        padding-bottom: 65px;
    }
    @media (max-width: 768px) {
        .client-talk{
            min-height: 450px;
        }
    }
</style>
