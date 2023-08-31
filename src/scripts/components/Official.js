/* ------------------------------------------------------------------------------
@name: Official
@description: Official
--------------------------------------------------------------------------------- */

// --- utilities
import { Scrolllable } from "utilities";

const Official = (() => {
  // --- handleRunLightbox
  const handleRunLightbox = () => {
    new SimpleLightbox(".js-popup-image");
  };
  // --- handleClickPopup
  const handleClickPopup = () => {
    // show popup
    $(".js-show-popup").on("click", (e) => {
      const _this = $(e.currentTarget);
      const _photo = _this.attr("data-photo");
      const _name = _this.attr("data-name");
      const _position = _this.attr("data-position");
      const _content = _this.attr("data-content");
      if (!$("body").hasClass("show-popup")) {
        Scrolllable.disable();
        $("body").addClass("show-popup");
        $(".popup__img__el").attr({
          src: _photo,
          alt: _name,
        });
        $(".popup__name").text(_name);
        $(".popup__position").text(_position);
        $(".popup__body").html(_content);
      }
    });
    // hide popup
    $(".js-hide-popup").on("click", (e) => {
      if ($("body").hasClass("show-popup")) {
        Scrolllable.enable();
        $("body").removeClass("show-popup");
      }
    });
  };

  // init
  const init = () => {
    if ($(".js-show-popup").length) {
      handleClickPopup();
    }
    if ($(".js-popup-image").length) {
      handleRunLightbox();
    }
  };

  return {
    init,
  };
})();

export default Official;
