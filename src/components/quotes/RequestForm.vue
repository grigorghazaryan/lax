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
            <!-- <form novalidate> -->
                <div class="container">
                    <div class="row">

                        <div class="col-md-4 offset-md-2 position-relative">
                            <md-field class="md-cont position-relative">
                                <label for="first-name"
                                :class="{ 'text-danger' : validFirstname }"
                                >* First Name</label>
                                <md-input 
                                    name="first-name" 
                                    class="form-md" 
                                    id="first-name" 
                                    autocomplete="given-name" 
                                    :disabled="sending"
                                    v-model="firstName"
                                />
                                <span v-if="validFirstname" class="text-danger">Required</span>
                            </md-field>
                        </div>

                        <div class="col-md-4">
                            <md-field class="md-cont position-relative">
                                <label for="last-name" 
                                :class="{ 'text-danger' : validLastname }"
                                >* Last Name</label>
                                <md-input 
                                    name="last-name" 
                                    class="form-md" 
                                    id="last-name" 
                                    autocomplete="given-name" 
                                    :disabled="sending" 
                                    v-model="lastName"
                                />
                                <span v-if="validLastname" class="text-danger">Required</span>
                            </md-field>
                        </div>

                        <div class="col-md-8 offset-md-2">
                            <md-field class="md-cont position-relative">
                                <label 
                                    for="email" :class="{ 'text-danger' : validEmail }" >
                                    * Email Address
                                </label>
                                <md-input 
                                    type="email" 
                                    name="email" 
                                    class="form-md"
                                    id="email" 
                                    autocomplete="given-name" 
                                    :disabled="sending" 
                                    v-model="email"
                                />
                                <span v-if="validEmail" class="text-danger">Required</span>
                            </md-field>
                        </div>

                        <div class="col-md-4 offset-md-2">
                            <md-field class="md-cont position-relative">
                                <div class="validation-box">
                                    <p class="validation-header">Your password must have:</p>
                                    <div class="validation-texts">
                                        <ul class="pl-0">
                                            <li 
                                                :class="{ 'text-danger' : p_length }">8 or more characters</li>
                                            <li
                                                :class="{ 'text-danger' : p_low_up }">
                                                Upper & lowercase letters
                                            </li>
                                            <li 
                                                :class="{'text-danger' : p_number}">
                                                At least one number
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <label for="password"
                                    :class="{ 'text-danger' : finalPswd }"> * Password</label>
                                <md-input 
                                    type="password" 
                                    name="password" 
                                    class="form-md" 
                                    id="password" 
                                    autocomplete="off" 
                                    :disabled="sending" 
                                    v-model="password"
                                />
                                <span v-if="finalPswd" class="text-danger mr-35">Required</span>
                            </md-field>
                        </div>

                        <div class="col-md-4">
                            <md-field class="md-cont position-relative">
                                <label for="phone"
                                    :class="{ 'text-danger' : validNumber }"
                                >* Phone Number</label>
                                <md-input 
                                    name="number" 
                                    class="form-md" 
                                    id="phone" 
                                    autocomplete="given-name" 
                                    :disabled="sending"
                                    v-model="phone"
                                    pattern="\d*" maxlength="10"
                                    />
                                   <span v-if="validNumber" class="text-danger">Required</span>
                            </md-field>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-8 offset-md-2 mt-5">
                            <div class="cont d-flex flex-md-row justify-content-end align-items-center">
                                <div class="right-part mt-4 mt-md-0">
                                    <SubmitButton title="See Instant Price" :disabled='isDisable'/>
                                </div>
                            </div>

                            <div class="checkbox-cont">
                                <div class="d-flex align-items-center">
                                    <input type="checkbox" id="check" v-model="accept" class="d-inline check">
                                    <label for="check"  class="check-text mb-0">By accepting, I agree to LAX Auto 
                                        Repair Terms of Service and acknowledge I’ve read the Privacy Policy.
                                    <br> I also agree that LAX Auto Repair and its Certified Shop may communicate 
                                    with me via email, text, or phone.</label>
                                </div>
                            </div>
                            
                            <div class="sign-cont mt-5">
                                <p class="text-center">Already have an account? <router-link to="/sign-in">Sign In</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
    import Back from "../mixed/Back";
    import SubmitButton from "../mixed/SubmitButton";
   
    export default {
        name: "RequestForm",
        components: {SubmitButton, Back},
        data: () => ({
            sending: false,
            found: "",
            accept: false,

            isDisable: false,

            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',

            finalPswd: false,
            p_length: false,
            p_low_up: false,
            p_number: false,

            validEmail: false,
            validFirstname: false,
            validLastname: false,
            validNumber: false,
        }),
        watch: {
            firstName(value) {
                if(value.length > 3) {
                    this.validFirstname = false
                }else {
                    this.validFirstname = true
                }
            },
            lastName(value) {
                if(value.length > 3) {
                    this.validLastname = false
                }else {
                    this.validLastname = true
                }
            },
            email(value) {
                const reg = /[^@]+@[^@]+\.[^@]+/;
                if (reg.test(value)) {
                    this.validEmail = false
                }else{
                    this.validEmail = true
                } 
            },
            password(value) {

                let number = this.hasNumbers(value)
                let lower = this.hasLowercase(value)
                let upper = this.hasUppercase(value)

                if(number) {
                    this.p_number = false
                } else {
                    this.p_number = true
                }

                if(lower && upper) {
                    this.p_low_up = false
                } else {
                    this.p_low_up = true
                }

                if(value.length >= 8) {
                    this.p_length = false
                }else {
                    this.p_length = true
                }

                if(number && lower && upper & value.length >= 8) {
                    this.finalPswd = false
                }else {
                    this.finalPswd = true
                }
            },
            phone(value) {
                let phone = this.validateMobileNumber(value)
                if(phone) {
                    this.validNumber = false
                }else {
                    this.validNumber = true
                }
            },
            accept() {
                if( this.validFirstname && this.validLastname && 
                    this.validEmail && this.finalPswd && this.validNumber
                && this.accept ) {
                    this.isDisable = false
                } else {
                    this.isDisable = true
                }
            }
        },
        methods: {
            hasNumbers(value){
                var regex = /\d/g;
                return regex.test(value);
            },
            hasLowercase(value) {
                if(value.search(/[a-z]/) == -1) {
                    return false
                } else {
                    return true
                }
            },
            validateMobileNumber(value) {
                let patt = /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/
                console.log(patt.test(value))
                return patt.test(value);
            },
            hasUppercase(value) {
                if(value.search(/[A-Z]/) == -1) {
                    return false
                }else {
                    return true
                }
            },
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
        },
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/style";

    .right-part {
        .circled-button {
            font-size: 16px;
        }
    }

    .form-section {
        padding: 85px 0;
    }
    .form{
        padding: 80px 0;
    }
    .title{
        color: $black;
    }
    .title-text {
        color: $black;
        font-size: 16px;
    }
    .main-form{
        padding-top: 100px;
    }
    .dropdown-header {

        input {
            padding-top: 0;
            padding-left: 10px;
        }

        img {
            position: absolute;
            right: 0;
        }

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
        cursor: pointer;
    }
    .check{
        width: 24px;
        height: 24px;
        margin-right: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .checkbox-cont {
        margin-top: 149px;
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
    
.mr-35 {
  margin-right: 35px !important;
}

</style>
