<template>
  <main id="main-content" tabindex="-1">
    <app-slider @open-cv="$emit('open-cv', $event)" />
    <app-projects />
    <app-job-experience />
    <app-skills-certification-achievements />
    <app-education />
    <app-blog />
    <app-contact @open-cv="$emit('open-cv', $event)" />
  </main>
</template>
<script>
import AppSlider from "@/components/AppSlider.vue";
import AppProjects from "@/components/AppProjects.vue";
import AppJobExperience from "@/components/AppJobExperience.vue";
import AppSkillsCertificationAchievements from "@/components/AppSkillsCertificationAchievements.vue";
import AppEducation from "@/components/AppEducation.vue";
import AppBlog from "@/components/AppBlog.vue";
import AppContact from "@/components/AppContact.vue";
export default {
  name: "HomeView",
  components: { AppSlider, AppProjects, AppJobExperience, AppSkillsCertificationAchievements, AppEducation, AppBlog, AppContact },
  emits: ["open-cv"],
};
</script>
