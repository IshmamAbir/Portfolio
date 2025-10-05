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
              <span class="text-light">{{ $t("slider.i_am") }} &ensp;</span>
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
                <Typed :options="typingText" :key="$i18n.locale">
                  <div class="typing text-danger"></div>
                </Typed>
              </span>
            </span>
            <!-- type headline end -->
            <div class="col-lg-10 offset-lg-1 mt--60">
              <p class="has-drop-cap" style="text-align: justify">
                {{ user.getLocalizedProperty("bannerIntroduction") }}
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
import { userData } from "@/data/portfolio.data";
import { mapState } from "pinia";
import { useUserStore } from "@/stores/user.store";

export default {
  name: "AppSlider",
  components: {
    Typed,
  },

  computed: {
    ...mapState(useUserStore, ["user"]),
    typingText() {
      return {
        strings: userData.banner_designation[this.$i18n.locale],
        loop: true,
        typeSpeed: 35,
        smartBackspace: true,
        shuffle: true,
        showCursor: false,
        backSpeed: 45,
        autoInsertCss: true,
      };
    },
  },
};
</script>

<style scoped></style>
