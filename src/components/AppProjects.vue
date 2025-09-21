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
                        : 'files/projects/github-logo.png'
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
import { ProjectTypeList } from "@/enums/project-type";
import { PortfolioService } from "@/services/portfolio.service";

export default {
  name: "AppProjects",
  components: {
    ProjectPopup,
  },
  data() {
    return {
      projectId: "",
      projectData: null,
      projectList: [],
    };
  },
  methods: {
    getProjectType(code) {
      if (!code) return "";
      var projectType = ProjectTypeList.find(
        (x) => x.code === code.toUpperCase()
      );
      // return projectType ? projectType.name : code;
      return (
        this.$t(`project_type.${projectType?.name?.toLowerCase()}`) || code
      );
    },
  },

  async created() {
    const projects = await PortfolioService.getProjects();
    this.projectList = projects;
  },
};
</script>
