<template>
    <div id="main-header">
        <MainHeader v-if="(header === 1)"/>
        <RepairHeader v-if="(header === 2)"/>
    </div>
</template>

<script>
    import MainHeader from "./headers/MainHeader";
    import RepairHeader from "./headers/RepairHeader";
    export default {
        name: "Header",
        components: {RepairHeader, MainHeader},
        data: () => ({
            header: 1,
        }),
        watch:{
            $route (){
                if(this.$router.currentRoute.path == "/") {
                    this.header = 1;
                } else {
                    this.header = 2;
                }
            }
        }
    }
</script>
