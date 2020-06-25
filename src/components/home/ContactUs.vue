<template>
    <div class="contact-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-12 mb-5">
                        <h3 class="title text-center">Contact Us</h3>
                        <p class="title-text text-center">From tires to brakes, engines to interiors, we’ve got you covered.
                            <br> Get in touch today.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="locations">
                        <div class="group mb-2">
                            <div class="loc-row d-flex align-items-center mb-1">
                                <img src="@/assets/home/location.svg" alt="Location Mark">
                                <p class="loc-name mb-0 ml-2">Location:</p>
                            </div>
                            <div class="loc-row d-flex align-items-center">
                                <img src="@/assets/home/location.svg" alt="Location Mark" style="opacity: 0">
                                <p class="ml-2 desc">14301 S. Western Ave Gardena, CA 90249</p>
                            </div>
                        </div>

                        <div class="group mb-2">
                            <div class="loc-row d-flex align-items-center mb-1">
                                <img src="@/assets/home/phone.svg" alt="Phone">
                                <p class="loc-name mb-0 ml-2">Phone Number:</p>
                            </div>
                            <div class="loc-row d-flex align-items-center">
                                <img src="@/assets/home/phone.svg" alt="Phone" style="opacity: 0">
                                <p class="ml-2 desc">(310) 523-1063</p>
                            </div>
                        </div>

                        <div class="group mb-2">
                            <div class="loc-row d-flex align-items-center mb-1">
                                <img src="@/assets/home/email.svg" alt="Email">
                                <p class="loc-name mb-0 ml-2">Email:</p>
                            </div>
                            <div class="loc-row d-flex align-items-center">
                                <img src="@/assets/home/email.svg" alt="Email" style="opacity: 0">
                                <p class="ml-2 desc">info@laxautorepair.com</p>
                            </div>
                        </div>

                        <div class="group mb-2">
                            <div class="loc-row d-flex align-items-center mb-1">
                                <img src="@/assets/home/open.svg" alt="open">
                                <p class="loc-name mb-0 ml-2">Opening Hours:</p>
                            </div>
                            <div class="loc-row d-flex align-items-center">
                                <img src="@/assets/home/open.svg" alt="open" style="opacity: 0">
                                <div>
                                    <p class="ml-2 mb-0 desc"><span style="color: #31569C;">Mon - Fri:</span> 8am - 5:30pm, </p>
                                    <p class="ml-2 mb-0 desc"><span style="color: #31569C;">Sat:</span> 8am - 1pm, </p>
                                    <p class="ml-2 mb-0 desc"><span style="color: #31569C;">Sun:</span> Closed </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="container-fluid">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactForm from "./ContactForm";

    export default {
        name: "ContactUs",
        components: {ContactForm}
    }
</script>

<style scoped>
    .contact-section{
        padding: 80px 0 10px 0;
        background: #FCF9F9;
    }
    .title, .title-text {
        color: #4A4A4A;
    }
    .loc-name{
        color: #4A4A4A;
        font-size: 14px;
        font-family: MontBold, sans-serif;
    }
    .desc{
        font-size: 12px;
        font-family: PoppinsRegular, sans-serif;
        color: #4A4A4A;
    }
</style>
