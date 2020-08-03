<template>
    <div class='sign-parent' :class="{ 'reversed' : openRegister }">
        <div class="sign-in-parent">

            <div class="sign-in-block" v-if="!openRegister">
                <div class="sign-in-header">
                    <img src="@/assets/mixed/logo.png" />
                    <h1>Sign in to LAX</h1>
                </div>

                <div class="sign-in-body">
                    <md-field class="md-cont position-relative">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="16.686" height="20" viewBox="0 0 16.686 20"><defs>
                            </defs><g transform="translate(0 0)"><path class="a" d="M91.874,9.566a4.714,4.714,0,0,0,3.424-1.4,4.6,4.6,0,0,0,1.418-3.382A4.6,4.6,0,0,0,95.3,1.4a4.883,4.883,0,0,0-6.847,0,4.6,4.6,0,0,0-1.419,3.382A4.6,4.6,0,0,0,88.45,8.165,4.715,4.715,0,0,0,91.874,9.566Zm0,0" transform="translate(-83.656)"/><path class="a" d="M16.645,252.994a11.734,11.734,0,0,0-.162-1.255,9.829,9.829,0,0,0-.311-1.262,6.209,6.209,0,0,0-.522-1.177,4.444,4.444,0,0,0-.788-1.019,3.477,3.477,0,0,0-1.131-.706,3.935,3.935,0,0,0-1.444-.26,1.472,1.472,0,0,0-.783.33c-.235.152-.509.328-.816.522a4.691,4.691,0,0,1-1.055.462,4.126,4.126,0,0,1-2.581,0A4.679,4.679,0,0,1,6,248.168c-.3-.193-.578-.368-.816-.522a1.47,1.47,0,0,0-.783-.33,3.93,3.93,0,0,0-1.444.26,3.473,3.473,0,0,0-1.132.706,4.445,4.445,0,0,0-.787,1.019,6.221,6.221,0,0,0-.522,1.177A9.854,9.854,0,0,0,.2,251.739a11.694,11.694,0,0,0-.162,1.255c-.027.38-.04.774-.04,1.173a3.285,3.285,0,0,0,.986,2.495,3.565,3.565,0,0,0,2.542.921h9.63a3.564,3.564,0,0,0,2.541-.921,3.284,3.284,0,0,0,.986-2.495c0-.4-.014-.795-.04-1.173Zm0,0" transform="translate(0 -237.583)"/></g></svg>
                        </div>
                        <label for="full-name">* Full Name</label>
                        <md-input 
                            name="full-name" 
                            class="form-md" 
                            id="full-name" 
                            autocomplete="given-name" 
                            v-model="fullName"
                        />
                    </md-field>
                    <md-field class="md-cont position-relative">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20"><defs></defs><path class="a" d="M16.125,7.5H15.5V5a5,5,0,0,0-10,0V7.5H4.875A1.877,1.877,0,0,0,3,9.375v8.75A1.877,1.877,0,0,0,4.875,20h11.25A1.877,1.877,0,0,0,18,18.125V9.375A1.877,1.877,0,0,0,16.125,7.5ZM7.167,5a3.333,3.333,0,1,1,6.667,0V7.5H7.167Zm4.167,8.935v1.9a.833.833,0,0,1-1.667,0v-1.9a1.667,1.667,0,1,1,1.667,0Z" transform="translate(-3)"/></svg>
                            </div>
                            <label for="password">* Password</label>
                            <md-input 
                                type="password" 
                                name="password" 
                                class="form-md" 
                                id="password" 
                                autocomplete="off" 
                                v-model="password"
                            />
                    </md-field>
                    <div class="forgot-parent">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div class="sign-button-parent">
                        <button>Sign In</button>
                    </div>
                    <div class="social-media-registration">
                        <div class="soc-title">or use social media for registration</div>
                        <div class="social-icons-parent">
                            <div class="social-icon">
                                <a href="https://facebook.com">
                                    <img src="@/assets/mixed/facebook.png" alt="facebook">
                                </a>
                            </div>
                            <div class="social-icon">
                                <a href="https://instagram.com">
                                    <img src="@/assets/mixed/instagram.png" alt="instagram">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div class="sign-in-block" v-else >
                <div class="sign-in-header">
                    <img src="@/assets/mixed/logo.png" />
                    <h1>Create Account</h1>
                </div>

                <div class="sign-in-body">

                    <md-field class="md-cont position-relative">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="16.686" height="20" viewBox="0 0 16.686 20"><defs>
                            </defs><g transform="translate(0 0)"><path class="a" d="M91.874,9.566a4.714,4.714,0,0,0,3.424-1.4,4.6,4.6,0,0,0,1.418-3.382A4.6,4.6,0,0,0,95.3,1.4a4.883,4.883,0,0,0-6.847,0,4.6,4.6,0,0,0-1.419,3.382A4.6,4.6,0,0,0,88.45,8.165,4.715,4.715,0,0,0,91.874,9.566Zm0,0" transform="translate(-83.656)"/><path class="a" d="M16.645,252.994a11.734,11.734,0,0,0-.162-1.255,9.829,9.829,0,0,0-.311-1.262,6.209,6.209,0,0,0-.522-1.177,4.444,4.444,0,0,0-.788-1.019,3.477,3.477,0,0,0-1.131-.706,3.935,3.935,0,0,0-1.444-.26,1.472,1.472,0,0,0-.783.33c-.235.152-.509.328-.816.522a4.691,4.691,0,0,1-1.055.462,4.126,4.126,0,0,1-2.581,0A4.679,4.679,0,0,1,6,248.168c-.3-.193-.578-.368-.816-.522a1.47,1.47,0,0,0-.783-.33,3.93,3.93,0,0,0-1.444.26,3.473,3.473,0,0,0-1.132.706,4.445,4.445,0,0,0-.787,1.019,6.221,6.221,0,0,0-.522,1.177A9.854,9.854,0,0,0,.2,251.739a11.694,11.694,0,0,0-.162,1.255c-.027.38-.04.774-.04,1.173a3.285,3.285,0,0,0,.986,2.495,3.565,3.565,0,0,0,2.542.921h9.63a3.564,3.564,0,0,0,2.541-.921,3.284,3.284,0,0,0,.986-2.495c0-.4-.014-.795-.04-1.173Zm0,0" transform="translate(0 -237.583)"/></g></svg>
                        </div>
                        <label for="full-name">* Full Name</label>
                        <md-input 
                            name="full-name" 
                            class="form-md" 
                            id="full-name" 
                            autocomplete="given-name" 
                            v-model="fullName"
                        />
                    </md-field>
                    <md-field class="md-cont position-relative">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13.75" viewBox="0 0 20 13.75">
                            <defs></defs><g transform="translate(0 -80)"><g transform="translate(13.281 82.55)"><path class="a" d="M339.392,149.323l6.719,4.247V144.9Z" transform="translate(-339.392 -144.896)"/></g><g transform="translate(0 82.55)"><path class="a" d="M0,144.9v8.674l6.719-4.247Z" transform="translate(0 -144.896)"/></g><g transform="translate(0.037 80)"><path class="a" d="M19.673,80H2.173A1.233,1.233,0,0,0,.96,81.06L10.923,87.6l9.963-6.541A1.233,1.233,0,0,0,19.673,80Z" transform="translate(-0.96 -80)"/></g><g transform="translate(0.04 87.752)"><path class="a" d="M13.1,277.921l-1.769,1.161a.63.63,0,0,1-.688,0L8.872,277.92l-7.848,4.946a1.231,1.231,0,0,0,1.21,1.051h17.5a1.231,1.231,0,0,0,1.21-1.051Z" transform="translate(-1.024 -277.92)"/></g></g></svg>
                        </div>
                        <label for="email">* Email Address</label>
                        <md-input 
                            name="full-name" 
                            class="form-md" 
                            id="full-name" 
                            autocomplete="given-name" 
                            v-model="email"
                        />
                    </md-field>
                    <md-field class="md-cont position-relative">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20"><defs></defs><path class="a" d="M16.125,7.5H15.5V5a5,5,0,0,0-10,0V7.5H4.875A1.877,1.877,0,0,0,3,9.375v8.75A1.877,1.877,0,0,0,4.875,20h11.25A1.877,1.877,0,0,0,18,18.125V9.375A1.877,1.877,0,0,0,16.125,7.5ZM7.167,5a3.333,3.333,0,1,1,6.667,0V7.5H7.167Zm4.167,8.935v1.9a.833.833,0,0,1-1.667,0v-1.9a1.667,1.667,0,1,1,1.667,0Z" transform="translate(-3)"/></svg>
                        </div>
                        <label for="password">* Password</label>
                        <md-input 
                            type="password" 
                            name="password" 
                            class="form-md" 
                            id="password" 
                            autocomplete="off" 
                            v-model="password"
                        />
                    </md-field>
                    <md-field class="md-cont position-relative">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.929" height="22.103" viewBox="0 0 13.929 22.103"><defs></defs><g transform="translate(-71.6)"><g transform="translate(71.6)"><path class="a" d="M84.912.619v0A2.092,2.092,0,0,0,83.43,0H73.7a2.1,2.1,0,0,0-2.1,2.1V20a2.1,2.1,0,0,0,2.1,2.1h9.736a2.1,2.1,0,0,0,2.1-2.1V2.1A2.092,2.092,0,0,0,84.912.619ZM78.564,20.681h0a.566.566,0,1,1,.566-.566A.566.566,0,0,1,78.564,20.681Zm5.3-3.555a1.37,1.37,0,0,1-1.37,1.37H74.632a1.37,1.37,0,0,1-1.37-1.37V3.779a1.37,1.37,0,0,1,1.37-1.37H82.5a1.37,1.37,0,0,1,1.37,1.37Z" transform="translate(-71.6)"/></g></g></svg>
                        </div>
                        <label for="password">* Mobile</label>
                        <md-input 
                            type="number" 
                            name="password" 
                            class="form-md" 
                            id="password" 
                            autocomplete="off" 
                        />
                    </md-field>

                    <div class="sign-up-button-section">
                        <div class="social-media-registration">
                            <div class="social-icons-parent">
                                <div class="social-icon">
                                    <a href="https://facebook.com">
                                        <img src="@/assets/mixed/facebook.png" alt="facebook">
                                    </a>
                                </div>
                                <div class="social-icon">
                                    <a href="https://instagram.com">
                                        <img src="@/assets/mixed/instagram.png" alt="instagram">
                                    </a>
                                </div>
                            </div>
                            <div class="soc-title">or use social media</div>
                        </div>
                        <div class="sign-button-parent">
                            <button>Sign In</button>
                        </div>
                    </div>

                </div>

                
                <div class="checkbox-cont">
                    <div class="d-flex align-items-center">
                        <input type="checkbox" id="check" v-model="accept" class="d-inline check">
                        <label for="check"  class="check-text mb-0">
                            By accepting, I agree to LAX Auto 
                            Repair Terms of Service and acknowledge I’ve read the Privacy Policy.
                            <br> 
                            I also agree that LAX Auto Repair and its Certified Shop may communicate 
                            with me via email, text, or phone.
                        </label>
                    </div>
                </div>
            </div>


        </div>
        <div class="sign-in-right">
            <div class="right-content" v-if="!openRegister">
                <div class="title">Hello, Friend!</div>
                <div class="sub-title">
                    Enter your personal details  <br /> 
                    and get your car back on the road
                </div>
                <button class="white-button" @click="openAnotherForm">Sign Up</button>
                <a href="#" class="dont-have">Don't have an account?</a>
            </div>
            <div class="right-content" v-else>
                <div class="title">Welcome Back !</div>
                <div class="sub-title">
                    To keep connected with us please <br />
                    login with your personal info
                </div>
                <button class="white-button" @click="openAnotherForm">Sign In</button>
                <a href="#" class="dont-have">I have already an account</a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'SignIn',
    data() {
        return {
            fullName: '',
            password: '',
            email: '',
            mobile: '',

            openRegister: false,
        }
    },
    created() {
        console.log(this.$route.path)
    },
    methods: {
        openAnotherForm() {
            this.openRegister = !this.openRegister
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "src/assets/css/style";

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
        width: 155%;
        position: absolute;
        left: -125px;
    }



    .sign-parent {

        display: flex;

        .md-cont label {
            margin-left: 30px;
        }

        &.reversed {
            flex-direction: row-reverse;

            //@debug.sign-in-parent {}
            .sign-in-right {
                flex: 1.5;
                height: 100vh;
                background-image: url(../../assets/mixed/sign-up-background.png);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: -6px -35px;
            }

            .sign-in-parent {
                .sign-in-block {
                    left: -45px;
                }
            }
        }

        .sign-in-parent {
            position: relative;
            flex: 1;
            height: 100vh;

            display: flex;
            justify-content: center;
            align-items: center;
            
            .sign-in-block {
                position: absolute;
                right: -45px;
                width: 450px;

                

                svg .a {
                    fill: #31569C;
                }

                input#full-name, input#password {
                    margin-left: 14px;
                }

                .sign-in-header {
                    margin-bottom: 64px;
                    text-align: center;

                    img {
                        width: 173px;
                        height: 54px;
                        margin-bottom: 32px;
                    }
                    h1 {
                        font-family: MontBold;
                        font-size: 32px
                    }
                }

                .sign-in-body {
                    .forgot-parent {
                        text-align: right;
                        margin: 25px 0 64px;
                        color: #31569C;
                        font-family: PoppinsRegular;
                    }
                }

                .sign-up-button-section {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 50px 0;

                    .social-media-registration,
                    .soc-title {
                        margin: 0 !important;
                    }
                }

                .sign-button-parent {
                    text-align: right;
                    button {
                        width: 200px;
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

                .social-media-registration {
                    margin-top: 100px;

                    .soc-title {
                        font-family: PoppinsRegular;
                        margin-bottom: 32px;
                        font-size: 16px;
                        text-align: center;
                    }
                    .social-icons-parent {
                        display: flex;
                        justify-content: center;
                        gap: 26px;
                        .social-icon {
                            a {
                                opacity: 1;
                                &:hover {
                                    opacity: .9;
                                }
                                img {
                                    width: 32px;
                                    height: 32px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .sign-in-right {
            flex: 1.5;
            height: 100vh;
            background-image: url(../../assets/mixed/sign-in-background.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: -6px -6px;

            display: flex;
            justify-content: center;
            align-items: flex-start;

            .right-content {
                width: 420px;
                text-align: center;
                margin-top: 140px;

                .title {
                    font-family: MontBold;
                    font-size: 47px;
                    color: #fff;
                    margin-bottom: 32px;
                }

                .sub-title {
                    margin-bottom: 64px;
                    color: #fff;
                    font-size: 24px;
                    font-family: PoppinsLight,sans-serif
                }

                .white-button {
                    width: 200px;
                    padding: 13px 25px;
                    background: #fff;
                    font-family: MontBold, sans-serif;
                    color: #31569C;
                    border-radius: 25px 25px;
                    text-decoration: none !important;
                    outline: none;
                    border: none;
                    transition: 0.3s;

                    &:hover {
                        background: #45afdb;
                        color: #fff;
                    }
                }

                .dont-have {
                    margin-top: 10px;
                    display: block;
                    text-align: center;
                    color: #fff;
                    font-family: PoppinsRegular;
                }
            }
        }

    }
</style>