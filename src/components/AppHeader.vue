<template>
  <!-- start Header area -->
  <div v-if="user" class="d-none d-lg-block header-style-2">
    <header
      class="rn-header-area d-flex align-items-start flex-column left-header-style"
    >
      <div class="logo-area">
        <a href="#home">
          <img
            v-if="user.sidebarImage"
            :src="user.sidebarImage"
            alt="personal-logo"
          />
        </a>
      </div>

      <div
        style="
          all: unset;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin: 19px 0;
          font-size: 16px;
          font-family: var(--font-primary);
          color: var(--color-primary);
          cursor: default;
        "
      >
        <!-- Child 1: The text (will stay on the left) -->
        <span
          style="display: flex; align-items: center"
          :class="langValue === 'en' ? 'text-danger' : 'color-blue'"
        >
          <v-icon class="pr-2">mdi-translate</v-icon>
          {{ langValue === "en" ? "English" : "日本語" }}
        </span>
        <v-spacer />
        <!-- Child 2: The Toggle (will stay on the right) -->
        <Toggle
          size="default"
          class="z-index-1 toggle-on-color toggle-off-color"
          on-label="JA"
          off-label="EN"
          false-value="ja"
          true-value="en"
          v-model="langValue"
          @change="changeLanguage"
        />
      </div>

      <nav id="sideNavs" class="mainmenu-nav navbar-example2">
        <v-divider color="red" />
        <ul class="primary-menu nav nav-pills" style="padding: 0 0 0 0">
          <li v-for="(item, index) in menuItems" :key="item.id" class="nav-item">
            <a
              class="nav-link smoth-animation-two"
              :class="{ active: index === 0 }"
              :href="'#' + item.id"
            >
              <i :data-feather="item.icon"></i>
              {{ $t('header.' + item.label) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="footer">
        <div class="social-share-style-1">
          <span class="title">{{ $t("header.find_me_in") }}</span>
          <ul class="social-share d-flex liststyle">
            <li v-for="item in socialList" :key="item" :class="item.title">
              <a :href="item.url" target="_blank">
                <i :data-feather="item.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
  <!-- start Header area end -->

  <!-- Header Mobile Bar  -->
  <div class="header-style-2 d-block d-lg-none">
    <div class="row align-items-center">
      <div class="col-6">
        <!-- <div class="logo">
          <a href="#home">
            <img src="@/assets/images/logo/logo-dark.png" alt="Logo" />
          </a>
        </div> -->
      </div>
      <div class="col-6">
        <div class="header-right text-right">
          <div class="hamberger-menu">
            <i
              id="menuBtn"
              class="feather-menu humberger-menu"
              @click="isMobileMenuOpen = true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Header Mobile Bar  -->

  <!-- Start Popup Mobile Menu  -->
  <div
    class="popup-mobile-menu"
    :class="{ 'menu-open': isMobileMenuOpen }"
    @click.self="isMobileMenuOpen = false"
  >
    <div class="inner">
      <div class="menu-top">
        <div class="menu-header">
          <a class="logo" href="#home">
            <!-- // TODO: add logo here  -->
            <img
              v-if="user && user.sidebarImage !== null && user.sidebarImage"
              src="@/assets/images/logo/logos-circle.png"
              alt="personal-logo"
            />
          </a>
          <div class="close-button">
            <button
              class="close-menu-activation close"
              @click="isMobileMenuOpen = false"
            >
              <i data-feather="x"></i>
            </button>
          </div>
        </div>
        <p class="discription">
          {{ $t("header.mobile_top_text") }}
        </p>
      </div>
      <i
        class="nav-link smoth-animation-two active d-flex justify-content-between align-items-center"
      >
        <span :class="langValue === 'en' ? 'text-danger' : 'color-blue'">
          <v-icon class="pr-2">mdi-translate</v-icon>
          {{ langValue === "en" ? "English" : "日本語" }}
        </span>
        <Toggle
          size="default"
          class="z-index-1 toggle-on-color"
          on-label="JA"
          off-label="EN"
          false-value="ja"
          true-value="en"
          v-model="langValue"
          @change="changeLanguage"
        />
      </i>
      <v-divider />
      <div class="content">
        <ul class="primary-menu nav nav-pills">
          <li v-for="(item, index) in menuItems" :key="item.id" class="nav-item">
            <a
              class="nav-link smoth-animation-two"
              :class="{ active: index === 0 }"
              @click="isMobileMenuOpen = false"
              :href="'#' + item.id"
            >
              {{ $t('header.' + item.label) }}
            </a>
          </li>
        </ul>
        <!-- social sharea area -->
        <div class="social-share-style-1 mt--40">
          <span class="title">{{ $t("header.find_me_in") }}</span>
          <ul class="social-share d-flex liststyle">
            <li class="facebook">
              <a href="#"><i class="feather-facebook"></i></a>
            </li>
            <li class="instagram">
              <a href="#"><i class="feather-instagram"></i></a>
            </li>
            <li class="linkedin">
              <a href="#"><i class="feather-linkedin"></i></a>
            </li>
          </ul>
        </div>
        <!-- end -->
      </div>
    </div>
  </div>
  <!-- End Popup Mobile Menu  -->
</template>
<script>
import Toggle from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";
import { PortfolioService } from "../services/portfolio.service";
import { mapState } from "pinia";
import { useUserStore } from "../stores/user.store";

export default {
  name: "AppHeader",
  components: {
    Toggle,
  },
  data() {
    return {
      isMobileMenuOpen: false,
      menuItems: [
        { id: "home", label: "home", icon: "home" },
        { id: "educations", label: "education", icon: "book-open" },
        { id: "experience", label: "experience", icon: "briefcase" },
        { id: "skills", label: "skill", icon: "award" },
        { id: "project", label: "projects", icon: "code" },
        { id: "blog", label: "blog", icon: "edit" },
        { id: "contacts", label: "contact", icon: "message-circle" },
      ],
      langValue: navigator.languages[0].split("-")[0],
      // search social icons at https://feathericons.com/
      socialList: [],
    };
  },

  computed: {
    ...mapState(useUserStore, ["user"]),
  },

  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },

  watch: {
    isMobileMenuOpen(newValue) {
      if (newValue) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
      }
    },
  },

  async created() {
    try {
      const socials = await PortfolioService.getSocialMediaItems();
      if (socials) {
        this.socialList = socials;
      }
    } catch (error) {
      console.error("Failed to fetch social media items:", error);
    }
  },
};
</script>

<style scoped>
.toggle-on-color {
  --toggle-width: 3rem;
  --toggle-height: 1.25rem;
  --toggle-border: 0.125rem;
  --toggle-font-size: 0.75rem;
  --toggle-bg-on: var(--color-primary);
  --toggle-border-on: var(--color-subtitle);
  --toggle-text-on: #ffffff;
  --toggle-bg-off: #093d86e6;
  --toggle-border-off: #093d86e6;
  --toggle-text-off: #ffffff;
}
.color-blue {
  color: #093d86e6;
}
</style>
