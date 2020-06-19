<template>
    <div id="header">
        <nav class="navbar navbar-expand-lg">
            <router-link to="/">
                <img class="img-fluid logo" src="@/assets/mixed/logo.png" alt="LAX Auto Repair Logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/repairs">Repairs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/sign-in">Sign In</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .navbar-nav li {
        margin-right: 40px;
    }
    .nav-item a {
        color: white;
        font-family: PoppinsRegular, sans-serif;
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
            margin-top: 15px;
            padding: 0 17%;
        }
    }
</style>