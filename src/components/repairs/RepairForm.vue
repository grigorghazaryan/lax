<template>
    <div class="repair-form">
        <div class="touch" @click="closeDropdown" ref="touch"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 position-relative">
                    <span class="back" @click="$router.go(-1)"><img src="@/assets/mixed/back.png" class="img-fluid" alt="Back Arrow">Back</span>
                    <h2 class="title text-center">What Do You Drive</h2>
                    <p class="title-text text-center">Alternatively, <span>Enter the License Plate</span></p>
                </div>
                <div class="col-12">

                    <div class="form-group">
                        <div class="dropdown-header" ref="year" @click="toggleDropdown('year')" style="z-index: 10">
                            <p class="text-left mb-0">{{ year || "Year" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body" >
                                <p class="mb-0 text-left drop-element" @click="choose('year', 2020)">2020</p>
                                <p class="mb-0 text-left drop-element" @click="choose('year', 2019)">2019</p>
                                <p class="mb-0 text-left drop-element" @click="choose('year', 2018)">2018</p>
                                <p class="mb-0 text-left drop-element" @click="choose('year', 2017)">2017</p>
                                <p class="mb-0 text-left drop-element" @click="choose('year', 2016)">2016</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="dropdown-header" ref="make" @click="toggleDropdown('make')" style="z-index: 9">
                            <p class="text-left mb-0">{{ make || "Make" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body">
                                <p :class="{ 'selected': (make == 'Make'+ i +' ') }" v-for="i in 10" :key="i" class="mb-0 text-left drop-element" @click="choose('make', 'Make'+ i +' ')">{{ "Make" + i }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="dropdown-header" ref="model" @click="toggleDropdown('model')" style="z-index: 8">
                            <p class="text-left mb-0">{{ model || "Model" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body" >
                                <p v-for="i in 10" :key="i" class="mb-0 text-left drop-element" @click="choose('model', 'Model '+ i +' ')">{{ "Model" + i }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="dropdown-header" ref="engine" @click="toggleDropdown('engine')" style="z-index: 7">
                            <p class="text-left mb-0">{{ engine || "Engine" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body" >
                                <p v-for="i in 10" :key="i" class="mb-0 text-left drop-element" @click="choose('engine', 'Engine '+ i +' ')">{{ "Engine" + i }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <input type="number" placeholder="Estimated Mileage" step="any" class="form-control" v-model="mileage">
                    </div>

                    <div class="form-group text-right">
                        <SubmitButton class="sub" :class="{disabled}" title="Select Repairs"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SubmitButton from "../mixed/SubmitButton";
    export default {
        name: "RepairForm",
        components: {SubmitButton},
        data: () => ({
            year: "",
            make: "",
            model: "",
            engine: "",
            mileage: undefined,
            disabled: true
        }),
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
            choose(ref, value){
                this[ref] = value;
            },
            closeDropdown() {
                let elems = document.getElementsByClassName("show");
                [].forEach.call(elems, function (element) {
                    element.className = element.className.replace(/\bshow\b/g, "");
                })
            }

        },
    }
</script>

<style scoped>
    .repair-form{
        padding-top: 80px;
    }
    .disabled{
        background: #A2A2A2!important;
        cursor: not-allowed;
    }
    .dropdown-header>img{
        transition: .3s;
    }
    .show>img{
        transform: rotate(180deg);
    }
    .title{
        font-size: 32px;
        color: #4A4A4A;
        font-family: MontSemiBold, sans-serif;
    }
    .selected{
        background: #45afdb!important;
        color: white!important;
    }
    .touch{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: none;
    }
    .block{
        display: block;
    }
    .dropdown-header, .form-control{
        border: none;
        border-bottom: 3px solid #d8e4fb;
        color: #31569C!important;
        font-family: PoppinsLight, sans-serif;
        padding: 10px 0 10px 15px;
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: 0;
        font-size: 0.875rem;
    }
    .form-control::placeholder{
        color: #31569C!important;
    }
    .form-control:active, .form-control:focus{
        box-shadow: none;
    }
    .dropdown-header img{
        height: 9px;
    }
    .title-text{
        color: #4A4A4A;
        font-family: PoppinsRegular, sans-serif;
    }
    .title-text span{
        color: #31569C;
    }
    .show{
        border-bottom: 3px solid #31569b;
    }
    .show .dropdown-body{
        height: 340px!important;
        max-height: 340px!important;
        overflow-y: auto!important;
    }
    .dropdown-body{
        position: absolute;
        width: 100%;
        top: 44px;
        left: 0;
        height: 0;
        overflow: hidden;
        transition: .3s;
        z-index: 10000;
    }
    .dropdown-body p{
        padding: 12px;
        border-bottom: 1px solid #A2A2A2;
        color: #A2A2A2;
        background: #E9F0FE;
        width: 100%;
    }
    .dropdown-body p:hover{
        background: #45afdb;
        color: white;
    }
    .back{
        position: absolute;
        color: #4A4A4A;
        font-family: PoppinsRegular, sans-serif;
        cursor: pointer;
    }
    .sub{
        font-size: 16px;
        padding: 10px 15px;
    }
    @media (min-width: 1200px) {
        .dropdown-header, .form-control{
            width: 800px;
        }
        .sub{
            transform: translateX(-100%);
        }
        .form-group{
            text-align: center;
            margin-bottom: 40px;
        }
    }
    @media (max-width: 768px) {
        .dropdown-header{
            width: 100%;
        }
        .dropdown-body{
            top: 40px;
        }
    }
    @media (max-width: 480px) {
        .show .dropdown-body{
            height: 200px!important;
            max-height: 340px!important;
            overflow-y: auto!important;
        }
    }
</style>
