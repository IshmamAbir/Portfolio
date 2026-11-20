<template>
  <v-dialog
    scrollable
    :max-width="!fullscreen ? width : null"
    v-model="showPdf"
    :fullscreen="fullscreen"
    eager
    transition="dialog-top-transition"
    :height="!fullscreen ? height : null"
  >
    <v-card v-if="showPdf" class="floating-textbox" style="border-radius: 8px">
      <v-card-title class="base-title-panel d-flex" ref="cardTitle">
        <v-icon class="text-danger">{{ icon }}</v-icon>
        <div class="pl-3 base-title-length text-danger">{{ title }}</div>

        <span style="margin-left: auto">
          <!-- fullscreen -->
          <v-btn
            class="mr-2"
            v-if="!mobileView"
            @click.prevent="fullscreen = !fullscreen"
            size="x-small"
            icon
          >
            <span>
              <v-icon size="x-large" color="#093d86">
                {{ fullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen" }}
              </v-icon>
              <v-tooltip
                :open-delay="tooltipOpenDelay"
                activator="parent"
                location="bottom"
              >
                {{ $t(fullscreen ? "common.close_fullscreen" : "common.open_fullscreen") }}
              </v-tooltip>
            </span>
          </v-btn>

          <!-- 右端ボタン：Close -->
          <v-btn @click.prevent="showPdf = false" size="x-small" icon>
            <v-icon size="x-large" color="red">mdi-close</v-icon>
            <v-tooltip
              :open-delay="tooltipOpenDelay"
              activator="parent"
              location="bottom"
            >
              {{ $t("common.close") }}
            </v-tooltip>
          </v-btn>
        </span>
      </v-card-title>

      <v-card-text class="pt-5">
        <vue-pdf-app
          id="pdfPrintId"
          ref="pdfElement"
          :style="
            fullscreen
              ? 'height: 90dvh'
              : mobileView
              ? 'height: 88dvh'
              : 'height: 75dvh'
          "
          page-scale="page-fit"
          :pdf="pdfPath"
          :page-number="1"
          :config="config"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";

/**PDFリーダー */
export default {
  name: "PdfReader",
  components: {
    VuePdfApp,
  },
  props: {
    /**
     * ファイルのパス
     */
    pdfPath: {
      // path from src folder
      required: false,
      type: String,
    },
    /**
     * タイトルの横のアイコン
     */
    icon: {
      type: String,
      required: false,
      default: "mdi-file-document",
    },
    /**
     * タイトル
     */
    title: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      mobileView: false,
      tooltipOpenDelay: 300,
      width: "1150px",
      fullscreen: false,
      config: {
        secondaryToolbar: {
          secondaryOpenFile: false,
          secondaryPrint: false,
          secondaryDownload: false,
          secondaryViewBookmark: false,
          scrollVertical: false,
          scrollHorizontal: false,
          scrollWrapped: false,
          spreadNone: false,
          spreadOdd: false,
          spreadEven: false,
        },
        toolbar: {
          toolbarViewerRight: {
            openFile: false,
            print: false,
            download: false,
            viewBookmark: false,
          },
        },
      },
    };
  },
  computed: {
    showPdf: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  mounted() {
    this.mobileView =
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
  },
};
</script>
