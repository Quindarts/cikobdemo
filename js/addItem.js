window.addEventListener('load', () => {
    console.log("animation here !!");
    AOS.init();
});
var header = document.getElementById('header')
header.innerHTML = `
<nav id="header" class="navbar navbar-expand-lg navbar-light  w-100   p-0"  data-aos="flip-up"> 
<div class="row w-100 ">
    <!-- LOGO -->
    <div class="col-8 col-sm-8 col-md-4 ">
        <a class="navbar-brand px-3 w-25" href="../index.html">
        <img src="../img/logodemo.png" width="100%">
        </a>
    </div>
    <button class=" col-4  navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Nav link -->
    <div class="collapse navbar-collapse col-8 col-md-8 p-0 " id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto m-0">

        <li class="nav-item active px-3">
            <a class="nav-link  fw-bold fs-5 text-dark" href="../index.html ">Home</a>
        </li>

        <li class="nav-item px-3">
            <a class="nav-link  fw-bold fs-5 text-dark" href="../html/shop.html?page=0">Shop</a>
        </li>

        <li class="nav-item px-3">
            <a class="nav-link  fw-bold fs-5 text-dark" href="../html/collection.html?page=0">Collections</a>
        </li>

        <li class="nav-item px-3">
            <a class="nav-link  fw-bold fs-5 text-dark" href="../html/blog.html">Blog</a>
        </li>

        <li class="nav-item px-3">
            <a class="nav-link  fw-bold fs-5 text-dark" href="../html/aboutUs.html">About US</a>
        </li>

        </ul>
        <!-- Icon nav -->
        <form class="d-flex w-50  justify-content-end">
            <div class="col-10"></div>
            <div class="d-flex">
            <div class="col-2  col-md-2 px-2"> <a href="" class="">
                <img src="../img/icon/search-interface-symbol.png" width="30px">
            </a></div>
            <div class="col-2 col-md-2"> <a href="../html/paymentpage.html" class="position-relative  w-100">
            <span class="count__Cart bg-danger   rounded-circle font-weight-bold text-white px-2 py-1  position-absolute top-0  ">0</span>
                <img class="" src="../img/icon/shopping-bag.png" width="50px">
            </a></div>
            </div>
        </form>
    </div>

</div>  
</nav>  

`
var footer = document.getElementById("footer");
footer.innerHTML = `
<div class="row mt-5 px-5 font-amazon">
                <div class="col-12 mb-3 col-sm-12 col-md-3 ">
                    <a class="navbar-brand px-3 w-25" href="./index.html">
                    <img src="../img/logodemo.png" width="100%">
                    </a>
                    <p class=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit maxime omnis explicabo fuga ab?</p>
                    <div class="icon__footer">
                        <a href="">
                        <img src="../img/icon/facebook.png" width="32px">
                        </a>
                        <a href="">
                        <img src="../img/icon/instagram.png" width="32px">
                        </a>
                        <a href="">
                        <img src="../img/icon/twitter.png" width="32px">
                        </a>
                        <a href="">
                        <img src="../img/icon/linkedin.png" width="32px">
                        
                        </a>
                    </div>
                </div>
                <div class="col-12 mb-3 col-sm-12 col-md-3">
                    <h3>Contact Us</h3>
                    <p class="grey2--color m-1">Address: HoChiMinh City</p>
                    <p class="grey2--color m-1">Phone Number: 0364835692</p>
                    <p class="grey2--color m-1">Email:abc@gmail.com</p>
                    <br>
                </div>
                <div class="col-12 mb-3 col-sm-12 col-md-3 pt-4">
                    <h3>Explore</h3>
                    <p class="grey2--color m-1">Blog</p>
                    <p class="grey2--color m-1">About Us</p>
                    <p class="grey2--color m-1">Privacy policy</p>
                    <p class="grey2--color m-1">Customer care</p>
                </div>
                <div class="col-12 mb-3 col-sm-12 col-md-3">
                    <h3>Get in Touch</h3>
                    
                    <p class="grey2--color m-1">Question or feedback?</p>
                    <p class="grey2--color m-1">We'd love to hear from you</p>
                    <div class="input__footer">
                        <input class="border border-3" type="search" placeholder="Email address ">
                    </div>
                    <br>
                </div>
                <div class="col-12 mb-3 text-center pt-3" style="border-top:2px solid black ;">
                    Cikob no Copyright 2022
                </div>
            </div>
`

