import{a as L}from"./axios-3a665b0f.js";import{c as U}from"./pinia-c66bd803.js";import{i as n,c,a as e,A as m,S as j,U as h,V as a,F as u,W as v,n as E,X as A,Y as _,Z as I,_ as D,$ as M,a0 as T,e as y,j as P,d as R,a1 as J}from"./@vue-41f516d9.js";import{p as N}from"./vue-axios-58a7c26f.js";import{b as G}from"./@vueform-ef5fa302.js";import{V,a as F,b as W,c as O,d as H,e as Y,f as z}from"./vuetify-27b712b5.js";import{c as Z}from"./vue-i18n-d7ca496e.js";/* empty css             */import{c as q,a as Q}from"./vue-router-fa3c7cb7.js";import{A as K}from"./@duskmoon-e87b4100.js";import"./@intlify-ca2a3837.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function p(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzlkN2ViMy04ZjZkLTFlNDEtODIxMC1mMDU4N2U2OWE0ZjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEM4MkE3M0RFQzJFMTFFQjk0NjFCNEU2OTA1OTQ5NjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEM4MkE3M0NFQzJFMTFFQjk0NjFCNEU2OTA1OTQ5NjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGRiMTRiNTUtZWZmZi0zMDQzLTkzM2QtZmIxMDA2YTM5NGFiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3OWQ3ZWIzLThmNmQtMWU0MS04MjEwLWYwNTg3ZTY5YTRmNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhA9gjEAAAegSURBVHja7JxrbFNlGMffc2m7S8tubHQbg23CBCGQkIEE8QsfNNHEaJAAEhNjNMQ4SPjgFy4aLvpFgomQ+EFj1KiIYjQkfjAkfhENAiFKQGRcVjbmbtCtWzfW9vQcn2d737Onh461Xbu1PT7Jk/WctjvP/9fnvZ7zvtLeg0fYDJqLu5O7A1wBl7mj6dyj4BHwMPcQ97Tawb274p5XMwwCRbvBi7grCXxHQFI5RGoIa4R7kB9nxDIFphi8hP+V0gzaw70KfBg8wP9mLRiJB1zOi8kD9sjC6vrSEvcqh6rWq4rcIMtyvSSxUiZJxdI4RGagSMMYNgw2oOu6T4vqbRFN8w0Eghdv3u7yWa7n5o5FzQ8+NP4vsgdMEf8FHwCydPGCleUl7s2qqjwhSZI3AbrFY6AkViXLShN8jxW4HMxTXMjmV8/t0bToGX8geOLq9fa/yNfwul7+o/TyojarYPD7lTxTTPNWlpXX13lfcTnVzQCjNG0pKUnzHA5147y5pRurKkoGQmHthK+j+7Puvn4/ATSfZ04fuDYbYNz8VxKtCauuKq9oWODd5XSomzLdvCFwyKTtSxbVbW9cWH2yrb37SFev/x5/28Prtx4OKWmTU6xLsNjU0O+vXbXkzabG2p9mAorV4Jov4rUhhhaLtmoeq5RpMApP1VJSoTY8+fjyLwtczp3wK5axWTK8NsSwA2NZVF/TSN4q5TErmQKDxa4OvFCcaF7RtKWupvKUIsurWZYYxgKV9CmMjZwu5LGr6QYjoJitzrrmx/a7iwv2T9Y0z7I5MDaI8YCl5UoYjpxE8XGIE+tXL/sQyvUWluUGMW7GWCmwRIvVVGCw0qqlWbF+zbKPoG/xNMsRw1gxZkvm1E5VIU8FBvsoBSRTjqqKsoHlmGHMGDs5VcC1pQTGTVsfKK/vAv2nWI4axo4aLK2VO1kwKu+8ma0P9hVYjhtqaF7ZtJV20vcd+kBNBkyleA/7KVDD72F5Yu6igt2oieiflyiYYjr2qfFWHMjSJjnlxAFNh6heyBp3ImAqSTe/BTpMa1ieGWhqXrtq6Vvk1FyA81AwHpEdOEJ2OR0vszw1l8uxDTWSJtzzMDDig6xxgbclnVMG2WbQiSkEjTuodpo1sqVuGZtjrSib43E6HVtZnhtqRK0iiTiDB8DMES8WN9S+luKURM4lDmh9PR4Dmfw1a2aXU32B2cRA6/O0NYfiJFMwHjF2WLqobjlOIdoFDGpFzWRs6KFgzLJVXup5idnMLJqLKZgiMqbYYDcwFs1F2DrJvDYeA9TUWLt4NqcnZ7E4lYH2JlLfumQ6rTDHXbSS2dRA+wo6LSHTcZDDoT5qVzCgvYl2cWLAKIq8wK5gQPtCKxhzPkKW5Gq7grFoVxGMMlEJsQq7ggHt5TED8JiuvyQVMvuSKaIJFANGIh0923GJ1S7L7H+LX+ew8efdxszIwJNJuWIW7XoMGGYY922bIoYxYgUTnXiP3bMvF+Ynh1EEYz51pBt6l13BWLRrCCZsYorq7XYFA9pvk8NwDJhIRLtmVzCgvdUKZlQcDQZHLtkVjEX7KIIJiZap9VZnq2EY/fareI1+1C6qG2QiOnhmU6Vp0V/sBsaieQTXFwgwZufGPzD0td3AWDQPMzJOMh81v3qj4zKkVo+NilEPap7oAI8/F0yXwgTFh0Nh7Qe7gAGtP5LDIBQjnbHYu42D4sX1ts5PWJoWK2R7woDWj+MxkC1la2yh1L3+waFwOHI836mgRtQqkofWtdZpB3O8cKu9+yiUv0Aej6bvo0aqna52s4IZEj1hXNERCke+yNu6JRT5iqxaCTPLYox4E1V94sXZi/8ci+r6+bwbF+n6hbMXr75PTt21ro2MB2aY0uvp6z+Yb2BAE32UfhigBK2fmWxqs48ME66N3A+9ly9QUAtqIt2UuH22ycDgHE2vODj357XPwxHtZM63QqABtZBTvZAtWjJgRJtutkq/X/h7D4wpTufweOg0aiCnArTfkgwYxrPGnJY4c/5KixbNvUEmxoyx02kFWiJSAYO9305GJrPOnLvyBtD/OYcy5WeMmZYorsmYDpix1g38DhvfTkBkzk4orydyoE75FmMlpyJcy5Qr/BO94YYVVAfNHCivbweHR99h01jCm8lEwdggxn2WTOlINN5k7kQKOOa9pwuXWr+503X3OewwZVPnDWPC2Cx1SkcyP2Kyt2hFsRoQJ274/r356x+Xt42Gwji2GpjFeZUAxHAMY8GYyFsDHEpSG2Skcu/a4DV6FyN3MXH40NrW+SyU6+9nGkoErgnXfgZioINCncfYm8oUynRW6g/xYmVuYdDV478LvttbWXa4vs77qsupbsrUegTMzlBY+87X0f0pGQyaE04cyKxsYSDqnS7eUUJATjEyBz8MLw/zTS+2qqqybroPVgOMXmh+f/MHgsctm17QCraPpeHhhHTtBoKBjLA426RwAWMiyDYpDaoi1/NtUsoAGD6ujw8taSB+xEDQBhvWdf22FtV9EU1ri7NNihVIP/+BsmqbFFH3DHKPu7EOF+ZL4/VyYmMdawahp7IV01StYk5vxUSFBMhgdLLNuxSeWQab2LxLZzOweddk9p8AAwBVqtNS/rSJwQAAAABJRU5ErkJggg==";const g=(t,d)=>{const s=t.__vccOpts||t;for(const[p,o]of d)s[p]=o;return s},ee={name:"AppHeader",components:{Toggle:G},data(){return{sidebarImage:"files/ishmam_sidebar.jpg",langValue:navigator.languages[0].split("-")[0],socialList:[{class:"github",url:"https://github.com/IshmamAbir",icon:"github"},{class:"mail",url:"mailto:ishmam.cse@gmail.com",icon:"mail"},{class:"linkedin",url:"https://www.linkedin.com/in/ishmam-abir/",icon:"linkedin"},{class:"youtube",url:"https://www.youtube.com/@ishmam_abir",icon:"youtube"},{class:"dev.to",url:"https://dev.to/ishmam_abir",icon:"pocket"},{class:"instagram",url:"https://www.instagram.com/ishmam.abir",icon:"instagram"}]}},methods:{changeLanguage(t){this.$i18n.locale=t}}},w=t=>(I("data-v-cce6eadd"),t=t(),D(),t),te={class:"d-none d-lg-block header-style-2"},ae={class:"rn-header-area d-flex align-items-start flex-column left-header-style"},ie={class:"logo-area"},oe={href:"#home"},se=["src"],ne={id:"sideNavs",class:"mainmenu-nav navbar-example2"},ce={class:"primary-menu nav nav-pills"},re={class:"nav-item"},le={class:"nav-link smoth-animation-two active"},de={class:"nav-item"},he={class:"nav-link smoth-animation-two active",href:"#home"},pe=w(()=>e("i",{"data-feather":"home"},null,-1)),me={class:"nav-item"},_e={class:"nav-link smoth-animation-two",href:"#educations"},ue=w(()=>e("i",{"data-feather":"book-open"},null,-1)),ge={class:"nav-item"},ve={class:"nav-link smoth-animation-two",href:"#experience"},fe=w(()=>e("i",{"data-feather":"briefcase"},null,-1)),be={class:"nav-item"},ye={class:"nav-link smoth-animation-two",href:"#skills"},we=w(()=>e("i",{"data-feather":"award"},null,-1)),$e={class:"nav-item"},ke={class:"nav-link smoth-animation-two",href:"#project"},je=w(()=>e("i",{"data-feather":"code"},null,-1)),Te={class:"nav-item"},Ae={class:"nav-link smoth-animation-two",href:"#blog"},Ie=w(()=>e("i",{"data-feather":"edit"},null,-1)),De={class:"nav-item"},Se={class:"nav-link smoth-animation-two",href:"#contacts"},Ce=w(()=>e("i",{"data-feather":"message-circle"},null,-1)),Me={class:"footer"},Pe={class:"social-share-style-1"},xe={class:"title"},Be={class:"social-share d-flex liststyle"},Le=["href"],Ue=["data-feather"],Ee=A('<div class="header-style-2 d-block d-lg-none" data-v-cce6eadd><div class="row align-items-center" data-v-cce6eadd><div class="col-6" data-v-cce6eadd></div><div class="col-6" data-v-cce6eadd><div class="header-right text-right" data-v-cce6eadd><div class="hamberger-menu" data-v-cce6eadd><i id="menuBtn" class="feather-menu humberger-menu" data-v-cce6eadd></i></div></div></div></div></div>',1),Re={class:"popup-mobile-menu"},Je={class:"inner"},Ne=A('<div class="menu-top" data-v-cce6eadd><div class="menu-header" data-v-cce6eadd><a class="logo" href="#home" data-v-cce6eadd><img src="'+X+'" alt="Personal Portfolio" data-v-cce6eadd></a><div class="close-button" data-v-cce6eadd><button class="close-menu-activation close" data-v-cce6eadd><i data-feather="x" data-v-cce6eadd></i></button></div></div><p class="discription" data-v-cce6eadd> You are free to know about me. Check everything that you need to know and also feel free to ask questions ! Adios! </p></div>',1),Ge={class:"content"},Ve={class:"primary-menu nav nav-pills"},Fe={class:"nav-item"},We={class:"nav-link smoth-animation-two active",href:"#home"},Oe={class:"nav-item"},He={class:"nav-link smoth-animation-two",href:"#educations"},Ye={class:"nav-item"},ze={class:"nav-link smoth-animation-two",href:"#experience"},Ze={class:"nav-item"},qe={class:"nav-link smoth-animation-two",href:"#skills"},Qe={class:"nav-item"},Ke={class:"nav-link smoth-animation-two",href:"#project"},Xe={class:"nav-item"},et={class:"nav-link smoth-animation-two",href:"#blog"},tt={class:"nav-item"},at={class:"nav-link smoth-animation-two",href:"#contacts"},it=A('<div class="social-share-style-1 mt--40" data-v-cce6eadd><span class="title" data-v-cce6eadd>find with me</span><ul class="social-share d-flex liststyle" data-v-cce6eadd><li class="facebook" data-v-cce6eadd><a href="#" data-v-cce6eadd><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook" data-v-cce6eadd><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-cce6eadd></path></svg></a></li><li class="instagram" data-v-cce6eadd><a href="#" data-v-cce6eadd><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram" data-v-cce6eadd><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-cce6eadd></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-cce6eadd></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-cce6eadd></line></svg></a></li><li class="linkedin" data-v-cce6eadd><a href="#" data-v-cce6eadd><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin" data-v-cce6eadd><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-v-cce6eadd></path><rect x="2" y="9" width="4" height="12" data-v-cce6eadd></rect><circle cx="4" cy="4" r="2" data-v-cce6eadd></circle></svg></a></li></ul></div>',1);function ot(t,d,s,p,o,l){const i=_("Toggle");return n(),c(u,null,[e("div",te,[e("header",ae,[e("div",ie,[e("a",oe,[e("img",{src:o.sidebarImage,alt:"personal-logo"},null,8,se)])]),e("nav",ne,[e("ul",ce,[e("li",re,[e("a",le,[m(V,{class:"pr-2"},{default:j(()=>[h("mdi-translate")]),_:1}),h(" "+a(o.langValue==="en"?"English":"日本語")+" ",1),m(i,{size:"default",class:"z-index-1 ml-3 toggle-on-color toggle-off-color","on-label":"EN","off-label":"JA","false-value":"ja","true-value":"en",modelValue:o.langValue,"onUpdate:modelValue":d[0]||(d[0]=r=>o.langValue=r),onChange:l.changeLanguage},null,8,["modelValue","onChange"])])]),m(F,{color:"red"}),e("li",de,[e("a",he,[pe,h(" "+a(t.$t("header.home")),1)])]),e("li",me,[e("a",_e,[ue,h(" "+a(t.$t("header.education")),1)])]),e("li",ge,[e("a",ve,[fe,h(" "+a(t.$t("header.experience")),1)])]),e("li",be,[e("a",ye,[we,h(" "+a(t.$t("header.skill")),1)])]),e("li",$e,[e("a",ke,[je,h(" "+a(t.$t("header.projects")),1)])]),e("li",Te,[e("a",Ae,[Ie,h(" "+a(t.$t("header.blog")),1)])]),e("li",De,[e("a",Se,[Ce,h(" "+a(t.$t("header.contact")),1)])])])]),e("div",Me,[e("div",Pe,[e("span",xe,a(t.$t("header.find_me_in")),1),e("ul",Be,[(n(!0),c(u,null,v(o.socialList,r=>(n(),c("li",{key:r,class:E(r.class)},[e("a",{href:r.url,target:"_blank"},[e("i",{"data-feather":r.icon},null,8,Ue)],8,Le)],2))),128))])])])])]),Ee,e("div",Re,[e("div",Je,[Ne,e("div",Ge,[e("ul",Ve,[e("li",Fe,[e("a",We,a(t.$t("header.home")),1)]),e("li",Oe,[e("a",He,a(t.$t("header.education")),1)]),e("li",Ye,[e("a",ze,a(t.$t("header.experience")),1)]),e("li",Ze,[e("a",qe,a(t.$t("header.skill")),1)]),e("li",Qe,[e("a",Ke,a(t.$t("header.projects")),1)]),e("li",Xe,[e("a",et,a(t.$t("header.blog")),1)]),e("li",tt,[e("a",at,a(t.$t("header.contact")),1)])]),it])])])],64)}const st=g(ee,[["render",ot],["__scopeId","data-v-cce6eadd"]]),nt={name:"AppFooter"},ct={class:"rn-footer-area rn-section-gap section-separator"},rt={class:"container"},lt={class:"row"},dt={class:"col-lg-12"},ht={class:"footer-area text-center"},pt={class:"description mt--30"},mt=e("a",{target:"_blank",href:"https://www.linkedin.com/in/ishmam-abir/"},"Ishmam Abir Chowdhury.",-1);function _t(t,d,s,p,o,l){return n(),c("div",ct,[e("div",rt,[e("div",lt,[e("div",dt,[e("div",ht,[e("p",pt,[h(" © "+a(new Date().getFullYear())+". All rights reserved by ",1),mt])])])])])])}const ut=g(nt,[["render",_t]]),gt={name:"App",components:{AppHeader:st,AppFooter:ut}};function vt(t,d,s,p,o,l){const i=_("app-header"),r=_("router-view"),$=_("app-footer");return n(),M(W,null,{default:j(()=>[m(O,null,{default:j(()=>[m(i),m(r),m($)]),_:1})]),_:1})}const ft=g(gt,[["render",vt]]),bt={continuing:"Continuing"},yt={home:"Home",education:"Education",contact:"Contacts",experience:"Experience",projects:"Projects",skill:"Skills & Achievements",find_me_in:"Find Me In",blog:"Articles"},wt={education_header:"Educational Qualification"},$t={skill_header:"Skills",technical_skills:"Technical Skills",achievements:"Achievements",certifications:"Certifications"},kt={experience_header:"Work Experience"},jt={contact_header:"Contact With Me",email:"E-mail",subject:"Subject",your_message:"Your Message",send_message:"Send Message",phone_number:"Phone Number",your_name:"Your Name",find_me_in:"Find Me In"},Tt={project_header:"My Projects",project_url:"Project Url"},At={open_source:"Open Source Project",professional:"Professional Project",personal:"Personal Project",academic:"Academic Project",freelance_work:"Freelance Work"},It={blog_header:"Blog Articles",min_read:"min read"},Dt={common:bt,header:yt,education:wt,skill:$t,experience:kt,contact:jt,project:Tt,project_type:At,blog:It},St={continuing:"継続中"},Ct={home:"ホーム",education:"学歴",contact:"お問い合わせ",experience:"実務経験",projects:"プロジェクト",skill:"スキル & 実績",find_me_in:"検索先",blog:"記事"},Mt={education_header:"学歴"},Pt={skill_header:"スキル",technical_skills:"技術スキル",achievements:"実績",certifications:"認証"},xt={experience_header:"実務経験"},Bt={contact_header:"お問い合わせ",email:"メール",subject:"件名",your_message:"メッセージ",send_message:"メッセージを送信",phone_number:"電話番号",your_name:"お名前",find_me_in:"検索先"},Lt={project_header:"プロジェクト一覧",project_url:"プロジェクト Url"},Ut={open_source:"オープンソース",professional:"プロフェッショナル",personal:"個人",academic:"学術",freelance_work:"フリーランス"},Et={blog_header:"ブログ記事一覧",min_read:"分で読む"},Rt={common:St,header:Ct,education:Mt,skill:Pt,experience:xt,contact:Bt,project:Lt,project_type:Ut,blog:Et},Jt=Z({locale:navigator.languages[0].split("-")[0]==="ja"?"ja":"en",fallbackLocale:"ja",messages:{en:Dt,ja:Rt}}),Nt=H(),Gt="modulepreload",Vt=function(t){return"/Portfolio/"+t},C={},Ft=function(d,s,p){if(!s||s.length===0)return d();const o=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=Vt(l),l in C)return;C[l]=!0;const i=l.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(!!p)for(let b=o.length-1;b>=0;b--){const k=o[b];if(k.href===l&&(!i||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${r}`))return;const f=document.createElement("link");if(f.rel=i?"stylesheet":Gt,i||(f.as="script",f.crossOrigin=""),f.href=l,document.head.appendChild(f),i)return new Promise((b,k)=>{f.addEventListener("load",b),f.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>d())};async function Wt(){(await Ft(()=>import("./webfontloader-2a4655c2.js").then(d=>d.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const Ot={name:"AppSlider",components:{Typed:K},data(){return{backgroundImage:"files/bg-cover.jpg",centerImage:"files/ishmam.jpeg",fullName:"ISHMAM ABIR CHOWDHURY",typingText:{strings:["Software Engineer","Web Developer","Open Source Contributor","Photographer ","Videographer"],loop:!0,typeSpeed:35,smartBackspace:!0,shuffle:!0,showCursor:!1,backSpeed:45,autoInsertCss:!0}}}},Ht=e("div",{id:"particles-js"},null,-1),Yt={class:"container"},zt={class:"row"},Zt={class:"col-lg-12"},qt={class:"banner-inner"},Qt={class:"thumbnail gradient-border gradient-animation"},Kt=["src"],Xt={class:"text-light"},ea={class:"cd-headline clip is-full-width"},ta=e("span",{class:"text-light"},"I am a  ",-1),aa=e("div",{class:"typing text-danger"},null,-1),ia=e("div",{class:"col-lg-10 offset-lg-1 mt--60"},[e("p",{class:"has-drop-cap",style:{"text-align":"justify"}}," Basically I am A Bangladeshi Origin Full-time Web Developer and A Software Engineer By Profession Who Is Living In Japan and Also A Photographer & Video Editor By Choice. I am At A Time A Hard Working And Super Lazy. I Can Sleep For 17 Hours Straight & Also Can Code From 10:00 PM to 9:00 AM Continuously. My Potential For You Depends On How You Want To Get It. ")],-1),oa=e("div",{class:"button-area"},[e("a",{class:"rn-btn cv-download",href:"#contacts"},[e("span",null,"Download CV")])],-1);function sa(t,d,s,p,o,l){const i=_("Typed");return n(),c("section",{id:"home",class:"slider-style-5 rn-section-gap pb--110 align-items-center with-particles bg_image",style:T("background-image: url("+o.backgroundImage+")"),"data-black-overlay":"7"},[Ht,e("div",Yt,[e("div",zt,[e("div",Zt,[e("div",qt,[e("div",Qt,[e("img",{id:"border",class:"gradient-border",src:o.centerImage,alt:""},null,8,Kt)]),e("h1",Xt,a(o.fullName),1),e("span",ea,[ta,e("span",null,[m(i,{options:o.typingText},{default:j(()=>[aa]),_:1},8,["options"])])]),ia,oa])])])])],4)}const na=g(Ot,[["render",sa]]),ca={name:"AppContact",data(){return{contactDetails:{fullName:"Ishmam Abir Chowdhury",bottomImage:"files/contact/bottom_image.jpg",designation:"Software Development Engineer",email:"ishmam.cse@gmail.com",linkedinUrl:"https://www.linkedin.com/in/ishmam-abir/",githubUrl:"https://github.com/IshmamAbir",contactText_en:"Feel free to connect with me via email or through my social media channels to learn more about me.",contactText_ja:"メールや各種ソーシャルメディアを通じて、お気軽にご連絡ください。私について詳しく知っていただけます。"}}}},ra={class:"rn-contact-area rn-section-gap section-separator",id:"contacts"},la={class:"container"},da={class:"row"},ha={class:"col-lg-12"},pa={class:"section-title text-center"},ma=e("span",{class:"subtitle"},"Contact",-1),_a={class:"title"},ua={class:"row mt--50 mt_md--40 mt_sm--40 mt-contact-sm"},ga={class:"col-lg-5"},va={class:"contact-about-area"},fa={class:"thumbnail"},ba=["src"],ya={class:"title-area"},wa={class:"title"},$a=e("span",null,"Software Development Engineer",-1),ka={class:"description"},ja={class:"mail"},Ta=["href"],Aa={class:"social-area"},Ia={class:"name"},Da={class:"social-icone"},Sa=["href"],Ca=e("i",{"data-feather":"mail"},null,-1),Ma=[Ca],Pa=["href"],xa=e("i",{"data-feather":"linkedin"},null,-1),Ba=[xa],La=["href"],Ua=e("i",{"data-feather":"github"},null,-1),Ea=[Ua],Ra={"data-aos-delay":"600",class:"col-lg-7 contact-input"},Ja={class:"contact-form-wrapper"},Na={class:"introduce"},Ga={class:"rnt-contact-form rwt-dynamic-form row",id:"contact-form",method:"POST",action:"mail.php"},Va={class:"col-lg-6"},Fa={class:"form-group"},Wa={for:"contact-name"},Oa=e("input",{class:"form-control form-control-lg",name:"contact-name",id:"contact-name",type:"text"},null,-1),Ha={class:"col-lg-6"},Ya={class:"form-group"},za={for:"contact-phone"},Za=e("input",{class:"form-control",name:"contact-phone",id:"contact-phone",type:"text"},null,-1),qa={class:"col-lg-12"},Qa={class:"form-group"},Ka={for:"contact-email"},Xa=e("input",{class:"form-control form-control-sm",id:"contact-email",name:"contact-email",type:"email"},null,-1),ei={class:"col-lg-12"},ti={class:"form-group"},ai={for:"subject"},ii=e("input",{class:"form-control form-control-sm",id:"subject",name:"subject",type:"text"},null,-1),oi={class:"col-lg-12"},si={class:"form-group"},ni={for:"contact-message"},ci=e("textarea",{name:"contact-message",id:"contact-message",cols:"30",rows:"10"},null,-1),ri={class:"col-lg-12"},li={name:"submit",type:"submit",id:"submit",class:"rn-btn"},di=e("i",{"data-feather":"arrow-right"},null,-1);function hi(t,d,s,p,o,l){return n(),c("div",ra,[e("div",la,[e("div",da,[e("div",ha,[e("div",pa,[ma,e("h2",_a,a(t.$t("contact.contact_header")),1)])])]),e("div",ua,[e("div",ga,[e("div",va,[e("div",fa,[e("img",{src:o.contactDetails.bottomImage,alt:"contact-img"},null,8,ba)]),e("div",ya,[e("h4",wa,a(o.contactDetails.fullName.toUpperCase()),1),$a]),e("div",ka,[e("p",null,a(o.contactDetails[`contactText_${t.$i18n.locale}`]),1),e("span",ja,[h(a(t.$t("contact.email"))+": ",1),e("a",{href:"mailto:"+o.contactDetails.email},a(o.contactDetails.email),9,Ta)])]),e("div",Aa,[e("div",Ia,a(t.$t("contact.find_me_in")),1),e("div",Da,[e("a",{href:"mailto:"+o.contactDetails.email},Ma,8,Sa),e("a",{href:o.contactDetails.linkedinUrl,target:"_blank"},Ba,8,Pa),e("a",{href:o.contactDetails.githubUrl,target:"_blank"},Ea,8,La)])])])]),e("div",Ra,[e("div",Ja,[e("div",Na,[e("form",Ga,[e("div",Va,[e("div",Fa,[e("label",Wa,a(t.$t("contact.your_name")),1),Oa])]),e("div",Ha,[e("div",Ya,[e("label",za,a(t.$t("contact.phone_number")),1),Za])]),e("div",qa,[e("div",Qa,[e("label",Ka,a(t.$t("contact.email")),1),Xa])]),e("div",ei,[e("div",ti,[e("label",ai,a(t.$t("contact.subject")),1),ii])]),e("div",oi,[e("div",si,[e("label",ni,a(t.$t("contact.your_message")),1),ci])]),e("div",ri,[e("button",li,[e("span",null,a(t.$t("contact.send_message").toUpperCase()),1),di])])])])])])])])])}const pi=g(ca,[["render",hi]]),mi={name:"AppEducationArea",data(){return{timeline:[{id:1,degree:"BSc in CSE",institutionName:"International Islamic University Chittagong",startTime:"Mar 2016",endTime:"Mar 2021",description_en:"I completed my 4-year Bachelor's degree in Computer Science and Engineering at the International Islamic University Chittagong. During my time there, I actively participated in programming contests and hackathons. I also collaborated on various team projects and gained valuable experience in team leadership. Throughout my studies, I developed several web applications, which allowed me to gather practical, hands-on experience in web development.",description_ja:"私はチッタゴンの国際イスラーム大学でコンピュータサイエンスおよび工学の4年間の学士号を取得しました。大学生活の中で、プログラミングコンテストやハッカソンに積極的に参加しました。また、チームでのプロジェクトにも取り組み、チームリーダーとしての経験も積みました。多くのウェブアプリケーションを開発し、ウェブ開発における実践的な経験を積むことができました。"},{id:2,degree:"Higher Secondary Certificate (HSC)",institutionName:"Notre Dame College, Dhaka",startTime:null,endTime:"2015",description_en:"I completed my Higher Secondary Certificate in Science from Notre Dame College, the top-ranked college in Bangladesh. During my time there, I experienced significant academic growth and had the opportunity to build connections with many talented individuals from across the country. These connections have since expanded globally, with many now leading industries around the world. Additionally, I actively participated in various co-curricular activities, including photography, sports, Olympiads, and more.",description_ja:"私はバングラデシュで最も評価の高い大学であるノートルダム・カレッジで理科の高等学校卒業証書を取得しました。そこでの学びを通じて、私は大きな学問的成長を遂げ、全国各地から集まった才能ある多くの人々と交流を深めました。これらのつながりは現在、世界中に広がり、多くがさまざまな業界でリーダーとして活躍しています。また、写真、スポーツ、オリンピアードなど、さまざまな課外活動にも積極的に参加しました。"},{id:3,degree:"Secondary School Certificate (SSC)",institutionName:"St. Placid's High School, Chittagong",startTime:null,endTime:"2013",description_en:"I obtained my Secondary School Certificate in Science from St. Placid's High School, a renowned institution in Chittagong. In addition to my academic achievements, I actively participated in various sports competitions, including soccer, volleyball, table tennis, and basketball. I was also involved in several co-curricular activities, such as Scouts, the Red Cross, Science Olympiads, and many others.",description_ja:"私はチッタゴンの名門校であるセント・プラシッド高校で、理科の中等学校卒業証書を取得しました。学業の成果に加えて、サッカー、バレーボール、卓球、バスケットボールなど、さまざまなスポーツ競技に積極的に参加しました。また、スカウト活動や赤十字など、数多くの課外活動にも参加しました。"}]}}},_i={class:"rn-resume-area rn-section-gap section-separator",id:"educations"},ui={class:"container"},gi={class:"row"},vi={class:"col-lg-12"},fi={class:"section-title text-center","data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true"},bi={class:"title"},yi={class:"row row--45"},wi={class:"personal-experience-inner mt--40"},$i={class:"col-lg-12"},ki={class:"col-lg-9 col-md-12 col-12"},ji={class:"content"},Ti={class:"experience-list"},Ai={class:"inner"},Ii={class:"heading"},Di={class:"title"},Si={class:"date-of-time"},Ci={key:0},Mi={key:1},Pi={key:2},xi={class:"description justify-text"};function Bi(t,d,s,p,o,l){return n(),c("div",_i,[e("div",ui,[e("div",gi,[e("div",vi,[e("div",fi,[e("h2",bi,a(t.$t("education.education_header")),1)])])]),e("div",yi,[e("div",wi,[e("div",$i,[e("div",ki,[e("div",ji,[e("div",Ti,[(n(!0),c(u,null,v(o.timeline,i=>(n(),c("div",{class:"resume-single-list",key:i.id},[e("div",Ai,[e("div",Ii,[e("div",Di,[e("h4",null,a(i.degree),1),e("span",null,a(i.institutionName),1)]),e("div",Si,[i.startTime&&i.endTime?(n(),c("span",Ci,a(i.startTime)+" - "+a(i.endTime),1)):i.endTime===null?(n(),c("span",Mi,a(i.startTime)+" - "+a(t.$t("common.continuing")),1)):i.startTime===null?(n(),c("span",Pi,a(i.endTime),1)):y("",!0)])]),e("p",xi,a(i[`description_${t.$i18n.locale}`]),1)])]))),128))])])])])])])])])}const Li=g(mi,[["render",Bi]]),Ui={name:"AppSkills",data(){return{certificationList:[{id:1,jobTitle:"Complete Vue Developer Bootcamp",companyName:"ZTM Academy (Udemy)",companyUrl:"https://www.udemy.com/certificate/UC-fb340153-d620-4bff-9f15-516e15b98583/",startTime:"Mar 2023",endTime:"Jul 2023",jobDescription_en:"This certification course from Udemy helped me to learn the basics of VueJs 3, a progressive javascript framework.",jobDescription_ja:"Udemyのこの認定コースは、プログレッシブJavaScriptフレームワークであるVueJs 3の基礎を学ぶのに役立ちました。"},{id:1,jobTitle:"BJET Advanced Course",companyName:"University of Miyazaki, Japan",companyUrl:"https://www.jica.go.jp/bangladesh/bangland/b-jet.html",startTime:"Oct 2022",endTime:"Dec 2022",jobDescription_en:"The BJET Advanced Course, conducted by the University of Miyazaki, is a continuation of the fully funded BJET Basic Course held in Japan. This program provides participants with hands-on experience through internships at Japanese companies, while simultaneously offering in-depth training in the Japanese language and work culture at University of Miyazaki.",jobDescription_ja:"宮崎大学が提供するBJETアドバンスコースは、日本で実施される全額支援のBJETベーシックコースを基礎として構成されています。このプログラムでは、日本企業でのインターンシップを通じて実践的な経験を積むと同時に、宮崎大学で日本語と日本のビジネス文化に関する包括的なトレーニングを受けることができます。"},{id:2,jobTitle:"BJET Basic Course",companyName:"BJET Center (Online Class)",companyUrl:"https://www.jica.go.jp/bangladesh/bangland/b-jet.html",startTime:"Apr 2022",endTime:"Sept 2022",jobDescription_en:"BJET (Bangladesh-Japan ICT Engineers’ Training Program) is a skills development initiative designed to prepare Bangladeshi ICT professionals for careers in Japan’s tech industry. The program offers training in Japanese language, business culture, and IT skills.",jobDescription_ja:"BJET（バングラデシュ・日本ICTエンジニア研修プログラム）は、バングラデシュのICT専門家が日本のテクノロジー業界で活躍できるよう育成することを目的としたスキル開発プログラムです。このプログラムでは、日本語、ビジネス文化、ITスキルの研修を提供しています。"},{id:3,jobTitle:"Java From Basic to Professional",companyName:"PONDIT",companyUrl:"https://pondit.com/",startTime:"May 2020",endTime:"Dec 2020",jobDescription_en:"Pondit is a Bangladesh-based online training platform dedicated to equipping learners with in-demand ICT and professional skills. Various courses are led by experienced mentors from leading software companies in Bangladesh, ensuring practical, industry-relevant training. Beyond courses, Pondit offers internships, industrial attachments, and workshops, fostering career readiness and bridging the gap between education and employment.",jobDescription_ja:"Ponditは、バングラデシュを拠点とするオンライントレーニングプラットフォームで、学習者に需要の高いICTスキルと専門スキルを身につけさせることに特化しています。バングラデシュの大手ソフトウェア企業出身の経験豊富なメンターが指導する様々なコースを通じて、実践的で業界に即したトレーニングを提供しています。コース以外にも、Ponditはインターンシップ、実務研修、ワークショップなどを提供し、キャリア準備を促進し、教育と就職のギャップを埋める支援を行っています。"},{id:4,jobTitle:"Ultimate Java Development & Certification Course",companyName:"EDUONIX ",companyUrl:"https://www.eduonix.com/certificate/1d146674ae",startTime:"May 2020",endTime:"Jul 2020",jobDescription_en:"Eduonix Learning Solutions is an e-learning platform, offering a wide range of online courses in technology, design, business, and personal development.",jobDescription_ja:"Eduonix Learning Solutions は、テクノロジー、デザイン、ビジネス、自己啓発の幅広いオンライン コースを提供する e ラーニング プラットフォームです。"}],skillList:[{name:"Java",percentage:90},{name:"Golang",percentage:90},{name:"Springboot",percentage:85},{name:"VueJs 3",percentage:70},{name:"Vuetify 3",percentage:80},{name:"Mysql",percentage:70},{name:"Github",percentage:90},{name:"Github Action",percentage:85},{name:"Redis",percentage:80},{name:"Postgres",percentage:70},{name:"Docker",percentage:65}],achievementList:[{id:1,title:"Banglalink Code for a cause 2.0 Hackathon",location:"Banglalink Headquarter, Dhaka, Bangladesh",url:"https://www.linkedin.com/posts/ishmam-abir_sdgabrhackathon-codeabrforabraabrcauseabr2-activity-6642770546260054016-zpB3/",achieveTime:"January 2020",description_en:"It was a national-level tech hackathon competition among students from across the country, and I secured fourth place.",description_ja:"これは全国の学生を対象とした技術系ハッカソンコンテストで、私は第4位を獲得しました。"},{id:2,title:"IIUC Tech fest 2020",location:"International Islamic University, Chittagong,, Bangladesh",url:"https://www.linkedin.com/posts/ishmam-abir_techfest-contest-activity-6632335551154479104-ML17/",achieveTime:"March 2020",description_en:"At the IIUC Tech Fest 2020, I achieved notable success by securing the championship in the App Development Contest and earning the runner-up position in the Idea Generation Competition. These accomplishments reflect my strong technical skills and creative problem-solving abilities.",description_ja:"IIUCテックフェスト2020では、アプリ開発コンテストで優勝し、アイデア創出コンペティションで準優勝を獲得するという顕著な成果を収めました。これらの実績は、私の高度な技術力と創造的な問題解決能力を示しています。"}]}}},Ei={class:"rn-resume-area rn-section-gap section-separator",id:"skills"},Ri={class:"container"},Ji={class:"row"},Ni={class:"col-lg-12"},Gi={class:"section-title text-center"},Vi={class:"title"},Fi={class:"row mt--45"},Wi={class:"col-lg-12"},Oi={class:"rn-nav-list nav nav-tabs",id:"myTabs",role:"tablist"},Hi={class:"nav-item"},Yi={class:"nav-link active",id:"professional-tab","data-toggle":"tab",href:"#professional",role:"tab","aria-controls":"professional","aria-selected":"true"},zi={class:"nav-item"},Zi={class:"nav-link",id:"certification-tab","data-toggle":"tab",href:"#certification",role:"tab","aria-controls":"certification","aria-selected":"false"},qi={class:"nav-item"},Qi={class:"nav-link",id:"achievement-tab","data-toggle":"tab",href:"#achievement",role:"tab","aria-controls":"achievement","aria-selected":"false"},Ki={class:"rn-nav-content tab-content",id:"myTabContents"},Xi={class:"tab-pane show active fade single-tab-area",id:"professional",role:"tabpanel","aria-labelledby":"professional-tab"},eo={class:"personal-experience-inner mt--40"},to={class:"col-lg-6 col-md-6 col-12"},ao={key:0,class:"progress-wrapper"},io={class:"content"},oo={class:"progress-charts"},so={class:"heading heading-h6"},no={class:"progress"},co={class:"percent-label"},ro={class:"col-lg-6 col-md-6 col-12 mt_sm--60"},lo={key:0,class:"progress-wrapper"},ho={class:"content"},po={class:"progress-charts"},mo={class:"heading heading-h6"},_o={class:"progress"},uo={class:"percent-label"},go={class:"tab-pane fade",id:"certification",role:"tabpanel","aria-labelledby":"certification-tab"},vo={class:"personal-experience-inner mt--40"},fo={class:"row"},bo={class:"col-lg-10 col-md-12 col-12 mt_md--60 mt_sm--60"},yo={class:"content"},wo={class:"experience-list"},$o={class:"inner"},ko={class:"heading"},jo={class:"title"},To=["href"],Ao=e("i",{class:"feather-arrow-up-right"},null,-1),Io={class:"date-of-time"},Do={class:"description"},So={class:"tab-pane fade",id:"achievement",role:"tabpanel","aria-labelledby":"achievement-tab"},Co={class:"personal-experience-inner mt--40"},Mo={class:"row"},Po={class:"content"},xo={class:"experience-list"},Bo={"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"300","data-aos-once":"true",class:"resume-single-list"},Lo={class:"inner"},Uo={class:"heading"},Eo={class:"title"},Ro=["href"],Jo={class:"date-of-time"},No={class:"description"};function Go(t,d,s,p,o,l){return n(),c("div",Ei,[e("div",Ri,[e("div",Ji,[e("div",Ni,[e("div",Gi,[e("h2",Vi,a(t.$t("skill.skill_header")),1)])])]),e("div",Fi,[e("div",Wi,[e("ul",Oi,[e("li",Hi,[e("a",Yi,a(t.$t("skill.technical_skills")),1)]),e("li",zi,[e("a",Zi,a(t.$t("skill.certifications")),1)]),e("li",qi,[e("a",Qi,a(t.$t("skill.achievements")),1)])]),e("div",Ki,[e("div",Xi,[e("div",eo,[(n(!0),c(u,null,v(o.skillList,(i,r)=>(n(),c("div",{class:"row row--40",key:i},[e("div",to,[r%2===0?(n(),c("div",ao,[e("div",io,[e("div",oo,[e("h6",so,a(i.name),1),e("div",no,[e("div",{class:"progress-bar wow fadeInLeft","data-wow-duration":"0.5s","data-wow-delay":".3s",role:"progressbar",style:T("width: "+i.percentage+"%"),"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},[e("span",co,a(i.percentage)+"% ",1)],4)])])])])):y("",!0)]),e("div",ro,[r%2!==0?(n(),c("div",lo,[e("div",ho,[e("div",po,[e("h6",mo,a(i.name),1),e("div",_o,[e("div",{class:"progress-bar wow fadeInLeft","data-wow-duration":"0.5s","data-wow-delay":".3s",role:"progressbar",style:T("width: "+i.percentage+"%"),"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},[e("span",uo,a(i.percentage)+"% ",1)],4)])])])])):y("",!0)])]))),128))])]),e("div",go,[e("div",vo,[e("div",fo,[e("div",bo,[e("div",yo,[e("div",wo,[(n(!0),c(u,null,v(o.certificationList,i=>(n(),c("div",{class:"resume-single-list",key:i.id},[e("div",$o,[e("div",ko,[e("div",jo,[e("h4",null,a(i.jobTitle),1),e("a",{href:i.companyUrl,target:"_blank"},[e("span",null,[h(a(i.companyName)+" ",1),Ao])],8,To)]),e("div",Io,[e("span",null,a(i.startTime)+" - "+a(i.endTime),1)])]),e("p",Do,a(i[`jobDescription_${t.$i18n.locale}`]),1)])]))),128))])])])])])]),e("div",So,[e("div",Co,[e("div",Mo,[(n(!0),c(u,null,v(o.achievementList,(i,r)=>(n(),c("div",{class:"col-lg-6 col-md-12 col-12",key:i.id},[e("div",Po,[e("div",xo,[e("div",Bo,[e("div",Lo,[e("div",Uo,[e("div",Eo,[e("a",{href:i.url,target:"_blank"},[e("h4",null,a(i.title),1)],8,Ro),e("span",null,a(i.location),1)]),e("div",Jo,[e("span",null,a(i.achieveTime),1)])]),e("p",No,a(i[`description_${t.$i18n.locale}`]),1)])])])])]))),128))])])])])])])])])}const Vo=g(Ui,[["render",Go]]),Fo={name:"JobDescriptionPopup",mounted(){feather.replace()},props:{companyData:{type:Object,required:!0},itemId:{type:String,required:!0}}},Wo=["id"],Oo={class:"modal-dialog modal-dialog-centered modal-news",role:"document"},Ho={class:"modal-content"},Yo=e("div",{class:"modal-header"},[e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},[e("i",{class:"icon","data-feather":"x"})])])],-1),zo={class:"modal-body"},Zo=["src"],qo={class:"news-details"},Qo={key:0,class:"date"},Ko={key:1,class:"date"},Xo={class:"date"},es=e("i",{class:"feather feather-map-pin"},null,-1),ts={class:"title"},as=["href"],is=["innerHTML"];function os(t,d,s,p,o,l){return n(),c("div",{class:"modal fade",id:s.itemId,tabindex:"-1",role:"dialog","aria-hidden":"true"},[e("div",Oo,[e("div",Ho,[Yo,e("div",zo,[s.companyData.imgUrl?(n(),c("img",{key:0,alt:"news modal",class:"img-fluid modal-feat-img",src:s.companyData.imgUrl},null,8,Zo)):y("",!0),e("div",qo,[s.companyData.endTime===null?(n(),c("span",Qo,a(s.companyData.startTime)+" - "+a(t.$t("common.continuing")),1)):(n(),c("span",Ko,a(s.companyData.startTime)+" - "+a(s.companyData.endTime),1)),e("span",Xo,[es,h(" "+a(s.companyData.companyLocation),1)]),e("h2",ts,[h(a(s.companyData.position)+" - ",1),e("a",{href:s.companyData.companyWebsite,target:"_blank"},a(s.companyData.companyName),9,as)]),e("div",{innerHTML:s.companyData[`description_${t.$i18n.locale}`]},null,8,is)])])])])],8,Wo)}const ss=g(Fo,[["render",os]]);const ns={name:"AppJobExperience",components:{JobDescriptionPopup:ss},data(){return{itemId:"",companyData:{},timeline:[{id:1,position:"Software Development Engineer",companyName:"Kodensya Co. Ltd (株式会社興電舎)",companyWebsite:"https://kodensya.co.jp/",startTime:"Jan 2023",endTime:null,companyLocation:"Nobeoka, Miyazaki, Japan",shortDescription_en:"I am currently working as a Software Development Engineer at Kodensya Co Ltd (株式会社興電舎). My main responsibilities include: Designing, coding, testing, and debugging company's core web applications. See details page for the complete technical details.",shortDescription_ja:"株式会社興電舎でソフトウェア開発エンジニアとして働いています。主な業務は、会社のコアとなるWebアプリケーションの設計、コーディング、テスト、デバッグです。技術的な詳細については、詳細ページをご覧ください。",description_en:`
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
            `,imgUrl:""},{id:2,position:"Associate Software Engineer-L2",companyName:"Brain Station 23 PLC",companyWebsite:"https://brainstation-23.com/",startTime:"Jan 2022",endTime:"Aug 2022",companyLocation:"Dhaka, Bangladesh",shortDescription_en:"I got promoted to the Level 2 Associate Software Engineer at Brain Station 23. See details page for the complete technical details.",shortDescription_ja:"私は Brain Station 23 でレベル 2 アソシエイト ソフトウェア エンジニアに昇進しました。完全な技術的詳細については、詳細ページをご覧ください。",description_en:`
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
            `,description_ja:`
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
            `,imgUrl:"files/company/Brain-Station-23.jpg"},{id:3,position:"Associate Software Engineer-L1",companyName:"Brain Station 23 PLC",companyWebsite:"https://brainstation-23.com/",startTime:"Sept 2021",endTime:"Dec 2021",companyLocation:"Dhaka, Bangladesh",shortDescription_en:"I began my professional career as a full-time Associate Software Engineer at Brain Station 23 in 2021. It was a hybrid workplace, where I worked both remotely and onsite. Please refer to the details page for complete technical information.",shortDescription_ja:"私は2021年にBrain Station 23でフルタイムのアソシエイトソフトウェアエンジニアとしてキャリアをスタートしました。そこはハイブリッドな職場で、リモートワークとオフサイトワークの両方を行いました。完全な技術的詳細については、詳細ページをご覧ください。",description_en:`
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
            `,description_ja:`
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
            `,imgUrl:"files/company/Brain-Station-23.jpg"},{id:4,position:"Freelance Web Developer (Contract based)",companyName:"BroTech IT Ltd.",companyWebsite:"https://www.linkedin.com/company/brotech-it/",startTime:"Apr 2020",endTime:"Jan 2021",companyLocation:"Chittagong, Bangladesh",shortDescription_en:"My responsibility was to build a website for a client using HTML, CSS, Bootstrap and JavaScript. I also worked on the backend using Node.js. Please refer to the details page for complete technical information.",shortDescription_ja:"私の責任は、HTML、CSS、Bootstrap、JavaScriptを使用してクライアントのウェブサイトを構築することでした。また、Node.jsを使用してバックエンドの開発にも取り組みました。完全な技術的詳細については、詳細ページをご覧ください。",description_en:`
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
            `,imgUrl:""}]}}},cs=t=>(I("data-v-bd665d8c"),t=t(),D(),t),rs={class:"rn-resume-area rn-section-gap section-separator",id:"experience"},ls={class:"container"},ds={class:"row"},hs={class:"col-lg-12"},ps={class:"section-title text-center","data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true"},ms={class:"title"},_s={class:"row row--45"},us={class:"personal-experience-inner mt--40"},gs={class:"col-lg-12"},vs={class:"col-lg-9 col-md-12 col-12"},fs={class:"content"},bs={class:"experience-list"},ys=["data-target","onClick"],ws={class:"heading"},$s={class:"title"},ks={class:"date-of-time"},js={key:0},Ts={key:1},As={key:2},Is={class:"description justify-text"},Ds=cs(()=>e("div",{class:"pt-5 d-flex justify-end"},[e("i",{class:"pr-2 text-decoration-underline"}," See Details "),e("i",{class:"feather-arrow-up-right"})],-1));function Ss(t,d,s,p,o,l){const i=_("JobDescriptionPopup");return n(),c(u,null,[e("div",rs,[e("div",ls,[e("div",ds,[e("div",hs,[e("div",ps,[e("h2",ms,a(t.$t("experience.experience_header")),1)])])]),e("div",_s,[e("div",us,[e("div",gs,[e("div",vs,[e("div",fs,[e("div",bs,[(n(!0),c(u,null,v(o.timeline,r=>(n(),c("div",{class:"resume-single-list",key:r.id},[e("div",{class:"inner change-cursor","data-toggle":"modal","data-target":"#jdId"+r.id,onClick:P($=>(o.itemId="jdId"+r.id,o.companyData=r),["prevent"])},[e("div",ws,[e("div",$s,[e("h4",null,a(r.position),1),e("span",null,a(r.companyName),1)]),e("div",ks,[r.startTime&&r.endTime?(n(),c("span",js,a(r.startTime)+" - "+a(r.endTime),1)):r.endTime===null?(n(),c("span",Ts,a(r.startTime)+" - "+a(t.$t("common.continuing")),1)):r.startTime===null?(n(),c("span",As,a(r.endTime),1)):y("",!0)])]),e("p",Is,[h(a(r[`shortDescription_${t.$i18n.locale}`])+" ",1),m(Y),Ds])],8,ys)]))),128))])])])])])])])]),m(i,{itemId:o.itemId,"company-data":o.companyData},null,8,["itemId","company-data"])],64)}const Cs=g(ns,[["render",Ss],["__scopeId","data-v-bd665d8c"]]);const Ms={name:"ProjectPopup",props:{projectData:{type:Object,required:!0},projectId:{type:String,required:!0}}},S=t=>(I("data-v-2e2cf731"),t=t(),D(),t),Ps=["id"],xs={class:"modal-dialog modal-dialog-centered",role:"document"},Bs={class:"modal-content"},Ls=S(()=>e("div",{class:"modal-header"},[e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},[e("i",{"data-feather":"x"})])])],-1)),Us={class:"modal-body"},Es={class:"row align-items-center"},Rs={class:"col-lg-6"},Js={class:"portfolio-popup-thumbnail"},Ns={class:"image"},Gs=["src"],Vs={class:"col-lg-6"},Fs={class:"text-content"},Ws=["href"],Os=["innerHTML"],Hs={key:0},Ys=["innerHTML"],zs=S(()=>e("h6",null,"Technologies Used",-1)),Zs={class:"mb--30"},qs=["href"],Qs=S(()=>e("i",{class:"feather-external-link"},null,-1));function Ks(t,d,s,p,o,l){return n(),c("div",{class:"modal fade",id:s.projectId,tabindex:"-1",role:"dialog","aria-hidden":"true"},[e("div",xs,[e("div",Bs,[Ls,e("div",Us,[e("div",Es,[e("div",Rs,[e("div",Js,[e("div",Ns,[e("img",{class:"w-100",src:s.projectData.imgUrl&&s.projectData.imgUrl!==""?s.projectData.imgUrl:"files/projects/github-logo.png",alt:"slide"},null,8,Gs)])])]),e("div",Vs,[e("div",Fs,[(n(!0),c(u,null,v(s.projectData.technologyUsed,i=>(n(),M(z,{variant:"outlined",color:"#ff014f",size:"small",elevation:"2",class:"mr-2 mb-4"},{default:j(()=>[h(a(i),1)]),_:2},1024))),256)),e("h3",null,[e("a",{href:s.projectData.url,target:"_blank"},a(s.projectData.name),9,Ws)]),e("p",{class:"mb--30",innerHTML:s.projectData[`description_${t.$i18n.locale}`]},null,8,Os),s.projectData[`myRole_${t.$i18n.locale}`]&&s.projectData[`myRole_${t.$i18n.locale}`]!==""?(n(),c("h6",Hs,"My Role & Responsibilities")):y("",!0),s.projectData[`myRole_${t.$i18n.locale}`]&&s.projectData[`myRole_${t.$i18n.locale}`]!==""?(n(),c("p",{key:1,class:"mb--30",innerHTML:s.projectData[`myRole_${t.$i18n.locale}`]},null,8,Ys)):y("",!0),zs,e("p",Zs,[e("ul",null,[(n(!0),c(u,null,v(s.projectData.technologyUsed,i=>(n(),c("li",null,a(i),1))),256))])]),e("p",null,[h(a(t.$t("project.project_url"))+": ",1),e("a",{href:s.projectData.url,target:"_blank"},[h(" Here "),Qs],8,qs)])])])])])])])],8,Ps)}const Xs=g(Ms,[["render",Ks],["__scopeId","data-v-2e2cf731"]]),en=[{name:"open_source",code:"OPEN_SOURCE"},{name:"professional",code:"PROFESSIONAL"},{name:"personal",code:"PERSONAL"},{name:"academic",code:"ACADEMIC"},{name:"freelance_work",code:"FREELANCE_WORK"}],tn={name:"AppProjects",components:{ProjectPopup:Xs},data(){return{projectId:null,projectData:{},projectList:[{id:6,name:"Go Service Level Transaction",url:"https://github.com/IshmamAbir/Go-Service_Level_Transaction",imgUrl:"files/projects/github+golang.png",projectType:"OPEN_SOURCE",myRole_en:"",myRole_ja:"",description_en:"This project presents a comprehensive approach to managing transactions in the business logic layer of a Go application, ensuring data consistency and integrity during complex operations involving multiple database tables.",description_ja:"このプロジェクトでは、Go アプリケーションのビジネス ロジック層でトランザクションを管理し、複数のデータベース テーブルが関係する複雑な操作中にデータの一貫性と整合性を確保するための包括的なアプローチを紹介します。",technologyUsed:["Golang","Postgres","Gorm","Gorilla/Mux"]},{id:5,name:"Clean Architecture Go",url:"https://github.com/IshmamAbir/Clean-Architecture-Go-Postgres",imgUrl:"files/projects/github+golang.png",projectType:"OPEN_SOURCE",myRole_en:"",myRole_ja:"",description_en:"This project showcases a backend architecture built with Golang without relying on any external frameworks. It implements Clean Architecture principles to ensure maintainability and scalability. Key features include API routing, API documentation powered by go-swagger, ORM integration with Gorm, and PostgreSQL for data storage. This setup can serve as an ideal template for backend development in Golang, providing a robust, framework-free solution for scalable web applications.",description_ja:"このプロジェクトは、外部フレームワークを使用せずに構築されたGolangのバックエンドアーキテクチャを示しています。クリーンアーキテクチャの原則を適用し、メンテナンス性とスケーラビリティを確保しています。主な特徴として、APIルーティング、go-swaggerによるAPIドキュメンテーション、Gormを用いたORM統合、およびPostgreSQLによるデータストレージを実装しています。このセットアップは、Golangを使用したバックエンド開発に最適なテンプレートとなり、スケーラブルなウェブアプリケーションの構築に貢献します。",technologyUsed:["Golang","Postgres","Go-Swagger","Gorm","Gorilla/Mux","Docker","Vue.js","Vuetify"]},{id:4,name:"Matrix Platform Limited",url:"https://matrixapparels.com/",imgUrl:"files/projects/matrix_apparels.png",projectType:"freelance_work",myRole_en:"Planning, Requirement Analysis, Designing, Frontend Design, Deployment, Maintenance.",myRole_ja:"計画、要件分析、設計、フロントエンドデザイン、展開、保守。",description_en:"Matrix Apparels Limited is an export-oriented knit & woven garments factory located in Dhaka. Their portfolio website was constructed using the design they provided. I am responsible for the entire project, from start to deployment.",description_ja:"Matrix Apparels Limitedはダッカに位置する輸出志向のニットおよび織物衣料品工場です。彼らのポートフォリオウェブサイトは、提供されたデザインを使用して構築されました。私はこのプロジェクトの開始から展開まで、すべての責任を負っています。",technologyUsed:["HTML","CSS","JavaScript","Bootstrap","Web Hosting","Github Pages"]},{id:3,name:"Décor Supplier UK",url:"https://decorsupplier.co.uk/",imgUrl:"files/projects/decor_supplier.jpeg",projectType:"freelance_work",myRole_en:"Planning, Meeting with the client, Requirement Analysis, Designing, Frontend Design & Modification.",myRole_ja:"計画、クライアントとのミーティング、要件分析、設計、フロントエンドデザインおよび修正。",description_en:"Décor Supplier UK is an online e-commerce store in the United Kingdom that sells home decorator items. It was created with DotNet, Angular, and Firebase.  My responsibility was to create the user interface and build the frontend according to the client's requirements.",description_ja:"Décor Supplier UKは、イギリスに拠点を置くオンラインのホームデコレーターアイテムを販売するeコマースストアです。このサイトはDotNet、Angular、Firebaseを使用して作成されました。私の責任は、クライアントの要件に従ってユーザーインターフェースを作成し、フロントエンドを構築することでした。",technologyUsed:["Angular","Firebase","DotNet","Firebase","Bootstrap"]},{id:7,name:"Weather Web App",url:"https://weather-webapp-kodensya.netlify.app/#/",imgUrl:"files/projects/weather-webapp.jpeg",projectType:"personal",myRole_en:"Requirement Analysis, Template Designing, Frontend Development,API Integration, Testing, Deployment.",myRole_ja:"要件分析、テンプレートデザイン、フロントエンド開発、API統合、テスト、展開。",description_en:"This project was the Technical Test for Kodensya.During the interview process, I was asked to build a weather web app using VueJs 3, OpenWeather API to get weather data and show it on the UI. I was responsible for the entire project, from start to deployment.",description_ja:"このプロジェクトは、Kodensyaの技術テストでした。面接の過程で、VueJs 3を使って天気のウェブアプリを作成し、OpenWeather APIを使って天気データを取得し、UIに表示するように指示されました。私はプロジェクトの開始から展開まで、全ての工程を担当しました。",technologyUsed:["VueJs 3","OpenWeather API","Netlify","Bootstrap"]},{id:2,name:"Spring Security Authentication App",url:"https://github.com/IshmamAbir/Authentication-App-Spring-Security",imgUrl:null,projectType:"personal",myRole_en:"Planning, Requirement Analysis, Designing, Backend Development, Frontend Designing, Testing",myRole_ja:"計画、要件分析、設計、バックエンド開発、フロントエンドデザイン、テスト",description_en:"This is the implementation of role-based authentication and authorization (RBAC) project built with Spring security.  Users can view and modify their personal information by registering and logging in.  The administrator can access all user data by logging in.  I perform the entire implementation by myself.  This project implements CRUD functionality, relational mapping, and spring security authentication.",description_ja:"これは、Spring Securityを使用して構築されたロールベースの認証と認可（RBAC）プロジェクトの実装です。ユーザーは登録してログインすることで、個人情報の表示と変更ができます。管理者はログインすることで、すべてのユーザーデータにアクセスできます。このプロジェクトの実装はすべて自分で行いました。このプロジェクトはCRUD機能、リレーショナルマッピング、Spring Security認証を実装しています。",technologyUsed:["Java"," Spring Boot","Spring Security","Thymeleaf","MySQL Database","HTML","CSS","Bootstrap"]},{id:1,name:"COVID-19 Tracker",url:"https://covid19-tracker-31b45.web.app",imgUrl:"files/projects/covid_tracker.png",projectType:"personal",myRole_en:"Planning, Requirement Analysis, Designing, Frontend Design, Deployment, Maintenance.",myRole_ja:"計画、要件分析、設計、フロントエンドデザイン、展開、保守",description_en:"A basic single page application (SPA) that allows users to pick any country and see the country's overall covid report.",description_ja:"",technologyUsed:["Angular 9","Firebase","HTML","CSS","Bootstrap","Web API"]}]}},methods:{getProjectType(t){var s;var d=en.find(p=>p.code===t.toUpperCase());return this.$t(`project_type.${(s=d==null?void 0:d.name)==null?void 0:s.toLowerCase()}`)||t}}},an={class:"rn-portfolio-area rn-section-gap section-separator",id:"project"},on={class:"container"},sn={class:"row"},nn={class:"col-lg-12"},cn={"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true",class:"section-title text-center"},rn={class:"title"},ln={class:"row row--25 mt--10 mt_md--10 mt_sm--10"},dn=["data-target","onClick"],hn={class:"inner"},pn={class:"thumbnail",style:{height:"250px",display:"flex","align-items":"center","justify-content":"center",overflow:"hidden"}},mn={href:"javascript:void(0)"},_n=["src"],un={class:"content"},gn={class:"category-info"},vn=e("div",{class:"category-list"},[e("a",{href:"javascript:void(0)"})],-1),fn={class:"category-list"},bn={style:{"text-transform":"capitalize"},href:"javascript:void(0)"},yn=e("i",{class:"feather-tag"},null,-1),wn={class:"title"},$n={href:"javascript:void(0)"},kn=e("i",{class:"feather-arrow-up-right"},null,-1);function jn(t,d,s,p,o,l){const i=_("project-popup");return n(),c(u,null,[e("div",an,[e("div",on,[e("div",sn,[e("div",nn,[e("div",cn,[e("h2",rn,a(t.$t("project.project_header")),1)])])]),e("div",ln,[(n(!0),c(u,null,v(o.projectList,r=>(n(),c("div",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-once":"true",class:"col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30",key:r.id},[e("div",{class:"rn-portfolio","data-toggle":"modal","data-target":"#projectId_"+r.id,onClick:P($=>(o.projectId="projectId_"+r.id,o.projectData=r),["prevent"])},[e("div",hn,[e("div",pn,[e("a",mn,[e("img",{src:r.imgUrl&&r.imgUrl!==""?r.imgUrl:"files/projects/github-logo.png",alt:"Project Images",style:{"max-height":"100%",width:"auto"}},null,8,_n)])]),e("div",un,[e("div",gn,[vn,e("div",fn,[e("span",null,[e("a",bn,[yn,h(" "+a(l.getProjectType(r.projectType)),1)])])])]),e("h4",wn,[e("a",$n,[h(a(r.name)+" ",1),kn])])])])],8,dn)]))),128))])])]),m(i,{projectId:o.projectId,projectData:o.projectData},null,8,["projectId","projectData"])],64)}const Tn=g(tn,[["render",jn]]),An={name:"AppBlog",components:{},data:()=>({devToUsername:"ishmam_abir",blogList:[]}),methods:{getBlogListFromDevTo(){this.axios.get("https://dev.to/api/articles?username="+this.devToUsername,{params:{order:"created_at desc"}}).then(t=>{this.blogList=t.data}).catch(t=>{console.log(t)})}},async created(){this.getBlogListFromDevTo()}},In={class:"rn-portfolio-area rn-section-gap section-separator",id:"blog"},Dn={class:"container"},Sn={class:"row"},Cn={class:"col-lg-12"},Mn={"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"100","data-aos-once":"true",class:"section-title text-center"},Pn={class:"title"},xn={class:"row row--25 mt--10 mt_md--10 mt_sm--10"},Bn={class:"rn-portfolio"},Ln={class:"inner"},Un={class:"thumbnail",style:{height:"250px",display:"flex","align-items":"center","justify-content":"center",overflow:"hidden"}},En=["href"],Rn=["src"],Jn={class:"content"},Nn={class:"category-info"},Gn={class:"category-list"},Vn={href:"javascript:void(0)"},Fn={class:"category-list"},Wn={style:{"text-transform":"capitalize"},href:"javascript:void(0)"},On=e("i",{class:"feather-heart"},null,-1),Hn={class:"title"},Yn=["href"],zn=e("i",{class:"feather-arrow-up-right"},null,-1);function Zn(t,d,s,p,o,l){return n(),c("div",In,[e("div",Dn,[e("div",Sn,[e("div",Cn,[e("div",Mn,[e("h2",Pn,a(t.$t("blog.blog_header")),1)])])]),e("div",xn,[(n(!0),c(u,null,v(t.blogList,i=>(n(),c("div",{"data-aos":"fade-up","data-aos-delay":"100","data-aos-once":"true",class:"col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30",key:i.id},[e("div",Bn,[e("div",Ln,[e("div",Un,[e("a",{href:i.url,target:"_blank"},[e("img",{src:i.cover_image&&i.cover_image!==""?i.cover_image:"files/projects/github-logo.png",alt:"Article Cover Images",style:{"max-height":"100%",width:"auto"}},null,8,Rn)],8,En)]),e("div",Jn,[e("div",Nn,[e("div",Gn,[e("a",Vn,a(i.reading_time_minutes)+" "+a(t.$t("blog.min_read")),1)]),e("div",Fn,[e("span",null,[e("a",Wn,[On,h(" "+a(i.positive_reactions_count),1)])])])]),e("h4",Hn,[e("a",{href:i.url,target:"_blank"},[h(a(i.title)+" ",1),zn],8,Yn)])])])])]))),128))])])])}const qn=g(An,[["render",Zn]]),Qn=R({name:"HomeView",components:{AppSlider:na,AppContact:pi,AppEducation:Li,AppSkillsCertificationAchievements:Vo,AppJobExperience:Cs,AppProjects:Tn,AppBlog:qn},data(){return{visibility:"hidden"}},mounted(){this.initParticleJS()},methods:{gotoTop(){this.$vuetify.goTo(0,{duration:300,offset:0,easing:"easeInOutCubic"}),window.setTimeout(()=>{this.visibility="hidden"},300)},initParticleJS(){particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:["#ff014f"]},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.8,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:800,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})}}}),Kn={class:"page-wrapper-two"},Xn={class:"backto-top"},ec=e("i",{"data-feather":"arrow-up"},null,-1),tc=[ec];function ac(t,d,s,p,o,l){const i=_("app-slider"),r=_("app-education"),$=_("app-job-experience"),f=_("app-skills-certification-achievements"),b=_("app-projects"),k=_("app-blog"),x=_("app-contact");return n(),c("main",Kn,[m(i),m(r),m($),m(f),m(b),m(k),m(x),e("div",Xn,[e("div",{onClick:d[0]||(d[0]=(...B)=>t.gotoTop&&t.gotoTop(...B)),style:T({color:"white",visibility:t.visibility})},tc,4)])])}const ic=g(Qn,[["render",ac]]),oc=q({history:Q("/Portfolio/"),routes:[{path:"/",name:"home",component:ic}]});Wt();J(ft).use(oc).use(Nt).use(N,L).use(Jt).use(U()).mount("#app");
