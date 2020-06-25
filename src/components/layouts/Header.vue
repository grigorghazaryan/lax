<template>
    <div id="header">
        <nav class="navbar navbar-dark navbar-expand-lg">
            <router-link to="/">
                <img class="img-fluid logo" src="@/assets/mixed/logo.png" alt="LAX Auto Repair Logo">
            </router-link>

            <img src="@/assets/mixed/toggler2.png" class="sidebar-toggler" @click="toggleSidebar" alt="Button">
            <div class="menu-cont">
                <ul class="menu">
                    <li v-for="(menu, i) in menus" class="nav-item" :key="i" ref="link" @mouseleave="handleMouseLeave" @mouseenter="handleHover">
                        <router-link :to="menu.link">{{ menu.name }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="overlay" ref="overlay" @click="toggleSidebar"></div>
        <div class="sidebar" ref="sidebar">
            <div class="logo-cont">
                <router-link to="/">
                    <img @click="toggleSidebar" class="img-fluid logo" src="@/assets/mixed/logo.png" alt="LAX Auto Repair Logo">
                </router-link>
            </div>
            <ul class="menu-mobile">
                <li v-for="(menu, i) in menus" @click="toggleSidebar" class="mobile-nav-item" :key="i" ref="link" @mouseleave="handleMouseLeave" @mouseenter="handleHover">
                    <img :src="require('@/assets/mixed/' + menu.name + '.png')" alt="">
                    <router-link :to="menu.link">{{ menu.name }}</router-link>
                </li>
            </ul>
            <div  class="bubble-cont">
                <img src="@/assets/mixed/bubbles.png" class="img-fluid" alt="Bubble">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: () => {
            return {
                menus: [
                    {name: "Home", link: "/home"},
                    {name: "Repairs", link: "/repair"},
                    {name: "Blog", link: "/blog"},
                    {name: "Login", link: "/sign-in"},
                ]
            }
        },
        methods: {
            handleHover(self) {
                this.$refs.link.map(e => e.classList.add("hovered"))
                // console.log(self.target.classList)
                self.target.classList.remove("hovered");
            },
            handleMouseLeave() {
                this.$refs.link.map(e => e.classList.remove("hovered"));
            },
            toggleSidebar() {
                if(!this.$refs.overlay.classList.contains("show")) {
                    this.$refs.overlay.classList.add("show");
                    this.$refs.sidebar.classList.add("show");
                } else {
                    this.$refs.overlay.classList.remove("show");
                    this.$refs.sidebar.classList.remove("show");
                }
            }
        }
    }
</script>

<style scoped>
    .navbar-nav li {
        margin-right: 40px;
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
        opacity: 0.6;
    }
</style>
