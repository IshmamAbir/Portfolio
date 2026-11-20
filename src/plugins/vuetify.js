import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { initialTheme } from "@/includes/preferences";

export default createVuetify({
  theme: {
    defaultTheme: initialTheme(),
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FCFBF8", surface: "#FFFEFB", "on-background": "#17150F",
          "on-surface": "#17150F", primary: "#CF2A38", "on-primary": "#FFFFFF",
          secondary: "#6B6459", outline: "#E5DFD2", "on-surface-variant": "#6B6459",
          accent: "#F5B800", "on-accent": "#17150F",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#0B1625", surface: "#0F1D33", "on-background": "#E4ECF7",
          "on-surface": "#E4ECF7", primary: "#FF7A7F", "on-primary": "#0B1625",
          secondary: "#9AAECB", outline: "#22385A", "on-surface-variant": "#9AAECB",
          accent: "#F5C84B", "on-accent": "#0B1625",
        },
      },
    },
  },
  defaults: {
    VBtn: { elevation: 0, rounded: "lg" },
    VCard: { elevation: 0 },
    VChip: { variant: "outlined", size: "small", rounded: "sm" },
    VExpansionPanels: { elevation: 0, variant: "accordion" },
  },
});
