<template>
    
<div class="email-wrapper">
    <div class="email-parent">
        <div class="icon-parent">
            <div class="icon-box">
            </div>
        </div>
        <div class="title">
            <h1>Successful</h1>
        </div>
        <div class="subtitle">
            <p> Your password has been reset successfully.</p>
        </div>
        <div class="button-parent">
            <button  @click="closePopup">Ok</button>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'SuccessPopup',
    methods: {
        closePopup() {
            this.$emit('successMessageFromChild')
        }
    }
}
</script>


<style lang="scss" scoped>
    .email-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 90px;

        background: #4A4A4A80;
        z-index: 999999999;

        .email-parent {
            max-width: 1200px;
            width: 90%;
            height: 699px;
            background: #fff;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 5px;
          
            padding: 138px;
            text-align: center;

            background-image: url(../../assets/mixed/success-popup-background.png);
            background-repeat: no-repeat;
            background-size: inherit;
            background-position: center;
        }

        .icon-parent {
            width: 100%;
            margin-bottom: 51px;

            .icon-box {
                width: 130px;
                height: 130px;
                background: #31569C;
                border-radius: 50%;
                margin: 0 auto;

                svg {
                    width: 60px;
                    height: 60px;
                }
            }
        }

        .title {
            margin-bottom: 21px;

            h1 {
                color: #31569C;
                font-size: 40px;
                font-family: MontBold,sans-serif;
            }
        }

        .subtitle {
            p {
                font-size: 18px;
                color: #31569C;
                margin: 0;
            }
        }

        .button-parent {
            margin-top: 65px;

            button {
                width: 173px;
                height: 54px;
                padding: 10px 35px;
                background: #31569c;
                font-family: MontBold,sans-serif;
                color: #fff!important;
                border-radius: 35px;
                text-decoration: none!important;
                border: none;
                transition: .3s;
                outline: none;

                &:hover {
                    background: #45afdb!important;
                }
            }
        }

                @media screen and (max-width: 768px) and (min-width: 300px) {  

            padding: 10px;

           .email-parent {
               width: 95%;
               padding: 30px;
               height: auto;

               .icon-parent {
                   img {
                        width: 200px;
                        height: auto;
                   }
               }

               
                .title {
                    h1 {
                        font-size: 30px;
                    }
                }



               .button-parent {
                   margin-top: 20px;
               }
           }
        }
    }
</style>