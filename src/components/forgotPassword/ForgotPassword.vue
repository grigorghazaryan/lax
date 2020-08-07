<template>
    <div class="forgot-wrapper">
        <div class="forgot-pswd-parent">
            <div class="icon">
                <img v-if="!showResetPswd" src="@/assets/mixed/forgot-password.png" />
                <img v-else src="@/assets/mixed/reset-password.png" />
            </div>
            <div class="forgot-title">
               <h1 v-if="!showResetPswd">
                    Forgot password?
               </h1>
               <h1 v-else>
                   Reset Your Password
               </h1>
            </div>
            <div class="forgot-subtitle" v-if="!showResetPswd">
                Please, enter your email address. You will receive a link to
                create a new password via email.
            </div>
            <div class="forgot-input" v-if="!showResetPswd">
                <md-field class="md-cont position-relative">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13.75" viewBox="0 0 20 13.75">
                        <defs></defs><g transform="translate(0 -80)"><g transform="translate(13.281 82.55)"><path class="a" d="M339.392,149.323l6.719,4.247V144.9Z" transform="translate(-339.392 -144.896)"/></g><g transform="translate(0 82.55)"><path class="a" d="M0,144.9v8.674l6.719-4.247Z" transform="translate(0 -144.896)"/></g><g transform="translate(0.037 80)"><path class="a" d="M19.673,80H2.173A1.233,1.233,0,0,0,.96,81.06L10.923,87.6l9.963-6.541A1.233,1.233,0,0,0,19.673,80Z" transform="translate(-0.96 -80)"/></g><g transform="translate(0.04 87.752)"><path class="a" d="M13.1,277.921l-1.769,1.161a.63.63,0,0,1-.688,0L8.872,277.92l-7.848,4.946a1.231,1.231,0,0,0,1.21,1.051h17.5a1.231,1.231,0,0,0,1.21-1.051Z" transform="translate(-1.024 -277.92)"/></g></g></svg>
                    </div>
                    <label for="email">* Email</label>
                    <md-input 
                        name="email" 
                        class="form-md" 
                        id="email" 
                        autocomplete="off"
                        v-model="email"
                    />
                </md-field>
            </div>
            <div class="reset-inputs-parent" v-else>
                <md-field class="md-cont position-relative">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20"><defs></defs><path d="M16.125,7.5H15.5V5a5,5,0,0,0-10,0V7.5H4.875A1.877,1.877,0,0,0,3,9.375v8.75A1.877,1.877,0,0,0,4.875,20h11.25A1.877,1.877,0,0,0,18,18.125V9.375A1.877,1.877,0,0,0,16.125,7.5ZM7.167,5a3.333,3.333,0,1,1,6.667,0V7.5H7.167Zm4.167,8.935v1.9a.833.833,0,0,1-1.667,0v-1.9a1.667,1.667,0,1,1,1.667,0Z" transform="translate(-3)" class="a"></path></svg>
                    </div>
                    <label for="newpswd">* New Password</label>
                    <md-input 
                        name="newpswd" 
                        class="form-md" 
                        id="newpswd" 
                        autocomplete="off"
                        v-model="newPswd"
                    />
                  
                </md-field>
                <md-field class="md-cont position-relative">
                    <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20"><defs></defs><path d="M16.125,7.5H15.5V5a5,5,0,0,0-10,0V7.5H4.875A1.877,1.877,0,0,0,3,9.375v8.75A1.877,1.877,0,0,0,4.875,20h11.25A1.877,1.877,0,0,0,18,18.125V9.375A1.877,1.877,0,0,0,16.125,7.5ZM7.167,5a3.333,3.333,0,1,1,6.667,0V7.5H7.167Zm4.167,8.935v1.9a.833.833,0,0,1-1.667,0v-1.9a1.667,1.667,0,1,1,1.667,0Z" transform="translate(-3)" class="a"></path></svg>
                    </div>
                    <label for="confirm">* Confirm New Password</label>
                    <md-input 
                        name="confirm" 
                        class="form-md" 
                        id="confirm" 
                        autocomplete="off"
                        v-model="confirmPswd"
                    />
                  
                </md-field>
            </div>
            <div class="forgot-button">
                <button v-if="!showResetPswd" @click="showEmailPopup = !showEmailPopup">Send</button>
                <button v-else @click="showSuccessPopup = !showSuccessPopup" >Done</button>
            </div>
        </div>
        <EmailPopup 
            v-if="showEmailPopup" 
            @messageFromChild="childMessageReceived" 
        />
        <SuccessPopup 
            v-if="showSuccessPopup"
            @successMessageFromChild="successChildMessageReceived" 
        />
    </div>
</template>


<script>
import EmailPopup from '../emailPopup/EmailPopup';
import SuccessPopup from '../successPopup/SuccessPopup'; 

export default {
    name: 'ForgotPassword',
    components: { 
        EmailPopup,  
        SuccessPopup
    },
    data() {
        return {
            showResetPswd: false,
            showEmailPopup: false,
            showSuccessPopup: false,
            email: '',
            newPswd: '',
            confirmPswd: '',
        }
    },
    methods: {
        childMessageReceived() {
            this.showEmailPopup = false
            this.showEmailPopup = false
            this.showResetPswd = true
        },
        successChildMessageReceived() {
            this.showSuccessPopup = false
        }
    }
}
</script>



<style lang="scss">

@import "src/assets/css/style";

    .forgot-wrapper {
        width: 100%;
        height: 80vh;

        display: flex;
        justify-content: center;
        align-items: center;

        .forgot-pswd-parent {

            width: 520px;
            height: auto;

            display: flex;
            flex-direction: column;

            .icon {
                margin-bottom: 50px;
                text-align: center;
                img {
                    width: 109px;
                    height: 117px;
                }
            }

            .forgot-title {
                h1 {
                    font-family: MontBold;
                    text-align: center;
                    font-size: 30px;
                    color: #252525;
                    margin-bottom: 16px;

                    @media screen and (max-width: 768px) and (min-width: 300px) {
                       font-size: 28px !important;
                    }
                }
            }

            .forgot-subtitle {
                color: #4A4A4A;
                font-family: PoppinsRegular;
                margin-bottom: 50px;
                text-align: center;
            }

            .forgot-input {
                width: 100%;

                .md-field {
                    margin-bottom: 0;
                }
            }

            .reset-inputs-parent {
                width: 100%;

                .md-field {
                    margin-bottom: 0;

                    &:first-child {
                        margin-top: 64px;
                        margin-bottom: 33px;
                    }
                }
            }

            .forgot-button {
                width: 100%;
                text-align: right;
                margin-top: 65px;

                button {
                    width: 190px;
                    padding: 13px 25px;
                    background: #31569C;
                    font-family: MontBold,sans-serif;
                    color: #fff!important;
                    border-radius: 25px 25px;
                    text-decoration: none!important;
                    outline: none;
                    border: none;
                    transition: .3s;

                    &:hover {
                        background: #45afdb!important;
                    }
                }

            }

            .md-field {
                label {
                    margin-left: 25px;
                }
                input {
                    margin-left: 15px;
                }
                svg {
                    fill: #31569C;
                }
            }
            
        }

        @media screen and (max-width: 768px) and (min-width: 300px) { 
            .forgot-pswd-parent {
                width: 340px;

                .icon {
                    margin-bottom: 25px;

                    img {
                        width: 80px;
                        height: auto;
                    }
                }

                .forgot-subtitle {
                    margin-bottom: 20px;
                }

                .forgot-input {
                    margin-bottom: 0;
                }

                .forgot-button {
                    margin-top: 35px;
                }

                .reset-inputs-parent {

                    .md-field {
                        &:first-child {
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
</style>