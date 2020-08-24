<template>
    <div class="schedule-appointment">
        <div class="touch" @click="closeDropdown" ref="touch"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 position-relative">
                    <Back/>
                    <h2 class="title text-center">What Is Your Zip Code?</h2>
                    <p class="title-text text-center mb-5">
                       Repair options may change based on location. <br>
                       We'll find the best ones for you.
                    </p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <div class="zip-code-input-parent">
                        <md-field class="md-cont position-relative">
                            <label>Zip Code</label>
                            <md-input 
                                name="zip" 
                                class="form-md" 
                                id="zip" 
                                autocomplete="off"
                                v-model="zip"
                            />
                        </md-field>
                    </div>
                </div>
            </div>
        </div>
        <div class="blue-background pb-65">
            <div class="container">
                <div class="row">
                    <div class="col-12 position-relative">
                        <h2 class="title text-center  mt-65">What Is Your Address?</h2>
                        <p class="title-text text-center mb-5">
                            Let's find the best repair options near you.
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="form-group">
                            <div class="dropdown-header" ref="address" 
                                @click="toggleDropdown('address')" style="z-index: 1">

                                <p class="text-left mb-0" >{{ address || "Address" }}</p>

                                <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                                
                                <div class="dropdown-body">
                                    <p class="mb-0 text-left drop-element" 
                                        :class="{'selected': address == i }" 
                                        v-for="i in addressArr" :key="i"
                                        @click="choose('address', i)">
                                        {{ i }}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row delivery-box-wrapper">
                    <div class="col-md-6">
                        <label
                            class="deliver-box" 
                            :class="{ 'disabled' : !address, 'active' : radio == 1 }"
                            @click="selectBox"
                        >
                            <div class="deliver-box__title">Deliver to your driveway</div>
                            <div class="deliver-box__subtitle">Simple and convenient featuring 'No- Contact Car Repair</div>
                            <input type="radio" name="address" value="1" v-model="radio">
                        </label>
                    </div>
                    <div class="col-md-6">
                        <label 
                            class="deliver-box" 
                            :class="{ 'disabled' : !address, 'active' : radio == 0 }"
                            @click="selectBox"
                        >
                            <div class="deliver-box__title">Drop off at our shop</div>
                            <div class="deliver-box__subtitle">We'll route you to our nearest shop</div>
                            <input type="radio" name="address" value="0" v-model="radio">
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed-button-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <Button title="Continue" url="/#####"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Back from "../mixed/Back";
import Button from "../mixed/CircleButton";

export default {
    name: 'ScheduleAppointment',
    components: { Back, Button },
    data() {
        return {
            zip: '',
            address: '',
            addressArr: [
                '104 N Belmont St, Glendale, CA 91206, USA 01',
                '104 N Belmont St, Glendale, CA 91206, USA 02',
                '104 N Belmont St, Glendale, CA 91206, USA 03',
            ],
            radio: null,
        }
    },
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
            choose(ref, value, valueName = null){
                if(typeof this[ref] == "object") {
                    this[ref].id = value;
                    this[ref].name = valueName;
                } else {
                    this[ref] = value;
                }
            },
            closeDropdown() {
                let elems = document.getElementsByClassName("show");
                [].forEach.call(elems, function (element) {
                    element.className = element.className.replace(/\bshow\b/g, "");
                });
                this.$refs.touch.classList.remove("block");
            },
            selectBox() {
                this.selected = !this.selected
            }
    },
    watch: {
        yourDel() {
            console.log(this.yourDel)
        }
    }
}
</script>


<style lang="scss" scoped>
@import "src/assets/css/style";

.schedule-appointment {
    padding: 85px 0 0;
}

.blue-background {
    margin-top: 35px;
}

.mt-65 {
    margin-top: 65px;
}

.pb-65 {
    padding-bottom: 65px;
}

.dropdown-header, .form-control {
    border-bottom: 3px solid #31569c;
}

@media (min-width: 1200px) {
    .dropdown-header, .form-control {
        width: 100%;
    }
}

.delivery-box-wrapper {
    margin-top: 50px;
}

.deliver-box {
    background: #fff;
    padding: 25px 22px;
    width: 100%;
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
    }

    .deliver-box__title {
        font-family: PoppinsSemiBold, sans-serif;
    }
    .deliver-box__subtitle {
        font-family: PoppinsRegular, sans-serif;
    }
}

.fixed-button-wrapper {
    width: 100%;
    padding: 3.2rem 0;
    position: sticky;
    bottom: 0;
    background: #fff;
    text-align: right;
    z-index: 9
}

@media (max-width: 767px) {
    .fixed-button-wrapper {
        text-align: center;
    }
    .title {
        margin-top: 20px;
    }
}

</style>