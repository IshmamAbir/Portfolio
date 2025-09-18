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
              <a target="_blank" :href="primaryContactUrl"> {{ fullname }}. </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PortfolioService } from "../services/portfolio.service";

export default {
  name: "AppFooter",
  data() {
    return {
      fullname: null,
      primaryContactUrl: null,
    };
  },

  async created() {
    const userData = await PortfolioService.getUserInfo();
    this.fullname = userData.getLocalizedProperty("fullName");

    const socials = await PortfolioService.getSocialMediaItems();
    let primaryContact = socials.find((item) => item.primaryContact);
    this.primaryContactUrl = primaryContact.url;
  },
};
</script>
