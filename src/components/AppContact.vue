<template>
  <div class="rn-contact-area rn-section-gap section-separator" id="contacts">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">Contact</span>
            <h2 class="title">{{ $t("contact.contact_header") }}</h2>
          </div>
        </div>
      </div>
      <div class="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
        <div class="col-lg-5">
          <div class="contact-about-area">
            <div class="thumbnail">
              <img :src="user.bottomImage" alt="contact-img" />
            </div>
            <div class="title-area">
              <h4 class="title" v-if="user.getLocalizedProperty('fullName')">
                {{ user.getLocalizedProperty("fullName") }}
              </h4>
              <span> {{ user.getLocalizedProperty("designation") }}</span>
            </div>
            <div class="description">
              <p>
                {{ contactDetails[`contactText_${$i18n.locale}`] }}
              </p>
              <!-- <span class="phone"
                >Phone: <a href="tel:01941043264">+01234567890</a></span
              > -->
              <span class="mail"
                >{{ $t("contact.email") }}:
                <a :href="`mailto:` + user.email">{{ user.email }}</a></span
              >
            </div>
            <div class="social-area">
              <div class="name">{{ $t("contact.find_me_in") }}</div>
              <div class="social-icone">
                <a :href="`mailto:` + user.email"
                  ><i data-feather="mail"></i
                ></a>
                <a :href="linkedinUrl" target="_blank"
                  ><i data-feather="linkedin"></i
                ></a>
                <a :href="githubUrl" target="_blank"
                  ><i data-feather="github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-delay="600" class="col-lg-7 contact-input">
          <div class="contact-form-wrapper">
            <div class="introduce">
              <form
                class="rnt-contact-form rwt-dynamic-form row"
                id="contact-form"
                method="POST"
                action="mail.php"
              >
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="contact-name">
                      {{ $t("contact.your_name") }}
                    </label>
                    <input
                      class="form-control form-control-lg"
                      name="contact-name"
                      id="contact-name"
                      type="text"
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="contact-phone">
                      {{ $t("contact.phone_number") }}
                    </label>
                    <input
                      class="form-control"
                      name="contact-phone"
                      id="contact-phone"
                      type="text"
                    />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="contact-email">{{ $t("contact.email") }}</label>
                    <input
                      class="form-control form-control-sm"
                      id="contact-email"
                      name="contact-email"
                      type="email"
                    />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="subject">{{ $t("contact.subject") }}</label>
                    <input
                      class="form-control form-control-sm"
                      id="subject"
                      name="subject"
                      type="text"
                    />
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="contact-message">
                      {{ $t("contact.your_message") }}
                    </label>
                    <textarea
                      name="contact-message"
                      id="contact-message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>

                <div class="col-lg-12">
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    class="rn-btn"
                  >
                    <span>{{ $t("contact.send_message").toUpperCase() }}</span>
                    <i data-feather="arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { PortfolioService } from "../services/portfolio.service";
import { useUserStore } from "../stores/user.store";

export default {
  name: "AppContact",
  data() {
    return {
      githubUrl: null,
      linkedinUrl: null,
      contactDetails: {
        linkedinUrl: "https://www.linkedin.com/in/ishmam-abir/",
        githubUrl: "https://github.com/IshmamAbir",
        contactText_en:
          "Feel free to connect with me via email or through my social media channels to learn more about me.",
        contactText_ja:
          "メールや各種ソーシャルメディアを通じて、お気軽にご連絡ください。私について詳しく知っていただけます。",
      },
    };
  },

  computed: {
    ...mapState(useUserStore, ["user"]),
  },

  async created() {
    const socialList = await PortfolioService.getSocialMediaItems();
    this.githubUrl = socialList.find(
      (item) => item.title.toLowerCase() === "github"
    ).url;
    this.linkedinUrl = socialList.find(
      (item) => item.title.toLowerCase() === "linkedin"
    ).url;
  },
};
</script>
