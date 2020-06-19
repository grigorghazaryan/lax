<template>
    <div class="newsletter pt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-3">
                    <h3 class="title">Subscribe To Our Newsletter</h3>
                </div>
                <div class="col-6 offset-3">
                    <label for="email-news">* Email Address</label>
                    <div class="d-flex">
                        <input type="email" placeholder="freebies@sales.com" id="email-news" class="form-control">
                        <SubmitButton class="ml-3" title="Subscribe"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SubmitButton from "../mixed/SubmitButton";
    export default {
        name: "Newsletter",
        components: {SubmitButton},
    }
</script>

<style scoped>
    .newsletter{
        height: 200px;
        background: #DEDEDE;
    }
    .title{
        color: #252525;
        font-size: 18px;
    }
    label{
        font-family: PoppinsRegular, sans-serif;
        font-size: 12px;
        color: #252525;
    }
    input{
        background: white;
        border-radius: 0;
        font-size: 14px;
        color: #A2A2A2;
    }
</style>
