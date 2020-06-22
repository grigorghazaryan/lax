<template>
    <div id="header">
        <b-navbar toggleable="lg" type="dark">
            <router-link to="/">
                <img class="img-fluid logo" src="@/assets/mixed/logo.png" alt="LAX Auto Repair Logo">
            </router-link>


            <b-navbar-toggle target="nav-collapse" variant="light"></b-navbar-toggle>

            <b-collapse id="nav-collapse" class="justify-content-lg-end" is-nav>
                <b-navbar-nav>

                    <li v-for="(menu, i) in menus" class="nav-item" :key="i" ref="link" @mouseleave="handleMouseLeave" @mouseenter="handleHover">
                        <router-link :to="menu.link">{{ menu.name }}</router-link>
                    </li>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

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
                    {name: "Sign In", link: "/sign-in"},
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
        .navbar-nav{
            float: right;
            /*margin-left: 30px;*/
            position: relative;
            left: 40px;
        }
        .nav-item{
            margin-bottom: 10px;
        }
    }
    .hovered a {
        opacity: 0.6;
    }
</style>
