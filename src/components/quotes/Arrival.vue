<template>
    <div class="arrival">
        <div class="container">
            <div class="row">
                <div class="col-12 position-relative">
                    <Back/>
                    <h2 class="title text-center">Select Your Arrival Windows</h2>
                    <p class="title-text text-center mb-5">
                      When would you like us to arrive? <br> 
                      We'll confirm the exact day and time and you can always reschedule later.
                    </p>

                    <CallAppointment />

                </div>
            </div>
        </div>
        <div class="blue-background mt-50">
            <div class="container">
                <div class="row counter-wrapper">
                    <div class="col-md-9">
                        <div class="row counter-parent">
                            <div class="col-md-2">
                                <div class="counter-vertical-parent">
                                    <div class="top" @click="decrementDays">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs></defs><rect class="a" width="24" height="24"/><g transform="translate(20.094 7) rotate(90)"><line class="b" x1="10.107" y2="8.343"/><line class="b" x1="10.107" y1="8.343" transform="translate(0 8.751)"/></g></svg>                                                    
                                    </div>
                                    <div class="bottom" @click="incrementDays">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs></defs><rect class="a" width="24" height="24"/><g transform="translate(20.094 7) rotate(90)"><line class="b" x1="10.107" y2="8.343"/><line class="b" x1="10.107" y1="8.343" transform="translate(0 8.751)"/></g></svg>                                                    
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="days-parent">
                                    <div class="day-row" v-for="(day, i) in days" :key="i">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-4 day-item">{{ day.when }}</div>
                                                <div class="col-md-3 day-item">{{ day.date }}</div>
                                                <TimeCounter />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter-wrapper__right">
                            <div class="today">Today</div>
                            <div class="today-date">
                                <div class="today-date__number">
                                    29 Jun
                                </div>
                                <div class="today-date__week-day">
                                    Sunday
                                </div>
                            </div>
                            <Button  title="Next" img="forward.png" url="/get-quote/" :disabled='true' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row delivery-box-wrapper">
                    <div class="col-md-6">
                        <label  @click="yourDelivery = !yourDelivery" class="deliver-box" v-if="yourDelivery">
                            <div class="deliver-box__title">Deliver to your driveway</div>
                            <div class="deliver-box__subtitle">Simple and convenient featuring 'No- Contact Car Repair</div>
                            <div class="on-hover">
                                <svg xmlns="http://www.w3.org/2000/svg" width="393.001" height="223.023" viewBox="0 0 393.001 223.023"><defs></defs><g transform="translate(-114.997 -601)"><g transform="translate(114.997 588)"><path class="a" d="M0,223.023V20.475H57.512C50.8,11.824,39.734,3.547,21.5.262,55.555-1.963,76.272,10.42,87.284,20.475H393V223.023Z" transform="translate(393.001 236.023) rotate(180)"/></g><g transform="translate(161.999 618.744)"><g transform="translate(0 14)"><text class="b" transform="translate(36 17.217)"><tspan x="0" y="0">Activate only for </tspan><tspan class="c" y="0">5 mile radius</tspan><tspan x="0" y="25">from our body shop address.</tspan></text><g class="d" transform="translate(0 14.217)"><path class="e" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm.65,15.933c-.475.079-1.42.277-1.9.317a1.17,1.17,0,0,1-1.024-.533,1.25,1.25,0,0,1-.151-1.144l1.89-5.2H7.5A2.349,2.349,0,0,1,9.35,7.19a7.236,7.236,0,0,1,1.9-.315,1.507,1.507,0,0,1,1.024.533,1.25,1.25,0,0,1,.151,1.144l-1.89,5.2H12.5a2.213,2.213,0,0,1-1.849,2.183Zm.6-9.683A1.25,1.25,0,1,1,12.5,5a1.25,1.25,0,0,1-1.25,1.25Z"/></g></g><g transform="translate(2 78)"><text class="b" transform="translate(36 17.217)"><tspan x="0" y="0">For delivery to address we need </tspan><tspan x="0" y="25">to have a </tspan><tspan class="c" y="25">minimum $75 for </tspan><tspan class="c"><tspan x="0" y="50">Contact-less service.</tspan></tspan></text><g class="d" transform="translate(0 27.217)"><path class="e" d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm.65,15.933c-.475.079-1.42.277-1.9.317a1.17,1.17,0,0,1-1.024-.533,1.25,1.25,0,0,1-.151-1.144l1.89-5.2H7.5A2.349,2.349,0,0,1,9.35,7.19a7.236,7.236,0,0,1,1.9-.315,1.507,1.507,0,0,1,1.024.533,1.25,1.25,0,0,1,.151,1.144l-1.89,5.2H12.5a2.213,2.213,0,0,1-1.849,2.183Zm.6-9.683A1.25,1.25,0,1,1,12.5,5a1.25,1.25,0,0,1-1.25,1.25Z"/></g></g></g></g></svg>
                            </div>
                        </label>
                        <label @click="yourDelivery = !yourDelivery" class="deliver-box" v-else>
                            <div class="deliver-box__title">Drop off at our shop</div>
                            <div class="deliver-box__subtitle">We'll route you to our nearest shop</div>
                        </label>
                    </div>
                    <div class="col-md-6">
                        <div v-if="!yourDelivery" class="text-right direction-mile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9.936" height="14.903" viewBox="0 0 9.936 14.903"><defs></defs><g transform="translate(-85.333)"><g transform="translate(85.333)"><path class="a" d="M90.3,0a4.968,4.968,0,0,0-4.371,7.329l4.1,7.415a.311.311,0,0,0,.543,0l4.1-7.417A4.969,4.969,0,0,0,90.3,0Zm0,7.452a2.484,2.484,0,1,1,2.484-2.484A2.487,2.487,0,0,1,90.3,7.452Z" transform="translate(-85.333)"/></g></g></svg>
                            14.6 miles away
                        </div>
                    </div>
                </div>
        </div>

    </div>
</template>

<script>
import Back from "../mixed/Back";
import Button from "../mixed/CircleButton";
import TimeCounter from "../home/TimeCounter";
import CallAppointment from "../home/CallAppointment";

export default {
    name: 'Arrival',
    components: {Back, Button, TimeCounter, CallAppointment},
    data() {
        return {
            days: [
                { when: 'Tommorrow', date: '30 Jun' },
                { when: 'Tuseday', date: '1 Jul' },
                { when: 'Wednesday', date: '2 Jul' },
                { when: 'Thursday', date: '3 Jul' },
                { when: 'Friday', date: '4 Jul' },
            ],
            yourDelivery: true,
        }
    },
    methods: {
        decrementDays() {    
            let number = Math.floor(Math.random() * 31)
            this.days.unshift({ when: 'Im new here :) ' + number, date:  number + ' Jul' })
            this.days.pop()
        },
        incrementDays() {
            let number = Math.floor(Math.random() * 31)
            this.days.push({ when: 'Im new here ' + number, date: number + ' Jul' })
            this.days.shift()
        }
    }
}
</script>

<style lang="scss" scoped>

    a.circled-button.router-link-active {
        width: 170px;
        text-align: center;
    }

    .arrival {
        padding: 85px 0 0;

        @media (max-width: 768px) { 
            .title {
                margin-top: 25px;
            }
            .counter-parent {
                height: auto;

                .counter-vertical-parent {
                    flex-direction: row;
                    padding: 20px 0;
                }

                .days-parent {
                    .day-row { 
                        padding: 15px 0;
                        .day-item {
                            text-align: center;

                            &:nth-child(1) {
                                padding-left: 15px;
                            }
                            &:nth-child(2) {
                               margin-bottom: 5px;
                            }
                        }        
                    }
                }
            }
            .counter-wrapper {
                width: auto;
            }
        }
    }

    .counter-wrapper {
        width: 100%;
        background-color: #D8E4FB;
    }

    .mt-50 {
        margin-top: 50px;
    }
    .blue-background {
        padding: 60px  0;
        background: #E9F0FE;
    }

    .counter-parent {
        height: 300px;

        .col-md-10 {
             @media (min-width: 767px) { 
                padding-left: 0;
            }
        }

        .counter-vertical-parent {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 80px;

            div {
                width: 25px;
                height: 25px;
                margin: 0 auto;
                cursor: pointer;
                transition: .3s;

                svg {

                    rect.a, line.b { 
                        fill:none; 
                    }

                    line.b { 
                        stroke: #31569C;
                        stroke-linecap: round;
                        stroke-width: 3px;
                    }
                }
            }

            .bottom {
                svg {
                    transform: rotate(180deg);
                }
            }

            .top {
                &:hover {
                    transform: scale(1.5);
                }
            }

            .bottom {
                &:hover {
                    transform: scale(1.5);
                }
            }

        }

        .days-parent {
            height: 100%;
            border-radius: 15px;
            overflow: hidden;

            .day-row:nth-child(even) {
                background: #E9F0FE;
            }
            .day-row:nth-child(odd) {
                background: #fff;
            }

            .day-row {
                height: calc(100% / 5);
                display: flex;
                align-items: center;

                .day-item {
                    &:nth-child(1) {
                        color: #31569C;
                        font-family: PoppinsRegular, sans-serif;
                        font-size: 16px;
                        padding-left: 25px;
                    }
                    &:nth-child(2),
                    &:nth-child(3) {
                        color: #4A4A4A;
                        font-family: PoppinsRegular, sans-serif;
                        font-size: 18px;
                    }
                }
            }
        }
    }

    .counter-wrapper__right {
        height: 100%;
        padding: 32px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
       

        .today {
            color: #4A4A4A;
            font-size: 16px;
            font-family: PoppinsRegular, sans-serif;
        }

        .today-date {
            .today-date__number {
                color: #31569C;
                font-size: 52px;
                font-family: MontBold, sans-serif;
                line-height: 1.15;
                box-shadow: 0 26px 0 -23px #45afdb;
            }
            .today-date__week-day {
                color: #31569C;
                font-family: PoppinsRegular, sans-serif;
                font-size: 20px;
                text-align: center;
                margin-top: 5px;
            }
        }
    }


    // Deliver box

    .delivery-box-wrapper {
        margin: 100px 0 100px;
    }

    .deliver-box {
        position: relative;
        background: #fff;
        padding: 25px 22px;
        width: auto;
        box-shadow: 0px 2px 10px #221F1F26;
        color: #4A4A4A;
        font-size: 16px;
        border: 2px solid transparent;
        transition: .3s;
        cursor: pointer;

        input { display: none }

        &.disabled {
            color: #A2A2A2;
            pointer-events: none;
        }

        &.active {
            border-color: #45afdb;
        }

        &:hover {
            border-color: #45afdb;

            .on-hover {
                visibility: visible;
                opacity: 1;
            }
        }

        .deliver-box__title {
            font-family: PoppinsSemiBold, sans-serif;
        }
        .deliver-box__subtitle {
            font-family: PoppinsRegular, sans-serif;
        }

        .on-hover {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            bottom: 108%;
            right: 65%;
            transition: .3s;

            svg {
                .a{fill:#31569c;}
                .b,.e{fill:#fff;}
                .b{
                    font-size:16px;
                    font-weight:300;
                    letter-spacing:0.01em;
                }
                .c{
                    font-family: PoppinsRegular, sans-serif;
                }
                .d{opacity:0.5;}
            }

            @media (max-width: 768px) { 
                right: -35px;
            }
        }
    }

    .direction-mile {
        font-family: PoppinsRegular, sans-serif;
        font-size: 16px;
        color: #31569C;
        padding-top: 25px;

        svg {
            margin-right: 5px;

            .a {
                fill: #31569c;
            }
        }
    }

</style>