<template>
    <footer class="pt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="socials mb-4">
                        <p class="text-center follow">Follow Us</p>
                        <div class="icons d-flex justify-content-center">
                            <img src="@/assets/mixed/facebook.svg" alt="Facebook Icon">
                            <img src="@/assets/mixed/insta.png" class="ml-2" alt="Instagram Icon">
                        </div>
                    </div>
                    <div class="copyright">
                        <p class="text-center">@2020 by LAX Auto Repair</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer{
        height: 170px;
        background: #4A4A4A;
    }
    .follow{
        font-family: MontBold, sans-serif;
        color: white;
        font-size: 13px;
    }
    .copyright p{
        font-size: 13px;
        color: white;
        font-family: MontRegular, sans-serif;
    }
</style>
