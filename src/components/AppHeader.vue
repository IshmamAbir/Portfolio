<template>
  <!-- start Header area -->
  <div class="d-none d-lg-block header-style-2">
    <header
      class="rn-header-area d-flex align-items-start flex-column left-header-style"
    >
      <div class="logo-area">
        <a href="#home">
          <img :src="sidebarImage" alt="personal-logo" />
        </a>
      </div>
      <nav id="sideNavs" class="mainmenu-nav navbar-example2">
        <ul class="primary-menu nav nav-pills">
          <li class="nav-item">
            <a class="nav-link smoth-animation-two active"
              ><v-icon class="pr-2">mdi-translate</v-icon>
              {{ langValue === "en" ? "English" : "日本語" }}
              <Toggle
                size="default"
                class="z-index-1 ml-3 toggle-on-color toggle-off-color"
                on-label="EN"
                off-label="JA"
                false-value="ja"
                true-value="en"
                v-model="langValue"
                @change="changeLanguage"
              />
            </a>
          </li>
          <v-divider color="red" />
          <li class="nav-item">
            <a class="nav-link smoth-animation-two active" href="#home">
              <!-- <vue-feather type="home" /> -->
              <i data-feather="home"></i>
              {{ $t("header.home") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#educations">
              <!-- <vue-feather type="briefcase" /> -->
              <i data-feather="book-open"></i>
              {{ $t("header.education") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#experience">
              <!-- <vue-feather type="layers" /> -->
              <i data-feather="briefcase"></i>
              {{ $t("header.experience") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#skills">
              <!-- <vue-feather type="layers" /> -->
              <i data-feather="award"></i>
              {{ $t("header.skill") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#project">
              <!-- <vue-feather type="layers" /> -->
              <i data-feather="code"></i>
              {{ $t("header.projects") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#blog">
              <!-- <vue-feather type="layers" /> -->
              <i data-feather="edit"></i>
              {{ $t("header.blog") }}
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#contacts">
              <!-- <vue-feather type="message-circle" /> -->
              <i data-feather="message-circle"></i>
              {{ $t("header.contact") }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="footer">
        <div class="social-share-style-1">
          <span class="title">{{ $t("header.find_me_in") }}</span>
          <ul class="social-share d-flex liststyle">
            <li v-for="item in socialList" :key="item" :class="item.class">
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
            <i id="menuBtn" class="feather-menu humberger-menu"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Header Mobile Bar  -->

  <!-- Start Popup Mobile Menu  -->
  <div class="popup-mobile-menu">
    <div class="inner">
      <div class="menu-top">
        <div class="menu-header">
          <a class="logo" href="#home">
            <img
              src="@/assets/images/logo/logos-circle.png"
              alt="Personal Portfolio"
            />
          </a>
          <div class="close-button">
            <button class="close-menu-activation close">
              <i data-feather="x"></i>
            </button>
          </div>
        </div>
        <p class="discription">
          You are free to know about me. Check everything that you need to know
          and also feel free to ask questions ! Adios!
        </p>
      </div>
      <div class="content">
        <ul class="primary-menu nav nav-pills">
          <li class="nav-item">
            <a class="nav-link smoth-animation-two active" href="#home">{{
              $t("header.home")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#educations">{{
              $t("header.education")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#experience">
              {{ $t("header.experience") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#skills">
              {{ $t("header.skill") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#project">
              {{ $t("header.projects") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#blog">
              {{ $t("header.blog") }}
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link smoth-animation-two" href="#contacts">
              {{ $t("header.contact") }}
            </a>
          </li>
        </ul>
        <!-- social sharea area -->
        <div class="social-share-style-1 mt--40">
          <span class="title">find with me</span>
          <ul class="social-share d-flex liststyle">
            <li class="facebook">
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-facebook"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  ></path></svg
              ></a>
            </li>
            <li class="instagram">
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg
              ></a>
            </li>
            <li class="linkedin">
              <a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-linkedin"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle></svg
              ></a>
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

export default {
  name: "AppHeader",
  components: {
    Toggle,
  },
  data() {
    return {
      sidebarImage: "files/ishmam_sidebar.jpg",
      langValue: navigator.languages[0].split("-")[0],
      // search social icons at https://feathericons.com/
      socialList: [
        {
          class: "github",
          url: "https://github.com/IshmamAbir",
          icon: "github",
        },
        { class: "mail", url: "mailto:ishmam.cse@gmail.com", icon: "mail" },
        {
          class: "linkedin",
          url: "https://www.linkedin.com/in/ishmam-abir/",
          icon: "linkedin",
        },
        {
          class: "youtube",
          url: "https://www.youtube.com/@ishmam_abir",
          icon: "youtube",
        },
        { class: "dev.to", url: "https://dev.to/ishmam_abir", icon: "pocket" },
        {
          class: "instagram",
          url: "https://www.instagram.com/ishmam.abir",
          icon: "instagram",
        },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
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
</style>
