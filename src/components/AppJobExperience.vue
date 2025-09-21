<template>
  <div class="rn-resume-area rn-section-gap section-separator" id="experience">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="section-title text-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <!-- <span class="subtitle">Features</span> -->
            <h2 class="title">{{ $t("experience.experience_header") }}</h2>
          </div>
        </div>
      </div>
      <div class="row row--45">
        <div class="personal-experience-inner mt--40">
          <div class="col-lg-12">
            <!-- Start Skill List Area  -->
            <div class="col-lg-9 col-md-12 col-12">
              <div class="content">
                <!-- <span class="subtitle">2007 - 2010</span> -->
                <!-- <h4 class="maintitle">Education Quality</h4> -->
                <div class="experience-list">
                  <!-- Start Single List  -->
                  <div
                    class="resume-single-list"
                    v-for="item in timeline"
                    :key="item.id"
                  >
                    <div
                      class="inner change-cursor"
                      data-toggle="modal"
                      :data-target="'#jdId' + item.id"
                      @click.prevent="
                        (itemId = 'jdId' + item.id),
                          (companyData = item)
                      "
                    >
                      <div class="heading">
                        <div class="title">
                          <h4>{{ item.position }}</h4>
                          <span>{{ item.companyName }}</span>
                        </div>
                        <div class="date-of-time">
                          <span>
                            {{ item.dateRange }}
                            </span>
                          
                        </div>
                      </div>
                      <p class="description justify-text">
                        <!-- {{ item.description }} -->
                        {{ item.getLocalizedProperty("shortDescription") }}
                        <v-spacer />

                        <div class="pt-5 d-flex justify-end">
                        <i class="pr-2 text-decoration-underline">
                          See Details 
                        </i>
                        <i
                          class="feather-arrow-up-right"
                        />
                        </div>
                      </p>
                    </div>
                  </div>
                  <!-- End Single List  -->
                </div>
              </div>
            </div>
            <!-- End Skill List Area  -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <JobDescriptionPopup
  :itemId="itemId"
    :company-data="companyData"
  />
</template>

<script>
import { PortfolioService } from "@/services/portfolio.service";
import JobDescriptionPopup from "./JobDescriptionPopup.vue";

export default {
  name: "AppJobExperience",
  components: { JobDescriptionPopup },
  data() {
    return {
      itemId:'',
      companyData: null,
      timeline: [],
    };
  },

  async created() {
    const jobExperiences = await PortfolioService.getJobExperiences();
    this.timeline = jobExperiences;
  },
};
</script>
<style scoped>
.change-cursor {
  cursor: pointer;
}
</style>
