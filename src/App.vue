<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import Header from "@/components/layouts/Header";
  import Footer from "./components/layouts/Footer";

  export default {
    components: {
      Footer,
      Header
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: MontBold;
    src: url("./assets/fonts/Montserrat/Montserrat-Bold.otf");
  }
  @font-face {
    font-family: MontExtraBold;
    src: url("./assets/fonts/Montserrat/Montserrat-ExtraBold.otf");
  }
  @font-face {
    font-family: MontSemiBold;
    src: url("./assets/fonts/Montserrat/Montserrat-SemiBold.otf");
  }
  @font-face {
    font-family: MontRegular;
    src: url("./assets/fonts/Montserrat/Montserrat-Regular.otf");
  }
  @font-face {
    font-family: PoppinsRegular;
    src: url("./assets/fonts/Poppins/Poppins-Regular.otf");
  }
  @font-face {
    font-family: PoppinsLight;
    src: url("./assets/fonts/Poppins/Poppins-Light.otf");
  }
  @font-face {
    font-family: PoppinsSemiBold;
    src: url("./assets/fonts/Poppins/Poppins-SemiBold.otf");
  }
  .title{
    font-size: 25px;
    font-family: MontBold, sans-serif;
  }
  .title-text{
    font-size: 14px;
    font-family: PoppinsRegular, sans-serif;
  }
  #app {
    background: white;
  }
  html {
    background: white!important;
  }

  .dropdown-body::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
  }

  .dropdown-body::-webkit-scrollbar
  {
    width: 10px;
    background-color: #F5F5F5;
  }

  .dropdown-body::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-image: -webkit-gradient(linear,
            left bottom,
            left top,
            color-stop(0.44, rgb(122,153,217)),
            color-stop(0.72, rgb(73,125,189)),
            color-stop(0.86, rgb(28,58,148)));
  }
</style>
