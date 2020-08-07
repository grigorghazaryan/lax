<template>
  <div class="home">
    <HeroBg/>
    <Services/>
    <ClientTalk/>
    <ContactUs/>
    <Map/>
    <Newsletter/>
  </div>
</template>

<script>
  import HeroBg from "@/components/home/HeroBg";
  import Services from "@/components/home/Services";
  import ClientTalk from "@/components/home/ClientTalk"
  import ContactUs from  "@/components/home/ContactUs";
  import Map from "../components/home/Map";
  import Newsletter from "../components/home/Newsletter";

export default {
  name: 'Home',
  components: {
    Newsletter,
    Map,
    ContactUs,
    ClientTalk,
    HeroBg,
    Services
  }
}
</script>

<style scoped>
  @media (max-width: 768px) {
    * {
      font-size: 97% !important;
    }
  }
</style>