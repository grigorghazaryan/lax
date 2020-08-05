<template>
    <div id="header">
        <nav class="navbar navbar-dark navbar-expand-lg">

            <router-link to="/" v-if="!this.showLogo">
                <img class="img-fluid logo" style="visibitilt: hidden" src="@/assets/mixed/logo.png" alt="LAX Auto Repair Logo">
            </router-link>
            <div v-else></div>

            <img src="@/assets/mixed/hamburger.svg"  class="sidebar-toggler" @click="toggleSidebar" alt="Button">
           
            <div class="menu-cont">
                <ul class="menu">
                    <li v-for="(menu, i) in menus" class="nav-item" :key="i" ref="link" 
                    @mouseleave="handleMouseLeave" @mouseenter="handleHover">
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
                <li v-for="(menu, i) in menus" @click="toggleSidebar" 
                class="mobile-nav-item" :key="i" ref="link" @mouseleave="handleMouseLeave" 
                @mouseenter="handleHover">
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
        name: "MainHeader",
        props: {
            showLogo: Boolean,
        },
        data: () => {
            return {
                menus: [
                    {name: "Home", link: "/"},
                    {name: "Repairs", link: "/repair"},
                    {name: "Blog", link: "/blog"},
                    {name: "Login", link: "/sign-in"},
                ]
            }
        },
        methods: {
            handleHover(self) {
                this.$refs.link.map(e => e.classList.add("hovered"))
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

<style lang="scss">
    .sidebar-toggler {
        cursor: pointer;
    }
</style>
