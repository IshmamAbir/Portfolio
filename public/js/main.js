/* global jQuery, WOW, AOS */
(function ($) {
  "use strict";

  var imJs = {
    methods: function () {
      imJs.featherAtcivation();
      imJs.backToTopInit();
      imJs.contactForm();
      imJs.wowActive();
      imJs.awsActivation();
    },

    contactForm: function () {
      $(".rwt-dynamic-form").on("submit", function (e) {
        e.preventDefault();
        var _self = $(this);
        _self.closest("div").find("input,textarea").removeAttr("style");
        _self.find(".error-msg").remove();
        _self
          .closest("div")
          .find('button[type="submit"]')
          .attr("disabled", "disabled");
        var data = $(this).serialize();
        $.ajax({
          url: "mail.php",
          type: "post",
          dataType: "json",
          data: data,
          success: function (data) {
            _self
              .closest("div")
              .find('button[type="submit"]')
              .removeAttr("disabled");
            if (data.code == false) {
              _self.closest("div").find('[name="' + data.field + '"]');
              _self
                .find(".rn-btn")
                .after('<div class="error-msg"><p>*' + data.err + "</p></div>");
            } else {
              $(".error-msg").hide();
              $(".form-group").removeClass("focused");
              _self
                .find(".rn-btn")
                .after(
                  '<div class="success-msg"><p>' + data.success + "</p></div>"
                );
              _self.closest("div").find("input,textarea").val("");

              setTimeout(function () {
                $(".success-msg").fadeOut("slow");
              }, 5000);
            }
          },
        });
      });
    },

    wowActive: function () {
      new WOW().init();
    },

    featherAtcivation: function () {
      // eslint-disable-next-line no-undef
      feather.replace();
    },

    backToTopInit: function () {
      // declare variable
      var scrollTop = $(".backto-top");
      $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
          $(scrollTop).css("opacity", "1");
        } else {
          $(scrollTop).css("opacity", "0");
        }
      });

      //Click event to scroll to top
      $(scrollTop).on("click", function () {
        $("html, body").animate(
          {
            scrollTop: 0,
            easingType: "linear",
          },
          500
        );
        return false;
      });
    },

    awsActivation: function () {
      AOS.init();
    },
  };
  imJs.methods();
})(jQuery, window);
