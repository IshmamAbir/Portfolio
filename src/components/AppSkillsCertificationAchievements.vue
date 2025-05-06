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
                                <h4>{{ item.jobTitle }}</h4>
                                <a :href="item.companyUrl" target="_blank">
                                  <span>
                                    {{ item.companyName }}
                                    <i class="feather-arrow-up-right" />
                                  </span>
                                </a>
                              </div>
                              <div class="date-of-time">
                                <span
                                  >{{ item.startTime }} -
                                  {{ item.endTime }}</span
                                >
                              </div>
                            </div>
                            <p class="description">
                              {{ item[`jobDescription_${$i18n.locale}`] }}
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
                                <span>{{ item.achieveTime }}</span>
                              </div>
                            </div>
                            <p class="description">
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
            <!-- End Single Tab  -->
            <!-- end: Achievement List  -->
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
            "https://www.udemy.com/certificate/UC-fb340153-d620-4bff-9f15-516e15b98583/",
          startTime: "Mar 2023",
          endTime: "Jul 2023",
          jobDescription_en:
            "This certification course from Udemy helped me to learn the basics of VueJs 3, a progressive javascript framework.",
          jobDescription_ja:
            "Udemyのこの認定コースは、プログレッシブJavaScriptフレームワークであるVueJs 3の基礎を学ぶのに役立ちました。",
        },
        {
          id: 1,
          jobTitle: "BJET Advanced Course",
          companyName: "University of Miyazaki, Japan",
          companyUrl: "https://www.jica.go.jp/bangladesh/bangland/b-jet.html",
          startTime: "Oct 2022",
          endTime: "Dec 2022",
          jobDescription_en:
            "The BJET Advanced Course, conducted by the University of Miyazaki, is a continuation of the fully funded BJET Basic Course held in Japan. This program provides participants with hands-on experience through internships at Japanese companies, while simultaneously offering in-depth training in the Japanese language and work culture at University of Miyazaki.",
          jobDescription_ja:
            "宮崎大学が提供するBJETアドバンスコースは、日本で実施される全額支援のBJETベーシックコースを基礎として構成されています。このプログラムでは、日本企業でのインターンシップを通じて実践的な経験を積むと同時に、宮崎大学で日本語と日本のビジネス文化に関する包括的なトレーニングを受けることができます。",
        },
        {
          id: 2,
          jobTitle: "BJET Basic Course",
          companyName: "BJET Center (Online Class)",
          companyUrl: "https://www.jica.go.jp/bangladesh/bangland/b-jet.html",
          startTime: "Apr 2022",
          endTime: "Sept 2022",
          jobDescription_en:
            "BJET (Bangladesh-Japan ICT Engineers’ Training Program) is a skills development initiative designed to prepare Bangladeshi ICT professionals for careers in Japan’s tech industry. The program offers training in Japanese language, business culture, and IT skills.",
          jobDescription_ja:
            "BJET（バングラデシュ・日本ICTエンジニア研修プログラム）は、バングラデシュのICT専門家が日本のテクノロジー業界で活躍できるよう育成することを目的としたスキル開発プログラムです。このプログラムでは、日本語、ビジネス文化、ITスキルの研修を提供しています。",
        },
        {
          id: 3,
          jobTitle: "Java From Basic to Professional",
          companyName: "PONDIT",
          companyUrl: "https://pondit.com/",
          startTime: "May 2020",
          endTime: "Dec 2020",
          jobDescription_en:
            "Pondit is a Bangladesh-based online training platform dedicated to equipping learners with in-demand ICT and professional skills. Various courses are led by experienced mentors from leading software companies in Bangladesh, ensuring practical, industry-relevant training. Beyond courses, Pondit offers internships, industrial attachments, and workshops, fostering career readiness and bridging the gap between education and employment.",
          jobDescription_ja:
            "Ponditは、バングラデシュを拠点とするオンライントレーニングプラットフォームで、学習者に需要の高いICTスキルと専門スキルを身につけさせることに特化しています。バングラデシュの大手ソフトウェア企業出身の経験豊富なメンターが指導する様々なコースを通じて、実践的で業界に即したトレーニングを提供しています。コース以外にも、Ponditはインターンシップ、実務研修、ワークショップなどを提供し、キャリア準備を促進し、教育と就職のギャップを埋める支援を行っています。",
        },
        {
          id: 4,
          jobTitle: "Ultimate Java Development & Certification Course",
          companyName: "EDUONIX ",
          companyUrl: "https://www.eduonix.com/certificate/1d146674ae",
          startTime: "May 2020",
          endTime: "Jul 2020",
          jobDescription_en:
            "Eduonix Learning Solutions is an e-learning platform, offering a wide range of online courses in technology, design, business, and personal development.",
          jobDescription_ja:
            "Eduonix Learning Solutions は、テクノロジー、デザイン、ビジネス、自己啓発の幅広いオンライン コースを提供する e ラーニング プラットフォームです。",
        },
      ],
      skillList: [
        { name: "Java", percentage: 90 },
        { name: "Golang", percentage: 90 },
        { name: "Springboot", percentage: 85 },
        { name: "VueJs 3", percentage: 70 },
        { name: "Vuetify 3", percentage: 80 },
        { name: "Mysql", percentage: 70 },
        { name: "Github", percentage: 90 },
        { name: "Github Action", percentage: 85 },
        { name: "Redis", percentage: 80 },
        { name: "Postgres", percentage: 70 },
        { name: "Docker", percentage: 65 },
      ],
      achievementList: [
        {
          id: 1,
          title: "Banglalink Code for a cause 2.0 Hackathon",
          location: "Banglalink Headquarter, Dhaka, Bangladesh",
          url: "https://www.linkedin.com/posts/ishmam-abir_sdgabrhackathon-codeabrforabraabrcauseabr2-activity-6642770546260054016-zpB3/",
          achieveTime: "January 2020",
          description_en:
            "It was a national-level tech hackathon competition among students from across the country, and I secured fourth place.",
          description_ja:
            "これは全国の学生を対象とした技術系ハッカソンコンテストで、私は第4位を獲得しました。",
        },
        {
          id: 2,
          title: "IIUC Tech fest 2020",
          location: "International Islamic University, Chittagong,, Bangladesh",
          url: "https://www.linkedin.com/posts/ishmam-abir_techfest-contest-activity-6632335551154479104-ML17/",
          achieveTime: "March 2020",
          description_en:
            "At the IIUC Tech Fest 2020, I achieved notable success by securing the championship in the App Development Contest and earning the runner-up position in the Idea Generation Competition. These accomplishments reflect my strong technical skills and creative problem-solving abilities.",
          description_ja:
            "IIUCテックフェスト2020では、アプリ開発コンテストで優勝し、アイデア創出コンペティションで準優勝を獲得するという顕著な成果を収めました。これらの実績は、私の高度な技術力と創造的な問題解決能力を示しています。",
        },
      ],
    };
  },
};
</script>
