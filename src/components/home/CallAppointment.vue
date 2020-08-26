<template>
    <div v-click-outside="hide" @click.stop="showPopup = !showPopup" class="call-appointment">
        
        <div v-if="!button" class="call-appointment__header">Call For Appointment</div>
        <div v-if="!button" class="call-appointment__phone-parent">
            <svg xmlns="http://www.w3.org/2000/svg" width="20.18" height="20.222" viewBox="0 0 20.18 20.222"><defs></defs><g transform="translate(-0.539 0)"><g transform="translate(0.539 0)"><path class="a" d="M20.19,14.841l-2.822-2.822a1.877,1.877,0,0,0-3.124.706,1.921,1.921,0,0,1-2.217,1.209A8.7,8.7,0,0,1,6.785,8.693,1.827,1.827,0,0,1,7.994,6.476,1.877,1.877,0,0,0,8.7,3.351L5.878.529a2.013,2.013,0,0,0-2.721,0L1.242,2.444C-.673,4.46,1.443,9.8,6.18,14.539s10.079,6.954,12.095,4.939l1.915-1.915A2.013,2.013,0,0,0,20.19,14.841Z" transform="translate(-0.539 0)"/></g></g></svg>
            <div>(310) 523 - 1063</div>
        </div>

        <button v-if="button" class="need-help-button">Need Help</button>

        <div v-if="showPopup" @click.stop class="appointment-popup-wrapper">
            <img src="../../assets/mixed/appointment-image.png" alt="appointment image">

            <div class="app-title">Make a call from</div>
            <div class="app-text-parent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs></defs><g transform="translate(-195 -428)"><rect class="a" width="24" height="24" transform="translate(195 428)"/><g transform="translate(137 431)"><g transform="translate(69.38 13.843)"><g transform="translate(0 0)"><ellipse class="b" cy="1" ry="1" transform="translate(0.486 0.15)"/></g></g><g transform="translate(66.346 5.474)"><path class="b" d="M114.229,113.677l-1.564-1.564a.391.391,0,0,0-.553.553l1.287,1.287-1.287,1.287a.391.391,0,1,0,.553.553l1.564-1.564A.391.391,0,0,0,114.229,113.677Z" transform="translate(-111.998 -111.998)"/></g><g transform="translate(69.474 8.601)"><path class="b" d="M179.519,176h-3.128a.391.391,0,0,0,0,.782h3.128a.391.391,0,0,0,0-.782Z" transform="translate(-176 -176)"/></g><g transform="translate(70.256 6.256)"><g transform="translate(0)"><path class="b" d="M194.737,128h-2.346a.391.391,0,0,0,0,.782h2.346a.391.391,0,0,0,0-.782Z" transform="translate(-192 -128)"/></g></g><g transform="translate(66.346 10.947)"><g transform="translate(0)"><path class="b" d="M118.647,224h-6.256a.391.391,0,1,0,0,.782h6.256a.391.391,0,1,0,0-.782Z" transform="translate(-112 -224)"/></g></g><g transform="translate(64)"><g transform="translate(0)"><path class="b" d="M73.773,0H65.954A1.955,1.955,0,0,0,64,1.955v.781h0V16.03a1.957,1.957,0,0,0,1.955,1.955h7.819a1.957,1.957,0,0,0,1.955-1.955V1.955A1.957,1.957,0,0,0,73.773,0ZM64.782,1.955A1.173,1.173,0,0,1,65.954.782h3.91c2.6,0,3.541,0,3.91-.03v.03a1.174,1.174,0,0,1,1.173,1.173v.391H64.782ZM74.947,16.03A1.174,1.174,0,0,1,73.774,17.2H65.955a1.174,1.174,0,0,1-1.173-1.173V3.128H74.947Z" transform="translate(-64)"/></g></g></g></g></svg>
                <div class="app-subtitle">Pick an app</div>
            </div>

            <div class="app-footer">
                To send a number from here to your Android phone, <br>
                <span>turn on sync</span> for both devices in settings.
            </div>
        </div>

    </div>
</template>


<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'CallAppointment',
    props: ['button'],
    data() {
        return {
            showPopup: false,
        }
    },
    methods: {
        hide () {
            this.showPopup = false
        }
    },
    directives: {
        ClickOutside
    }
}
</script>

<style lang="scss" scoped>

// Call appointment
.call-appointment {
    position: relative;
    color: #31569C;
    width: 180px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: .3s;

    &__header {
        font-family: PoppinsSemiBold, sans-serif;
    }

    &__phone-parent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: PoppinsRegular, sans-serif;
    }

    svg {
        .a{ 
            transition: .3s;
            fill:#31569c; 
        }
    }

    &:hover {
        color: #42A6D4;

        svg {
            .a {
                fill: #42A6D4
            }
        }
    }

    @media (max-width: 768px) { 
        top: -35%;
        right: 5%;
    }

}

.appointment-popup-wrapper {

    position: absolute;
    width: 434px;
    height: 373px;
    box-shadow: 0px 0px 6px #00000029;
    top: -230%;
    left: -64%;
    background: #fff;
    z-index: 999999999;
    text-align: center;
    cursor: initial;

    img {
        margin-top: 50px;
        margin-bottom: 28px;
    }

    .app-title {
        color: #4A4A4A;
        font-size: 24px;
        font-family: PoppinsRegular, sans-serif;
        margin-bottom: 12px;
    }

    .app-text-parent {
        display: flex;
        justify-content: center;

        svg {
            margin-right: 8px;

            .a {
                fill:none;
            }
            .b { 
                fill:#4a4a4a;
            }
        }

        .app-subtitle {
            font-size: 16px;
            color: #31569C;
            font-family: PoppinsRegular, sans-serif;
            margin-bottom: 40px;
        }
    }

    .app-footer {
        background: #31569C;
        color: #fff;
        font-family: PoppinsRegular, sans-serif;
        padding: 18px 28px;
        font-size: 14px;

        span {
            color: #45AFDB;
            text-decoration: underline;
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        width: 100%;
        height: 59%;
        top: 13%;
        left: 0;
    }
}

.need-help-button {
    width: 173px;
    height: 54px;
    background: #31569C;
    color: #fff;
    border-radius: 50px;
    border: 1px solid transparent;
    box-sizing: border-box;
    font-family: MontBold, sans-serif;
    transition: .3s;

    &:hover {
        background: #45AFDB;
    }

    &:focus {
        outline: none;
    }
}


</style>