<template>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <input type="text" placeholder="*Name" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <input type="email" placeholder="*Email" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <input type="text" placeholder="*Subject" class="form-control">
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <textarea class="form-control" placeholder="Your Message" rows="8"></textarea>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group text-sm-right text-center">
                <SubmitButton title="Send" disabled="false"/>
            </div>
        </div>
    </div>
</template>

<script>
    import SubmitButton from "../mixed/SubmitButton";
    export default {
        name: "ContactForm",
        components: {SubmitButton}
    }
</script>

<style scoped>
    input, textarea{
        background: #E9F0FE;
        border: none;
        border-radius: 0;
        color: #A2A2A2;
        font-family: PoppinsLight, sans-serif;
        font-size: 14px;
    }
</style>
