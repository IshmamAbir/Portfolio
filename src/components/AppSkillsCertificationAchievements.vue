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
                      <div
                        class="experience-list"
                        v-for="item in certificationList"
                        :key="item.id"
                      >
                        <!-- Start Single List  -->
                        <div class="resume-single-list">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ item.jobTitle }}</h4>
                                <span>
                                  {{ item.companyName }}
                                </span>
                              </div>
                              <div class="date-of-time">
                                <span
                                  >{{ item.startTime }} -
                                  {{ item.endTime }}</span
                                >
                              </div>
                            </div>
                            <p class="description">
                              {{ item.jobDescription }}
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
                  <div class="col-lg-6 col-md-12 col-12">
                    <div class="content">
                      <span class="subtitle">2007 - 2010</span>
                      <h4 class="maintitle">Company Experience</h4>
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
                                <h4>Personal Portfolio April Fools</h4>
                                <span>University of DVI (1997 - 2001)</span>
                              </div>
                              <div class="date-of-time">
                                <span>4.30/5</span>
                              </div>
                            </div>
                            <p class="description">
                              The education should be very interactual. Ut
                              tincidunt est ac dolor aliquam sodales. Phasellus
                              sed mauris hendrerit, laoreet sem in, lobortis
                              mauris hendrerit ante.
                            </p>
                          </div>
                        </div>
                        <!-- End Single List  -->

                        <!-- Start Single List  -->
                        <div
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-delay="500"
                          data-aos-once="true"
                          class="resume-single-list"
                        >
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>Examples Of Personal Portfolio</h4>
                                <span>College of Studies (2000 - 2002)</span>
                              </div>
                              <div class="date-of-time">
                                <span>4.50/5</span>
                              </div>
                            </div>
                            <p class="description">
                              Maecenas finibus nec sem ut imperdiet. Ut
                              tincidunt est ac dolor aliquam sodales. Phasellus
                              sed mauris hendrerit, laoreet sem in, lobortis
                              mauris hendrerit ante.
                            </p>
                          </div>
                        </div>
                        <!-- End Single List  -->

                        <!-- Start Single List  -->
                        <div
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-delay="700"
                          data-aos-once="true"
                          class="resume-single-list"
                        >
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>Tips For Personal Portfolio</h4>
                                <span>University of Studies (1997 - 2001)</span>
                              </div>
                              <div class="date-of-time">
                                <span>4.80/5</span>
                              </div>
                            </div>
                            <p class="description">
                              If you are going to use a passage. Ut tincidunt
                              est ac dolor aliquam sodales. Phasellus sed mauris
                              hendrerit, laoreet sem in, lobortis mauris
                              hendrerit ante.
                            </p>
                          </div>
                        </div>
                        <!-- End Single List  -->
                      </div>
                    </div>
                  </div>
                  <!-- End Skill List Area  -->

                  <!-- Start Skill List Area 2nd  -->
                  <div class="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                    <div class="content">
                      <span class="subtitle">2007 - 2010</span>
                      <h4 class="maintitle">Job Experience</h4>
                      <div class="experience-list">
                        <!-- Start Single List  -->
                        <div
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-delay="500"
                          data-aos-once="true"
                          class="resume-single-list"
                        >
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>Diploma in Web Development</h4>
                                <span>BSE In CSE (2004 - 2008)</span>
                              </div>
                              <div class="date-of-time">
                                <span>4.70/5</span>
                              </div>
                            </div>
                            <p class="description">
                              Contrary to popular belief. Ut tincidunt est ac
                              dolor aliquam sodales. Phasellus sed mauris
                              hendrerit, laoreet sem in, lobortis mauris
                              hendrerit ante.
                            </p>
                          </div>
                        </div>
                        <!-- End Single List  -->

                        <!-- Start Single List  -->
                        <div
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-delay="700"
                          data-aos-once="true"
                          class="resume-single-list"
                        >
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>The Personal Portfolio Mystery</h4>
                                <span>Job at Rainbow-Themes (2008 - 2016)</span>
                              </div>
                              <div class="date-of-time">
                                <span>4.95/5</span>
                              </div>
                            </div>
                            <p class="description">
                              Generate Lorem Ipsum which looks. Ut tincidunt est
                              ac dolor aliquam sodales. Phasellus sed mauris
                              hendrerit, laoreet sem in, lobortis mauris
                              hendrerit ante.
                            </p>
                          </div>
                        </div>
                        <!-- End Single List  -->

                        <!-- Start Single List  -->
                        <div
                          data-aos="fade-up"
                          data-aos-duration="500"
                          data-aos-delay="900"
                          data-aos-once="true"
                          class="resume-single-list"
                        >
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>Diploma in Computer Science</h4>
                                <span
                                  >Works at Plugin Development (2016 -
                                  2020)</span
                                >
                              </div>
                              <div class="date-of-time">
                                <span>5.00/5</span>
                              </div>
                            </div>
                            <p class="description">
                              Maecenas finibus nec sem ut imperdiet. Ut
                              tincidunt est ac dolor aliquam sodales. Phasellus
                              sed mauris hendrerit, laoreet sem in, lobortis
                              mauris hendrerit ante.
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSkills",
  data() {
    return {
      certificationList: [
        {
          id: 1,
          jobTitle: "Complete Vue Developer Bootcamp",
          companyName: "ZTM Academy (Udemy)",
          companyUrl:
            "https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/",
          startTime: "Mar 2023",
          endTime: "Aug 2023",
          jobDescription:
            "This certification course helped me to learn the basics of VueJs 3, a progressive javascript framework",
        },
        {
          id: 1,
          jobTitle: "BJET Advanced Course",
          companyName: "University of Miyazaki, Japan",
          companyUrl: "https://www.jica.go.jp/bangladesh/bangland/b-jet.html",
          startTime: "Oct 2022",
          endTime: "Dec 2022",
          jobDescription:
            "iohnroegjrogjrgs wsetws sgd fdhdg fgpjm nosim abir ishmam roh afnan alamgir chowdhury tght htksr.",
        },
        {
          id: 2,
          jobTitle: "BJET Basic Course",
          companyName: "BJET Center (Online Class)",
          companyUrl: "https://www.jica.go.jp/bangladesh/bangland/b-jet.html",
          startTime: "Apr 2022",
          endTime: "Sept 2022",
          jobDescription:
            "iohnroegjrogjrgs wsetws sgd fdhdg fgpjm nosim abir ishmam roh afnan alamgir chowdhury tght htksr.",
        },
        {
          id: 3,
          jobTitle: "Java From Basic to Professional",
          companyName: "PONDIT",
          companyUrl: "https://pondit.com/",
          startTime: "May 2020",
          endTime: "Dec 2020",
          jobDescription:
            "iohnroegjrogjrgs wsetws sgd fdhdg fgpjm nosim abir ishmam roh afnan alamgir chowdhury tght htksr.",
        },
        {
          id: 2,
          jobTitle: "Ultimate Java Development & Certification Course",
          companyName: "EDUONIX ",
          companyUrl: "https://www.eduonix.com/certificate/1d146674ae",
          startTime: "May 2020",
          endTime: "Jul 2020",
          jobDescription:
            "gnan ir chowdhury random tupminrg etom abc install the software kop coop maxvalue mcdonalds iftar tght htksr.",
        },
      ],
      skillList: [
        { name: "Java", percentage: 90 },
        { name: "Golang", percentage: 90 },
        { name: "VueJs", percentage: 70 },
        { name: "Vuetify", percentage: 80 },
        { name: "Mysql", percentage: 70 },
        { name: "Github Action", percentage: 86 },
        { name: "Redis", percentage: 80 },
        { name: "Postgres", percentage: 70 },
        { name: "", percentage: 90 },
        { name: "", percentage: 90 },
      ],
      achievementList: [],
    };
  },
};
</script>
