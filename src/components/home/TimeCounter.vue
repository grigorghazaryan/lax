<template>
    <div class="col-md-5 day-item time-counter-parent"> 
        <div @click="decrement" class="decrement" :class="{ 'disabled' : this.time == 8 && this.minutes == 0 }">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs></defs><rect class="a" width="24" height="24"/><g transform="translate(20.094 7) rotate(90)"><line class="b" x1="10.107" y2="8.343"/><line class="b" x1="10.107" y1="8.343" transform="translate(0 8.751)"/></g></svg>                                                    
        </div> 
        <span>
            {{ time }}:{{ minutes }}0 AM 
        </span>
        <div @click="increment" class="increment" :class="{ 'disabled' : this.time == 20 && this.minutes == 0 }">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs></defs><rect class="a" width="24" height="24"/><g transform="translate(20.094 7) rotate(90)"><line class="b" x1="10.107" y2="8.343"/><line class="b" x1="10.107" y1="8.343" transform="translate(0 8.751)"/></g></svg>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'TimeCounter',
    data() {
        return {
            time: 8,
            minutes: 0
        }
    },
    methods: {
        increment() {

            if(this.minutes == 0) {
                this.minutes = 3
            } else {
                this.time++
                this.minutes = 0
            }

        },
        decrement() {
            if(this.minutes == 0) {
                this.time--
                this.minutes = 3
            } else {
                 this.minutes = 0
            }
        }
    }
}
</script>


<style lang="scss" scoped>

    .time-counter-parent {

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 35px;

        div {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #31569C;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            svg {

                rect.a, line.b { 
                    fill:none; 
                }

                line.b { 
                    stroke:#fff;
                    stroke-linecap: round;
                    stroke-width: 3px;
                }
            }

            &.disabled {
                background: #A2A2A2;
                pointer-events: none;
            }
        }

        .decrement {
                svg {
                    transform: rotate(270deg);
                }
            }

        .increment {
            svg {
                transform: rotate(90deg);
            }
        }
    }

</style>