<template>
    <div class="map">
        <div class="container-fluid">
            <div class="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5357289345643!2d-118.31184078478891!3d33.90160898064713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b58e6a9b74f9%3A0x739ee5b3f73245d0!2s14301%20S%20Western%20Ave%2C%20Gardena%2C%20CA%2090249%2C%20USA!5e0!3m2!1sen!2s!4v1592575094809!5m2!1sen!2s" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Map"
    }
</script>

<style scoped>
    iframe{
        height: 290px;
        width: 100%;
    }
    .map{
        margin-top: 80px;
    }
</style>
