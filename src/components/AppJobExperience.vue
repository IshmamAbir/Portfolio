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
          companyLocation:"Nobeoka, Miyazaki, Japan",
          shortDescription_en: "I am currently working as a Software Development Engineer at Kodensya Co Ltd (株式会社興電舎). My main responsibilities include: Designing, coding, testing, and debugging company's core web applications. See details page for the complete technical details.",
          shortDescription_ja: "株式会社興電舎でソフトウェア開発エンジニアとして働いています。主な業務は、会社のコアとなるWebアプリケーションの設計、コーディング、テスト、デバッグです。技術的な詳細については、詳細ページをご覧ください。",
          description_en:
            `
            <P>
            Kodensha Co., Ltd., established in 1949 and headquartered in Miyazaki, Japan, has long been recognized for its expertise in electrical facility construction and the sale of industrial electrical equipment.
            <br>
            In recent years, the company has expanded into the IT sector, offering innovative software solutions to support Digital Transformation (DX). By integrating advanced technology with its engineering roots, Kodensha is committed to driving efficiency, safety, and modernization across industries.
            <P>
            <h4>Job Description</h4>
            <p>
              At Kodensya, i was responsible for complete lifecycle of database design, designing, developing & maintaining their system software, upgrading their old softwares and create modularity with their new software.
              <br>
              I have implemented clean architecture using golang on this project without using any framework. Also, applied multi-module architecture so that old softwares can easily merged as a module to the current system as well as new modules can be introduced easily without modifying the whole systems in the backend. 
              Also, I designed the frontend using Vuetify 3, a vueJs component framework and updated it to be user friendly.
              <br>
              This web aplicaaation is currently in live and our company and several other customers are using it, and we are also developing new features and modules that will scale this project.  
            </p>
              <h4>Technology Used</h4>
              <P>
                Technology I got used here to level up my knowledge are given below
                
                <h6>Backend Responsibilities</h6>
                <ul>
                  <li>
                    R&D for new web application using <b>Golang</b> as backend.
                  </li>
                  <li>
                    Database design & ER diagram creation for the backend while keeping in mind the modularity of the system.
                  </li>
                  <li>
                    Designed and implemented <a href="https://github.com/IshmamAbir/bakery-multimodule-golang" target="_blank">Multi Module Architecture</a> in the backend.
                  </li>
                  <li>
                    Applied <a href="https://github.com/IshmamAbir/Clean-Architecture-Go-Postgres" target="_blank">Clean Architecture</a> in the backend without using any kind of framework.
                  </li>
                  <li>
                    <a href="https://gorm.io/index.html" target="_blank">Gorm</a> as the Full-Featured ORM library for golang.
                  </li>
                  <li>
                    <a href="https://github.com/gorilla/mux" target="_blank">Gorilla mux</a> as HTTP router.
                  </li>
                  <li>
                    Implemented <a href="https://github.com/IshmamAbir/Clean-Architecture-Go-Postgres/tree/swagger-golang" target="_blank">Go Swagger</a> for API documentations and command line formatter and documentations generator in multi module project
                  </li>
                  <li>
                    Optimised Uploaded image size by compressing to smaller size, adding watermark to uploaded image. Added a demo <a href="https://github.com/IshmamAbir/photo-optimize-go" target="_blank">here</a>
                  </li>
                  <li>
                    Use of <a href="https://github.com/IshmamAbir/TimescaleDB-Golang" target="_blank">timescaledb</a> for time series data.
                  </li>
                  <li>
                    Implemented <a href="https://github.com/IshmamAbir/Go-Service_Level_Transaction" target="_blank">service level transaction</a> for data consistency in database.
                  </li>
                </ul>
                <h6>Frontend Responsibilities</h6>
                <ul>
                  <li>
                    Responsible for Vue version upgrade from Vue 2 to Vue 3.
                  </li>
                  <li>
                    Responsible for implementing Vuetify 3 on the new project. 
                  </li>
                  <li>
                    Introduced to <a href="https://pinia.vuejs.org/" target="_blank">pinia</a>, a state management library for Vue in the new project.
                  </li>
                  <li>
                    Introduced <a href="https://vite.dev/" target="_blank">vite</a>, a modern, fast, and lightweight build tool for Vue which is faster and more efficient and loads faster then previous softwares.
                  </li>
                  <li>
                    Implemented our own pdf reader component to read & control pdf actions in the application. 
                  </li>
                  <li>
                    Created & implemented a <a href="https://github.com/IshmamAbir/vue-dxf-viewer" target="_blank">dxf file(.DXF) viewer</a> to view Autocad files & control the layers of the file in the web.
                  </li>
                  <li>
                    other libraries like vue-router, vue3-toastify, vue-chartjs, v-phone-input, vue-qrcode, vue-uuid implement in the frontend. 
                  </li>
                </ul>
                
                <h6>Server Responsibilities</h6>
                <ul>
                  <li>
                    Responsible to create a <a href="https://dev.to/ishmam_abir/set-up-your-own-local-gitlab-server-self-hosted-gitlab-4d1" target="_blank">Gitlab local server</a> to maintain version controlling of the company's codebase & dockerize to company server.
                  </li>
                  <li>
                    Maintaining database, redis build file container at company's server.
                  </li>
                </ul>
              </p>
            `,
          description_ja:
            `
            <P>
              株式会社コデンシャは、1949年に設立され、日本の宮崎市に本社を構え、長年にわたり電気設備工事および産業用電気機器の販売において高い専門性を誇っています。
              <br>
              近年では、IT分野にも進出し、デジタルトランスフォーメーション（DX）を支援する革新的なソフトウェアソリューションを提供しています。先進技術とエンジニアリングのノウハウを融合させることで、業界全体の効率化、安全性、近代化の推進に取り組んでいます。
            </P>
            <h4>職務内容</h4>
            <p>
              コデンシャでは、データベース設計のライフサイクル全体を担当し、システムソフトウェアの設計、開発、保守、旧ソフトウェアのアップグレード、新ソフトウェアとのモジュール化を行いました。
              <br>
              このプロジェクトでは、フレームワークを使用せずにGolangを使ってクリーンアーキテクチャを実装しました。また、マルチモジュールアーキテクチャを適用し、既存の旧ソフトウェアをモジュールとして統合しやすくし、新しいモジュールも既存のシステム全体を修正せずに導入できる構成にしました。
              フロントエンドはVuetify 3（Vue.jsのコンポーネントフレームワーク）を使用して設計し、ユーザーフレンドリーなUIへと更新しました。
              <br>
              このWebアプリケーションは現在稼働中で、当社および複数の顧客が使用しており、さらにスケーラビリティを高めるための新機能やモジュールの開発も進めています。
            </p>
            <h4>使用技術</h4>
            <P>
              このプロジェクトで習得・活用した技術は以下の通りです。

              <h6>バックエンドの担当範囲</h6>
              <ul>
                <li>
                  バックエンドとして<b>Golang</b>を用いた新規WebアプリケーションのR&D。
                </li>
                <li>
                  システムのモジュール性を考慮したデータベース設計およびER図の作成。
                </li>
                <li>
                  バックエンドに<a href="https://github.com/IshmamAbir/bakery-multimodule-golang" target="_blank">マルチモジュールアーキテクチャ</a>を設計・実装。
                </li>
                <li>
                  フレームワークを使わずに<a href="https://github.com/IshmamAbir/Clean-Architecture-Go-Postgres" target="_blank">クリーンアーキテクチャ</a>を適用。
                </li>
                <li>
                  Golang用の高機能ORMライブラリである<a href="https://gorm.io/index.html" target="_blank">Gorm</a>を使用。
                </li>
                <li>
                  HTTPルーターとして<a href="https://github.com/gorilla/mux" target="_blank">Gorilla mux</a>を使用。
                </li>
                <li>
                  APIドキュメントとコマンドラインフォーマッター生成のために、マルチモジュールプロジェクト内で<a href="https://github.com/IshmamAbir/Clean-Architecture-Go-Postgres/tree/swagger-golang" target="_blank">Go Swagger</a>を実装。
                </li>
                <li>
                  画像アップロード時に画像サイズを圧縮し、透かしを追加することで最適化。デモは<a href="https://github.com/IshmamAbir/photo-optimize-go" target="_blank">こちら</a>。
                </li>
                <li>
                  時系列データ用に<a href="https://github.com/IshmamAbir/TimescaleDB-Golang" target="_blank">TimescaleDB</a>を使用。
                </li>
                <li>
                  データベースの整合性を保つために<a href="https://github.com/IshmamAbir/Go-Service_Level_Transaction" target="_blank">サービスレベルトランザクション</a>を実装。
                </li>
              </ul>
              <h6>フロントエンドの担当範囲</h6>
              <ul>
                <li>
                  Vue 2 から Vue 3 へのバージョンアップを担当。
                </li>
                <li>
                  新プロジェクトに Vuetify 3 を導入。
                </li>
                <li>
                  新プロジェクトで Vue の状態管理ライブラリである<a href="https://pinia.vuejs.org/" target="_blank">Pinia</a>を導入。
                </li>
                <li>
                  高速で軽量なビルドツール<a href="https://vite.dev/" target="_blank">Vite</a>を導入し、旧システムよりも高速な読み込みを実現。
                </li>
                <li>
                  PDFの読み込みおよび操作制御のための独自PDFビューアコンポーネントを実装。
                </li>
                <li>
                  AutoCADファイル(.DXF)の表示とレイヤー操作を可能にする<a href="https://github.com/IshmamAbir/vue-dxf-viewer" target="_blank">DXFビューア</a>を作成・導入。
                </li>
                <li>
                  その他ライブラリ：vue-router、vue3-toastify、vue-chartjs、v-phone-input、vue-qrcode、vue-uuidなどをフロントエンドに実装。
                </li>
              </ul>

              <h6>サーバー関連の担当範囲</h6>
              <ul>
                <li>
                  会社のコードベースのバージョン管理とDocker化のために、<a href="https://dev.to/ishmam_abir/set-up-your-own-local-gitlab-server-self-hosted-gitlab-4d1" target="_blank">ローカルGitLabサーバー</a>を構築。
                </li>
                <li>
                  会社サーバーでのデータベース・Redis・ビルドファイルコンテナの管理。
                </li>
              </ul>
            </P>
            `,
          imgUrl: "",
        },
        {
          id: 2,
          position: "Associate Software Engineer-L2",
          companyName: "Brain Station 23 PLC",
          companyWebsite: "https://brainstation-23.com/",
          startTime: "Jan 2022",
          endTime: "Aug 2022",
          companyLocation:"Dhaka, Bangladesh",
          shortDescription_en: "I got promoted to the Level 2 Associate Software Engineer at Brain Station 23. See details page for the complete technical details.",
          shortDescription_ja: "私は Brain Station 23 でレベル 2 アソシエイト ソフトウェア エンジニアに昇進しました。完全な技術的詳細については、詳細ページをご覧ください。",
          description_en:
            `
            <p>
              Brain Station 23 is a top software development company from Bangladesh, providing custom software, web and mobile apps, and cloud solutions. Serving global clients across various industries, it leverages modern technologies and agile methods to deliver secure, scalable, and innovative digital solutions that drive business transformation.
              <br>
              I was promoted to Level 2 Associate Software Engineer within just four months of joining as a Level 1. This was a significant achievement for me, especially considering that I was working at the largest software company in Bangladesh and competing with highly talented engineers from across the country.
            </p>
            <h4>Job Responsibilities</h4>
            <p>
              Main responsibilities include:
              <ul>
                <li>
                  Developing well maintained apis using Java Spring Boot.
                </li>
                <li>
                  Responsible for complete story's requirement analysis, database design & create well organized apis.
                </li>
                <li>
                  Creating MVP products with proper architecture. Implement database normalization.
                </li>
                <li>
                  Maintaining code quality through code reviews and code refactoring.
                </li>
                <li>
                  Creating report design and implementing apis using Jasper Report.
                </li>
                <li>
                  Designing, coding, testing, and debugging client's web applications.
                </li>
              </ul>
            </p>
            <h6>Framework, Tools & Technologies</h6>
            <ul>
              <li>
                Java Spring Boot
              </li>
              <li>
                Jasper Report
              </li>
              <li>
                Git
              </li>
              <li>
                MySQL
              </li>
              <li>
                Trello
              </li>
            </ul>
            `,
          description_ja:
            `
            <p>
              Brain Station 23はバングラデシュ発のトップソフトウェア開発企業であり、カスタムソフトウェア、Webおよびモバイルアプリ、クラウドソリューションを提供しています。さまざまな業界のグローバルクライアントにサービスを提供し、最新技術とアジャイル手法を活用して、安全でスケーラブルかつ革新的なデジタルソリューションを提供し、ビジネスの変革を推進しています。
              <br>
              入社からわずか4か月で、アソシエイトソフトウェアエンジニア レベル1からレベル2へ昇進しました。バングラデシュ最大のソフトウェア企業で、全国から集まった優秀なエンジニアたちと競い合う中での昇進は、私にとって非常に大きな成果でした。
            </p>
            <h4>職務内容</h4>
            <p>
              主な職務内容は以下の通りです：
              <ul>
                <li>
                  Java Spring Bootを使用して保守性の高いAPIを開発する。
                </li>
                <li>
                  ストーリーの要件分析、データベース設計、整理されたAPIの作成を担当する。
                </li>
                <li>
                  適切なアーキテクチャを用いたMVP製品の作成と、データベースの正規化を実装する。
                </li>
                <li>
                  コードレビューやリファクタリングを通じてコード品質を維持する。
                </li>
                <li>
                  Jasper Reportを使用して帳票の設計およびAPIを実装する。
                </li>
                <li>
                  クライアントのWebアプリケーションの設計、コーディング、テスト、およびデバッグを行う。
                </li>
              </ul>
            </p>
            <h6>使用フレームワーク・ツール・技術</h6>
            <ul>
              <li>
                Java Spring Boot
              </li>
              <li>
                Jasper Report
              </li>
              <li>
                Git
              </li>
              <li>
                MySQL
              </li>
              <li>
                Trello
              </li>
            </ul>
            `,
          imgUrl: "files/company/Brain-Station-23.jpg",
        },
        {
          id: 3,
          position: "Associate Software Engineer-L1",
          companyName: "Brain Station 23 PLC",
          companyWebsite: "https://brainstation-23.com/",
          startTime: "Sept 2021",
          endTime: "Dec 2021",
          companyLocation:"Dhaka, Bangladesh",
          shortDescription_en: "I began my professional career as a full-time Associate Software Engineer at Brain Station 23 in 2021. It was a hybrid workplace, where I worked both remotely and onsite. Please refer to the details page for complete technical information.",
          shortDescription_ja: "私は2021年にBrain Station 23でフルタイムのアソシエイトソフトウェアエンジニアとしてキャリアをスタートしました。そこはハイブリッドな職場で、リモートワークとオフサイトワークの両方を行いました。完全な技術的詳細については、詳細ページをご覧ください。",
          description_en:
            `
            <p>
              Brain Station 23 is a top software development company from Bangladesh, providing custom software, web and mobile apps, and cloud solutions. Serving global clients across various industries, it leverages modern technologies and agile methods to deliver secure, scalable, and innovative digital solutions that drive business transformation.
            </p>
            <h4>Job Responsibilities</h4>
            <p>
              Main responsibilities include:
              <ul>
                <li>
                  Developing well maintained apis using Java Spring Boot.
                </li>
                <li>
                  Maintaining code quality through code reviews and code refactoring.
                </li>
                <li>
                  Creating report design and implementing apis using Jasper Report.
                </li>
                <li>
                  Designing, coding, testing, and debugging client's web applications.
                </li>
              </ul>
            </p>
            <h6>Framework, Tools & Technologies</h6>
            <ul>
              <li>
                Java Spring Boot
              </li>
              <li>
                Jasper Report
              </li>
              <li>
                MySQL
              </li>
              <li>
                Trello
              </li>
            </ul>
            `,
          description_ja:
            `
            <p>
              Brain Station 23 は、バングラデシュを代表する大手ソフトウェア開発会社であり、カスタムソフトウェア、Web・モバイルアプリ、クラウドソリューションを提供しています。さまざまな業界のグローバルクライアントにサービスを提供し、最新技術とアジャイル手法を活用して、安全でスケーラブル、かつ革新的なデジタルソリューションを提供し、ビジネスの変革を支援しています。
            </p>
            <h4>職務内容</h4>
            <p>
              主な担当業務は以下の通りです：
              <ul>
                <li>
                  Java Spring Boot を使用した保守性の高い API の開発。
                </li>
                <li>
                  コードレビューとリファクタリングを通じたコード品質の維持。
                </li>
                <li>
                  Jasper Report を用いた帳票設計と API の実装。
                </li>
                <li>
                  クライアントの Web アプリケーションの設計、コーディング、テスト、およびデバッグ。
                </li>
              </ul>
            </p>
            <h6>使用フレームワーク・ツール・技術</h6>
            <ul>
              <li>
                Java Spring Boot
              </li>
              <li>
                Jasper Report
              </li>
              <li>
                MySQL
              </li>
              <li>
                Trello
              </li>
            </ul>
            `,
          imgUrl: "files/company/Brain-Station-23.jpg",
        },
        {
          id: 4,
          position: "Freelance Web Developer (Contract based)",
          companyName: "BroTech IT Ltd.",
          companyWebsite: "https://www.linkedin.com/company/brotech-it/",
          startTime: "Apr 2020",
          endTime: "Jan 2021",
          companyLocation:"Chittagong, Bangladesh",
          shortDescription_en: "My responsibility was to build a website for a client using HTML, CSS, Bootstrap and JavaScript. I also worked on the backend using Node.js. Please refer to the details page for complete technical information.",
          shortDescription_ja: "私の責任は、HTML、CSS、Bootstrap、JavaScriptを使用してクライアントのウェブサイトを構築することでした。また、Node.jsを使用してバックエンドの開発にも取り組みました。完全な技術的詳細については、詳細ページをご覧ください。",
          description_en:
            `
            <p>
              BroTech is a startup technology company based in Chittagong, Bangladesh. I was responsible for developing websites and web applications on a contract basis, tailored to meet individual client requirements.
            </p>
            <h6>Framework, Tools & Technologies</h6>
            <ul>
              <li>
                Java Spring Boot
              </li>
              <li>
                Angular 
              </li>
              <li>
                HTML
              </li>
              <li>
                CSS
              </li>
              <li>
                Bootstrap
              </li>
              <li>
                Firebase
              </li>
            </ul>
            `,
          description_ja:
            `
            <p>
              BroTechは、バングラデシュ・チッタゴンに拠点を置くスタートアップのテクノロジー企業です。私は契約ベースで、クライアントの要望に応じたWebサイトおよびWebアプリケーションの開発を担当していました。
            </p>
            <h6>使用フレームワーク・ツール・技術</h6>
            <ul>
              <li>
                Java Spring Boot
              </li>
              <li>
                Angular 
              </li>
              <li>
                HTML
              </li>
              <li>
                CSS
              </li>
              <li>
                Bootstrap
              </li>
              <li>
                Firebase
              </li>
            </ul>
            `,
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
