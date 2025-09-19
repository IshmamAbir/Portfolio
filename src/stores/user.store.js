import { defineStore } from "pinia";
import { UserInfoClass } from "../model/user.model";
import { PortfolioService } from "../services/portfolio.service";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUserInfo() {
      if (this.user) return;
      try {
        const userData = await PortfolioService.getUserInfo();
        console.log("user store fetchUserInfo service fetch", userData);

        // save the data to state
        this.user = userData;
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    },

    clearUser() {
      // An action to clear the user data or logging out the user
      this.user = null;
    },
  },
});
