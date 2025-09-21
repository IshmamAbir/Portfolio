<template>
  <div class="rn-resume-area rn-section-gap section-separator" id="skills">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <!-- <span class="subtitle">7+ Years of Experience</span> -->
            <h2 class="title">{{ $t("skill.skill_header") }}</h2>
          </div>
        </div>
      </div>
      <div class="row mt--45">
        <div class="col-lg-12">
          <ul class="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="professional-tab"
                data-toggle="tab"
                href="#professional"
                role="tab"
                aria-controls="professional"
                aria-selected="true"
              >
                {{ $t("skill.technical_skills") }}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="certification-tab"
                data-toggle="tab"
                href="#certification"
                role="tab"
                aria-controls="certification"
                aria-selected="false"
              >
                {{ $t("skill.certifications") }}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="achievement-tab"
                data-toggle="tab"
                href="#achievement"
                role="tab"
                aria-controls="achievement"
                aria-selected="false"
              >
                {{ $t("skill.achievements") }}
              </a>
            </li>
          </ul>
          <!-- start: Skill List  -->
          <!-- Start Tab Content Wrapper  -->
          <div class="rn-nav-content tab-content" id="myTabContents">
            <!-- Start Single Tab  -->
            <div
              class="tab-pane show active fade single-tab-area"
              id="professional"
              role="tabpanel"
              aria-labelledby="professional-tab"
            >
              <div class="personal-experience-inner mt--40">
                <div
                  class="row row--40"
                  v-for="(item, index) in skillList"
                  :key="item"
                >
                  <!-- Start Single Progressbar  -->
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="progress-wrapper" v-if="index % 2 === 0">
                      <div class="content">
                        <!-- <span class="subtitle">Features</span>
                        <h4 class="maintitle">Design Skill</h4> -->
                        <!-- Start Single Progress Charts -->
                        <div class="progress-charts">
                          <h6 class="heading heading-h6">{{ item.name }}</h6>
                          <div class="progress">
                            <div
                              class="progress-bar wow fadeInLeft"
                              data-wow-duration="0.5s"
                              data-wow-delay=".3s"
                              role="progressbar"
                              :style="'width: ' + item.percentage + '%'"
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span class="percent-label">
                                {{ item.percentage }}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <!-- End Single Progress Charts -->
                      </div>
                    </div>
                  </div>
                  <!-- End Single Progressbar  -->
                  <!-- Start Single Progressbar  -->
                  <div class="col-lg-6 col-md-6 col-12 mt_sm--60">
                    <div class="progress-wrapper" v-if="index % 2 !== 0">
                      <div class="content">
                        <!-- <span class="subtitle">Features</span>
                        <h4 class="maintitle">Development Skill</h4> -->
                        <!-- Start Single Progress Charts -->
                        <div class="progress-charts">
                          <h6 class="heading heading-h6">{{ item.name }}</h6>
                          <div class="progress">
                            <div
                              class="progress-bar wow fadeInLeft"
                              data-wow-duration="0.5s"
                              data-wow-delay=".3s"
                              role="progressbar"
                              :style="'width: ' + item.percentage + '%'"
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span class="percent-label">
                                {{ item.percentage }}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <!-- End Single Progress Charts -->
                      </div>
                    </div>
                  </div>
                  <!-- End Single Progressbar  -->
                </div>
              </div>
            </div>
            <!-- End Single Tab  -->
            <!-- end: Skill List -->

            <!-- start: Certification List  -->
            <!-- Start Single Tab  -->
            <div
              class="tab-pane fade"
              id="certification"
              role="tabpanel"
              aria-labelledby="certification-tab"
            >
              <div class="personal-experience-inner mt--40">
                <div class="row">
                  <!-- Start Skill List Area 2nd  -->
                  <div class="col-lg-10 col-md-12 col-12 mt_md--60 mt_sm--60">
                    <div class="content">
                      <!-- <span class="subtitle">2007 - 2010</span>
                       <h4 class="maintitle">Job Experience {{$t('skill.certifications')}}</h4> -->
                      <div class="experience-list">
                        <!-- Start Single List  -->
                        <div
                          class="resume-single-list"
                          v-for="item in certificationList"
                          :key="item.id"
                        >
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ item.title }}</h4>
                                <a :href="item.url" target="_blank">
                                  <span>
                                    {{ item.instituteName }}
                                    <i class="feather-arrow-up-right" />
                                  </span>
                                </a>
                              </div>
                              <div class="date-of-time">
                                <span>
                                  {{ item.dateRange }}
                                </span>
                              </div>
                            </div>
                            <p class="description">
                              {{ item.getLocalizedProperty("description") }}
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
            <!-- End Single Tab  -->
            <!-- end: Certification List  -->

            <!-- start: Achievement List  -->
            <!-- Start Single Tab  -->
            <div
              class="tab-pane fade"
              id="achievement"
              role="tabpanel"
              aria-labelledby="achievement-tab"
            >
              <div class="personal-experience-inner mt--40">
                <div class="row">
                  <!-- Start Skill List Area  -->
                  <div
                    class="col-lg-6 col-md-12 col-12"
                    v-for="(item, index) in achievementList"
                    :key="item.id"
                  >
                    <div class="content">
                      <!-- <span class="subtitle">2007 - 2010</span>
                      <h4 class="maintitle">Company Experience</h4> -->
                      <div class="experience-list">
                        <!-- Start Single List  -->
                        <div
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-delay="300"
                          data-aos-once="true"
                          class="resume-single-list"
                        >
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <a :href="item.url" target="_blank">
                                  <h4>{{ item.title }}</h4>
                                </a>
                                <span>{{ item.location }}</span>
                              </div>
                              <div class="date-of-time">
                                <span>{{ item.dateRange }}</span>
                              </div>
                            </div>
                            <p
                              class="description"
                              v-if="item.getLocalizedProperty('description')"
                            >
                              {{ item.getLocalizedProperty("description") }}
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
            <!-- End Single Tab  -->
            <!-- end: Achievement List  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PortfolioService } from "@/services/portfolio.service";

export default {
  name: "AppSkills",
  data() {
    return {
      certificationList: [],
      skillList: [],
      achievementList: [],
    };
  },

  async created() {
    const technicalSkills = await PortfolioService.getTechnicalSkills();
    this.skillList = technicalSkills;

    const certifications = await PortfolioService.getCertifications();
    this.certificationList = certifications;

    const achievements = await PortfolioService.getAchievements();
    this.achievementList = achievements;
  },
};
</script>
