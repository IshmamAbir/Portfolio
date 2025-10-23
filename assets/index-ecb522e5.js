import{a as H}from"./axios-3a665b0f.js";import{d as q,m as D,a as Z,c as Q}from"./pinia-a2cf2f3a.js";import{a as c,b as e,V as h,W as s,f as u,i as r,n as S,H as m,X as I,F as g,Y as v,j as P,Z as K,_,$ as L,a0 as x,a1 as B,a2 as T,d as X,a3 as ee}from"./@vue-d605da32.js";import{p as te}from"./vue-axios-58a7c26f.js";import{c as ie}from"./vue-i18n-b72862fe.js";import{b as se}from"./@vueform-b519c23d.js";import{V as J,a as N,b as G,c as oe,d as ae,e as ne,f as re}from"./vuetify-456be69c.js";/* empty css             */import{c as le,a as ce}from"./vue-router-a3918075.js";import{A as de}from"./@duskmoon-96d11204.js";import"./@intlify-caa8fb93.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function p(o){if(o.ep)return;o.ep=!0;const d=n(o);fetch(o.href,d)}})();const he=[{name:"Java",percentage:90},{name:"Golang",percentage:90},{name:"Springboot",percentage:85},{name:"VueJs 3",percentage:70},{name:"Vuetify 3",percentage:80},{name:"Mysql",percentage:70},{name:"Github",percentage:90},{name:"Github Action",percentage:85},{name:"Redis",percentage:80},{name:"Postgres",percentage:70},{name:"Docker",percentage:65}],pe=[{id:1,degree:"BSc in CSE",institute:"International Islamic University Chittagong",start_time:"Mar 2016",end_time:"Mar 2021",description_en:"I completed my 4-year Bachelor's degree in Computer Science and Engineering at the International Islamic University Chittagong. During my time there, I actively participated in programming contests and hackathons. I also collaborated on various team projects and gained valuable experience in team leadership. Throughout my studies, I developed several web applications, which allowed me to gather practical, hands-on experience in web development.",description_ja:"私はチッタゴンの国際イスラーム大学でコンピュータサイエンスおよび工学の4年間の学士号を取得しました。大学生活の中で、プログラミングコンテストやハッカソンに積極的に参加しました。また、チームでのプロジェクトにも取り組み、チームリーダーとしての経験も積みました。多くのウェブアプリケーションを開発し、ウェブ開発における実践的な経験を積むことができました。"},{id:2,degree:"Higher Secondary Certificate (HSC)",institute:"Notre Dame College, Dhaka",start_time:null,end_time:"2015",description_en:"I completed my Higher Secondary Certificate in Science from Notre Dame College, the top-ranked college in Bangladesh. During my time there, I experienced significant academic growth and had the opportunity to build connections with many talented individuals from across the country. These connections have since expanded globally, with many now leading industries around the world. Additionally, I actively participated in various co-curricular activities, including photography, sports, Olympiads, and more.",description_ja:"私はバングラデシュで最も評価の高い大学であるノートルダム・カレッジで理科の高等学校卒業証書を取得しました。そこでの学びを通じて、私は大きな学問的成長を遂げ、全国各地から集まった才能ある多くの人々と交流を深めました。これらのつながりは現在、世界中に広がり、多くがさまざまな業界でリーダーとして活躍しています。また、写真、スポーツ、オリンピアードなど、さまざまな課外活動にも積極的に参加しました。"},{id:3,degree:"Secondary School Certificate (SSC)",institute:"St. Placid's High School, Chittagong",start_time:null,end_time:"2013",description_en:"I obtained my Secondary School Certificate in Science from St. Placid's High School, a renowned institution in Chittagong. In addition to my academic achievements, I actively participated in various sports competitions, including soccer, volleyball, table tennis, and basketball. I was also involved in several co-curricular activities, such as Scouts, the Red Cross, Science Olympiads, and many others.",description_ja:"私はチッタゴンの名門校であるセント・プラシッド高校で、理科の中等学校卒業証書を取得しました。学業の成果に加えて、サッカー、バレーボール、卓球、バスケットボールなど、さまざまなスポーツ競技に積極的に参加しました。また、スカウト活動や赤十字など、数多くの課外活動にも参加しました。"}],me=[{id:1,title:"Complete Vue Developer Bootcamp",institute_name:"ZTM Academy (Udemy)",url:"https://www.udemy.com/certificate/UC-fb340153-d620-4bff-9f15-516e15b98583/",start_time:"Mar 2023",end_time:"Jul 2023",description_en:"This certification course from Udemy helped me to learn the basics of VueJs 3, a progressive javascript framework.",description_ja:"Udemyのこの認定コースは、プログレッシブJavaScriptフレームワークであるVueJs 3の基礎を学ぶのに役立ちました。"},{id:2,title:"BJET Advanced Course",institute_name:"University of Miyazaki, Japan",url:"https://www.jica.go.jp/bangladesh/bangland/b-jet.html",start_time:"Oct 2022",end_time:"Dec 2022",description_en:"The BJET Advanced Course, conducted by the University of Miyazaki, is a continuation of the fully funded BJET Basic Course held in Japan. This program provides participants with hands-on experience through internships at Japanese companies, while simultaneously offering in-depth training in the Japanese language and work culture at University of Miyazaki.",description_ja:"宮崎大学が提供するBJETアドバンスコースは、日本で実施される全額支援のBJETベーシックコースを基礎として構成されています。このプログラムでは、日本企業でのインターンシップを通じて実践的な経験を積むと同時に、宮崎大学で日本語と日本のビジネス文化に関する包括的なトレーニングを受けることができます。"},{id:3,title:"BJET Basic Course",institute_name:"BJET Center (Online Class)",url:"https://www.jica.go.jp/bangladesh/bangland/b-jet.html",start_time:"Apr 2022",end_time:"Sept 2022",description_en:"BJET (Bangladesh-Japan ICT Engineers’ Training Program) is a skills development initiative designed to prepare Bangladeshi ICT professionals for careers in Japan’s tech industry. The program offers training in Japanese language, business culture, and IT skills.",description_ja:"BJET（バングラデシュ・日本ICTエンジニア研修プログラム）は、バングラデシュのICT専門家が日本のテクノロジー業界で活躍できるよう育成することを目的としたスキル開発プログラムです。このプログラムでは、日本語、ビジネス文化、ITスキルの研修を提供しています。"},{id:4,title:"Java From Basic to Professional",institute_name:"PONDIT",url:"https://pondit.com/",start_time:"May 2020",end_time:"Dec 2020",description_en:"Pondit is a Bangladesh-based online training platform dedicated to equipping learners with in-demand ICT and professional skills. Various courses are led by experienced mentors from leading software companies in Bangladesh, ensuring practical, industry-relevant training. Beyond courses, Pondit offers internships, industrial attachments, and workshops, fostering career readiness and bridging the gap between education and employment.",description_ja:"Ponditは、バングラデシュを拠点とするオンライントレーニングプラットフォームで、学習者に需要の高いICTスキルと専門スキルを身につけさせることに特化しています。バングラデシュの大手ソフトウェア企業出身の経験豊富なメンターが指導する様々なコースを通じて、実践的で業界に即したトレーニングを提供しています。コース以外にも、Ponditはインターンシップ、実務研修、ワークショップなどを提供し、キャリア準備を促進し、教育と就職のギャップを埋める支援を行っています。"},{id:5,title:"Ultimate Java Development & Certification Course",institute_name:"EDUONIX ",url:"https://www.eduonix.com/certificate/1d146674ae",start_time:"May 2020",end_time:"Jul 2020",description_en:"Eduonix Learning Solutions is an e-learning platform, offering a wide range of online courses in technology, design, business, and personal development.",description_ja:"Eduonix Learning Solutions は、テクノロジー、デザイン、ビジネス、自己啓発の幅広いオンライン コースを提供する e ラーニング プラットフォームです。"}],ue=[{id:1,title:"Banglalink Code for a cause 2.0 Hackathon",location:"Banglalink Headquarter, Dhaka, Bangladesh",url:"https://www.linkedin.com/posts/ishmam-abir_sdgabrhackathon-codeabrforabraabrcauseabr2-activity-6642770546260054016-zpB3/",achieve_time:"January 2020",description_en:"It was a national-level tech hackathon competition among students from across the country, and I secured fourth place.",description_ja:"これは全国の学生を対象とした技術系ハッカソンコンテストで、私は第4位を獲得しました。"},{id:2,title:"IIUC Tech fest 2020",location:"International Islamic University, Chittagong,, Bangladesh",url:"https://www.linkedin.com/posts/ishmam-abir_techfest-contest-activity-6632335551154479104-ML17/",achieve_time:"March 2020",description_en:"At the IIUC Tech Fest 2020, I achieved notable success by securing the championship in the App Development Contest and earning the runner-up position in the Idea Generation Competition. These accomplishments reflect my strong technical skills and creative problem-solving abilities.",description_ja:"IIUCテックフェスト2020では、アプリ開発コンテストで優勝し、アイデア創出コンペティションで準優勝を獲得するという顕著な成果を収めました。これらの実績は、私の高度な技術力と創造的な問題解決能力を示しています。"}],_e=[{title:"GitHub",icon:"github",url:"https://github.com/IshmamAbir"},{title:"Mail",icon:"mail",url:"mailto:ishmam.cse@gmail.com"},{title:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/ishmam-abir/",primaryContact:!0},{title:"Youtube",icon:"youtube",url:"https://www.youtube.com/@ishmam_abir"},{title:"Dev.to",icon:"pocket",url:"https://dev.to/ishmam_abir"},{title:"Instagram",icon:"instagram",url:"https://www.instagram.com/ishmam.abir"}],M={first_name_en:"Ishmam",middle_name_en:"Abir",last_name_en:"Chowdhury",first_name_ja:"イシュマム",middle_name_ja:"アビル",last_name_ja:"チョウドリ",designation_en:"Software Development Engineer",email:"ishmam.cse@gmail.com",designation_ja:"ソフトウェア開発エンジニア",background_image:"files/bg-cover.jpg",center_image:"files/ishmam.jpeg",sidebar_image:"files/ishmam_sidebar.jpg",bottom_image:"files/contact/bottom_image.jpg",banner_designation:{en:["Software Engineer","Web Developer","Open Source Contributor","Photographer ","Videographer"],ja:["ソフトウェアエンジニア","ウェブ開発者","オープンソース貢献者","写真家","ビデオグラファー"]},banner_introduction_en:`Basically I am A Bangladeshi Origin Full-time Web Developer and
        A Software Engineer By Profession Who Is Living In Japan and
        Also A Photographer & Video Editor By Choice. I am At A Time A
        Hard Working And Super Lazy. I Can Sleep For 17 Hours Straight &
        Also Can Code From 10:00 PM to 9:00 AM Continuously. My
        Potential For You Depends On How You Want To Get It.`,banner_introduction_ja:`ソフトウェア開発エンジニアとして、Webアプリケーションの設計、開発、テスト、保守に一貫して携わってまいりました。特に、バックエンド開発においては、Java（Spring Boot）やGolangを用いたAPI開発、クリーンアーキテクチャの導入に強みを持っています。フロントエンド開発においても、Vue.js（Vue 3、Vuetify 3）を用いたUI/UX改善の経験が豊富です。
        これまでの経験で培った技術力と問題解決能力を活かし、貴社の事業発展に貢献できると確信しております。`},ge=[{id:6,name:"Go Service Level Transaction",url:"https://github.com/IshmamAbir/Go-Service_Level_Transaction",img_url:"files/projects/github+golang.png",project_type:"OPEN_SOURCE",my_role_en:"",my_role_ja:"",description_en:"This project presents a comprehensive approach to managing transactions in the business logic layer of a Go application, ensuring data consistency and integrity during complex operations involving multiple database tables.",description_ja:"このプロジェクトでは、Go アプリケーションのビジネス ロジック層でトランザクションを管理し、複数のデータベース テーブルが関係する複雑な操作中にデータの一貫性と整合性を確保するための包括的なアプローチを紹介します。",technology_used:["Golang","Postgres","Gorm","Gorilla/Mux"]},{id:5,name:"Clean Architecture Go",url:"https://github.com/IshmamAbir/Clean-Architecture-Go-Postgres",img_url:"files/projects/github+golang.png",project_type:"OPEN_SOURCE",my_role_en:"",my_role_ja:"",description_en:"This project showcases a backend architecture built with Golang without relying on any external frameworks. It implements Clean Architecture principles to ensure maintainability and scalability. Key features include API routing, API documentation powered by go-swagger, ORM integration with Gorm, and PostgreSQL for data storage. This setup can serve as an ideal template for backend development in Golang, providing a robust, framework-free solution for scalable web applications.",description_ja:"このプロジェクトは、外部フレームワークを使用せずに構築されたGolangのバックエンドアーキテクチャを示しています。クリーンアーキテクチャの原則を適用し、メンテナンス性とスケーラビリティを確保しています。主な特徴として、APIルーティング、go-swaggerによるAPIドキュメンテーション、Gormを用いたORM統合、およびPostgreSQLによるデータストレージを実装しています。このセットアップは、Golangを使用したバックエンド開発に最適なテンプレートとなり、スケーラブルなウェブアプリケーションの構築に貢献します。",technology_used:["Golang","Postgres","Go-Swagger","Gorm","Gorilla/Mux","Docker","Vue.js","Vuetify"]},{id:4,name:"Matrix Platform Limited",url:"https://matrixapparels.com/",img_url:"files/projects/matrix_apparels.png",project_type:"freelance_work",my_role_en:"Planning, Requirement Analysis, Designing, Frontend Design, Deployment, Maintenance.",my_role_ja:"計画、要件分析、設計、フロントエンドデザイン、展開、保守。",description_en:"Matrix Apparels Limited is an export-oriented knit & woven garments factory located in Dhaka. Their portfolio website was constructed using the design they provided. I am responsible for the entire project, from start to deployment.",description_ja:"Matrix Apparels Limitedはダッカに位置する輸出志向のニットおよび織物衣料品工場です。彼らのポートフォリオウェブサイトは、提供されたデザインを使用して構築されました。私はこのプロジェクトの開始から展開まで、すべての責任を負っています。",technology_used:["HTML","CSS","JavaScript","Bootstrap","Web Hosting","Github Pages"]},{id:3,name:"Décor Supplier UK",url:"https://decorsupplier.co.uk/",img_url:"files/projects/decor_supplier.jpeg",project_type:"freelance_work",my_role_en:"Planning, Meeting with the client, Requirement Analysis, Designing, Frontend Design & Modification.",my_role_ja:"計画、クライアントとのミーティング、要件分析、設計、フロントエンドデザインおよび修正。",description_en:"Décor Supplier UK is an online e-commerce store in the United Kingdom that sells home decorator items. It was created with DotNet, Angular, and Firebase.  My responsibility was to create the user interface and build the frontend according to the client's requirements.",description_ja:"Décor Supplier UKは、イギリスに拠点を置くオンラインのホームデコレーターアイテムを販売するeコマースストアです。このサイトはDotNet、Angular、Firebaseを使用して作成されました。私の責任は、クライアントの要件に従ってユーザーインターフェースを作成し、フロントエンドを構築することでした。",technology_used:["Angular","Firebase","DotNet","Firebase","Bootstrap"]},{id:7,name:"Weather Web App",url:"https://weather-webapp-kodensya.netlify.app/#/",img_url:"files/projects/weather-webapp.jpeg",project_type:"personal",my_role_en:"Requirement Analysis, Template Designing, Frontend Development,API Integration, Testing, Deployment.",my_role_ja:"要件分析、テンプレートデザイン、フロントエンド開発、API統合、テスト、展開。",description_en:"This project was the Technical Test for Kodensya.During the interview process, I was asked to build a weather web app using VueJs 3, OpenWeather API to get weather data and show it on the UI. I was responsible for the entire project, from start to deployment.",description_ja:"このプロジェクトは、Kodensyaの技術テストでした。面接の過程で、VueJs 3を使って天気のウェブアプリを作成し、OpenWeather APIを使って天気データを取得し、UIに表示するように指示されました。私はプロジェクトの開始から展開まで、全ての工程を担当しました。",technology_used:["VueJs 3","OpenWeather API","Netlify","Bootstrap"]},{id:2,name:"Spring Security Authentication App",url:"https://github.com/IshmamAbir/Authentication-App-Spring-Security",img_url:null,project_type:"personal",my_role_en:"Planning, Requirement Analysis, Designing, Backend Development, Frontend Designing, Testing",my_role_ja:"計画、要件分析、設計、バックエンド開発、フロントエンドデザイン、テスト",description_en:"This is the implementation of role-based authentication and authorization (RBAC) project built with Spring security.  Users can view and modify their personal information by registering and logging in.  The administrator can access all user data by logging in.  I perform the entire implementation by myself.  This project implements CRUD functionality, relational mapping, and spring security authentication.",description_ja:"これは、Spring Securityを使用して構築されたロールベースの認証と認可（RBAC）プロジェクトの実装です。ユーザーは登録してログインすることで、個人情報の表示と変更ができます。管理者はログインすることで、すべてのユーザーデータにアクセスできます。このプロジェクトの実装はすべて自分で行いました。このプロジェクトはCRUD機能、リレーショナルマッピング、Spring Security認証を実装しています。",technology_used:["Java"," Spring Boot","Spring Security","Thymeleaf","MySQL Database","HTML","CSS","Bootstrap"]},{id:1,name:"COVID-19 Tracker",url:"https://covid19-tracker-31b45.web.app",img_url:"files/projects/covid_tracker.png",project_type:"personal",my_role_en:"Planning, Requirement Analysis, Designing, Frontend Design, Deployment, Maintenance.",my_role_ja:"計画、要件分析、設計、フロントエンドデザイン、展開、保守",description_en:"A basic single page application (SPA) that allows users to pick any country and see the country's overall covid report.",description_ja:"",technology_used:["Angular 9","Firebase","HTML","CSS","Bootstrap","Web API"]}],fe=[{id:1,position:"Software Development Engineer",company_name:"Kodensya Co. Ltd (株式会社興電舎)",company_website:"https://kodensya.co.jp/",start_time:"Jan 2023",end_time:null,company_location_en:"Nobeoka, Miyazaki, Japan",company_location_ja:"宮崎県宮崎市",short_description_en:"I am currently working as a Software Development Engineer at Kodensya Co Ltd (株式会社興電舎). My main responsibilities include: Designing, coding, testing, and debugging company's core web applications. See details page for the complete technical details.",short_description_ja:"株式会社興電舎でソフトウェア開発エンジニアとして働いています。主な業務は、会社のコアとなるWebアプリケーションの設計、コーディング、テスト、デバッグです。技術的な詳細については、詳細ページをご覧ください。",description_en:`
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
              This web application is currently in live and our company and several other customers are using it, and we are also developing new features and modules that will scale this project.  
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
                  <li>
                    Implemented <a href="https://xuri.me/excelize/" target="_blank">Go-Excelize</a> library for creating excel file in the backend.
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
            `,description_ja:`
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
                <li>
                  バックエンドで Excel ファイルを作成するための <a href="https://xuri.me/excelize/" target="_blank">Go-Excelize</a> ライブラリを実装しました。
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
            `,img_url:""},{id:2,position:"Associate Software Engineer-L2",company_name:"Brain Station 23 PLC",company_website:"https://brainstation-23.com/",start_time:"Jan 2022",end_time:"Aug 2022",company_location_en:"Dhaka, Bangladesh",company_location_ja:"ダッカ、 バングラデシュ",short_description_en:"I got promoted to the Level 2 Associate Software Engineer at Brain Station 23. See details page for the complete technical details.",short_description_ja:"私は Brain Station 23 でレベル 2 アソシエイト ソフトウェア エンジニアに昇進しました。完全な技術的詳細については、詳細ページをご覧ください。",description_en:`
            <p>
              Brain Station 23 is a top software development company from Bangladesh, providing custom software, web and mobile apps, and cloud solutions. Serving global clients across various industries, it leverages modern technologies and agile methods to deliver secure, scalable, and innovative digital solutions that drive business transformation.
              <br>
              I was promoted to Level 2 Associate Software Engineer within just four months of joining as a Level 1. This was a significant achievement for me, especially considering that I was working at the largest software company in Bangladesh and competing with highly talented engineers from across the country.
            </p>
            <h4>Job Responsibilities</h4>
            <p>
              I was responsible for developing the backend of a loyalty point management systems (like: Rakuten points or paypay points) where user gain points based on the amount spent through the main apps & admins manages the point acquisition. Point reward setting, point management, point redeem & point campaign managements can be done through the system.
              <br>
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
            `,description_ja:`
            <p>
              Brain Station 23はバングラデシュ発のトップソフトウェア開発企業であり、カスタムソフトウェア、Webおよびモバイルアプリ、クラウドソリューションを提供しています。さまざまな業界のグローバルクライアントにサービスを提供し、最新技術とアジャイル手法を活用して、安全でスケーラブルかつ革新的なデジタルソリューションを提供し、ビジネスの変革を推進しています。
              <br>
              入社からわずか4か月で、アソシエイトソフトウェアエンジニア レベル1からレベル2へ昇進しました。バングラデシュ最大のソフトウェア企業で、全国から集まった優秀なエンジニアたちと競い合う中での昇進は、私にとって非常に大きな成果でした。
            </p>
            <h4>職務内容</h4>
            <p>
              楽天ポイントやPayPayポイントなどのロイヤルティポイント管理システムのバックエンド開発を担当しました。このシステムでは、ユーザーが主要アプリでの支出額に応じてポイントを獲得し、管理者がポイント獲得を管理します。ポイント報酬の設定、ポイント管理、ポイント交換、ポイントキャンペーンの管理はすべてこのシステムを通じて行うことができます。
              <br>
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
            `,img_url:"files/company/Brain-Station-23.jpg"},{id:3,position:"Associate Software Engineer-L1",company_name:"Brain Station 23 PLC",company_website:"https://brainstation-23.com/",start_time:"Sept 2021",end_time:"Dec 2021",company_location_en:"Dhaka, Bangladesh",company_location_ja:"ダッカ、 バングラデシュ",short_description_en:"I began my professional career as a full-time Associate Software Engineer at Brain Station 23 in 2021. It was a hybrid workplace, where I worked both remotely and onsite. Please refer to the details page for complete technical information.",short_description_ja:"私は2021年にBrain Station 23でフルタイムのアソシエイトソフトウェアエンジニアとしてキャリアをスタートしました。そこはハイブリッドな職場で、リモートワークとオフサイトワークの両方を行いました。完全な技術的詳細については、詳細ページをご覧ください。",description_en:`
            <p>
              Brain Station 23 is a top software development company from Bangladesh, providing custom software, web and mobile apps, and cloud solutions. Serving global clients across various industries, it leverages modern technologies and agile methods to deliver secure, scalable, and innovative digital solutions that drive business transformation.
            </p>
            <h4>Job Responsibilities</h4>
            <p>
              I was responsible for developing the backend of a loyalty point management systems (like: Rakuten points or paypay points) where user gain points based on the amount spent through the main apps & admins manages the point acquisition. Point reward setting, point management, point redeem & point campaign managements can be done through the system.
              <br>
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
            `,description_ja:`
            <p>
              Brain Station 23 は、バングラデシュを代表する大手ソフトウェア開発会社であり、カスタムソフトウェア、Web・モバイルアプリ、クラウドソリューションを提供しています。さまざまな業界のグローバルクライアントにサービスを提供し、最新技術とアジャイル手法を活用して、安全でスケーラブル、かつ革新的なデジタルソリューションを提供し、ビジネスの変革を支援しています。
            </p>
            <h4>職務内容</h4>
            <p>
              楽天ポイントやPayPayポイントなどのロイヤルティポイント管理システムのバックエンド開発を担当しました。このシステムでは、ユーザーが主要アプリでの支出額に応じてポイントを獲得し、管理者がポイント獲得を管理します。ポイント報酬の設定、ポイント管理、ポイント交換、ポイントキャンペーンの管理はすべてこのシステムを通じて行うことができます。
              <br>
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
            `,img_url:"files/company/Brain-Station-23.jpg"},{id:4,position:"Freelance Web Developer (Contract based)",company_name:"BroTech IT Ltd.",company_website:"https://www.linkedin.com/company/brotech-it/",start_time:"Apr 2020",end_time:"Jan 2021",company_location_en:"Chittagong, Bangladesh",company_location_ja:"チッタゴン、 バングラデシュ",short_description_en:"My responsibility was to build a website for a client using HTML, CSS, Bootstrap and JavaScript. I also worked on the backend using Node.js. Please refer to the details page for complete technical information.",short_description_ja:"私の責任は、HTML、CSS、Bootstrap、JavaScriptを使用してクライアントのウェブサイトを構築することでした。また、Node.jsを使用してバックエンドの開発にも取り組みました。完全な技術的詳細については、詳細ページをご覧ください。",description_en:`
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
            `,description_ja:`
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
            `,img_url:""}],ve={continuing:"Continuing"},be={home:"Home",education:"Education",contact:"Contacts",experience:"Experience",projects:"Projects",skill:"Skills & Achievements",find_me_in:"Find Me In",blog:"Articles",mobile_top_text:"You are free to know about me. Check everything that you need to know and also feel free to ask questions ! Adios!"},ye={education_header:"Educational Qualification"},we={skill_header:"Skills",technical_skills:"Technical Skills",achievements:"Achievements",certifications:"Certifications"},ke={experience_header:"Work Experience"},je={contact_header:"Contact With Me",email:"E-mail",subject:"Subject",your_message:"Your Message",send_message:"Send Message",phone_number:"Phone Number",your_name:"Your Name",find_me_in:"Find Me In"},$e={project_header:"My Projects",project_url:"Project Url"},Ie={open_source:"Open Source Project",professional:"Professional Project",personal:"Personal Project",academic:"Academic Project",freelance_work:"Freelance Work"},Ae={blog_header:"Blog Articles",min_read:"min read"},Se={i_am:"I am a"},Te={common:ve,header:be,education:ye,skill:we,experience:ke,contact:je,project:$e,project_type:Ie,blog:Ae,slider:Se},De={continuing:"継続中"},Ce={home:"ホーム",education:"学歴",contact:"お問い合わせ",experience:"実務経験",projects:"プロジェクト",skill:"スキル & 実績",find_me_in:"検索先",blog:"記事",mobile_top_text:"プロフィールをご覧いただき、誠にありがとうございます。これまでの実績や経歴をまとめております。ご不明な点やご相談がございましたら、お気軽にお問い合わせください。"},Me={education_header:"学歴"},Pe={skill_header:"スキル",technical_skills:"技術スキル",achievements:"実績",certifications:"認証"},Le={experience_header:"実務経験"},xe={contact_header:"お問い合わせ",email:"メール",subject:"件名",your_message:"メッセージ",send_message:"メッセージを送信",phone_number:"電話番号",your_name:"お名前",find_me_in:"検索先"},Be={project_header:"プロジェクト一覧",project_url:"プロジェクト Url"},Ee={open_source:"オープンソース",professional:"プロフェッショナル",personal:"個人",academic:"学術",freelance_work:"フリーランス"},Ue={blog_header:"ブログ記事一覧",min_read:"分で読む"},Ve={i_am:"私は"},Je={common:De,header:Ce,education:Me,skill:Pe,experience:Le,contact:xe,project:Be,project_type:Ee,blog:Ue,slider:Ve},E=ie({locale:navigator.languages[0].split("-")[0]==="ja"?"ja":"en",fallbackLocale:"ja",messages:{en:Te,ja:Je}});class U{constructor(t){this.rawData=t}getLocalizedProperty(t){const n=this[t];return n&&typeof n=="object"?n[E.global.locale]||n.en:n}}class C extends U{constructor(t){super(t),this.startTime=t.start_time,this.endTime=t.end_time||t.achieve_time}get dateRange(){return this.startTime&&this.endTime?`${this.startTime} - ${this.endTime}`:this.startTime&&!this.endTime?`${this.startTime} - ${E.global.t("common.continuing")}`:this.endTime||"N/A"}}class Ge extends C{constructor(t){super(t),this.id=t.id,this.title=t.title,this.location=t.location,this.url=t.url,this.achieveTime=t.achieve_time,this.description={en:t.description_en,ja:t.description_ja}}}class Re extends C{constructor(t){super(t),this.id=t.id,this.title=t.title,this.instituteName=t.institute_name,this.url=t.url,this.startTime=t.start_time,this.endTime=t.end_time,this.description={en:t.description_en,ja:t.description_ja}}}class Fe extends C{constructor(t){super(t),this.id=t.id,this.degree=t.degree,this.institute=t.institute,this.location=t.location,this.startTime=t.start_time,this.endTime=t.end_time,this.description={en:t.description_en,ja:t.description_ja}}}class z extends C{constructor(t){super(t),this.id=t.id,this.position=t.position,this.companyName=t.company_name,this.companyWebsite=t.company_website,this.imageUrl=t.img_url||"",this.startTime=t.start_time,this.endTime=t.end_time,this.shortDescription={en:t.short_description_en,ja:t.short_description_ja},this.description={en:t.description_en,ja:t.description_ja},this.companyLocation={en:t.company_location_en,ja:t.company_location_ja}}}class W extends U{constructor(t){super(t),this.id=t.id,this.name=t.name,this.url=t.url,this.imgUrl=t.img_url,this.projectType=t.project_type,this.technologyUsed=t.technology_used,this.myRole={en:t.my_role_en,ja:t.my_role_ja},this.description={en:t.description_en,ja:t.description_ja}}}class R extends U{constructor(t){super(t),this.id=t.id,this.firstName={en:t.first_name_en,ja:t.first_name_ja},this.middlename={en:t.middle_name_en,ja:t.middle_name_ja},this.lastname={en:t.last_name_en,ja:t.last_name_ja},this.email=t.email,this.backgroundImage=t.background_image,this.centerImage=t.center_image,this.sidebarImage=t.sidebar_image,this.bottomImage=t.bottom_image,this.fullName={en:(t.first_name_en+(t.middle_name_en?" "+t.middle_name_en+" ":" ")+t.last_name_en).toUpperCase(),ja:t.last_name_ja+"　"+t.first_name_ja+(t.middle_name_ja?"　"+t.middle_name_ja:"")},this.designation={en:t.designation_en,ja:t.designation_ja},this.bannerDesignation=t.banner_designation,this.bannerIntroduction={en:t.banner_introduction_en,ja:t.banner_introduction_ja},this.raw=t}}const b={async getUserInfo(){return console.log("getUserInfo ->",new R(M)),new R(M)},async getSocialMediaItems(){return _e},async getTechnicalSkills(){return he},async getCertifications(){return me.map(i=>new Re(i))},async getAchievements(){return ue.map(i=>new Ge(i))},async getEducationList(){return pe.map(i=>new Fe(i))},async getJobExperiences(){return fe.map(i=>new z(i))},async getProjects(){return ge.map(i=>new W(i))}},A=q("user",{state:()=>({user:null}),actions:{async fetchUserInfo(){if(!this.user)try{const i=await b.getUserInfo();console.log("user store fetchUserInfo service fetch",i),this.user=i}catch(i){console.error("Failed to fetch user:",i)}},clearUser(){this.user=null}}}),f=(i,t)=>{const n=i.__vccOpts||i;for(const[p,o]of t)n[p]=o;return n},Ne={name:"AppFooter",data(){return{primaryContactUrl:null}},computed:{...D(A,["user"])},async created(){let t=(await b.getSocialMediaItems()).find(n=>n.primaryContact);this.primaryContactUrl=t.url}},ze={class:"rn-footer-area rn-section-gap section-separator page-wrapper-two"},We={class:"container"},Oe={class:"row"},Ye={class:"col-lg-12"},He={class:"footer-area text-center"},qe={key:0,class:"description mt--30 text-center"},Ze=["href"];function Qe(i,t,n,p,o,d){return r(),c("div",ze,[e("div",We,[e("div",Oe,[e("div",Ye,[e("div",He,[i.user?(r(),c("p",qe,[h(" © "+s(new Date().getFullYear())+". All rights reserved by ",1),i.user.getLocalizedProperty("fullName")?(r(),c("a",{key:0,target:"_blank",href:o.primaryContactUrl},s(i.user.getLocalizedProperty("fullName"))+". ",9,Ze)):u("",!0)])):u("",!0)])])])])])}const Ke=f(Ne,[["render",Qe]]),Xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzlkN2ViMy04ZjZkLTFlNDEtODIxMC1mMDU4N2U2OWE0ZjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEM4MkE3M0RFQzJFMTFFQjk0NjFCNEU2OTA1OTQ5NjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEM4MkE3M0NFQzJFMTFFQjk0NjFCNEU2OTA1OTQ5NjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGRiMTRiNTUtZWZmZi0zMDQzLTkzM2QtZmIxMDA2YTM5NGFiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3OWQ3ZWIzLThmNmQtMWU0MS04MjEwLWYwNTg3ZTY5YTRmNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhA9gjEAAAegSURBVHja7JxrbFNlGMffc2m7S8tubHQbg23CBCGQkIEE8QsfNNHEaJAAEhNjNMQ4SPjgFy4aLvpFgomQ+EFj1KiIYjQkfjAkfhENAiFKQGRcVjbmbtCtWzfW9vQcn2d737Onh461Xbu1PT7Jk/WctjvP/9fnvZ7zvtLeg0fYDJqLu5O7A1wBl7mj6dyj4BHwMPcQ97Tawb274p5XMwwCRbvBi7grCXxHQFI5RGoIa4R7kB9nxDIFphi8hP+V0gzaw70KfBg8wP9mLRiJB1zOi8kD9sjC6vrSEvcqh6rWq4rcIMtyvSSxUiZJxdI4RGagSMMYNgw2oOu6T4vqbRFN8w0Eghdv3u7yWa7n5o5FzQ8+NP4vsgdMEf8FHwCydPGCleUl7s2qqjwhSZI3AbrFY6AkViXLShN8jxW4HMxTXMjmV8/t0bToGX8geOLq9fa/yNfwul7+o/TyojarYPD7lTxTTPNWlpXX13lfcTnVzQCjNG0pKUnzHA5147y5pRurKkoGQmHthK+j+7Puvn4/ATSfZ04fuDYbYNz8VxKtCauuKq9oWODd5XSomzLdvCFwyKTtSxbVbW9cWH2yrb37SFev/x5/28Prtx4OKWmTU6xLsNjU0O+vXbXkzabG2p9mAorV4Jov4rUhhhaLtmoeq5RpMApP1VJSoTY8+fjyLwtczp3wK5axWTK8NsSwA2NZVF/TSN4q5TErmQKDxa4OvFCcaF7RtKWupvKUIsurWZYYxgKV9CmMjZwu5LGr6QYjoJitzrrmx/a7iwv2T9Y0z7I5MDaI8YCl5UoYjpxE8XGIE+tXL/sQyvUWluUGMW7GWCmwRIvVVGCw0qqlWbF+zbKPoG/xNMsRw1gxZkvm1E5VIU8FBvsoBSRTjqqKsoHlmGHMGDs5VcC1pQTGTVsfKK/vAv2nWI4axo4aLK2VO1kwKu+8ma0P9hVYjhtqaF7ZtJV20vcd+kBNBkyleA/7KVDD72F5Yu6igt2oieiflyiYYjr2qfFWHMjSJjnlxAFNh6heyBp3ImAqSTe/BTpMa1ieGWhqXrtq6Vvk1FyA81AwHpEdOEJ2OR0vszw1l8uxDTWSJtzzMDDig6xxgbclnVMG2WbQiSkEjTuodpo1sqVuGZtjrSib43E6HVtZnhtqRK0iiTiDB8DMES8WN9S+luKURM4lDmh9PR4Dmfw1a2aXU32B2cRA6/O0NYfiJFMwHjF2WLqobjlOIdoFDGpFzWRs6KFgzLJVXup5idnMLJqLKZgiMqbYYDcwFs1F2DrJvDYeA9TUWLt4NqcnZ7E4lYH2JlLfumQ6rTDHXbSS2dRA+wo6LSHTcZDDoT5qVzCgvYl2cWLAKIq8wK5gQPtCKxhzPkKW5Gq7grFoVxGMMlEJsQq7ggHt5TED8JiuvyQVMvuSKaIJFANGIh0923GJ1S7L7H+LX+ew8efdxszIwJNJuWIW7XoMGGYY922bIoYxYgUTnXiP3bMvF+Ynh1EEYz51pBt6l13BWLRrCCZsYorq7XYFA9pvk8NwDJhIRLtmVzCgvdUKZlQcDQZHLtkVjEX7KIIJiZap9VZnq2EY/fareI1+1C6qG2QiOnhmU6Vp0V/sBsaieQTXFwgwZufGPzD0td3AWDQPMzJOMh81v3qj4zKkVo+NilEPap7oAI8/F0yXwgTFh0Nh7Qe7gAGtP5LDIBQjnbHYu42D4sX1ts5PWJoWK2R7woDWj+MxkC1la2yh1L3+waFwOHI836mgRtQqkofWtdZpB3O8cKu9+yiUv0Aej6bvo0aqna52s4IZEj1hXNERCke+yNu6JRT5iqxaCTPLYox4E1V94sXZi/8ci+r6+bwbF+n6hbMXr75PTt21ro2MB2aY0uvp6z+Yb2BAE32UfhigBK2fmWxqs48ME66N3A+9ly9QUAtqIt2UuH22ycDgHE2vODj357XPwxHtZM63QqABtZBTvZAtWjJgRJtutkq/X/h7D4wpTufweOg0aiCnArTfkgwYxrPGnJY4c/5KixbNvUEmxoyx02kFWiJSAYO9305GJrPOnLvyBtD/OYcy5WeMmZYorsmYDpix1g38DhvfTkBkzk4orydyoE75FmMlpyJcy5Qr/BO94YYVVAfNHCivbweHR99h01jCm8lEwdggxn2WTOlINN5k7kQKOOa9pwuXWr+503X3OewwZVPnDWPC2Cx1SkcyP2Kyt2hFsRoQJ274/r356x+Xt42Gwji2GpjFeZUAxHAMY8GYyFsDHEpSG2Skcu/a4DV6FyN3MXH40NrW+SyU6+9nGkoErgnXfgZioINCncfYm8oUynRW6g/xYmVuYdDV478LvttbWXa4vs77qsupbsrUegTMzlBY+87X0f0pGQyaE04cyKxsYSDqnS7eUUJATjEyBz8MLw/zTS+2qqqybroPVgOMXmh+f/MHgsctm17QCraPpeHhhHTtBoKBjLA426RwAWMiyDYpDaoi1/NtUsoAGD6ujw8taSB+xEDQBhvWdf22FtV9EU1ri7NNihVIP/+BsmqbFFH3DHKPu7EOF+ZL4/VyYmMdawahp7IV01StYk5vxUSFBMhgdLLNuxSeWQab2LxLZzOweddk9p8AAwBVqtNS/rSJwQAAAABJRU5ErkJggg==";const et={name:"AppHeader",components:{Toggle:se},data(){return{isMobileMenuOpen:!1,langValue:navigator.languages[0].split("-")[0],socialList:[]}},computed:{...D(A,["user"])},methods:{changeLanguage(i){this.$i18n.locale=i}},watch:{isMobileMenuOpen(i){i?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow=""}},async created(){try{const i=await b.getSocialMediaItems();i&&(this.socialList=i)}catch(i){console.error("Failed to fetch social media items:",i)}}},w=i=>(L("data-v-b0f06dd0"),i=i(),x(),i),tt={key:0,class:"d-none d-lg-block header-style-2"},it={class:"rn-header-area d-flex align-items-start flex-column left-header-style"},st={class:"logo-area"},ot={href:"#home"},at=["src"],nt={style:{all:"unset",display:"flex","justify-content":"space-between","align-items":"center",width:"100%",margin:"19px 0","font-size":"16px","font-family":"var(--font-primary)",color:"var(--color-primary)",cursor:"default"}},rt={id:"sideNavs",class:"mainmenu-nav navbar-example2"},lt={class:"primary-menu nav nav-pills",style:{padding:"0 0 0 0"}},ct={class:"nav-item"},dt={class:"nav-link smoth-animation-two active",href:"#home"},ht=w(()=>e("i",{"data-feather":"home"},null,-1)),pt={class:"nav-item"},mt={class:"nav-link smoth-animation-two",href:"#educations"},ut=w(()=>e("i",{"data-feather":"book-open"},null,-1)),_t={class:"nav-item"},gt={class:"nav-link smoth-animation-two",href:"#experience"},ft=w(()=>e("i",{"data-feather":"briefcase"},null,-1)),vt={class:"nav-item"},bt={class:"nav-link smoth-animation-two",href:"#skills"},yt=w(()=>e("i",{"data-feather":"award"},null,-1)),wt={class:"nav-item"},kt={class:"nav-link smoth-animation-two",href:"#project"},jt=w(()=>e("i",{"data-feather":"code"},null,-1)),$t={class:"nav-item"},It={class:"nav-link smoth-animation-two",href:"#blog"},At=w(()=>e("i",{"data-feather":"edit"},null,-1)),St={class:"nav-item"},Tt={class:"nav-link smoth-animation-two",href:"#contacts"},Dt=w(()=>e("i",{"data-feather":"message-circle"},null,-1)),Ct={class:"footer"},Mt={class:"social-share-style-1"},Pt={class:"title"},Lt={class:"social-share d-flex liststyle"},xt=["href"],Bt=["data-feather"],Et={class:"header-style-2 d-block d-lg-none"},Ut={class:"row align-items-center"},Vt=w(()=>e("div",{class:"col-6"},null,-1)),Jt={class:"col-6"},Gt={class:"header-right text-right"},Rt={class:"hamberger-menu"},Ft={class:"inner"},Nt={class:"menu-top"},zt={class:"menu-header"},Wt={class:"logo",href:"#home"},Ot={key:0,src:Xe,alt:"personal-logo"},Yt={class:"close-button"},Ht=w(()=>e("i",{"data-feather":"x"},null,-1)),qt=[Ht],Zt={class:"discription"},Qt={class:"nav-link smoth-animation-two active d-flex justify-content-between align-items-center"},Kt={class:"content"},Xt={class:"primary-menu nav nav-pills"},ei={class:"nav-item"},ti={class:"nav-item"},ii={class:"nav-item"},si={class:"nav-item"},oi={class:"nav-item"},ai={class:"nav-item"},ni={class:"nav-item"},ri={class:"social-share-style-1 mt--40"},li={class:"title"},ci=K('<ul class="social-share d-flex liststyle" data-v-b0f06dd0><li class="facebook" data-v-b0f06dd0><a href="#" data-v-b0f06dd0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook" data-v-b0f06dd0><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-b0f06dd0></path></svg></a></li><li class="instagram" data-v-b0f06dd0><a href="#" data-v-b0f06dd0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram" data-v-b0f06dd0><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-b0f06dd0></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-b0f06dd0></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-b0f06dd0></line></svg></a></li><li class="linkedin" data-v-b0f06dd0><a href="#" data-v-b0f06dd0><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin" data-v-b0f06dd0><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-v-b0f06dd0></path><rect x="2" y="9" width="4" height="12" data-v-b0f06dd0></rect><circle cx="4" cy="4" r="2" data-v-b0f06dd0></circle></svg></a></li></ul>',1);function di(i,t,n,p,o,d){const a=_("Toggle");return r(),c(g,null,[i.user?(r(),c("div",tt,[e("header",it,[e("div",st,[e("a",ot,[i.user.sidebarImage?(r(),c("img",{key:0,src:i.user.sidebarImage,alt:"personal-logo"},null,8,at)):u("",!0)])]),e("div",nt,[e("span",{style:{display:"flex","align-items":"center"},class:S(o.langValue==="en"?"text-danger":"color-blue")},[m(J,{class:"pr-2"},{default:I(()=>[h("mdi-translate")]),_:1}),h(" "+s(o.langValue==="en"?"English":"日本語"),1)],2),m(N),m(a,{size:"default",class:"z-index-1 toggle-on-color toggle-off-color","on-label":"JA","off-label":"EN","false-value":"ja","true-value":"en",modelValue:o.langValue,"onUpdate:modelValue":t[0]||(t[0]=l=>o.langValue=l),onChange:d.changeLanguage},null,8,["modelValue","onChange"])]),e("nav",rt,[m(G,{color:"red"}),e("ul",lt,[e("li",ct,[e("a",dt,[ht,h(" "+s(i.$t("header.home")),1)])]),e("li",pt,[e("a",mt,[ut,h(" "+s(i.$t("header.education")),1)])]),e("li",_t,[e("a",gt,[ft,h(" "+s(i.$t("header.experience")),1)])]),e("li",vt,[e("a",bt,[yt,h(" "+s(i.$t("header.skill")),1)])]),e("li",wt,[e("a",kt,[jt,h(" "+s(i.$t("header.projects")),1)])]),e("li",$t,[e("a",It,[At,h(" "+s(i.$t("header.blog")),1)])]),e("li",St,[e("a",Tt,[Dt,h(" "+s(i.$t("header.contact")),1)])])])]),e("div",Ct,[e("div",Mt,[e("span",Pt,s(i.$t("header.find_me_in")),1),e("ul",Lt,[(r(!0),c(g,null,v(o.socialList,l=>(r(),c("li",{key:l,class:S(l.title)},[e("a",{href:l.url,target:"_blank"},[e("i",{"data-feather":l.icon},null,8,Bt)],8,xt)],2))),128))])])])])])):u("",!0),e("div",Et,[e("div",Ut,[Vt,e("div",Jt,[e("div",Gt,[e("div",Rt,[e("i",{id:"menuBtn",class:"feather-menu humberger-menu",onClick:t[1]||(t[1]=l=>o.isMobileMenuOpen=!0)})])])])])]),e("div",{class:S(["popup-mobile-menu",{"menu-open":o.isMobileMenuOpen}]),onClick:t[11]||(t[11]=P(l=>o.isMobileMenuOpen=!1,["self"]))},[e("div",Ft,[e("div",Nt,[e("div",zt,[e("a",Wt,[i.user&&i.user.sidebarImage!==null&&i.user.sidebarImage?(r(),c("img",Ot)):u("",!0)]),e("div",Yt,[e("button",{class:"close-menu-activation close",onClick:t[2]||(t[2]=l=>o.isMobileMenuOpen=!1)},qt)])]),e("p",Zt,s(i.$t("header.mobile_top_text")),1)]),e("i",Qt,[e("span",{class:S(o.langValue==="en"?"text-danger":"color-blue")},[m(J,{class:"pr-2"},{default:I(()=>[h("mdi-translate")]),_:1}),h(" "+s(o.langValue==="en"?"English":"日本語"),1)],2),m(a,{size:"default",class:"z-index-1 toggle-on-color","on-label":"JA","off-label":"EN","false-value":"ja","true-value":"en",modelValue:o.langValue,"onUpdate:modelValue":t[3]||(t[3]=l=>o.langValue=l),onChange:d.changeLanguage},null,8,["modelValue","onChange"])]),m(G),e("div",Kt,[e("ul",Xt,[e("li",ei,[e("a",{class:"nav-link smoth-animation-two active",onClick:t[4]||(t[4]=l=>o.isMobileMenuOpen=!1),href:"#home"},s(i.$t("header.home")),1)]),e("li",ti,[e("a",{class:"nav-link smoth-animation-two",onClick:t[5]||(t[5]=l=>o.isMobileMenuOpen=!1),href:"#educations"},s(i.$t("header.education")),1)]),e("li",ii,[e("a",{class:"nav-link smoth-animation-two",onClick:t[6]||(t[6]=l=>o.isMobileMenuOpen=!1),href:"#experience"},s(i.$t("header.experience")),1)]),e("li",si,[e("a",{class:"nav-link smoth-animation-two",onClick:t[7]||(t[7]=l=>o.isMobileMenuOpen=!1),href:"#skills"},s(i.$t("header.skill")),1)]),e("li",oi,[e("a",{class:"nav-link smoth-animation-two",onClick:t[8]||(t[8]=l=>o.isMobileMenuOpen=!1),href:"#project"},s(i.$t("header.projects")),1)]),e("li",ai,[e("a",{class:"nav-link smoth-animation-two",onClick:t[9]||(t[9]=l=>o.isMobileMenuOpen=!1),href:"#blog"},s(i.$t("header.blog")),1)]),e("li",ni,[e("a",{class:"nav-link smoth-animation-two",onClick:t[10]||(t[10]=l=>o.isMobileMenuOpen=!1),href:"#contacts"},s(i.$t("header.contact")),1)])]),e("div",ri,[e("span",li,s(i.$t("header.find_me_in")),1),ci])])])],2)],64)}const hi=f(et,[["render",di],["__scopeId","data-v-b0f06dd0"]]),pi={name:"App",components:{AppHeader:hi,AppFooter:Ke},methods:{...Z(A,["fetchUserInfo"])},created(){this.fetchUserInfo()}};function mi(i,t,n,p,o,d){const a=_("app-header"),l=_("router-view"),j=_("app-footer");return r(),B(ae,null,{default:I(()=>[m(oe,null,{default:I(()=>[m(a),m(l),m(j)]),_:1})]),_:1})}const ui=f(pi,[["render",mi]]),_i=ne(),gi="modulepreload",fi=function(i){return"/Portfolio/"+i},F={},vi=function(t,n,p){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=fi(d),d in F)return;F[d]=!0;const a=d.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!p)for(let k=o.length-1;k>=0;k--){const $=o[k];if($.href===d&&(!a||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${l}`))return;const y=document.createElement("link");if(y.rel=a?"stylesheet":gi,a||(y.as="script",y.crossOrigin=""),y.href=d,document.head.appendChild(y),a)return new Promise((k,$)=>{y.addEventListener("load",k),y.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>t())};async function bi(){(await vi(()=>import("./webfontloader-2a4655c2.js").then(t=>t.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const yi={name:"AppSlider",components:{Typed:de},computed:{...D(A,["user"]),typingText(){return{strings:M.banner_designation[this.$i18n.locale],loop:!0,typeSpeed:35,smartBackspace:!0,shuffle:!0,showCursor:!1,backSpeed:45,autoInsertCss:!0}}}},wi=e("div",{id:"particles-js"},null,-1),ki={class:"container"},ji={class:"row"},$i={class:"col-lg-12"},Ii={class:"banner-inner"},Ai={class:"thumbnail gradient-border gradient-animation"},Si=["src"],Ti={class:"text-light"},Di={class:"cd-headline clip is-full-width"},Ci={class:"text-light"},Mi=e("div",{class:"typing text-danger"},null,-1),Pi={class:"col-lg-10 offset-lg-1 mt--60"},Li={class:"has-drop-cap",style:{"text-align":"justify"}},xi=e("div",{class:"button-area"},[e("a",{class:"rn-btn cv-download",href:"#contacts"},[e("span",null,"Download CV")])],-1);function Bi(i,t,n,p,o,d){const a=_("Typed");return i.user?(r(),c("section",{key:0,id:"home",class:"slider-style-5 rn-section-gap pb--110 align-items-center with-particles bg_image",style:T("background-image: url("+i.user.backgroundImage+")"),"data-black-overlay":"7"},[wi,e("div",ki,[e("div",ji,[e("div",$i,[e("div",Ii,[e("div",Ai,[e("img",{id:"border",class:"gradient-border",src:i.user.centerImage,alt:""},null,8,Si)]),e("h1",Ti,s(i.user.getLocalizedProperty("fullName")),1),e("span",Di,[e("span",Ci,s(i.$t("slider.i_am"))+"  ",1),e("span",null,[(r(),B(a,{options:d.typingText,key:i.$i18n.locale},{default:I(()=>[Mi]),_:1},8,["options"]))])]),e("div",Pi,[e("p",Li,s(i.user.getLocalizedProperty("bannerIntroduction")),1)]),xi])])])])],4)):u("",!0)}const Ei=f(yi,[["render",Bi]]),Ui={name:"AppContact",data(){return{githubUrl:null,linkedinUrl:null,contactDetails:{linkedinUrl:"https://www.linkedin.com/in/ishmam-abir/",githubUrl:"https://github.com/IshmamAbir",contactText_en:"Feel free to connect with me via email or through my social media channels to learn more about me.",contactText_ja:"メールや各種ソーシャルメディアを通じて、お気軽にご連絡ください。私について詳しく知っていただけます。"}}},computed:{...D(A,["user"])},async created(){const i=await b.getSocialMediaItems();this.githubUrl=i.find(t=>t.title.toLowerCase()==="github").url,this.linkedinUrl=i.find(t=>t.title.toLowerCase()==="linkedin").url}},Vi={class:"rn-contact-area rn-section-gap section-separator",id:"contacts"},Ji={class:"container"},Gi={class:"row"},Ri={class:"col-lg-12"},Fi={class:"section-title text-center"},Ni=e("span",{class:"subtitle"},"Contact",-1),zi={class:"title"},Wi={class:"row mt--50 mt_md--40 mt_sm--40 mt-contact-sm"},Oi={class:"col-lg-5"},Yi={class:"contact-about-area"},Hi={class:"thumbnail"},qi=["src"],Zi={class:"title-area"},Qi={key:0,class:"title"},Ki={class:"description"},Xi={class:"mail"},es=["href"],ts={class:"social-area"},is={class:"name"},ss={class:"social-icone"},os=["href"],as=e("i",{"data-feather":"mail"},null,-1),ns=[as],rs=["href"],ls=e("i",{"data-feather":"linkedin"},null,-1),cs=[ls],ds=["href"],hs=e("i",{"data-feather":"github"},null,-1),ps=[hs],ms={"data-aos-delay":"600",class:"col-lg-7 contact-input"},us={class:"contact-form-wrapper"},_s={class:"introduce"},gs={class:"rnt-contact-form rwt-dynamic-form row",id:"contact-form",method:"POST",action:"mail.php"},fs={class:"col-lg-6"},vs={class:"form-group"},bs={for:"contact-name"},ys=e("input",{class:"form-control form-control-lg",name:"contact-name",id:"contact-name",type:"text"},null,-1),ws={class:"col-lg-6"},ks={class:"form-group"},js={for:"contact-phone"},$s=e("input",{class:"form-control",name:"contact-phone",id:"contact-phone",type:"text"},null,-1),Is={class:"col-lg-12"},As={class:"form-group"},Ss={for:"contact-email"},Ts=e("input",{class:"form-control form-control-sm",id:"contact-email",name:"contact-email",type:"email"},null,-1),Ds={class:"col-lg-12"},Cs={class:"form-group"},Ms={for:"subject"},Ps=e("input",{class:"form-control form-control-sm",id:"subject",name:"subject",type:"text"},null,-1),Ls={class:"col-lg-12"},xs={class:"form-group"},Bs={for:"contact-message"},Es=e("textarea",{name:"contact-message",id:"contact-message",cols:"30",rows:"10"},null,-1),Us={class:"col-lg-12"},Vs={name:"submit",type:"submit",id:"submit",class:"rn-btn"},Js=e("i",{"data-feather":"arrow-right"},null,-1);function Gs(i,t,n,p,o,d){return r(),c("div",Vi,[e("div",Ji,[e("div",Gi,[e("div",Ri,[e("div",Fi,[Ni,e("h2",zi,s(i.$t("contact.contact_header")),1)])])]),e("div",Wi,[e("div",Oi,[e("div",Yi,[e("div",Hi,[e("img",{src:i.user.bottomImage,alt:"contact-img"},null,8,qi)]),e("div",Zi,[i.user.getLocalizedProperty("fullName")?(r(),c("h4",Qi,s(i.user.getLocalizedProperty("fullName")),1)):u("",!0),e("span",null,s(i.user.getLocalizedProperty("designation")),1)]),e("div",Ki,[e("p",null,s(o.contactDetails[`contactText_${i.$i18n.locale}`]),1),e("span",Xi,[h(s(i.$t("contact.email"))+": ",1),e("a",{href:"mailto:"+i.user.email},s(i.user.email),9,es)])]),e("div",ts,[e("div",is,s(i.$t("contact.find_me_in")),1),e("div",ss,[e("a",{href:"mailto:"+i.user.email},ns,8,os),e("a",{href:o.linkedinUrl,target:"_blank"},cs,8,rs),e("a",{href:o.githubUrl,target:"_blank"},ps,8,ds)])])])]),e("div",ms,[e("div",us,[e("div",_s,[e("form",gs,[e("div",fs,[e("div",vs,[e("label",bs,s(i.$t("contact.your_name")),1),ys])]),e("div",ws,[e("div",ks,[e("label",js,s(i.$t("contact.phone_number")),1),$s])]),e("div",Is,[e("div",As,[e("label",Ss,s(i.$t("contact.email")),1),Ts])]),e("div",Ds,[e("div",Cs,[e("label",Ms,s(i.$t("contact.subject")),1),Ps])]),e("div",Ls,[e("div",xs,[e("label",Bs,s(i.$t("contact.your_message")),1),Es])]),e("div",Us,[e("button",Vs,[e("span",null,s(i.$t("contact.send_message").toUpperCase()),1),Js])])])])])])])])])}const Rs=f(Ui,[["render",Gs]]),Fs={name:"AppEducationArea",data(){return{timeline:[]}},async created(){const i=await b.getEducationList();this.timeline=i}},Ns={class:"rn-resume-area rn-section-gap section-separator",id:"educations"},zs={class:"container"},Ws={class:"row"},Os={class:"col-lg-12"},Ys={class:"section-title text-center","data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true"},Hs={class:"title"},qs={class:"row row--45"},Zs={class:"personal-experience-inner mt--40"},Qs={class:"col-lg-12"},Ks={class:"col-lg-9 col-md-12 col-12"},Xs={class:"content"},eo={class:"experience-list"},to={class:"inner"},io={class:"heading"},so={class:"title"},oo={class:"date-of-time"},ao={class:"description justify-text"};function no(i,t,n,p,o,d){return r(),c("div",Ns,[e("div",zs,[e("div",Ws,[e("div",Os,[e("div",Ys,[e("h2",Hs,s(i.$t("education.education_header")),1)])])]),e("div",qs,[e("div",Zs,[e("div",Qs,[e("div",Ks,[e("div",Xs,[e("div",eo,[(r(!0),c(g,null,v(o.timeline,a=>(r(),c("div",{class:"resume-single-list",key:a.id},[e("div",to,[e("div",io,[e("div",so,[e("h4",null,s(a.degree),1),e("span",null,s(a.institute),1)]),e("div",oo,[e("span",null,s(a.dateRange),1)])]),e("p",ao,s(a.getLocalizedProperty("description")),1)])]))),128))])])])])])])])])}const ro=f(Fs,[["render",no]]),lo={name:"AppSkills",data(){return{certificationList:[],skillList:[],achievementList:[]}},async created(){const i=await b.getTechnicalSkills();this.skillList=i;const t=await b.getCertifications();this.certificationList=t;const n=await b.getAchievements();this.achievementList=n}},co={class:"rn-resume-area rn-section-gap section-separator",id:"skills"},ho={class:"container"},po={class:"row"},mo={class:"col-lg-12"},uo={class:"section-title text-center"},_o={class:"title"},go={class:"row mt--45"},fo={class:"col-lg-12"},vo={class:"rn-nav-list nav nav-tabs",id:"myTabs",role:"tablist"},bo={class:"nav-item"},yo={class:"nav-link active",id:"professional-tab","data-toggle":"tab",href:"#professional",role:"tab","aria-controls":"professional","aria-selected":"true"},wo={class:"nav-item"},ko={class:"nav-link",id:"certification-tab","data-toggle":"tab",href:"#certification",role:"tab","aria-controls":"certification","aria-selected":"false"},jo={class:"nav-item"},$o={class:"nav-link",id:"achievement-tab","data-toggle":"tab",href:"#achievement",role:"tab","aria-controls":"achievement","aria-selected":"false"},Io={class:"rn-nav-content tab-content",id:"myTabContents"},Ao={class:"tab-pane show active fade single-tab-area",id:"professional",role:"tabpanel","aria-labelledby":"professional-tab"},So={class:"personal-experience-inner mt--40"},To={class:"col-lg-6 col-md-6 col-12"},Do={key:0,class:"progress-wrapper"},Co={class:"content"},Mo={class:"progress-charts"},Po={class:"heading heading-h6"},Lo={class:"progress"},xo={class:"percent-label"},Bo={class:"col-lg-6 col-md-6 col-12 mt_sm--60"},Eo={key:0,class:"progress-wrapper"},Uo={class:"content"},Vo={class:"progress-charts"},Jo={class:"heading heading-h6"},Go={class:"progress"},Ro={class:"percent-label"},Fo={class:"tab-pane fade",id:"certification",role:"tabpanel","aria-labelledby":"certification-tab"},No={class:"personal-experience-inner mt--40"},zo={class:"row"},Wo={class:"col-lg-10 col-md-12 col-12 mt_md--60 mt_sm--60"},Oo={class:"content"},Yo={class:"experience-list"},Ho={class:"inner"},qo={class:"heading"},Zo={class:"title"},Qo=["href"],Ko=e("i",{class:"feather-arrow-up-right"},null,-1),Xo={class:"date-of-time"},ea={class:"description"},ta={class:"tab-pane fade",id:"achievement",role:"tabpanel","aria-labelledby":"achievement-tab"},ia={class:"personal-experience-inner mt--40"},sa={class:"row"},oa={class:"content"},aa={class:"experience-list"},na={"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"300","data-aos-once":"true",class:"resume-single-list"},ra={class:"inner"},la={class:"heading"},ca={class:"title"},da=["href"],ha={class:"date-of-time"},pa={key:0,class:"description"};function ma(i,t,n,p,o,d){return r(),c("div",co,[e("div",ho,[e("div",po,[e("div",mo,[e("div",uo,[e("h2",_o,s(i.$t("skill.skill_header")),1)])])]),e("div",go,[e("div",fo,[e("ul",vo,[e("li",bo,[e("a",yo,s(i.$t("skill.technical_skills")),1)]),e("li",wo,[e("a",ko,s(i.$t("skill.certifications")),1)]),e("li",jo,[e("a",$o,s(i.$t("skill.achievements")),1)])]),e("div",Io,[e("div",Ao,[e("div",So,[(r(!0),c(g,null,v(o.skillList,(a,l)=>(r(),c("div",{class:"row row--40",key:a},[e("div",To,[l%2===0?(r(),c("div",Do,[e("div",Co,[e("div",Mo,[e("h6",Po,s(a.name),1),e("div",Lo,[e("div",{class:"progress-bar wow fadeInLeft","data-wow-duration":"0.5s","data-wow-delay":".3s",role:"progressbar",style:T("width: "+a.percentage+"%"),"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},[e("span",xo,s(a.percentage)+"% ",1)],4)])])])])):u("",!0)]),e("div",Bo,[l%2!==0?(r(),c("div",Eo,[e("div",Uo,[e("div",Vo,[e("h6",Jo,s(a.name),1),e("div",Go,[e("div",{class:"progress-bar wow fadeInLeft","data-wow-duration":"0.5s","data-wow-delay":".3s",role:"progressbar",style:T("width: "+a.percentage+"%"),"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},[e("span",Ro,s(a.percentage)+"% ",1)],4)])])])])):u("",!0)])]))),128))])]),e("div",Fo,[e("div",No,[e("div",zo,[e("div",Wo,[e("div",Oo,[e("div",Yo,[(r(!0),c(g,null,v(o.certificationList,a=>(r(),c("div",{class:"resume-single-list",key:a.id},[e("div",Ho,[e("div",qo,[e("div",Zo,[e("h4",null,s(a.title),1),e("a",{href:a.url,target:"_blank"},[e("span",null,[h(s(a.instituteName)+" ",1),Ko])],8,Qo)]),e("div",Xo,[e("span",null,s(a.dateRange),1)])]),e("p",ea,s(a.getLocalizedProperty("description")),1)])]))),128))])])])])])]),e("div",ta,[e("div",ia,[e("div",sa,[(r(!0),c(g,null,v(o.achievementList,(a,l)=>(r(),c("div",{class:"col-lg-6 col-md-12 col-12",key:a.id},[e("div",oa,[e("div",aa,[e("div",na,[e("div",ra,[e("div",la,[e("div",ca,[e("a",{href:a.url,target:"_blank"},[e("h4",null,s(a.title),1)],8,da),e("span",null,s(a.location),1)]),e("div",ha,[e("span",null,s(a.dateRange),1)])]),a.getLocalizedProperty("description")?(r(),c("p",pa,s(a.getLocalizedProperty("description")),1)):u("",!0)])])])])]))),128))])])])])])])])])}const ua=f(lo,[["render",ma]]),_a={name:"JobDescriptionPopup",mounted(){feather.replace()},props:{companyData:{type:z,required:!0},itemId:{type:String,required:!0}}},ga=["id"],fa={key:0,class:"modal-dialog modal-dialog-centered modal-news",role:"document"},va={class:"modal-content"},ba=e("div",{class:"modal-header"},[e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},[e("span",{class:"icon","data-feather":"x"},"X")])])],-1),ya={class:"modal-body"},wa=["src"],ka={class:"news-details"},ja={class:"date"},$a={key:0,class:"date"},Ia=e("i",{class:"feather feather-map-pin"},null,-1),Aa={class:"title"},Sa=["href"],Ta=["innerHTML"];function Da(i,t,n,p,o,d){return r(),c("div",{class:"modal fade",id:n.itemId,tabindex:"-1",role:"dialog","aria-hidden":"true"},[n.companyData?(r(),c("div",fa,[e("div",va,[ba,e("div",ya,[n.companyData.imageUrl!==null&&n.companyData.imageUrl!==""?(r(),c("img",{key:0,alt:"news modal",class:"img-fluid modal-feat-img",src:n.companyData.imageUrl},null,8,wa)):u("",!0),e("div",ka,[e("span",ja,s(n.companyData.dateRange),1),n.companyData.getLocalizedProperty("companyLocation")?(r(),c("span",$a,[Ia,h(" "+s(n.companyData.getLocalizedProperty("companyLocation")),1)])):u("",!0),e("h2",Aa,[h(s(n.companyData.position)+" - ",1),e("a",{href:n.companyData.companyWebsite,target:"_blank"},s(n.companyData.companyName),9,Sa)]),e("div",{innerHTML:n.companyData.getLocalizedProperty("description")},null,8,Ta)])])])])):u("",!0)],8,ga)}const Ca=f(_a,[["render",Da]]);const Ma={name:"AppJobExperience",components:{JobDescriptionPopup:Ca},data(){return{itemId:"",companyData:null,timeline:[]}},async created(){const i=await b.getJobExperiences();this.timeline=i}},Pa=i=>(L("data-v-c82f546e"),i=i(),x(),i),La={class:"rn-resume-area rn-section-gap section-separator",id:"experience"},xa={class:"container"},Ba={class:"row"},Ea={class:"col-lg-12"},Ua={class:"section-title text-center","data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true"},Va={class:"title"},Ja={class:"row row--45"},Ga={class:"personal-experience-inner mt--40"},Ra={class:"col-lg-12"},Fa={class:"col-lg-9 col-md-12 col-12"},Na={class:"content"},za={class:"experience-list"},Wa=["data-target","onClick"],Oa={class:"heading"},Ya={class:"title"},Ha={class:"date-of-time"},qa={class:"description justify-text"},Za=Pa(()=>e("div",{class:"pt-5 d-flex justify-end"},[e("i",{class:"pr-2 text-decoration-underline"}," See Details "),e("i",{class:"feather-arrow-up-right"})],-1));function Qa(i,t,n,p,o,d){const a=_("JobDescriptionPopup");return r(),c(g,null,[e("div",La,[e("div",xa,[e("div",Ba,[e("div",Ea,[e("div",Ua,[e("h2",Va,s(i.$t("experience.experience_header")),1)])])]),e("div",Ja,[e("div",Ga,[e("div",Ra,[e("div",Fa,[e("div",Na,[e("div",za,[(r(!0),c(g,null,v(o.timeline,l=>(r(),c("div",{class:"resume-single-list",key:l.id},[e("div",{class:"inner change-cursor","data-toggle":"modal","data-target":"#jdId"+l.id,onClick:P(j=>(o.itemId="jdId"+l.id,o.companyData=l),["prevent"])},[e("div",Oa,[e("div",Ya,[e("h4",null,s(l.position),1),e("span",null,s(l.companyName),1)]),e("div",Ha,[e("span",null,s(l.dateRange),1)])]),e("p",qa,[h(s(l.getLocalizedProperty("shortDescription"))+" ",1),m(N),Za])],8,Wa)]))),128))])])])])])])])]),m(a,{itemId:o.itemId,"company-data":o.companyData},null,8,["itemId","company-data"])],64)}const Ka=f(Ma,[["render",Qa],["__scopeId","data-v-c82f546e"]]);const Xa={name:"ProjectPopup",props:{projectData:{type:W,required:!0},projectId:{type:String,required:!0}}},V=i=>(L("data-v-d964d1ef"),i=i(),x(),i),en=["id"],tn={key:0,class:"modal-dialog modal-dialog-centered",role:"document"},sn={class:"modal-content"},on=V(()=>e("div",{class:"modal-header"},[e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"X")])],-1)),an={class:"modal-body"},nn={class:"row align-items-center"},rn={class:"col-lg-6"},ln={class:"portfolio-popup-thumbnail"},cn={class:"image"},dn=["src"],hn={class:"col-lg-6"},pn={class:"text-content"},mn=["href"],un=["innerHTML"],_n={key:0},gn=["innerHTML"],fn=V(()=>e("h6",null,"Technologies Used",-1)),vn={class:"mb--30"},bn=["href"],yn=V(()=>e("i",{class:"feather-external-link"},null,-1));function wn(i,t,n,p,o,d){return r(),c("div",{class:"modal fade",id:n.projectId,tabindex:"-1",role:"dialog","aria-hidden":"true"},[n.projectData?(r(),c("div",tn,[e("div",sn,[on,e("div",an,[e("div",nn,[e("div",rn,[e("div",ln,[e("div",cn,[e("img",{class:"w-100",src:n.projectData.imgUrl&&n.projectData.imgUrl!==""?n.projectData.imgUrl:"files/projects/github-logo.png",alt:"slide"},null,8,dn)])])]),e("div",hn,[e("div",pn,[(r(!0),c(g,null,v(n.projectData.technologyUsed,a=>(r(),B(re,{variant:"outlined",color:"#ff014f",size:"small",elevation:"2",class:"mr-2 mb-4",key:a},{default:I(()=>[h(s(a),1)]),_:2},1024))),128)),e("h3",null,[e("a",{href:n.projectData.url,target:"_blank"},s(n.projectData.name),9,mn)]),e("p",{class:"mb--30",innerHTML:n.projectData.getLocalizedProperty("description")},null,8,un),n.projectData.getLocalizedProperty("myRole")&&n.projectData.getLocalizedProperty("myRole")!==""?(r(),c("h6",_n,"My Role & Responsibilities")):u("",!0),n.projectData.getLocalizedProperty("myRole")&&n.projectData.getLocalizedProperty("myRole")!==""?(r(),c("p",{key:1,class:"mb--30",innerHTML:n.projectData.getLocalizedProperty("myRole")},null,8,gn)):u("",!0),fn,e("p",vn,[e("ul",null,[(r(!0),c(g,null,v(n.projectData.technologyUsed,a=>(r(),c("li",{key:a},s(a),1))),128))])]),e("p",null,[h(s(i.$t("project.project_url"))+": ",1),e("a",{href:n.projectData.url,target:"_blank"},[h(" Here "),yn],8,bn)])])])])])])])):u("",!0)],8,en)}const kn=f(Xa,[["render",wn],["__scopeId","data-v-d964d1ef"]]),jn=[{name:"open_source",code:"OPEN_SOURCE"},{name:"professional",code:"PROFESSIONAL"},{name:"personal",code:"PERSONAL"},{name:"academic",code:"ACADEMIC"},{name:"freelance_work",code:"FREELANCE_WORK"}],$n={name:"AppProjects",components:{ProjectPopup:kn},data(){return{projectId:"",projectData:null,projectList:[]}},methods:{getProjectType(i){var n;if(!i)return"";var t=jn.find(p=>p.code===i.toUpperCase());return this.$t(`project_type.${(n=t==null?void 0:t.name)==null?void 0:n.toLowerCase()}`)||i}},async created(){const i=await b.getProjects();this.projectList=i}},In={class:"rn-portfolio-area rn-section-gap section-separator",id:"project"},An={class:"container"},Sn={class:"row"},Tn={class:"col-lg-12"},Dn={"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true",class:"section-title text-center"},Cn={class:"title"},Mn={class:"row row--25 mt--10 mt_md--10 mt_sm--10"},Pn=["data-target","onClick"],Ln={class:"inner"},xn={class:"thumbnail",style:{height:"250px",display:"flex","align-items":"center","justify-content":"center",overflow:"hidden"}},Bn={href:"javascript:void(0)"},En=["src"],Un={class:"content"},Vn={class:"category-info"},Jn=e("div",{class:"category-list"},[e("a",{href:"javascript:void(0)"})],-1),Gn={class:"category-list"},Rn={style:{"text-transform":"capitalize"},href:"javascript:void(0)"},Fn=e("i",{class:"feather-tag"},null,-1),Nn={class:"title"},zn={href:"javascript:void(0)"},Wn=e("i",{class:"feather-arrow-up-right"},null,-1);function On(i,t,n,p,o,d){const a=_("project-popup");return r(),c(g,null,[e("div",In,[e("div",An,[e("div",Sn,[e("div",Tn,[e("div",Dn,[e("h2",Cn,s(i.$t("project.project_header")),1)])])]),e("div",Mn,[(r(!0),c(g,null,v(o.projectList,l=>(r(),c("div",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-once":"true",class:"col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30",key:l.id},[e("div",{class:"rn-portfolio","data-toggle":"modal","data-target":"#projectId_"+l.id,onClick:P(j=>(o.projectId="projectId_"+l.id,o.projectData=l),["prevent"])},[e("div",Ln,[e("div",xn,[e("a",Bn,[e("img",{src:l.imgUrl&&l.imgUrl!==""?l.imgUrl:"files/projects/github-logo.png",alt:"Project Images",style:{"max-height":"100%",width:"auto"}},null,8,En)])]),e("div",Un,[e("div",Vn,[Jn,e("div",Gn,[e("span",null,[e("a",Rn,[Fn,h(" "+s(d.getProjectType(l.projectType)),1)])])])]),e("h4",Nn,[e("a",zn,[h(s(l.name)+" ",1),Wn])])])])],8,Pn)]))),128))])])]),m(a,{projectId:o.projectId,projectData:o.projectData},null,8,["projectId","projectData"])],64)}const Yn=f($n,[["render",On]]),Hn={name:"AppBlog",components:{},data:()=>({devToUsername:"ishmam_abir",blogList:[]}),methods:{getBlogListFromDevTo(){this.axios.get("https://dev.to/api/articles?username="+this.devToUsername,{params:{order:"created_at desc"}}).then(i=>{this.blogList=i.data}).catch(i=>{console.log(i)})}},async created(){this.getBlogListFromDevTo()}},qn={class:"rn-portfolio-area rn-section-gap section-separator",id:"blog"},Zn={class:"container"},Qn={class:"row"},Kn={class:"col-lg-12"},Xn={"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true",class:"section-title text-center"},er={class:"title"},tr={class:"row row--25 mt--10 mt_md--10 mt_sm--10"},ir={class:"rn-portfolio"},sr={class:"inner"},or={class:"thumbnail",style:{height:"250px",display:"flex","align-items":"center","justify-content":"center",overflow:"hidden"}},ar=["href"],nr=["src"],rr={class:"content"},lr={class:"category-info"},cr={class:"category-list"},dr={href:"javascript:void(0)"},hr={class:"category-list"},pr={style:{"text-transform":"capitalize"},href:"javascript:void(0)"},mr=e("i",{class:"feather-heart"},null,-1),ur={class:"title"},_r=["href"],gr=e("i",{class:"feather-arrow-up-right"},null,-1);function fr(i,t,n,p,o,d){return r(),c("div",qn,[e("div",Zn,[e("div",Qn,[e("div",Kn,[e("div",Xn,[e("h2",er,s(i.$t("blog.blog_header")),1)])])]),e("div",tr,[(r(!0),c(g,null,v(i.blogList,a=>(r(),c("div",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-once":"true",class:"col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30",key:a.id},[e("div",ir,[e("div",sr,[e("div",or,[e("a",{href:a.url,target:"_blank"},[e("img",{src:a.cover_image&&a.cover_image!==""?a.cover_image:"files/projects/github-logo.png",alt:"Article Cover Images",style:{"max-height":"100%",width:"auto"}},null,8,nr)],8,ar)]),e("div",rr,[e("div",lr,[e("div",cr,[e("a",dr,s(a.reading_time_minutes)+" "+s(i.$t("blog.min_read")),1)]),e("div",hr,[e("span",null,[e("a",pr,[mr,h(" "+s(a.positive_reactions_count),1)])])])]),e("h4",ur,[e("a",{href:a.url,target:"_blank"},[h(s(a.title)+" ",1),gr],8,_r)])])])])]))),128))])])])}const vr=f(Hn,[["render",fr]]),br=X({name:"HomeView",components:{AppSlider:Ei,AppContact:Rs,AppEducation:ro,AppSkillsCertificationAchievements:ua,AppJobExperience:Ka,AppProjects:Yn,AppBlog:vr},data(){return{visibility:"hidden"}},mounted(){this.initParticleJS()},methods:{gotoTop(){this.$vuetify.goTo(0,{duration:300,offset:0,easing:"easeInOutCubic"}),window.setTimeout(()=>{this.visibility="hidden"},300)},initParticleJS(){particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:["#ff014f"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.8,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:800,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})}}}),yr={class:"page-wrapper-two"},wr={class:"backto-top"},kr=e("i",{"data-feather":"arrow-up"},null,-1),jr=[kr];function $r(i,t,n,p,o,d){const a=_("app-slider"),l=_("app-education"),j=_("app-job-experience"),y=_("app-skills-certification-achievements"),k=_("app-projects"),$=_("app-blog"),O=_("app-contact");return r(),c("main",yr,[m(a),m(l),m(j),m(y),m(k),m($),m(O),e("div",wr,[e("div",{onClick:t[0]||(t[0]=(...Y)=>i.gotoTop&&i.gotoTop(...Y)),style:T({color:"white",visibility:i.visibility})},jr,4)])])}const Ir=f(br,[["render",$r]]),Ar=le({history:ce("/Portfolio/"),routes:[{path:"/",name:"home",component:Ir}]});bi();ee(ui).use(Ar).use(_i).use(te,H).use(E).use(Q()).mount("#app");
