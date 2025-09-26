<template>
  <section class="section active">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <h1 class="mt-3">AD ASTRA - Class of Tomorrow.</h1>
          <p class="lead" style="color:rgba(255,255,255,.78)">💻 Coding | 🤖 Robotics | 💬 AI<br>
          ↘️ The Next Tech Genius Starts Here_</p>
          <div class="d-flex flex-wrap mt-2">
            <span class="border-soft rounded-pill mb-2 px-3 py-1">AI & Robotics</span>
            <span class="border-soft rounded-pill mb-2 px-3 py-1">Startup & entrepreneurship</span>
            <span class="border-soft rounded-pill mb-2 px-3 py-1">Project-Based</span>
            <span class="border-soft rounded-pill mb-2 px-3 py-1">Portfolio & POC</span>
          </div>

          <div class="mt-3 d-flex gap-2 flex-wrap">
            <router-link to="/contact" class="btn btn-outline-light btn-lg m-auto" data-trans="white">🚀 Enroll Now</router-link>
          </div>
          <br><br><br>

          <div class="mt-4">
            <h6 class="eyebrow mb-2">At a Glance</h6>
            <div class="home-grid">
              <article class="home-card">
                <h5 class="mb-1">Purpose</h5>
                <ul class="dotlist">
                  <li>Raise future tech entrepreneurs</li>
                  <li>Ship real projects & portfolios</li>
                  <li>Certification-ready outcomes</li>
                </ul>
                <router-link to="/about" class="link-learn">learn more →</router-link>
              </article><hr>
              <article class="home-card">
                <h5 class="mb-1">Deliverables</h5>
                <ul class="dotlist">
                  <li>Full-Stack Developer certificate</li>
                  <li>Startup POC (pitch & demo)</li>
                  <li>Hands-on AI & Robotics labs</li>
                </ul>
                <router-link to="/deliverables" class="link-learn">learn more →</router-link>
              </article><hr>
              <article class="home-card">
                <h5 class="mb-1">Curriculum & Roadmap</h5>
                <ul class="dotlist">
                  <li>Tracks ages 4–18 (Foundations → Startup)</li>
                  <li>Web, Data/AI, Robotics studios</li>
                  <li>Demo Day & portfolio pathway</li>
                </ul>
                <router-link to="/roadmap" class="link-learn" data-trans="white">learn more →</router-link>
              </article>
            </div>
          </div>

        </div>
        <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
          <div class="thumbvid" id="heroThumb" style="cursor:pointer" title="Play video">
            <video src="../assets/video/vid.mp4" width="100%" style="transform: translateY(80px)" autoplay muted loop playsinline></video>
          </div>
        </div>
      </div>

      <div class="row g-3 mt-5">
        <div class="col-6 col-lg-3"><div class="stat"><h3>4–18</h3><div class="muted">Age Tracks</div></div></div>
        <div class="col-6 col-lg-3"><div class="stat"><h3>120+</h3><div class="muted">Projects Shipped</div></div></div>
        <div class="col-6 col-lg-3"><div class="stat"><h3>8</h3><div class="muted">Labs & Studios</div></div></div>
        <div class="col-6 col-lg-3"><div class="stat"><h3>100%</h3><div class="muted">Portfolio Outcome</div></div></div>
      </div>
    </div>
  </section>
</template>
