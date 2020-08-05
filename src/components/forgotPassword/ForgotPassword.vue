<template>
    <div class="forgot-parent">
        <div class="forgot-parent">
            <div class="icon">
                <img src="@/assets/mixed/forgot-password.png" />
            </div>
            <div class="forgot-title">
               <h1>
                    Forgot password?
               </h1>
            </div>
            <div class="forgot-subtitle">
                Please, enter your email address. You will receive a link to
                create a new password via email.
            </div>
            <div class="forgot-input">
                <md-field class="md-cont position-relative">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13.75" viewBox="0 0 20 13.75">
                        <defs></defs><g transform="translate(0 -80)"><g transform="translate(13.281 82.55)"><path class="a" d="M339.392,149.323l6.719,4.247V144.9Z" transform="translate(-339.392 -144.896)"/></g><g transform="translate(0 82.55)"><path class="a" d="M0,144.9v8.674l6.719-4.247Z" transform="translate(0 -144.896)"/></g><g transform="translate(0.037 80)"><path class="a" d="M19.673,80H2.173A1.233,1.233,0,0,0,.96,81.06L10.923,87.6l9.963-6.541A1.233,1.233,0,0,0,19.673,80Z" transform="translate(-0.96 -80)"/></g><g transform="translate(0.04 87.752)"><path class="a" d="M13.1,277.921l-1.769,1.161a.63.63,0,0,1-.688,0L8.872,277.92l-7.848,4.946a1.231,1.231,0,0,0,1.21,1.051h17.5a1.231,1.231,0,0,0,1.21-1.051Z" transform="translate(-1.024 -277.92)"/></g></g></svg>
                    </div>
                    <label for="email"
                       
                    >* Email</label>
                    <md-input 
                        name="full-name" 
                        class="form-md" 
                        id="full-name" 
                        autocomplete="given-name" 
                    />
                  
                </md-field>
            </div>
            <div class="forgot-button">
                <button>Send</button>
            </div>
        </div>
    </div>
</template>



<style lang="scss">

@import "src/assets/css/style";

    .forgot-parent {
        width: 100%;
        height: 80vh;

        display: flex;
        justify-content: center;
        align-items: center;

        .forgot-parent {

            width: 400px;
            height: auto;

            display: flex;
            flex-direction: column;

            @media screen and (max-width: 768px) and (min-width: 300px) {
                width: 340px;
            }

            .icon {
                margin-bottom: 50px;
                img {
                    width: 109px;
                    height: 117px;
                }
            }

            .forgot-title {
                h1 {
                    font-family: MontBold;
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
                margin-bottom: 60px;
            }

            .forgot-button {
                width: 100%;
                text-align: right;

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
    }
</style>