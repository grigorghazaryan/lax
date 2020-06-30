<template>
    <div class="form-section">
        <div class="touch" @click="closeDropdown" ref="touch"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 position-relative">
                    <Back/>
                    <h2 class="title text-center">See Instant Price</h2>
                    <p class="title-text text-center">Get your guaranteed price on the next page</p>
                </div>
            </div>
        </div>
        <div class="main-form">
            <form novalidate>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 offset-md-2 position-relative">
                            <md-field class="md-cont position-relative">
                                <div class="validation-box">
                                    <p class="validation-header">First Name must have:</p>
                                    <div class="validation-texts">
                                        <ul class="pl-0">
                                            <li>100 characters</li>
                                            <li>Upper and lower letters</li>
                                            <li>100 characters</li>
                                        </ul>
                                    </div>
                                </div>
                                <label for="first-name">* First Name</label>
                                <md-input name="first-name" class="form-md" id="first-name" autocomplete="given-name" :disabled="sending" />
<!--                                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>-->
<!--                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                            </md-field>
                        </div>
                        <div class="col-md-4">
                            <md-field class="md-cont position-relative">
                                <div class="validation-box"></div>
                                <label for="last-name">* Last Name</label>
                                <md-input name="last-name" class="form-md" id="last-name" autocomplete="given-name" :disabled="sending" />
<!--                                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>-->
<!--                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                            </md-field>
                        </div>
                        <div class="col-md-8 offset-md-2">
                            <md-field class="md-cont position-relative">
                                <div class="validation-box"></div>
                                <label for="email">*Email Address</label>
                                <md-input type="email" name="email" class="form-md" id="email" autocomplete="given-name" :disabled="sending" />
<!--                                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>-->
<!--                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                            </md-field>
                        </div>
                        <div class="col-md-4 offset-md-2">
                            <md-field class="md-cont position-relative">
                                <div class="validation-box"></div>
                                <label for="password">* Password</label>
                                <md-input type="password" name="password" class="form-md" id="password" autocomplete="off" :disabled="sending" />
<!--                                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>-->
<!--                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                            </md-field>
                        </div>
                        <div class="col-md-4">
                            <md-field class="md-cont position-relative">
                                <div class="validation-box"></div>
                                <label for="phone">* Phone Number</label>
                                <md-input name="phone" class="form-md" id="phone" autocomplete="given-name" :disabled="sending" />
<!--                                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>-->
<!--                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                            </md-field>
                        </div>

                        <div class="col-md-8 offset-md-2 mt-2">
                            <div class="dropdown-header" ref="found" style="z-index: 7" @click="toggleDropdown('found')">
                                <input type="text" class="form-control search" placeholder="How did you hear about us?" v-model="found">
                                <div class="dropdown-body" >
                                    <p v-for="i in 10" :key="i" class="mb-0 text-left drop-element" @click="choose('found', 'found '+ i +' ')">{{ "found" + i }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 offset-md-2 mt-5">
                            <div class="cont d-flex flex-column flex-md-row justify-content-between align-items-center">
                                <div class="left-part d-flex align-items-center">
                                    <div class="img-cont mr-2">
                                        <img src="@/assets/mixed/information.png" alt="Info">
                                    </div>
                                    <div class="text-part">
                                        <p class="mb-1 first-text">Booked 312 times in the last 24 hours</p>
                                        <p class="m-0 sec-text">Reservation will be released soon</p>
                                    </div>
                                </div>
                                <div class="right-part mt-4 mt-md-0">
                                    <SubmitButton title="See Instant Price"/>
                                </div>
                            </div>
                            <div class="checkbox-cont mt-5">
                                <div class="d-flex align-items-center">
                                    <input type="checkbox" id="check" class="d-inline check">
                                    <label for="check" class="check-text mb-0">By accepting, I agree to LAX Auto Repair Terms of Service and acknowledge I’ve read the Privacy Policy.
                                        <br> I also agree that LAX Auto Repair and its Certified Shop may communicate with me via email, text, or phone.</label>
                                </div>
                            </div>
                            <div class="sign-cont mt-5">
                                <p class="text-center">Already have an account? <router-link to="/sign-in">Sign In</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Back from "../mixed/Back";
    import SubmitButton from "../mixed/SubmitButton";
    // import { validationMixin } from 'vuelidate'
    // import {
    //     required,
    //     email,
    //     minLength,
    //     maxLength
    // } from 'vuelidate/lib/validators'

    export default {
        name: "RequestForm",
        components: {SubmitButton, Back},
        data: () => ({
            sending: false,
            found: ""
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
                });
                this.$refs.touch.classList.remove("block");
            },
        }
    }
</script>

<style lang="scss">
    @import "src/assets/css/style";
    .form-section {
        padding: 40px 0;
    }
    .form{
        padding: 80px 0;
    }
    .title{
        color: $black;
    }
    .title-text{
        color: $black;
    }
    .main-form{
        padding-top: 100px;
    }
    .dropdown-header input{
        padding-top: 0;
        padding-left: 10px;
    }
    .dropdown-header, .dropdown-header input{
        margin: 0;
        transform: translateX(0);
        width: 100%;
    }
    .dropdown-header{
        padding-left: 0;
        border-bottom: 0;
    }
    .first-text{
        font-family: PoppinsSemiBold, sans-serif;
    }
    .sec-text{
        font-family: PoppinsRegular, sans-serif;
    }
    .first-text, .sec-text{
        color: $black;
    }
    .check-text{
        color: #A2A2A2;
        font-family: PoppinsRegular, sans-serif;
        font-size: 12px;
    }
    .check{
        width: 24px;
        height: 24px;
        margin-right: 10px;
        border-radius: 5px;
    }
    .sign-cont p{
        color: $black;
        font-family: PoppinsRegular, sans-serif;
    }
    .sign-cont a{
        color: $blue;
        text-decoration: none;
        font-family: PoppinsSemiBold, sans-serif;
    }
    .validation-box{
        position: absolute;
        height: auto;
        padding: 50px 20px;
        width: 350px;
        background: url("../../assets/mixed/box.png");
        background-size: 100% 100%;
        z-index: 99999;
        background-repeat: no-repeat;
        top: 0;
        transform: translateY(-95%);
        display: none;
    }
    .md-focused .validation-box{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .validation-texts ul {
        margin-bottom: 0;
    }
    .validation-header{
        color: #252525;
        font-size: 14px;
        font-family: MontSemiBold, sans-serif;
        margin-bottom: 0;
    }
    .validation-texts li::before{
        content: "\2022";
        color: $blue;
        position: relative;
        left: -10px;
        width: 1em;
        bottom: -3px;
        font-weight: bold;
        font-size: 18px;
    }
    .validation-texts li{
        font-family: PoppinsLight, sans-serif;
        font-size: 12px;
        list-style-type: none;
        letter-spacing: 0.14px;
    }
    @media (max-width: 768px) {
        .validation-box {
            width: 100%;
            height: auto;
        }
    }
</style>
