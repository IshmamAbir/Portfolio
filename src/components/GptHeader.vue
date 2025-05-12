<template>
  <div class="d-none d-lg-block header-style-2">
    <v-app-bar app color="transparent" dense>
      <v-toolbar-title>
        <a href="#home">
          <v-img :src="centerImage" alt="personal-logo" />
        </a>
      </v-toolbar-title>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="(item, index) in menuItems"
          :key="index"
          :href="item.link"
          :class="{ active: item.active }"
        >
          <v-icon left>{{ item.icon }}</v-icon
          >{{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          icon
          v-for="(item, index) in socialItems"
          :key="index"
          :href="item.link"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-side-icon
        class="d-lg-none"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :href="item.link"
          :class="{ active: item.active }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, index) in socialItems"
          :key="index"
          :href="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      centerImage: "files/ishmam.jpeg",
      menuItems: [
        { title: "Home", icon: "mdi-home", link: "#home", active: true },
        {
          title: "Features",
          icon: "mdi-briefcase",
          link: "#features",
          active: false,
        },
        {
          title: "Portfolio",
          icon: "mdi-layers",
          link: "#portfolio",
          active: false,
        },
        { title: "Resume", icon: "mdi-users", link: "#resume", active: false },
        {
          title: "Clients",
          icon: "mdi-account",
          link: "#clients",
          active: false,
        },
        { title: "Pricing", icon: "mdi-cart", link: "#pricing", active: false },
        { title: "Blog", icon: "mdi-image", link: "#blog", active: false },
        {
          title: "Contact",
          icon: "mdi-message-circle",
          link: "#contacts",
          active: false,
        },
      ],
      socialItems: [
        { title: "GitHub", icon: "mdi-github", link: "#" },
        { title: "Mail", icon: "mdi-email", link: "#" },
        { title: "LinkedIn", icon: "mdi-linkedin", link: "#" },
        { title: "LinkedIn", icon: "mdi-linkedin", link: "#" },
        { title: "LinkedIn", icon: "mdi-linkedin", link: "#" },
        { title: "LinkedIn", icon: "mdi-linkedin", link: "#" },
      ],
    };
  },
};
</script>
