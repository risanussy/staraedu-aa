<template>
    <div>
        <!-- PAGE TRANSITION OVERLAY -->
        <div id="pageTrans" class="page-transition" aria-hidden="true"></div>
    
        <!-- POPUP VIDEO -->
        <div id="popup" class="position-fixed top-0 start-0 w-100 h-100 d-none" style="background:rgba(0,0,0,.85);z-index:1200;align-items:center;justify-content:center">
            <video id="popupVideo" src="../assets/video/vid.mp4" controls style="width:min(980px,94vw);max-height:86vh;border-radius:16px;border:1px solid var(--line)"></video>
        </div>
    
        <!-- HEADER -->
        <header id="appHeader" class="header-sticky" role="banner">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center justify-content-xl-between py-2">
                    <router-link class="brand d-inline-flex align-items-center" to="/" aria-label="AD ASTRA Home">
                        <img src="../assets/img/logo.png" alt="Logo AD ASTRA" />
                    </router-link>
                    <nav class="d-none d-xl-flex main-nav" aria-label="Primary">
                        <router-link to="/about" active-class="active">Purpose</router-link>
                        <router-link to="/problem-solution" active-class="active">Problem &amp; Solution</router-link>
                        <router-link to="/roadmap" active-class="active" data-trans="white">Roadmap</router-link>
                        <router-link to="/deliverables" active-class="active">Deliverables</router-link>
                        <router-link to="/team" active-class="active" data-trans="white">Team</router-link>
                        <router-link to="/life-after" active-class="active">Life After</router-link>
                        <router-link to="/parents" active-class="active">Parents</router-link>
                        <router-link to="/contact" active-class="active" data-trans="white">Enroll</router-link>
                    </nav>
                </div>
            </div>
        </header>
    
        <!-- MOBILE MENU -->
        <div class="popup-mobile-menu d-xl-none d-none position-fixed top-0 start-0 w-100 h-100" id="mobileMenu" style="background:rgba(0,0,0,.96);z-index:1190">
            <div class="inner" style="max-width:520px;margin:0 auto;padding:22px">
                <div class="d-flex justify-content-between align-items-center">
                    <router-link to="/">
                        <img src="../assets/img/logo.png" alt="Logo AD ASTRA" style="height:64px" />
                    </router-link>
                    <button class="btn btn-outline-light btn-sm" id="closeMenu" aria-label="Close menu">✕ Close</button>
                </div>
                <div class="rule"></div>
                <ul class="list-unstyled m-0">
                    <li class="py-2"><router-link class="d-block" to="/about">Purpose</router-link></li>
                    <li class="py-2"><router-link class="d-block" to="/problem-solution">Problem &amp; Solution</router-link></li>
                    <li class="py-2"><router-link class="d-block" to="/roadmap" data-trans="white">Roadmap</router-link></li>
                    <li class="py-2"><router-link class="d-block" to="/deliverables">Deliverables</router-link></li>
                    <li class="py-2"><router-link class="d-block" to="/team" data-trans="white">Team</router-link></li>
                    <li class="py-2"><router-link class="d-block" to="/life-after">Life After AD ASTRA</router-link></li>
                    <li class="py-2"><router-link class="d-block" to="/parents">Why Parents Love Us</router-link></li>
                    <li class="py-2"><router-link class="d-block" to="/contact" data-trans="white">Enroll</router-link></li>
                </ul>
            </div>
        </div>

        <router-view />
        
        <!-- MOBILE BOTTOM NAV -->
        <nav class="mobile_navigation d-xl-none" aria-label="Mobile CTA">
            <div class="position-fixed bottom-0 start-0 end-0 p-2" style="z-index:1180; padding-bottom: calc(env(safe-area-inset-bottom, 0px));">
                <div class="d-flex justify-content-between align-items-center glass px-3 py-2 rounded-2xl" style="min-height:var(--bottom-bar-h);">
                    <button class="btn btn-outline-light btn-sm" id="bottomToggle" aria-controls="mobileMenu" aria-expanded="false">☰ Menu</button>
                    <a href="#" data-wa data-wa-label="Start Free Trial" class="btn px-4 fw-bold btn-light border-0 btn-sm cta-green">Start Free Trial</a>
                </div>
            </div>
        </nav>
    
        <!-- FOOTER -->
        <footer class="pt-5" style="background:#000">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6">
                        <router-link to="/">
                            <img src="../assets/img/logo.png" alt="Logo AD ASTRA" style="height:110px" />
                        </router-link>
                        <p class="mt-2 muted">Coding, AI, and robotics through hands-on, project-based learning.</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="fw-semibold mb-2">Explore</div>
                            <ul class="list-unstyled m-0">
                                <li><router-link to="/about">Purpose</router-link></li>
                                <li><router-link to="/problem-solution">Problem &amp; Solution</router-link></li>
                                <li><router-link to="/roadmap" data-trans="white">Roadmap</router-link></li>
                                <li><router-link to="/deliverables">Deliverables</router-link></li>
                                <li><router-link to="/team" data-trans="white">Team</router-link></li>
                            </ul>
                        </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="fw-semibold mb-2">For Families</div>
                        <ul class="list-unstyled m-0">
                            <li><router-link to="/parents">Why Parents Love Us</router-link></li>
                            <li><router-link to="/life-after">Life After AD ASTRA</router-link></li>
                            <li><router-link to="/contact" data-trans="white">Enroll</router-link></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="fw-semibold mb-2">Contact</div>
                        <ul class="list-unstyled m-0">
                            <li>Phone: <a href="#" data-wa data-wa-label="Contact us">0811 1333 870</a></li>
                            <li><router-link to="/">www.adastracoding.com</router-link></li>
                            <li><a href="https://www.instagram.com/adastracoding/">@adastracoding</a></li>
                        </ul>
                    </div>
                </div>
                <div class="py-3 mt-4 border-top" style="border-color:var(--line-soft)!important">
                    <p class="text-center m-0 muted">Copyright 2024 <router-link to="/">AD ASTRA</router-link> — All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
</template>
