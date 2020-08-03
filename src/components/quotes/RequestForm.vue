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
                                <label for="first-name"
                                :class="{ 'text-danger' : msg.firstName }"
                                >* First Name</label>
                                <md-input 
                                    name="first-name" 
                                    class="form-md" 
                                    id="first-name" 
                                    autocomplete="given-name" 
                                    :disabled="sending"
                                    v-model="firstName"
                                />
                                <span v-if="msg.firstName" class="text-danger">{{msg.firstName}}</span>
<!--                                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>-->
<!--                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                            </md-field>
                        </div>
                        <div class="col-md-4">
                            <md-field class="md-cont position-relative">
                                <label for="last-name" 
                                :class="{ 'text-danger' : msg.lastName }"
                                >* Last Name</label>
                                <md-input 
                                    name="last-name" 
                                    class="form-md" 
                                    id="last-name" 
                                    autocomplete="given-name" 
                                    :disabled="sending" 
                                    v-model="lastName"
                                />
                                <span v-if="msg.lastName" class="text-danger">{{msg.lastName}}</span>
<!--                                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>-->
<!--                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                            </md-field>
                        </div>
                        <div class="col-md-8 offset-md-2">
                            <md-field class="md-cont position-relative">
                                <label 
                                    for="email" :class="{ 'text-danger' : msg.email }" >
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
                                <span v-if="msg.email" class="text-danger">{{msg.email}}</span>
                            </md-field>
                        </div>
                        <div class="col-md-4 offset-md-2">
                            <md-field class="md-cont position-relative">
                                <div class="validation-box">
                                    <p class="validation-header">Your password must have:</p>
                                    <div class="validation-texts">
                                        <ul class="pl-0">
                                            <li 
                                                :class="{ 'text-danger' : msg.password }">8 or more characters</li>
                                            <li
                                                :class="{ 'text-danger' : msg.pswd_letters }">
                                                Upper & lowercase letters
                                            </li>
                                            <li 
                                                :class="{'text-danger' : msg.pswd_number}">
                                                At least one number
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <label for="password"
                                    :class="{ 'text-danger' : msg.password }"
                                >* Password</label>
                                <md-input 
                                    type="password" 
                                    name="password" 
                                    class="form-md" 
                                    id="password" 
                                    autocomplete="off" 
                                    :disabled="sending" 
                                    v-model="password"
                                />
                                <span v-if="msg.password" class="text-danger mr-35">{{msg.password}}</span>
<!--                                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>-->
<!--                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                            </md-field>
                        </div>
                        <div class="col-md-4">
                            <md-field class="md-cont position-relative">
                                <label for="phone"
                                    :class="{ 'text-danger' : msg.phone }"
                                >* Phone Number</label>
                                <md-input 
                                    name="number" 
                                    type="number"
                                    class="form-md" 
                                    id="phone" 
                                    autocomplete="given-name" 
                                    :disabled="sending"
                                    v-model="phone"
                                    />
                                   <span v-if="msg.phone" class="text-danger">{{msg.phone}}</span>
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
            found: "",
            accept: false,

            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',

            msg: [],
        }),
        watch: {
            email(value){
                //this.email = value
                this.validateEmail(value)
            },
            firstName(value){
                if(value.length <= 3) {
                    this.msg['firstName'] = 'Required'
                }else {
                    this.msg = this.msg.splice(this.msg.indexOf('firstName'), 1);
                }
            },
            lastName(value) {
                if(value.length <= 3) {
                    this.msg['lastName'] = 'Required'
                }else {
                   this.msg = this.msg.splice(this.msg.indexOf('lastName'), 1);
                }
            },
            password(value) {

                if(value.length < 8) {
                    this.msg['password'] = 'Required'
                }
                else {
                    this.msg = this.msg.splice(this.msg.indexOf('password'), 1);
                }

                let number = this.hasNumbers(value)
                if(number) {
                     this.msg = this.msg.splice(this.msg.indexOf('pswd_number'), 1);
                }else {
                   this.msg['pswd_number'] = 'false'
                   this.msg['password'] = 'Required'
                }


                let lower = this.hasLowercase(value)
                let upper = this.hasUppercase(value)

                if(lower && upper) {
                    this.msg = this.msg.splice(this.msg.indexOf('pswd_letters'), 1);
                }else {
                   this.msg['pswd_letters'] = 'false'
                   this.msg['password'] = 'Required'
                }
            },
            phone(value) {
                let phone = this.validateMobileNumber(value)
                if(phone) {
                    this.msg = this.msg.splice(this.msg.indexOf('phone'), 1);
                }else {
                    this.msg['phone'] = 'Required'
                }
                console.log(this.msg)
            },
         //   accept(value) {
                //if(value) {
              //       if( this.msg['firstName'] == '' && 
              //          this.msg['lastName'] == '' &&  
              //          this.msg['email'] == '' &&
              //          this.msg['password'] == '' &&
              //          this.msg['phone'] == '' &&
               //         this.accept ) {
               //            this.finalValidate = true
               //     }
           //     }
          //  }
        },
        methods: {
            validateEmail(value){
                const reg = /[^@]+@[^@]+\.[^@]+/;
                if (reg.test(value)) {
                    this.msg = this.msg.splice(this.msg.indexOf('email'), 1);
                }else{
                    this.msg['email'] = 'Required'
                } 
            },
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
        computed: {
            isDisable() {
                if( 
                   // this.msg['firstName'] == '' && 
                  //  this.msg['lastName'] == '' &&  
                   // this.msg['email'] == '' &&
                    //this.msg['password'] == '' &&
                    //this.msg['pswd_number'] == '' &&
                    //this.msg['pswd_letters'] == '' &&
                    //this.msg['phone'] == '' &&
                    this.accept & this.msg.length == 0
                ){
                    return true
                } else {
                    return false
                }
            }
        }
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
        padding: 40px 0;
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
