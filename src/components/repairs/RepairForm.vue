<template>
    <div class="repair-form">
        <div class="touch" @click="closeDropdown" ref="touch"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 position-relative">
                    <Back/>
                    <h2 class="title text-center">What Do You Drive</h2>
                    <p class="title-text text-center">Alternatively, <span>Enter the License Plate</span></p>
                </div>
                <div class="col-12">

                    <div class="form-group">
                        <div class="dropdown-header" ref="year" 
                        @click="toggleDropdown('year')" style="z-index: 11">
                            <p class="text-left mb-0" >{{ year || "Year" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body">
                                <p class="mb-0 text-left drop-element" 
                                :class="{'selected': year == y}" v-for="y in years" :key="y"
                                @click="choose('year', y)">{{ y }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="dropdown-header" :class="{'disabled': !year}" ref="make" 
                        @click="toggleDropdown('make')" style="z-index: 10">
                            <p class="text-left mb-0">{{ make.name || "Make" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body">
                                <p :class="{ 'selected': (make.id == m.Make_ID) }" 
                                    v-for="m in make.list" :key="m.Make_ID"
                                    class="mb-0 text-left drop-element" 
                                    @click="choose('make', m.Make_ID, m.Make_Name)">{{ m.Make_Name }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="dropdown-header" :class="{'disabled': !make.id}" ref="model" @click="toggleDropdown('model')" style="z-index: 8">
                            <p class="text-left mb-0">{{ model.name || "Model" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body" >
                                <p v-for="model in model.list" 
                                :key="model.Model_ID" 
                                class="mb-0 text-left drop-element" 
                                @click="choose('model', model.Model_ID, model.Model_Name)">
                                    {{ model.Model_Name }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="dropdown-header" 
                            :disabled="!model.id" 
                            :class="{'disabled': !model.id}" 
                            ref="engine"
                            @click="toggleDropdown('engine')" style="z-index: 7"
                        >
                            <p class="text-left mb-0">{{ engine || "Engine" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body" >
                                <p v-for="i in 10" :key="i" class="mb-0 text-left drop-element"
                                 @click="choose('engine', 'Engine '+ i +' ')">{{ "Engine" + i }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <input 
                            type="number" 
                            :disabled="!engine"
                            placeholder="Estimated Mileage" 
                            step="any" 
                            class="form-control" 
                            :class="{'disabled': !engine}" 
                            v-model="mileage"
                        >
                    </div>

                    <div class="form-group text-right">
                        <CircleButton 
                            class="sub" 
                            url="/get-quote" 
                            :class="{disabled}" 
                            title="Select Repairs"
                        />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Back from "../mixed/Back";
    //import axios from "axios";
    import CircleButton from "../mixed/CircleButton";

    export default {
        name: "RepairForm",
        components: { CircleButton, Back },
        data: () => ({
            year: "",
            years: [],
            make: {
                id: "",
                name: "",
                list: [
                    {Make_ID: "440", Make_Name: "Aston Martin"},
                    {Make_ID: "442", Make_Name: "Jaguar"},
                    {Make_ID: "444", Make_Name: "Land Rover"},
                    {Make_ID: "443", Make_Name: "Maserati"},
                    {Make_ID: "441", Make_Name: "Tesla"},
                ]
            },
            model: {
                id: "",
                name: "",
                list: [
                    {
                        Model_ID: "9888",
                        Model_Name: "Model S"
                    },
                    {
                        Model_ID: "1685",
                        Model_Name: "Model SS"
                    },
                    {
                        Model_ID: "1677",
                        Model_Name: "Model XS"
                    },
                ]
            },
            engine: "",
            mileage: undefined,
            disabled: true,
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
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
            choose(ref, value, valueName = null){

                //if(ref == "make") this.getModels(value);
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
            //async getMakes() {
                //let makes = await axios.get(process.env.VUE_APP_API_URL + "get-makes");
               // this.make.list = makes.data.data || [];
           // },
            //async getModels(value) {
            //    let models = await axios.get(process.env.VUE_APP_API_URL + "get-models/" + value);
            //    this.model.list = models.data.data || [];
            //    console.log(models)
            //}
        },
        watch: {
            mileage(val) {
                if(val) {
                    this.disabled = false
                }else {
                    this.disabled = true
                }
            }
        },
        created() {
            for (let i = new Date().getFullYear(); i >= 1950; i-- ) this.years.push(i);
            //this.getMakes();
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/style.scss";

    .disabled {
        background: #f0f0f0;
        border-color: #b9b9b9;
        pointer-events: none;

        p {
            color: #b9b9b9;
        }

        &::placeholder {
           color: #b9b9b9 !important;
        }
    }

    .repair-form{
        padding-top: 80px;

        .form-control {
            font-size: 16px;
        }
    }
    .title{
        font-size: 32px;
        color: #4A4A4A;
        font-family: MontSemiBold, sans-serif;
    }

    .title-text{
        color: #4A4A4A;
        font-family: PoppinsRegular, sans-serif;
    }
    .title-text span{
        color: #31569C;
    }
    .sub{
        font-size: 16px;
        padding: 10px 15px;
        display: inline-block;
    }
    @media (min-width: 1200px) {
        .sub{
            transform: translateX(-100%);
        }
    }

</style>
