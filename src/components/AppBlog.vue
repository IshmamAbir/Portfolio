<template>
  <section id="blog" class="section writing-section" aria-labelledby="writing-title">
    <div class="site-container">
      <div class="writing-heading">
        <div>
          <p class="file-label"><span aria-hidden="true">notes/</span><span>{{ $t("writing.eyebrow") }}</span></p>
          <h2 id="writing-title" class="section-heading">{{ $t("writing.title") }}</h2>
          <p class="section-intro">{{ $t("writing.intro") }}</p>
        </div>
        <a class="text-link" :href="profileUrl" target="_blank" rel="noopener noreferrer">
          {{ $t("writing.all_articles") }}
        </a>
      </div>

      <div class="writing-content" :aria-busy="state === 'loading'">
        <p v-if="state === 'loading'" class="writing-state" role="status">
          {{ $t("writing.loading") }}
        </p>
        <div v-else-if="state === 'error'" class="writing-state">
          <p role="status">{{ $t("writing.error") }}</p>
          <v-btn class="mt-4" variant="outlined" color="primary" @click="loadArticles">
            {{ $t("writing.retry") }}
          </v-btn>
        </div>
        <p v-else-if="!latestArticles.length" class="writing-state" role="status">
          {{ $t("writing.empty") }}
        </p>
        <ul v-else class="article-list">
          <li v-for="article in latestArticles" :key="article.id || article.url">
            <a class="article-link" :href="article.url" target="_blank" rel="noopener noreferrer">
              <h3>{{ article.title }}</h3>
              <div v-if="article.publishedAt || article.readingTime" class="article-meta">
                <time v-if="article.publishedAt" :datetime="article.publishedAt">
                  {{ formatDate(article.publishedAt) }}
                </time>
                <span v-if="article.readingTime">
                  {{ article.readingTime }} {{ $t("blog.min_read") }}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { PortfolioService } from "@/services/portfolio.service";
import { siteInfo } from "@/data/site.data";

export default {
  name: "AppBlog",
  data() {
    return {
      articles: [],
      state: "loading",
      profileUrl: `https://dev.to/${siteInfo.devUsername}`,
    };
  },
  computed: {
    latestArticles() {
      return [...this.articles]
        .sort((a, b) => (Date.parse(b.publishedAt) || 0) - (Date.parse(a.publishedAt) || 0))
        .slice(0, 3);
    },
  },
  created() {
    this.loadArticles();
  },
  methods: {
    async loadArticles() {
      this.state = "loading";
      try {
        this.articles = await PortfolioService.getBlogArticles(siteInfo.devUsername);
        this.state = "ready";
      } catch {
        this.state = "error";
      }
    },
    formatDate(value) {
      return new Intl.DateTimeFormat(this.$i18n.locale === "ja" ? "ja-JP" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }).format(new Date(value));
    },
  },
};
</script>

<style scoped>
.file-label { display: flex; flex-wrap: wrap; gap: .75rem; }
.file-label > span + span { color: rgb(var(--v-theme-secondary)); }
.writing-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; margin-bottom: 32px; }
.writing-heading > .text-link { flex-shrink: 0; margin-bottom: 4px; }
.article-list { list-style: none; padding: 0; border-top: 1px solid rgb(var(--v-theme-outline)); }
.article-list li { border-bottom: 1px solid rgb(var(--v-theme-outline)); }
.article-link { display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 26px 16px; color: rgb(var(--v-theme-on-background)); text-decoration: none; transition: background 150ms ease; }
.article-link:hover { background: rgba(var(--v-theme-on-surface), .025); }
.article-link h3 { max-width: 720px; font-size: 1.1875rem; font-weight: 500; line-height: 1.6; transition: color 150ms ease; }
.article-link:hover h3 { color: rgb(var(--v-theme-primary)); }
.article-meta { display: flex; flex-direction: column; flex-shrink: 0; align-items: end; gap: 4px; color: rgb(var(--v-theme-secondary)); font-family: var(--font-mono); font-size: .875rem; }
.writing-state { padding: 32px; border: 1px dashed rgb(var(--v-theme-outline)); border-radius: 8px; background: rgb(var(--v-theme-surface)); color: rgb(var(--v-theme-secondary)); }
.writing-state > p { margin-bottom: 0; }
@media (max-width: 767px) {
  .writing-heading, .article-link { align-items: start; flex-direction: column; }
  .article-link { gap: 12px; padding: 24px 0; }
  .article-meta { flex-direction: row; flex-wrap: wrap; gap: 8px 20px; }
  .writing-state { padding: 24px; }
}
</style>
