<template>
  <section
    id="home"
    v-if="user"
    class="slider-style-5 rn-section-gap pb--110 align-items-center with-particles bg_image"
    :style="'background-image: url(' + user.backgroundImage + ')'"
    data-black-overlay="7"
  >
    <div id="particles-js"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="banner-inner">
            <div class="thumbnail gradient-border gradient-animation">
              <img
                id="border"
                class="gradient-border"
                :src="user.centerImage"
                alt=""
              />
            </div>
            <!-- TODO:// Name from DB -->
            <h1 class="text-light">
              {{ user.getLocalizedProperty("fullName") }}
            </h1>
            <!-- type headline start-->
            <span class="cd-headline clip is-full-width">
              <span class="text-light">I am a &ensp;</span>
              <!-- ROTATING TEXT -->
              <!-- <span class="cd-words-wrapper"> -->
              <span>
                <!-- <div v-for="(value, key) in rotatingText" :key="key">
                  <b :class="value"> {{ key }}.</b>
                  1
                </div> -->
                <!-- <b class="is-visible"> Software Engineer.</b>
                <b class="is-hidden"> Web Developer.</b>
                <b class="is-hidden"> Photographer & Videographer.</b>
                <b class="is-hidden"> Fighter.</b> -->
                <Typed :options="typingText">
                  <div class="typing text-danger"></div>
                </Typed>
              </span>
            </span>
            <!-- type headline end -->
            <div class="col-lg-10 offset-lg-1 mt--60">
              <p class="has-drop-cap" style="text-align: justify">
                Basically I am A Bangladeshi Origin Full-time Web Developer and
                A Software Engineer By Profession Who Is Living In Japan and
                Also A Photographer & Video Editor By Choice. I am At A Time A
                Hard Working And Super Lazy. I Can Sleep For 17 Hours Straight &
                Also Can Code From 10:00 PM to 9:00 AM Continuously. My
                Potential For You Depends On How You Want To Get It.
              </p>
            </div>
            <div class="button-area">
              <a class="rn-btn cv-download" href="#contacts"
                ><span>Download CV</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Typed } from "@duskmoon/vue3-typed-js";
import { userData } from "../data/portfolio.data";
import { mapState } from "pinia";
import { useUserStore } from "../stores/user.store";

export default {
  name: "AppSlider",
  components: {
    Typed,
  },
  data() {
    return {
      typingText: {
        strings: userData.banner_designation[this.$i18n.locale],
        // strings: [
        //   "Software Engineer",
        //   "Web Developer",
        //   "Open Source Contributor",
        //   "Photographer ",
        //   "Videographer",
        // ],
        loop: true,
        typeSpeed: 35,
        smartBackspace: true,
        shuffle: true,
        showCursor: false,
        backSpeed: 45,
        autoInsertCss: true,
      },
    };
  },

  computed: {
    ...mapState(useUserStore, ["user"]),
  },
};
</script>

<style scoped></style>
