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
        <div class="to-up" ref="up">
            <router-link to="/repair" class="btn repair">Start Repair</router-link>
            <button @click="toUp" class="btn rounded-circle">Up</button>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        created() {
            window.addEventListener("scroll", this.handleScroll);
        },
        methods: {
            handleScroll() {
                if(window.pageYOffset > 200) {
                    this.$refs.up.classList.add("show");
                } else {
                    this.$refs.up.classList.remove("show");
                }
            },
            toUp() {
                window.scrollTo({top: 0, behavior: "smooth"});
            }
        }
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
    .to-up{
        position: fixed;
        bottom: 20px;
        right: 70px;
        display: none;
    }
    .rounded-circle{
        background: white;
        height: 45px;
        width: 45px;
        display: block;
    }
    .repair{
        margin-right: 20px;
        height: auto;
        width: auto;
        background: white;
        padding: 7px 15px;
        border-radius: 25px;
        font-size: 12px;
        color: #31569C;
        display: flex;
        align-items: center;
        font-family: MontBold, sans-serif;
    }
    .show{
        display: flex;
    }
</style>
