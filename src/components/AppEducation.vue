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
            <h2 class="title">{{ $t("education.education_header") }}</h2>
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
                      <p class="description justify-text">
                        <!-- {{ item.description }} -->
                        {{ item[`description_${$i18n.locale}`] }}
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
          startTime: "Mar 2016",
          endTime: "Mar 2021",
          description_en:
            "I completed my 4-year Bachelor's degree in Computer Science and Engineering at the International Islamic University Chittagong. During my time there, I actively participated in programming contests and hackathons. I also collaborated on various team projects and gained valuable experience in team leadership. Throughout my studies, I developed several web applications, which allowed me to gather practical, hands-on experience in web development.",
          description_ja:
            "私はチッタゴンの国際イスラーム大学でコンピュータサイエンスおよび工学の4年間の学士号を取得しました。大学生活の中で、プログラミングコンテストやハッカソンに積極的に参加しました。また、チームでのプロジェクトにも取り組み、チームリーダーとしての経験も積みました。多くのウェブアプリケーションを開発し、ウェブ開発における実践的な経験を積むことができました。",
        },
        {
          id: 2,
          degree: "Higher Secondary Certificate (HSC)",
          institutionName: "Notre Dame College, Dhaka",
          startTime: null,
          endTime: "2015",
          description_en:
            "I completed my Higher Secondary Certificate in Science from Notre Dame College, the top-ranked college in Bangladesh. During my time there, I experienced significant academic growth and had the opportunity to build connections with many talented individuals from across the country. These connections have since expanded globally, with many now leading industries around the world. Additionally, I actively participated in various co-curricular activities, including photography, sports, Olympiads, and more.",
          description_ja:
            "私はバングラデシュで最も評価の高い大学であるノートルダム・カレッジで理科の高等学校卒業証書を取得しました。そこでの学びを通じて、私は大きな学問的成長を遂げ、全国各地から集まった才能ある多くの人々と交流を深めました。これらのつながりは現在、世界中に広がり、多くがさまざまな業界でリーダーとして活躍しています。また、写真、スポーツ、オリンピアードなど、さまざまな課外活動にも積極的に参加しました。",
        },
        {
          id: 3,
          degree: "Secondary School Certificate (SSC)",
          institutionName: "St. Placid's High School, Chittagong",
          startTime: null,
          endTime: "2013",
          description_en:
            "I obtained my Secondary School Certificate in Science from St. Placid's High School, a renowned institution in Chittagong. In addition to my academic achievements, I actively participated in various sports competitions, including soccer, volleyball, table tennis, and basketball. I was also involved in several co-curricular activities, such as Scouts, the Red Cross, Science Olympiads, and many others.",
          description_ja:
            "私はチッタゴンの名門校であるセント・プラシッド高校で、理科の中等学校卒業証書を取得しました。学業の成果に加えて、サッカー、バレーボール、卓球、バスケットボールなど、さまざまなスポーツ競技に積極的に参加しました。また、スカウト活動や赤十字など、数多くの課外活動にも参加しました。",
        },
      ],
    };
  },
};
</script>
