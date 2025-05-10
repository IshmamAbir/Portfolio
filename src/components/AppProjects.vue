<template>
  <div class="rn-portfolio-area rn-section-gap section-separator" id="project">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            class="section-title text-center"
          >
            <!-- <span class="subtitle">
              Visit my portfolio and keep your feedback
            </span> -->
            <h2 class="title">{{ $t("project.project_header") }}</h2>
          </div>
        </div>
      </div>

      <div class="row row--25 mt--10 mt_md--10 mt_sm--10">
        <!-- Start Single Portfolio -->
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
          class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          v-for="item in projectList"
          :key="item.id"
        >
          <div
            class="rn-portfolio"
            data-toggle="modal"
            :data-target="'#projectId_' + item.id"
            @click.prevent="
              (projectId = 'projectId_' + item.id), (projectData = item)
            "
          >
            <div class="inner">
              <div
                class="thumbnail"
                style="
                  height: 250px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  overflow: hidden;
                "
              >
                <a href="javascript:void(0)">
                  <img
                    :src="
                      item.imgUrl && item.imgUrl !== ''
                        ? item.imgUrl
                        : 'src/assets/images/projects/github-logo.png'
                    "
                    alt="Project Images"
                    style="max-height: 100%; width: auto"
                  />
                </a>
              </div>
              <div class="content">
                <div class="category-info">
                  <div class="category-list">
                    <a href="javascript:void(0)"></a>
                  </div>
                  <div class="category-list">
                    <span>
                      <a
                        style="text-transform: capitalize"
                        href="javascript:void(0)"
                      >
                        <i class="feather-tag"></i>
                        {{ getProjectType(item.projectType) }}
                      </a>
                    </span>
                  </div>
                </div>
                <h4 class="title">
                  <a href="javascript:void(0)">
                    {{ item.name }}
                    <i class="feather-arrow-up-right"></i>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Portfolio -->
      </div>
    </div>
  </div>

  <project-popup :projectId="projectId" :projectData="projectData" />
</template>

<script>
import ProjectPopup from "./ProjectPopup.vue";
import { ProjectTypeList } from "../enums/project-type";

export default {
  name: "AppProjects",
  components: {
    ProjectPopup,
  },
  data() {
    return {
      projectId: null,
      projectData: {},
      projectList: [
        {
          id: 6,
          name: "Go Service Level Transaction",
          url: "https://github.com/IshmamAbir/Go-Service_Level_Transaction",
          imgUrl: "src/assets/images/projects/github+golang.png",
          projectType: "OPEN_SOURCE",
          myRole_en: "",
          myRole_ja: "",
          description_en:
            "This project presents a comprehensive approach to managing transactions in the business logic layer of a Go application, ensuring data consistency and integrity during complex operations involving multiple database tables.",
          description_ja:
            "このプロジェクトでは、Go アプリケーションのビジネス ロジック層でトランザクションを管理し、複数のデータベース テーブルが関係する複雑な操作中にデータの一貫性と整合性を確保するための包括的なアプローチを紹介します。",
          technologyUsed: ["Golang", "Postgres", "Gorm", "Gorilla/Mux"],
        },
        {
          id: 5,
          name: "Clean Architecture Go",
          url: "https://github.com/IshmamAbir/Clean-Architecture-Go-Postgres",
          imgUrl: "src/assets/images/projects/github+golang.png",
          projectType: "OPEN_SOURCE",
          myRole_en: "",
          myRole_ja: "",
          description_en:
            "This project showcases a backend architecture built with Golang without relying on any external frameworks. It implements Clean Architecture principles to ensure maintainability and scalability. Key features include API routing, API documentation powered by go-swagger, ORM integration with Gorm, and PostgreSQL for data storage. This setup can serve as an ideal template for backend development in Golang, providing a robust, framework-free solution for scalable web applications.",
          description_ja:
            "このプロジェクトは、外部フレームワークを使用せずに構築されたGolangのバックエンドアーキテクチャを示しています。クリーンアーキテクチャの原則を適用し、メンテナンス性とスケーラビリティを確保しています。主な特徴として、APIルーティング、go-swaggerによるAPIドキュメンテーション、Gormを用いたORM統合、およびPostgreSQLによるデータストレージを実装しています。このセットアップは、Golangを使用したバックエンド開発に最適なテンプレートとなり、スケーラブルなウェブアプリケーションの構築に貢献します。",
          technologyUsed: [
            "Golang",
            "Postgres",
            "Go-Swagger",
            "Gorm",
            "Gorilla/Mux",
            "Docker",
            "Vue.js",
            "Vuetify",
          ],
        },
        {
          id: 4,
          name: "Matrix Platform Limited",
          url: "https://matrixapparels.com/",
          imgUrl: "src/assets/images/projects/matrix_apparels.png",
          projectType: "freelance_work",
          myRole_en:
            "Planning, Requirement Analysis, Designing, Frontend Design, Deployment, Maintenance.",
          myRole_ja:
            "計画、要件分析、設計、フロントエンドデザイン、展開、保守。",
          description_en:
            "Matrix Apparels Limited is an export-oriented knit & woven garments factory located in Dhaka. Their portfolio website was constructed using the design they provided. I am responsible for the entire project, from start to deployment.",
          description_ja:
            "Matrix Apparels Limitedはダッカに位置する輸出志向のニットおよび織物衣料品工場です。彼らのポートフォリオウェブサイトは、提供されたデザインを使用して構築されました。私はこのプロジェクトの開始から展開まで、すべての責任を負っています。",
          technologyUsed: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Web Hosting",
            "Github Pages",
          ],
        },
        {
          id: 3,
          name: "Décor Supplier UK",
          url: "https://decorsupplier.co.uk/",
          imgUrl: "src/assets/images/projects/decor_supplier.jpeg",
          projectType: "freelance_work",
          myRole_en:
            "Planning, Meeting with the client, Requirement Analysis, Designing, Frontend Design & Modification.",
          myRole_ja:
            "計画、クライアントとのミーティング、要件分析、設計、フロントエンドデザインおよび修正。",
          description_en:
            "Décor Supplier UK is an online e-commerce store in the United Kingdom that sells home decorator items. It was created with DotNet, Angular, and Firebase.  My responsibility was to create the user interface and build the frontend according to the client's requirements.",
          description_ja:
            "Décor Supplier UKは、イギリスに拠点を置くオンラインのホームデコレーターアイテムを販売するeコマースストアです。このサイトはDotNet、Angular、Firebaseを使用して作成されました。私の責任は、クライアントの要件に従ってユーザーインターフェースを作成し、フロントエンドを構築することでした。",
          technologyUsed: [
            "Angular",
            "Firebase",
            "DotNet",
            "Firebase",
            "Bootstrap",
          ],
        },
        {
          id: 7,
          name: "Weather Web App",
          url: "https://weather-webapp-kodensya.netlify.app/#/",
          imgUrl: "src/assets/images/projects/weather-webapp.jpeg",
          projectType: "personal",
          myRole_en:
            "Requirement Analysis, Template Designing, Frontend Development,API Integration, Testing, Deployment.",
          myRole_ja:
            "要件分析、テンプレートデザイン、フロントエンド開発、API統合、テスト、展開。",
          description_en:
            "This project was the Technical Test for Kodensya.During the interview process, I was asked to build a weather web app using VueJs 3, OpenWeather API to get weather data and show it on the UI. I was responsible for the entire project, from start to deployment.",
          description_ja:
            "このプロジェクトは、Kodensyaの技術テストでした。面接の過程で、VueJs 3を使って天気のウェブアプリを作成し、OpenWeather APIを使って天気データを取得し、UIに表示するように指示されました。私はプロジェクトの開始から展開まで、全ての工程を担当しました。",
          technologyUsed: [
            "VueJs 3",
            "OpenWeather API",
            "Netlify",
            "Bootstrap",
          ],
        },
        {
          id: 2,
          name: "Spring Security Authentication App",
          url: "https://github.com/IshmamAbir/Authentication-App-Spring-Security",
          imgUrl: null,
          projectType: "personal",
          myRole_en:
            "Planning, Requirement Analysis, Designing, Backend Development, Frontend Designing, Testing",
          myRole_ja:
            "計画、要件分析、設計、バックエンド開発、フロントエンドデザイン、テスト",
          description_en:
            "This is the implementation of role-based authentication and authorization (RBAC) project built with Spring security.  Users can view and modify their personal information by registering and logging in.  The administrator can access all user data by logging in.  I perform the entire implementation by myself.  This project implements CRUD functionality, relational mapping, and spring security authentication.",
          description_ja:
            "これは、Spring Securityを使用して構築されたロールベースの認証と認可（RBAC）プロジェクトの実装です。ユーザーは登録してログインすることで、個人情報の表示と変更ができます。管理者はログインすることで、すべてのユーザーデータにアクセスできます。このプロジェクトの実装はすべて自分で行いました。このプロジェクトはCRUD機能、リレーショナルマッピング、Spring Security認証を実装しています。",
          technologyUsed: [
            "Java",
            " Spring Boot",
            "Spring Security",
            "Thymeleaf",
            "MySQL Database",
            "HTML",
            "CSS",
            "Bootstrap",
          ],
        },
        {
          id: 1,
          name: "COVID-19 Tracker",
          url: "https://covid19-tracker-31b45.web.app",
          imgUrl: "src/assets/images/projects/covid_tracker.png",
          projectType: "personal",
          myRole_en:
            "Planning, Requirement Analysis, Designing, Frontend Design, Deployment, Maintenance.",
          myRole_ja: "計画、要件分析、設計、フロントエンドデザイン、展開、保守",
          description_en:
            "A basic single page application (SPA) that allows users to pick any country and see the country's overall covid report.",
          description_ja: "",
          technologyUsed: [
            "Angular 9",
            "Firebase",
            "HTML",
            "CSS",
            "Bootstrap",
            "Web API",
          ],
        },
        // {
        //   id: 2,
        //   name: "",
        //   url: "",
        //   imgUrl: null,
        //   projectType: "",
        //   myRole_en: "",
        //   myRole_ja: "",
        //   description_en: "",
        //   description_ja: "",
        //   technologyUsed: [""],
        // },
      ],
    };
  },
  methods: {
    getProjectType(code) {
      var projectType = ProjectTypeList.find(
        (x) => x.code === code.toUpperCase()
      );
      // return projectType ? projectType.name : code;
      return (
        this.$t(`project_type.${projectType?.name?.toLowerCase()}`) || code
      );
    },
  },
};
</script>
