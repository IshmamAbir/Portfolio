<template>
  <div class="rn-footer-area rn-section-gap section-separator page-wrapper-two">
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
            <p class="description mt--30 text-center" v-if="user">
              © {{ new Date().getFullYear() }}. All rights reserved by
              <a
                target="_blank"
                :href="primaryContactUrl"
                v-if="user.getLocalizedProperty('fullName')"
              >
                {{ user.getLocalizedProperty("fullName") }}.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { PortfolioService } from "../services/portfolio.service";
import { useUserStore } from "../stores/user.store";

export default {
  name: "AppFooter",
  data() {
    return {
      primaryContactUrl: null,
    };
  },

  computed: {
    ...mapState(useUserStore, ["user"]),
  },

  async created() {
    const socials = await PortfolioService.getSocialMediaItems();
    let primaryContact = socials.find((item) => item.primaryContact);
    this.primaryContactUrl = primaryContact.url;
  },
};
</script>
