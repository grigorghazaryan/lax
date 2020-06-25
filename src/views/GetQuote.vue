<template>
    <div class="quote">
        <div class="quote help-box">
            <div class="touch" @click="closeDropdown" ref="touch"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 position-relative">
                        <Back/>
                        <h2 class="title text-center">How Can We Help?</h2>
                        <p class="title-text text-center">Please answer a few quick questions to help us <br> match you with the best car mechanic.</p>
                        <CircleButton class="next" title="Next" url="/" img="forward.png"/>
                    </div>
                    <div class="col-12 ">
                        <div class="form-group">
                            <div class="dropdown-header" ref="search" @click="toggleDropdown('search')" style="z-index: 7">
                                <div class="search-icon-cont">
                                    <img src="@/assets/mixed/search.png" class="search-icon" alt="Search">
                                </div>
                                <input type="text" class="form-control search" placeholder="Search services here" v-model="search">
                                <div class="dropdown-body" >
                                    <p v-for="i in 10" :key="i" class="mb-0 text-left drop-element" @click="choose('search', 'Engine '+ i +' ')">{{ "Engine" + i }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="service-part">
            <div class="container">
                <div class="row">
                    <service-box title="Synthetic Oil Change" height="220px" class="sb" img="oil.png"/>
                    <service-box title="Synthetic Oil Change" height="220px" class="sb" img="oil.png"/>
                    <service-box title="Synthetic Oil Change" height="220px" class="sb" img="oil.png"/>
                    <service-box title="Synthetic Oil Change" height="220px" class="sb" img="oil.png"/>
                    <service-box title="Synthetic Oil Change" height="220px" class="sb" img="oil.png"/>
                    <service-box title="Synthetic Oil Change" height="220px" class="sb" img="oil.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Back from "../components/mixed/Back";
    import CircleButton from "../components/mixed/CircleButton";
    import ServiceBox from "../components/home/ServiceBox";

    export default {
        name: "QuoteHeader",
        components: {ServiceBox, CircleButton, Back},
        data: () => ({
            search: ""
        }),
        methods: {
            toggleDropdown(ref) {
                if(!this.$refs[ref].classList.contains("show")) {
                    this.closeDropdown();
                    this.$refs[ref].classList.add("show");
                    this.$refs.touch.classList.add("block");
                } else {
                    this.$refs[ref].classList.remove("show");
                    this.$refs.touch.classList.remove("block");
                }
            },
            choose(ref, value){
                this[ref] = value;
            },
            closeDropdown() {
                let elems = document.getElementsByClassName("show");
                [].forEach.call(elems, function (element) {
                    element.className = element.className.replace(/\bshow\b/g, "");
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'src/assets/css/style.scss';

    .quote{
        padding-top: 50px;
    }
    .title{
        color: $black;
        font-size: 30px;
        font-family: MontSemiBold, sans-serif;
    }
    .title-text{
        color: $black;
    }
    .help-box{
        margin-top: 35px;
        padding: 40px 0;
        background: #D8E4FB;
    }
    .next{
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px 35px;
        display: flex;
    }
    .search{
        height: auto;
        padding: 20px 0 20px 55px!important;
        background: transparent;
        border-bottom: 3px solid $blue;
    }
    .search-icon{
        height: auto!important;
    }
    .search-icon-cont{
        position: absolute;
        left: 18px;
        top: 30px;
    }
    .dropdown-header{
        display: block;
        padding: 10px 0;
    }
    .dropdown-body{
        top: 74px;
    }
    .show{
        border-bottom: 3px solid transparent;
    }
    .service-part{
        padding: 80px 0;
    }
    .sb img{
        height: 95px;
    }

</style>
