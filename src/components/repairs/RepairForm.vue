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
                        <div class="dropdown-header" ref="year" @click="toggleDropdown('year')" style="z-index: 10">
                            <p class="text-left mb-0">{{ year || "Year" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body">
                                <p class="mb-0 text-left drop-element" :class="{'selected': year == y}" v-for="y in years" :key="y" @click="choose('year', y)">{{ y }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="dropdown-header" ref="make" @click="toggleDropdown('make')" style="z-index: 9">
                            <p class="text-left mb-0">{{ make.name || "Make" }}</p>
                            <img src="@/assets/mixed/arr.svg" class="float-right img-fluid" alt="Arrow">
                            <div class="dropdown-body">
                                <p :class="{ 'selected': (make.id == m.Make_ID) }" v-for="m in make.list" :key="m.Make_ID" class="mb-0 text-left drop-element" @click="choose('make', m.Make_ID, m.Make_Name)">{{ m.Make_Name }}</p>
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
    import Back from "../mixed/Back";
    import axios from "axios";

    export default {
        name: "RepairForm",
        components: {Back, SubmitButton},
        data: () => ({
            year: "",
            years: [],
            make: {
                id: "",
                name: "",
                list: []
            },
            model: "",
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
            async getMakes() {
                let makes = await axios.get(process.env.VUE_APP_API_URL + "get-makes");
                this.make.list = makes.data.data || [];
            }
        },
        created() {
            for (let i = new Date().getFullYear(); i >= 1950; i-- ) this.years.push(i);
            this.getMakes();
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/style.scss";

    .repair-form{
        padding-top: 80px;
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
    }
    @media (min-width: 1200px) {
        .sub{
            transform: translateX(-100%);
        }
    }

</style>
