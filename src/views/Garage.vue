<template>
    <div class="garage">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Appointments</h1>
                </div>
            </div>
            <div class="row">
                <GarageItem  v-for="(i, index) in 3" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
import GarageItem from "../components/garageItem/GarageItem";

export default {
    name: 'Garage',
    components: {GarageItem},
        data() {
        return {
            showModal: false,
        }
    },
    
}
</script>

<style lang="scss" scoped>

#main-header {
    box-shadow: 0px 2px 10px #221F1F26;
    padding-bottom: 40px;
}

.nav-item a {
    color: black !important;
}
.garage {
    h1 {
        letter-spacing: 0.32px;
        color: #4A4A4A;
        font-family: MontBold;
        font-size: 32px;
        margin: 30px 0 90px;
        text-align: center;
    }
}

</style>