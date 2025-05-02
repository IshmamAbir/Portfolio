<template>
  <div
    class="modal fade"
    :id="itemId"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-news" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <!-- <vue-feather type="x" /> -->
              <i class="icon" data-feather="x"></i>
            </span>
          </button>
        </div>

        <!-- End of .modal-header -->

        <div class="modal-body">
          <img
            v-if="companyData.imgUrl"
            alt="news modal"
            class="img-fluid modal-feat-img"
            :src="companyData.imgUrl"
          />
          <div class="news-details">
            <span v-if="companyData.endTime === null" class="date">
              {{ companyData.startTime }} - {{ $t("common.continuing") }}</span
            >
            <span v-else class="date">
              {{ companyData.startTime }} - {{ companyData.endTime }}</span
            >

            <h2 class="title">
              {{ companyData.position }} -
              <a :href="companyData.companyWebsite" target="_blank">{{
                companyData.companyName
              }}</a>
            </h2>
            <p>
              I Worked as a Backend Developer where I used Java Springboot as my
              primary framework and used Postgres as my database.
            </p>
            <p>
              -- {{ description }} -- Nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Typi
              non habent claritatem insitam; est usus legentis in iis qui facit
              eorum claritatem. Investigationes demonstraverunt lectores legere
              me lius quod ii legunt saepius. Claritas est etiam processus
              dynamicus, qui sequitur mutationem consuetudium lectorum.
            </p>
            <h4>Job Description</h4>
            <p>
              Mauris tempor, orci id pellentesque convallis, massa mi congue
              eros, sed posuere massa nunc quis dui. Integer ornare varius mi,
              in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur
              sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec,
              viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim
              id.
            </p>

            <h4>Technology Used</h4>
          </div>
        </div>
        <!-- End of .modal-body -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobDescriptionPopup",
  mounted() {
    // eslint-disable-next-line no-undef
    feather.replace();
  },
  props: {
    companyData: {
      type: Object,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
  },
};
</script>
