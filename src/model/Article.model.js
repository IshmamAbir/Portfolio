import { BaseModel } from "@/model/BaseModel";

export class ArticleClass extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.id = data.id;
    this.title = typeof data.title === "string" ? data.title.trim() : "";
    this.url = typeof data.url === "string" && /^https?:\/\//i.test(data.url) ? data.url : "";
    const publishedAt = data.published_at || data.published_timestamp || data.created_at;
    this.publishedAt = Number.isFinite(Date.parse(publishedAt))
      ? new Date(publishedAt).toISOString()
      : null;
    this.readingTime = Number.isFinite(data.reading_time_minutes) && data.reading_time_minutes > 0
      ? Math.ceil(data.reading_time_minutes)
      : null;
  }
}
