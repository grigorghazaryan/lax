<template>
    <div class="account">
        <div class="touch" @click="closeDropdown" ref="touch"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Account</h1>
                    <p>Your contact info</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-6">
                            <md-field class="md-cont position-relative">
                                <label for="first-name">* First Name</label>
                                <md-input 
                                    name="first-name" 
                                    class="form-md" 
                                    autocomplete="off"
                                    v-model="firstName"
                                />
                            </md-field>
                        </div>
                        <div class="col-md-6">
                            <md-field class="md-cont position-relative">
                                <label for="last-name">* Last Name</label>
                                <md-input 
                                    name="last-name" 
                                    class="form-md" 
                                    autocomplete="off"
                                    v-model="lastName"
                                />
                            </md-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <md-field class="md-cont position-relative">
                                <label for="email">* Email Address</label>
                                <md-input 
                                    name="email" 
                                    class="form-md" 
                                    autocomplete="off"
                                    v-model="email"
                                />
                            </md-field>
                        </div>
                        <div class="col-md-6">
                            <md-field class="md-cont position-relative">
                                <label for="first-name">* Phone Number</label>
                                <md-input 
                                    name="phone" 
                                    class="form-md" 
                                    autocomplete="off"
                                    v-model="phone"
                                />
                            </md-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="address">
                                Address
                            </h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div 
                                    class="dropdown-header w-100" 
                                    ref="address"
                                    @click="toggleDropdown('address')"
                                    style="z-index: 9"
                                >
                                    <p class="text-left mb-0" >{{ address || "Address" }}</p>
                                    <img 
                                        src="@/assets/mixed/arr.svg" 
                                        class="float-right img-fluid" 
                                        alt="Arrow"
                                    >
                                    <div class="dropdown-body">
                                        <p class="mb-0 text-left drop-element" 
                                            v-for="y in addressArr" :key="y"
                                            :class="{'selected': address == y}" 
                                            @click="choose('address', y)">
                                            {{ y }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <span class="add-address">+ Add an Address</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Account',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            addressArr: [
                '104 N Belmont St Glendale, CA 91206 01',
                '104 N Belmont St Glendale, CA 91206 02',
                '104 N Belmont St Glendale, CA 91206 03'
            ]
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
        choose(ref, value, valueName = null) {
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
    }
}
</script>

<style lang="scss">
@import "src/assets/css/style";

// #main-header {
//     padding-bottom: 40px;
// }

// .nav-item a {
//     color: black !important;
// }

.account {
    margin-bottom: 100px;

    h1 {
        letter-spacing: 0.32px;
        color: #4A4A4A;
        font-size: 32px;
        font-family: MontBold;
        text-align: center;
    }
    p {
        text-align: center;
        letter-spacing: 0.16px;
        color: #4A4A4A;
        font-size: 16px;
        font-family: PoppinsRegular;
        margin-bottom: 60px;
    }

    .md-field {
        .md-input.form-md {
            padding-left: 15px;
        }
    }

    .md-cont label {
        color: #31569C;
    }

    .add-address {
        color: #31569C;
        letter-spacing: 0.16px;
        font-family: MontBold;
        cursor: pointer;
    }

    .address {
        letter-spacing: 0.24px;
        color: #4A4A4A;
        font-family: MontBold;
        font-size: 24px;
        margin: 40px 0 30px;
    }
}



</style>