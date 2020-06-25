<template>
    <div id="main-header">
        <MainHeader v-if="(header === 1)"/>
        <RepairHeader v-if="(header === 2)"/>
        <QuoteHeader :name="$router.currentRoute.name" v-if="(header === 3)"/>
    </div>
</template>

<script>
    import MainHeader from "./headers/MainHeader";
    import RepairHeader from "./headers/RepairHeader";
    import QuoteHeader from "../../components/layouts/headers/QuoteHeader";

    export default {
        name: "Header",
        components: {QuoteHeader, RepairHeader, MainHeader},
        data: () => ({
            header: 1,
        }),
        watch:{
            $route (){
                let route = this.$router.currentRoute.path;
                if(route == "/") {
                    this.header = 1;
                } else if(route == '/repair') {
                    this.header = 2;
                } else if(route == '/get-quote') {
                    this.header = 3;
                }
            }
        }
    }
</script>
<style>
    .navbar-nav li {
        margin-right: 40px;
    }
    .nav-item a {
        color: white!important;
        font-family: PoppinsRegular, sans-serif;
        text-decoration: none!important;
        transition: .4s;
    }
    #header{
        position: relative;
        z-index: 999999999;
    }
    .logo{
        height: 54px;
    }
    .sidebar-toggler{
        display: none;
    }
    .menu-cont{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .menu{
        display: flex;
        list-style-type: none;
    }
    .menu li{
        margin-right: 40px;
    }
    .overlay{
        display: none;
    }
    .sidebar{
        width: 80%;
        height: 100%;
        position: fixed;
        top: 0;
        background: white;
        z-index: 10;
        left: -100%;
        transition: .3s;
    }
    @media (min-width: 992px) {
        .navbar{
            margin: 15px auto 0 auto;
            padding: 0 17%!important;
            max-width: 1920px;
        }
    }
    @media (max-width: 768px) {
        #header{
            position: absolute;
            top: 0;
            width: 100%;
        }
        .show{
            left: 0!important;
        }
        .overlay{
            position: fixed;
            height: 100%;
            width: 100%;
            background: black;
            opacity: 0.4;
            z-index: 1;
            top: 0;
            left: -100%;
            display: block;
            transition: .3s;
        }
        .sidebar-toggler{
            display: block;
        }
        .menu-cont{
            display: none;
        }
        .menu-mobile{
            list-style-type: none;
            position: relative;
            top: 400px;
            transform: translateY(-100%);
        }
        .bubble-cont{
            position: absolute;
            bottom: 5%;
            text-align: center;
            width: 100%;
        }
        .bubble-cont img{
            height: 130px;
        }

        .sidebar li a{
            color: #4c4c4c;
            font-size: 18px!important;
            font-family: MontSemiBold, sans-serif;
            text-decoration: none;
            margin-left: 10px;
        }
        .sidebar li{
            margin-bottom: 35px;
            display: flex;
            align-items: center;
        }
        .logo-cont img  {
            height: 35px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            top: 65px;
        }
        .logo{
            height: 30px;
        }
        .navbar{
            margin-left: 12%;
        }
    }
    .hovered a {
        opacity: 0.6!important;
    }
</style>
