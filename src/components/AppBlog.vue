<template>
  <div class="rn-portfolio-area rn-section-gap section-separator" id="blog">
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
            <h2 class="title">{{ $t("blog.blog_header") }}</h2>
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
          v-for="item in blogList"
          :key="item.id"
        >
          <div class="rn-portfolio">
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
                <a :href="item.url" target="_blank">
                  <img
                    :src="
                      item.cover_image && item.cover_image !== ''
                        ? item.cover_image
                        : 'files/projects/github-logo.png'
                    "
                    alt="Article Cover Images"
                    style="max-height: 100%; width: auto"
                  />
                </a>
              </div>
              <div class="content">
                <div class="category-info">
                  <div class="category-list">
                    <a href="javascript:void(0)">
                      {{ item.reading_time_minutes }}
                      {{ $t("blog.min_read") }}
                    </a>
                  </div>
                  <div class="category-list">
                    <span>
                      <a
                        style="text-transform: capitalize"
                        href="javascript:void(0)"
                      >
                        <i class="feather-heart"></i>
                        {{ item.positive_reactions_count }}
                      </a>
                    </span>
                  </div>
                </div>
                <h4 class="title">
                  <a :href="item.url" target="_blank">
                    {{ item.title }}
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
</template>

<script>
export default {
  name: "AppBlog",
  components: {},
  data: () => ({
    devToUsername: "ishmam_abir",
    blogList: [],
  }),
  methods: {
    getBlogListFromDevTo() {
      this.axios
        .get("https://dev.to/api/articles?username=" + this.devToUsername, {
          params: { order: "created_at desc" },
        })
        .then((response) => {
          //   var result = response.data;
          this.blogList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async created() {
    this.getBlogListFromDevTo();
  },
};
</script>
