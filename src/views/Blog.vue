<template>
    <div class="blog-wrapper">
        <div class="blog-header-image">
            <img src="../assets/mixed/bmw-header.png" alt="blog header">
        </div>
        <div class="blog-content-wrapper">
            <div class="container">
                <div class="row blog-item">
                    <div class="col-md-6">
                         <img src="../assets/mixed/testblog.png" alt="blog image">
                    </div>
                    <div class="col-md-6">
                        <div class="blue-text">July 6, 2020</div>
                        <p class="bold">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam.
                        </p>
                        <p class="desc">
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div class="text-right read-more-parent">
                            <a href="#" class="blue-text">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="row blog-item mobile-reverse">
                    <div class="col-md-6">
                        <div class="blue-text">July 6, 2020</div>
                        <p class="bold">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam.
                        </p>
                        <p class="desc">
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div class="text-right read-more-parent">
                            <a href="#" class="blue-text">Read more</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="../assets/mixed/testblog2.png" alt="blog image">
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-suggestion-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1>Write Title Here</h1>
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/mixed/blogtest3.png" alt="blog 3">
                        <div class="blue-text">July 6, 2020</div>
                        <p class="bold">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor
                        </p>
                        <p class="desc">
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                        <div class="text-right read-more-parent">
                            <a href="#" class="blue-text">Read more</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/mixed/blogtest4.png" alt="blog 4">
                        <div class="blue-text">July 6, 2020</div>
                        <p class="bold">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor
                        </p>
                        <p class="desc">
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                        <div class="text-right read-more-parent">
                            <a href="#" class="blue-text">Read more</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src="../assets/mixed/blogtest5.png" alt="blog 5">
                        <div class="blue-text">July 6, 2020</div>
                        <p class="bold">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor
                        </p>
                        <p class="desc">
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                        <div class="text-right read-more-parent">
                            <a href="#" class="blue-text">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">

.nav-item a {
    color: black !important;
}

.blog-wrapper {

    .blog-header-image {
        margin: 40px 0 60px;
    }
    
    .blog-item {
        margin: 100px 0 100px;
    }

    .blue-text {
        color: #31569C !important;
        font-family: PoppinsRegular, sans-serif;
        font-size: 16px;
    }

    .bold {
        font-size: 16px;
        font-family: PoppinsBold;
        color: #252525;
        letter-spacing: 0.16px;
        margin-top: 15px;
        text-align: left;
        line-height: 1.9;
    }
    .desc {
        font-size: 16px;
        font-family: PoppinsLight;
        color: #252525;
        letter-spacing: 0.16px;
        text-align: left;
        line-height: 1.9;
    }
    .read-more-parent {
        margin-top: 10px;
    }

    .blog-suggestion-wrapper {
        margin-bottom: 100px;

        h1 {
            color: #4A4A4A;
            letter-spacing: 0.32px;
            font-size: 32px;
            font-family: MontBold, sans-serif;
            margin-bottom: 30px;
        }

        img {
            margin-bottom: 15px;
        }
    }

    @media (max-width: 767px) { 
        .blog-item {
            margin: 50px 0 50px;

            &.mobile-reverse {
                flex-direction: column-reverse;
            }

            img {
                margin-bottom: 20px;
            }
        }
        .blog-suggestion-wrapper {
            margin-bottom: 50px;
            
            .read-more-parent {
                margin-bottom: 20px;
            }
        }
    }
}

</style>