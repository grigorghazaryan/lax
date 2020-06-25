<template>
    <div id="header">
        <nav class="navbar navbar-dark navbar-expand-lg">
            <router-link to="/">
                <img class="img-fluid logo" src="@/assets/mixed/logo.png" alt="LAX Auto Repair Logo">
            </router-link>

            <div class="menu-cont">
                <p class="text">Identify Your Car</p>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "RepairHeader",
    }
</script>

<style scoped lang="scss">
    @import "src/assets/css/style.scss";
    .navbar-nav li {
        margin-right: 40px;
    }
    .text{
        color: $black;
        font-size: 24px;
        font-family: MontSemiBold, sans-serif;
    }
    .nav-item a {
        color: white;
        font-family: PoppinsRegular, sans-serif;
        text-decoration: none;
        transition: .4s;
    }
    #header{
        position: relative;
        z-index: 999999999;
        padding-top: 20px;
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

    @media (min-width: 992px) {
        .navbar{
            margin: 15px auto 0 auto;
            padding: 0 17%;
            max-width: 1920px;
        }
    }
    @media (max-width: 768px) {
        #header{
            position: absolute;
            top: 0;
            width: 100%;
        }
        .menu-cont{
            display: none;
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

</style>
