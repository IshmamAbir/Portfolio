<template>
  <div
    class="modal fade"
    :id="projectId"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div v-if="projectData" class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">X</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="portfolio-popup-thumbnail">
                <div class="image">
                  <img
                    class="w-100"
                    :src="
                      projectData.imgUrl && projectData.imgUrl !== ''
                        ? projectData.imgUrl
                        : 'files/projects/github-logo.png'
                    "
                    alt="slide"
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="text-content">
                <v-chip
                  variant="outlined"
                  color="#ff014f"
                  size="small"
                  elevation="2"
                  class="mr-2 mb-4"
                  v-for="item in projectData.technologyUsed"
                >
                  {{ item }}
                </v-chip>
                <h3>
                  <a :href="projectData.url" target="_blank">
                    {{ projectData.name }}
                  </a>
                </h3>
                <p
                  class="mb--30"
                  v-html="projectData.getLocalizedProperty('description')"
                ></p>
                <h6  v-if="projectData.getLocalizedProperty('myRole') && projectData.getLocalizedProperty('myRole') !== ''">My Role & Responsibilities</h6>
                <p
                  class="mb--30" v-if="projectData.getLocalizedProperty('myRole') && projectData.getLocalizedProperty('myRole') !== ''"
                  v-html="projectData.getLocalizedProperty('myRole')"
                ></p>
                <h6>Technologies Used</h6>
                <p class="mb--30">
                  <ul>
                    <li v-for="item in projectData.technologyUsed">
                      {{ item }}
                    </li>
                  </ul>
                </p>
                <p>
                  {{ $t("project.project_url") }}:
                  <a :href="projectData.url" target="_blank">
                    Here <i class="feather-external-link"></i>
                  </a>
                </p>
              </div>
              <!-- End of .text-content -->
            </div>
          </div>
          <!-- End of .row Body-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProjectClass } from '../model/project.model';

export default {
  name: "ProjectPopup",
  props: {
    projectData: {
      type: ProjectClass,
      required: true,
    },
    projectId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
p a {
  text-decoration: none;
  color: var(--color-primary);
}
p a:hover {
  color: var(--color-facebook);
}
</style>
