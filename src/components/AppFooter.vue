<template>
  <div class="rn-footer-area rn-section-gap section-separator">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer-area text-center">
            <!-- <div class="logo">
              <a href="index.html">
                <img
                  src="@/assets/images/logo/logo-vertical-dark.png"
                  alt="logo"
                />
              </a>
            </div> -->
            <p class="description mt--30">
              © {{ new Date().getFullYear() }}. All rights reserved by
              <a target="_blank" href="https://www.linkedin.com/in/ishmam-abir/"
                >Ishmam Abir Chowdhury.</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
