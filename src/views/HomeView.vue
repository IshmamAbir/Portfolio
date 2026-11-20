<template>
  <main class="page-wrapper-two">
    <!-- start slider area -->
    <app-slider />

    <!-- Start education Area  -->
    <app-education />

    <!-- Start Experience Area  -->
    <app-job-experience />

    <!-- Start Skill List Area  -->
    <app-skills-certification-achievements />

    <!-- Start Project Area  -->
    <app-projects />

    <!-- Start Blog Area  -->
    <app-blog />

    <!-- Start Contact section -->
    <app-contact />

    <!-- Back to  top Start -->
    <div class="backto-top">
      <div @click="gotoTop" :style="{ color: 'white', visibility: visibility }">
        <i data-feather="arrow-up"></i>
        <!-- <vue-feather class="" type="arrow-up"></vue-feather> -->
      </div>
    </div>
    <!-- Back to top end -->
  </main>
</template>

<script>
import { defineComponent } from "vue";

// Components
import AppSlider from "@/components/AppSlider.vue";
import AppContact from "@/components/AppContact.vue";
import AppEducation from "@/components/AppEducation.vue";
import AppSkillsCertificationAchievements from "@/components/AppSkillsCertificationAchievements.vue";
import AppJobExperience from "@/components/AppJobExperience.vue";
import AppProjects from "@/components/AppProjects.vue";
import AppBlog from "@/components/AppBlog.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppSlider,
    AppContact,
    AppEducation,
    AppSkillsCertificationAchievements,
    AppJobExperience,
    AppProjects,
    AppBlog,
  },
  data() {
    return {
      visibility: "hidden",
    };
  },
  mounted() {
    this.initParticleJS();
  },
  methods: {
    gotoTop() {
      this.$vuetify.goTo(0, {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic",
      });
      window.setTimeout(() => {
        this.visibility = "hidden";
      }, 300);
    },
    initParticleJS() {
      // eslint-disable-next-line no-undef
      particlesJS(
        "particles-js",

        {
          particles: {
            number: { value: 50 },
            color: { value: ["#ff014f"] },
            opacity: { value: 0.8, random: true },
            size: { value: 4, random: true },
            line_linked: { enable: false },
            move: { speed: 6 },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
            },
          },
          retina_detect: true,
        }
      );
    },
  },
});
</script>
