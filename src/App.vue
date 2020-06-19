<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "@/components/layouts/Header";

  export default {
    components: {
      Header
    }
  }
</script>

<style>
  @font-face {
    font-family: MontBold;
    src: url("./assets/fonts/mont-bold.otf");
  }
  @font-face {
    font-family: MontExtraBold;
    src: url("./assets/fonts/mont-extra-bold.otf");
  }
  @font-face {
    font-family: PoppinsRegular;
    src: url("./assets/fonts/Poppins-Regular.otf");
  }

</style>
