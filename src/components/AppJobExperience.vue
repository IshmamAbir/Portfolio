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
          companyName: "Kodensya Co Ltd (株式会社興電舎)",
          companyWebsite: "https://kodensya.co.jp/",
          startTime: "Jan 2023",
          endTime: "Present",
          shortDescription_en: "I am currently working as a Software Development Engineer at Kodensya Co Ltd (株式会社興電舎). My main responsibilities include: Designing, coding, testing, and debugging company's core web applications. See details page for the complete technical details.",
          shortDescription_ja: "株式会社興電舎でソフトウェア開発エンジニアとして働いています。主な業務は、会社のコアとなるWebアプリケーションの設計、コーディング、テスト、デバッグです。技術的な詳細については、詳細ページをご覧ください。",
          description_en:
            "I completed my 4-year Bachelor's degree in Computer Science and Engineering at the International Islamic University Chittagong. During my time there, I actively participated in programming contests and hackathons. I also collaborated on various team projects and gained valuable experience in team leadership. Throughout my studies, I developed several web applications, which allowed me to gather practical, hands-on experience in web development.",
          description_ja:
            "私はチッタゴンの国際イスラーム大学でコンピュータサイエンスおよび工学の4年間の学士号を取得しました。大学生活の中で、プログラミングコンテストやハッカソンに積極的に参加しました。また、チームでのプロジェクトにも取り組み、チームリーダーとしての経験も積みました。多くのウェブアプリケーションを開発し、ウェブ開発における実践的な経験を積むことができました。",
          imgUrl: "",
        },
        {
          id: 2,
          position: "Associate Software Engineer-L2",
          companyName: "Brain Station 23 PLC",
          companyWebsite: "https://brainstation-23.com/",
          startTime: null,
          endTime: "2015",
          shortDescription_en: "I got promoted to the Level 2 Associate Software Engineer at Brain Station 23. See details page for the complete technical details.",
          shortDescription_ja: "私は Brain Station 23 でレベル 2 アソシエイト ソフトウェア エンジニアに昇進しました。完全な技術的詳細については、詳細ページをご覧ください。",
          description_en:
            "I completed my Higher Secondary Certificate in Science from Notre Dame College, the top-ranked college in Bangladesh. During my time there, I experienced significant academic growth and had the opportunity to build connections with many talented individuals from across the country. These connections have since expanded globally, with many now leading industries around the world. Additionally, I actively participated in various co-curricular activities, including photography, sports, Olympiads, and more.",
          description_ja:
            "私はバングラデシュで最も評価の高い大学であるノートルダム・カレッジで理科の高等学校卒業証書を取得しました。そこでの学びを通じて、私は大きな学問的成長を遂げ、全国各地から集まった才能ある多くの人々と交流を深めました。これらのつながりは現在、世界中に広がり、多くがさまざまな業界でリーダーとして活躍しています。また、写真、スポーツ、オリンピアードなど、さまざまな課外活動にも積極的に参加しました。",
          imgUrl: "src/assets/images/blog/blog-big-01.jpg",
        },
        {
          id: 3,
          position: "Associate Software Engineer-L1",
          companyName: "Brain Station 23 PLC",
          companyWebsite: "https://brainstation-23.com/",
          startTime: null,
          endTime: "2015",
          shortDescription_en: "I began my professional career as a full-time Associate Software Engineer at Brain Station 23 in 2021. It was a hybrid workplace, where I worked both remotely and onsite. Please refer to the details page for complete technical information.",
          shortDescription_ja: "私は2021年にBrain Station 23でフルタイムのアソシエイトソフトウェアエンジニアとしてキャリアをスタートしました。そこはハイブリッドな職場で、リモートワークとオフサイトワークの両方を行いました。完全な技術的詳細については、詳細ページをご覧ください。",
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
