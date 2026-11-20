import { defineStore } from "pinia";
import { PortfolioService } from "@/services/portfolio.service";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUserInfo() {
      if (this.user) return;
      try {
        const userData = await PortfolioService.getUserInfo();

        // save the data to state
        this.user = userData;
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    },
  },
});
