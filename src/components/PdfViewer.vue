<!-- Dont enter any 'filePath' property if the pdf is in the src root folder  -->
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
            <span v-if="!fullscreen">
              <v-icon size="x-large" color="#093d86">mdi-fullscreen</v-icon>
              <v-tooltip
                :open-delay="tooltipOpenDelay"
                activator="parent"
                location="bottom"
              >
                {{ $t("common.open_fullscreen") }}
              </v-tooltip>
            </span>
            <span v-else>
              <v-icon size="x-large" color="#093d86">
                mdi-fullscreen-exit
              </v-icon>
              <v-tooltip
                :open-delay="tooltipOpenDelay"
                activator="parent"
                location="bottom"
              >
                {{ $t("common.close_fullscreen") }}
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
          :pdf="pdfPath == null ? '../src/' + pdfName : pdfPath"
          :page-number="1"
          :config="configValue"
          @open="openHandler"
        >
          <template #toolbar-right-prepend>
            <button
              v-show="downloadButtonShow"
              class="toolbarButton print hiddenMediumView vue-pdf-app-icon print-button"
              :title="$t('common.print')"
              @click.prevent="printPdf"
            />
          </template>
        </vue-pdf-app>
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
     * ファイル名
     */
    pdfName: {
      required: true,
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
    downloadButtonShow: {
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
        // secondaryToolbar: false,
        secondaryToolbar: {
          secondaryPresentationMode: true,
          secondaryOpenFile: false,
          secondaryPrint: false,
          secondaryDownload: false,
          secondaryViewBookmark: false,
          firstPage: true,
          lastPage: true,
          pageRotateCw: true,
          pageRotateCcw: true,
          cursorSelectTool: true,
          cursorHandTool: true,
          scrollVertical: false,
          scrollHorizontal: false,
          scrollWrapped: false,
          spreadNone: false,
          spreadOdd: false,
          spreadEven: false,
          documentProperties: true,
        },
        toolbar: {
          toolbarViewerRight: {
            presentationMode: true,
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
    configValue() {
      var config = this.config;
      if (this.downloadButtonShow) {
        config.toolbar.toolbarViewerRight.download = true;
        // config.toolbar.toolbarViewerRight.print = true
      }
      return config;
    },
  },
  mounted() {
    this.mobileView =
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    console.log(this.pdfPath);
  },
  methods: {
    pagesRendered(pdfApp) {
      console.log(">> pagesRendered -> ", pdfApp);
      window._pdfApp = pdfApp;
    },
    openHandler(pdfApp) {
      window._pdfApp = pdfApp;
    },

    async printPdf() {
      console.log("printPdf clicked", this.pdfPath);

      if (this.pdfPath) {
        // var classes = this.$refs.pdfElement.classList.remove('v-overlay-scroll-blocked')
        // console.log('>> classList => ', classes)
        // var test = document.getElementById(pdfPrintId)
        var elm = document.getElementsByClassName(
          "v-overlay-scroll-blocked"
        )[0];
        console.log(">> elm => ", elm);
        if (
          elm.classList &&
          elm.classList.contains("v-overlay-scroll-blocked")
        ) {
          elm.classList.remove("v-overlay-scroll-blocked");
        }
        window.print();
      }
    },
  },
};
</script>
