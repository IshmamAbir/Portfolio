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
                      <p class="description justify-text">
                        <!-- {{ item.description }} -->
                        {{ item[`shortDescription_${$i18n.locale}`] }}
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
import JobDescriptionPopup from "./JobDescriptionPopup.vue";

export default {
  name: "AppJobExperience",
  components: { JobDescriptionPopup },
  data() {
    return {
      itemId:'',
      companyData: {},
      timeline: [
        {
          id: 1,
          position: "Software Development Engineer",
          companyName: "Kodensya Co. Ltd (株式会社興電舎)",
          companyWebsite: "https://kodensya.co.jp/",
          startTime: "Jan 2023",
          endTime: null,
          shortDescription_en: "I am currently working as a Software Development Engineer at Kodensya Co Ltd (株式会社興電舎). My main responsibilities include: Designing, coding, testing, and debugging company's core web applications. See details page for the complete technical details.",
          shortDescription_ja: "株式会社興電舎でソフトウェア開発エンジニアとして働いています。主な業務は、会社のコアとなるWebアプリケーションの設計、コーディング、テスト、デバッグです。技術的な詳細については、詳細ページをご覧ください。",
          description_en:
            "",
          description_ja:
            "",
          imgUrl: "",
        },
        {
          id: 2,
          position: "Associate Software Engineer-L2",
          companyName: "Brain Station 23 PLC",
          companyWebsite: "https://brainstation-23.com/",
          startTime: "Jan 2022",
          endTime: "Aug 2022",
          shortDescription_en: "I got promoted to the Level 2 Associate Software Engineer at Brain Station 23. See details page for the complete technical details.",
          shortDescription_ja: "私は Brain Station 23 でレベル 2 アソシエイト ソフトウェア エンジニアに昇進しました。完全な技術的詳細については、詳細ページをご覧ください。",
          description_en:
            ".",
          description_ja:
            "",
          imgUrl: "src/assets/images/blog/blog-big-01.jpg",
        },
        {
          id: 3,
          position: "Associate Software Engineer-L1",
          companyName: "Brain Station 23 PLC",
          companyWebsite: "https://brainstation-23.com/",
          startTime: "Sept 2021",
          endTime: "Dec 2021",
          shortDescription_en: "I began my professional career as a full-time Associate Software Engineer at Brain Station 23 in 2021. It was a hybrid workplace, where I worked both remotely and onsite. Please refer to the details page for complete technical information.",
          shortDescription_ja: "私は2021年にBrain Station 23でフルタイムのアソシエイトソフトウェアエンジニアとしてキャリアをスタートしました。そこはハイブリッドな職場で、リモートワークとオフサイトワークの両方を行いました。完全な技術的詳細については、詳細ページをご覧ください。",
          description_en:
            "",
          description_ja:
            "",
          imgUrl: "",
        },
        {
          id: 4,
          position: "Freelance Web Developer (Contract based)",
          companyName: "BroTech IT Ltd.",
          companyWebsite: "https://www.linkedin.com/company/brotech-it/",
          startTime: "Apr 2020",
          endTime: "Jan 2021",
          shortDescription_en: "My responsibility was to build a website for a client using HTML, CSS, Bootstrap and JavaScript. I also worked on the backend using Node.js. Please refer to the details page for complete technical information.",
          shortDescription_ja: "私の責任は、HTML、CSS、Bootstrap、JavaScriptを使用してクライアントのウェブサイトを構築することでした。また、Node.jsを使用してバックエンドの開発にも取り組みました。完全な技術的詳細については、詳細ページをご覧ください。",
          description_en:
            "",
          description_ja:
            "",
          imgUrl: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
.change-cursor {
  cursor: pointer;
}
</style>
