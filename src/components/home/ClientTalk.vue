<template>
    <div class="client-talk">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-5">
                    <h3 class="title text-center">Some Talk of Our Clients</h3>
                </div>
                <ClientTalkBoxes title="OLIVER GOMEZ" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good."/>
                <ClientTalkBoxes title="OLIVER GOMEZ" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good."/>
                <ClientTalkBoxes title="OLIVER GOMEZ" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good."/>
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
        height: 400px;
        width: 100%;
        background: #42A6D4;
        margin-top: 80px;
        padding-top: 80px;
    }
</style>
