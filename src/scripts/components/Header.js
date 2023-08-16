/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

// --- utilities
import { Scrolllable } from "utilities";

// --- Header
const Header = (() => {
  // --- handle mobile menu
  const handleMobileMenu = () => {
    $(".js-mobile-menu").on("click", (e) => {
      if ($("body").hasClass("show-menu")) {
        Scrolllable.enable();
        $("body").removeClass("show-menu");
      } else {
        Scrolllable.disable();
        $("body").addClass("show-menu");
      }
      if ($("body").hasClass("show-search")) {
        Scrolllable.enable();
        $("body").removeClass("show-search");
        $("body").removeClass("show-menu");
      }
      if ($(".dropdown").hasClass("show")) {
        $(".dropdown").removeClass("show");
      }
    });

    $("body").on("click", () => {
      if ($("body").hasClass("show-menu")) {
        Scrolllable.enable();
        $("body").removeClass("show-menu");
        if ($(".dropdown").hasClass("show")) {
          $(".dropdown").removeClass("show");
        }
        if ($("body").hasClass("show-search")) {
          $("body").removeClass("show-search");
        }
      }
    });

    $("body").on("click", ".js-mobile-menu, .header__menu", (e) => {
      e.stopPropagation();
    });
  };

  // --- handle destroy mobile menu
  const handleDestroyMobileMenu = () => {
    if ($(window).width() > 767.98) {
      if ($("body").hasClass("show-menu")) {
        Scrolllable.enable();
        $("body").removeClass("show-menu");
      }
    }
  };

  // --- handle show search
  const handleShowSearch = () => {
    $(".js-show-search").on("click", (e) => {
      if ($("body").hasClass("show-search")) {
        setTimeout(() => {
          $('.header').removeAttr('style');
        }, 500);
        Scrolllable.enable();
        $("body").removeClass("show-search");
      } else {
        $('.header').css('transition', '0s');
        Scrolllable.disable();
        $("body").addClass("show-search");
        if ($(".dropdown").hasClass("show")) {
          $(".dropdown").removeClass("show");
        }
        if ($("body").hasClass("show-menu")) {
          $("body").removeClass("show-menu");
        }
      }
    });

    // $(".header__search__box").on("mouseleave", (e) => {
    //   if ($(window).width() > 767.98) {
    //     if ($("body").hasClass("show-search")) {
    //       Scrolllable.enable();
    //       $("body").removeClass("show-search");
    //     }
    //   }
    // });

    $("body").on("click", () => {
      if ($("body").hasClass("show-search")) {
        Scrolllable.enable();
        $("body").removeClass("show-search");
        if ($(".dropdown").hasClass("show")) {
          $(".dropdown").removeClass("show");
        }
        if ($("body").hasClass("show-menu")) {
          $("body").removeClass("show-menu");
        }
      }
    });

    $("body").on("click", ".js-show-search, .header__search__box", (e) => {
      e.stopPropagation();
    });
  };

  // --- handle destroy search
  const handleDestroySearch = () => {
    if ($(window).width() > 767.98) {
      if ($("body").hasClass("show-search")) {
        Scrolllable.enable();
        $("body").removeClass("show-search");
      }
    }
  };

  // --- handleHeaderDropdown
  const handleHeaderDropdown = () => {
    $(".header__dropdown a").on("click", (e) => {
      const _this = $(e.currentTarget);
      if (
        _this.parents(".header__dropdown").hasClass("header__dropdown--show")
      ) {
        _this
          .parents(".header__dropdown")
          .find(".header__dropdown__menu")
          .delay(300)
          .slideUp();
        _this
          .parents(".header__dropdown")
          .removeClass("header__dropdown--show");
      } else {
        _this
          .parents(".header__dropdown")
          .siblings(".header__dropdown")
          .removeClass("header__dropdown--show")
          .find(".header__dropdown__menu")
          .delay(300)
          .slideUp();

        _this
          .parents(".header__dropdown")
          .find(".header__dropdown__menu")
          .slideDown();
        _this.parents(".header__dropdown").addClass("header__dropdown--show");
      }
    });
  };

  // --- handleHideHeaderDropdown
  const handleHideHeaderDropdown = () => {
    // --- handle hide click
    $("body").on("click", (e) => {
      if ($(".header__dropdown").hasClass("header__dropdown--show")) {
        $(".header__dropdown")
          .removeClass("header__dropdown--show")
          .find(".header__dropdown__menu")
          .delay(300)
          .slideUp();
      }
    });

    // --- stop progation
    $("body").on("click", ".header__dropdown", (e) => {
      e.stopPropagation();
    });
  };

  // --- handleDestroyHeaderDropdown
  const handleDestroyHeaderDropdown = () => {
    if ($(window).width() > 767.98) {
      $(".header__dropdown")
        .removeClass("header__dropdown--show")
        .find(".header__dropdown__menu")
        .removeAttr("style");
    }
  };

  // --- init
  const init = () => {
    if ($(".js-mobile-menu").length) {
      handleMobileMenu();
    }
    if ($(".js-show-search").length) {
      handleShowSearch();
    }
    if ($(".header__dropdown").length) {
      handleHeaderDropdown();
      handleHideHeaderDropdown();
    }
  };

  // --- return
  return {
    init,
    destroyMobileMenu: handleDestroyMobileMenu,
    destroySearch: handleDestroySearch,
    destroyHeaderDropdown: handleDestroyHeaderDropdown,
  };
})();

export default Header;
