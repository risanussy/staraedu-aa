<template>
    <section class="section" style="background:#0b0b0b">
        <div class="container">
            <div class="text-center">
                <span class="muted d-block">Enroll Now</span>
                <h2 class="mt-1">Ready to Future-Proof Your Child?</h2>
                <p class="muted">Monthly intakes • Weekend open houses • Scholarships & trials</p>
                <div class="rule"></div>
            </div>

            <div class="row g-4 mt-2">
                <div class="col-lg-5">
                    <div class="glass p-4 h-100">
                        <h6>Call-to-Actions</h6>
                        <ul class="mt-2 muted">
                            <li>Book a free consultation today</li>
                            <li>Sign up for the open house (Every Weekend!)</li>
                            <li>Scan the QR code to enroll or chat with our admissions team</li>
                        </ul>
                        <h6 class="mt-4">Contact Info</h6>
                        <ul class="muted">
                            <li>Phone: 0811 1333 870</li>
                            <li>Website: www.adastracoding.com</li>
                            <li>Instagram: @adastracoding</li>
                        </ul>
                        <div class="mt-3">
                            <a href="#" class="btn btn-outline-light" data-wa data-wa-label="Chat Admissions">💬 Chat Admissions</a>
                        </div>
                    </div>
                </div>

                <!-- Instruksi & Form WA -->
                <div class="col-lg-7" id="contact-form">
                    <form class="row glass p-3 mb-3 h-100" id="waEnrollForm" autocomplete="on">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <input type="text" class="form-control form-control-lg bg-dark text-white border-soft" 
                                    name="parent_name" placeholder="Parent's Name*" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <input type="text" class="form-control form-control-lg bg-dark text-white border-soft" 
                                    name="child_name" placeholder="Child's Name*" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <input type="text" inputmode="numeric" class="form-control form-control-lg bg-dark text-white border-soft" 
                                    name="child_age" placeholder="Child's Age*" required>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <input type="tel" class="form-control form-control-lg bg-dark text-white border-soft" 
                                    name="phone" placeholder="Phone Number*" required>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <textarea class="form-control bg-dark text-white border-soft" 
                                        name="inquiry" placeholder="Inquiry (optional)" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button class="btn btn-outline-light" type="submit">
                                <span>Send</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
