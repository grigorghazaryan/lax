<template>
    <div class="col-md-4 col-12 cont">
        <div class="box text-center" @mouseenter="handleHover" @mouseleave="handleLeave"
            :class="className ? className : { 'selected-box' : selected }"
            @click="selectBox"
            :style="{'height': height}" >

            <div class="block-rotate" v-if="img">
                <img :src="require(`@/assets/home/${img}`)" ref="primary" class="img-fluid primary-image" :alt="title">
            </div>
           
            <img v-if="gif" :src="require(`@/assets/home/${gif}`)" ref="gif" class="img-fluid gif" :alt="title">
            
            <h5 class="service-title text-center" :class="[img ? 'mt-35' : '']" >{{ title}}</h5>
            <p v-if="text" class="text-center service-text">{{ text }}</p>
            <div class="blue-over-overlay align-items-center justify-content-center">
                <p class="mb-0 blue-over d-flex justify-content-center align-items-center blue-over-p">
                    <img src="@/assets/mixed/delete.png" class="img-fluid mb-0" alt="blue-over Icon">
                    <span>Remove Service</span>
                </p>
                <p class="add-p mb-0 blue-over justify-content-center align-items-center ">
                    <span class="mr-2">+</span>
                     Add
                </p>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        name: "ServiceBox",
        props: ["img", "title", "text", "height", "class-name", "gif"],
        data() {
            return {
                selected: false,
            }
        },
        methods: {
            selectBox() {
                this.selected = !this.selected
            },
            handleHover() {
                if(this.$props.gif) {
                    this.$refs.primary.classList.add("none");
                    this.$refs.gif.classList.add("inline-block");
                }
            },
            handleLeave() {
                if(this.$props.gif) {
                    this.$refs.primary.classList.remove("none");
                    this.$refs.gif.classList.remove("inline-block");
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/style.scss";

    .block-rotate {
        width: 95px;
        height: 95px;
        background: #F3F5F8;
        transform: rotate(45deg);
        border-radius: 8px;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        img {
            width: 50%;
            transform: rotate(-45deg);
        }
    }

    .cont{
        margin-bottom: 15px;
    }
    .gif{
        display: none;
    }
    .none{
        display: none;
    }
    .inline-block{
        display: inline-block;
    }
    .box{
        padding: 40px 17px 17px 20px;
        box-shadow: 0px 2px 20px #221F1F33;
        background: white;
        height: 340px;
        overflow: hidden;
        border: 2px solid transparent;
        box-sizing: border-box;
        transition: border-color .3s;
        cursor: pointer;

        &:hover {
            box-shadow: none;
            border-color:  $lblue;
        }

        &.selected-box {
            box-shadow: none;
            border-color:  $lblue;
            background: #e9f1fe;
        }
        
    }
    .add-p span{
        font-size: 22px;
    }
    .service-title, .service-text {
        color: #4A4A4A;
    }
    .mt-35 {
        margin-top: 35px;
    }
    .service-title {
        margin-bottom: 0;
        font-family: MontBold, sans-serif;
    }
    .service-text {
        font-family: PoppinsRegular, sans-serif;
    }
    .box > img {
        height: 74px;
        margin-bottom: 50px;
        transition: .5s;
    }
    //.hovering{
    //    transition: .3s;
    //}
    //.hovering:hover{
    //    box-shadow: none;
    //    outline: 3px solid $lblue;
    //}
    .title-box{
        height: auto;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
    }
    .title-box .blue-over-overlay{
        display: flex;
    }
    .title-box:hover .blue-over-overlay{
        transform: translateY(0);
    }
    .title-box.add-box .blue-over-p{
        display: none!important;
    }
    .title-box.add-box .add-p{
        display: flex;
    }
    .title-box h5{
        margin-bottom: 0;
        font-size: 16px;
    }
    .blue-over-overlay{
        background: $lblue;
        position: absolute;
        height: 100%;
        width: 100%;
        transform: translateY(100%);
        transition: .2s;
        display: none;
    }
    .add-p {
        display: none;
    }
    .blue-over{
        font-family: MontBold, sans-serif;
        color: white;
    }
    .blue-over img{
        height: 15px;
        margin-right: 5px;
    }
</style>
