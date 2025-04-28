<template>
  <div class="rn-contact-area rn-section-gap section-separator" id="contacts">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">Contact</span>
            <h2 class="title">Contact With Me</h2>
          </div>
        </div>
      </div>
      <div class="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
        <div class="col-lg-5">
          <div class="contact-about-area">
            <div class="thumbnail">
              <img
                src="@/assets/images/contact/contact1.png"
                alt="contact-img"
              />
            </div>
            <div class="title-area">
              <h4 class="title">ISHMAM ABIR CHOWDHURY</h4>
              <span>Software Development Engineer</span>
            </div>
            <div class="description">
              <p>
                Connect with me via email or other social media channels. Get to
                know more about me.
              </p>
              <!-- <span class="phone"
                >Phone: <a href="tel:01941043264">+01234567890</a></span
              > -->
              <span class="mail"
                >Email:
                <a href="mailto:ishmam.cse@gmail.com"
                  >ishmam.cse@gmail.com</a
                ></span
              >
            </div>
            <div class="social-area">
              <div class="name">FIND ME IN</div>
              <div class="social-icone">
                <a href="mailto:ishmam.cse@gmail.com"
                  ><i data-feather="mail"></i
                ></a>
                <a
                  href="https://www.linkedin.com/in/ishmam-abir/"
                  target="_blank"
                  ><i data-feather="linkedin"></i
                ></a>
                <a href="https://github.com/IshmamAbir" target="_blank"
                  ><i data-feather="github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-delay="600" class="col-lg-7 contact-input">
          <div class="contact-form-wrapper">
            <div class="introduce">
              <form
                class="rnt-contact-form rwt-dynamic-form row"
                id="contact-form"
                method="POST"
                action="mail.php"
              >
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="contact-name">Your Name</label>
                    <input
                      class="form-control form-control-lg"
                      name="contact-name"
                      id="contact-name"
                      type="text"
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="contact-phone">Phone Number</label>
                    <input
                      class="form-control"
                      name="contact-phone"
                      id="contact-phone"
                      type="text"
                    />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="contact-email">Email</label>
                    <input
                      class="form-control form-control-sm"
                      id="contact-email"
                      name="contact-email"
                      type="email"
                    />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="subject">subject</label>
                    <input
                      class="form-control form-control-sm"
                      id="subject"
                      name="subject"
                      type="text"
                    />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="contact-message">Your Message</label>
                    <textarea
                      name="contact-message"
                      id="contact-message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>

                <div class="col-lg-12">
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    class="rn-btn"
                  >
                    <span>SEND MESSAGE</span>
                    <i data-feather="arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContact",
};
</script>
