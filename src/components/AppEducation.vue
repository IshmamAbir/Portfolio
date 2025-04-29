<template>
  <div class="rn-resume-area rn-section-gap section-separator" id="educations">
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
            <h2 class="title">Education Qualification</h2>
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
                    <div class="inner">
                      <div class="heading">
                        <div class="title">
                          <h4>{{ item.degree }}</h4>
                          <span>{{ item.institutionName }}</span>
                        </div>
                        <div class="date-of-time">
                          <span v-if="item.startTime && item.endTime"
                            >{{ item.startTime }} - {{ item.endTime }}</span
                          >
                          <span v-else-if="item.endTime === null">
                            {{ item.startTime }} -
                            {{ $t("common.continuing") }}</span
                          >
                          <span v-else-if="item.startTime === null">{{
                            item.endTime
                          }}</span>
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

        <!-- Start Single Service -->
        <!-- <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos-once="true"
          class="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
        >
          <div class="rn-service">
            <div class="inner">
              <div class="icon">
                <i data-feather="tv"></i>
              </div>
              <div class="content">
                <h4 class="title"><a href="#">App Development</a></h4>
                <p class="description">
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </p>
                <a class="read-more-button" href="#"
                  ><i class="feather-arrow-right"></i
                ></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
          </div>
        </div> -->
        <!-- End SIngle Service -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppEducationArea",
  data() {
    return {
      timeline: [
        {
          id: 1,
          degree: "BSc in CSE",
          institutionName: "International Islamic University Chittagong",
          startTime: "Jan 2023",
          endTime: "Apr 2023",
          jobDescription:
            "iohnroegjrogjrgs wsetws sgd fdhdg fgpjm nosim abir ishmam roh afnan alamgir chowdhury tght htksr.",
        },
        {
          id: 2,
          degree: "Higher Secondary Certificate (HSC)",
          institutionName: "Notre Dame College, Dhaka",
          startTime: null,
          endTime: "2015",
          jobDescription:
            "gnan ir chowdhury random tupminrg etom abc install the software kop coop maxvalue mcdonalds iftar tght htksr.",
        },
        {
          id: 3,
          degree: "Secondary School Certificate (SSC)",
          institutionName: "St. Placid's High School, Chittagong",
          startTime: null,
          endTime: "2013",
          jobDescription:
            "gnan ir chowdhury random tupminrg etom abc install the software kop coop maxvalue mcdonalds iftar tght htksr.",
        },
      ],
    };
  },
};
</script>
