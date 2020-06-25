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
  .title{
    font-size: 25px;
    font-family: MontBold, sans-serif;
  }
  .title-text{
    font-size: 14px;
    font-family: PoppinsRegular, sans-serif;
  }

</style>
