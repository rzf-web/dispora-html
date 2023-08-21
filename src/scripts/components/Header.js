/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

// --- utilities
import { Scrolllable } from 'utilities';

// --- Header
const Header = (() => {
  // --- handle mobile menu
  const handleShowMobileMenu = () => {
    $('.js-mobile-menu').on('click', (e) => {
      // check has class show menu
      if ($('body').hasClass('show-menu')) {
        Scrolllable.enable();
        if (!$('body').hasClass('global-nav-show')) {
          $('body').removeClass('show-menu');
        }
      } else {
        Scrolllable.disable();
        if (!$('body').hasClass('show-search')) {
          $('body').addClass('show-menu');
        }
      }

      // check has class show search & hide show search
      if ($('body').hasClass('show-search')) {
        Scrolllable.enable();
        $('body').removeClass('show-search');
      }

      // check has class show search & hide show search
      if ($('body').hasClass('global-nav-show')) {
        $('body').removeClass('global-nav-show');
        $('.header__global-nav').removeClass('header__global-nav--show');
      }
    });
  };

  // --- handle hide mobile menu
  const handleHideMobileMenu = () => {
    $('body').on('click', () => {
      if ($('body').hasClass('show-menu')) {
        Scrolllable.enable();
        $('body').removeClass('show-menu');

        // check has class show search & hide show search
        if ($('body').hasClass('show-search')) {
          $('body').removeClass('show-search');
        }
      }
    });

    $('body').on('click', '.js-mobile-menu, .header__menu, .header__global-nav', (e) => {
      e.stopPropagation();
    });
  };

  // --- handle destroy mobile menu
  const handleDestroyMobileMenu = () => {
    if ($(window).width() > 767.98) {
      if ($('body').hasClass('show-menu')) {
        Scrolllable.enable();
        $('body').removeClass('show-menu');
      }
    }
  };

  // --- handle show search
  const handleShowSearch = () => {
    $('.js-show-search').on('click', (e) => {
      let _height = $('.header__search').innerHeight() + 48;
      if ($(window).width() < 767.98) {
        _height = $('.header__search').innerHeight() + 32;
      }
      if ($('body').hasClass('show-search')) {
        Scrolllable.enable();
        $('body').removeClass('show-search');
        // remove attr header
        setTimeout(() => {
          $('.header__layout').removeAttr('style');
        }, 500);
      } else {
        Scrolllable.disable();
        $('body').addClass('show-search');

        // add attr header
        $('.header__layout').css('height', _height);

        // hide mobile menu
        if ($('body').hasClass('show-menu')) {
          $('body').removeClass('show-menu');
        }
        // hide global nav
        if ($('body').hasClass('global-nav-show')) {
          $('body').removeClass('global-nav-show');
          $('.header__global-nav').removeClass('header__global-nav--show');
        }
      }
    });

  };

  // --- handle hide search
  const handleHideSearch = () => {
    $('.header__search__box').on('mouseleave', (e) => {
      if ($(window).width() > 767.98) {
        if ($('body').hasClass('show-search')) {
          Scrolllable.enable();
          $('body').removeClass('show-search');

          // remove attr header
          setTimeout(() => {
            $('.header__layout').removeAttr('style');
          }, 500);
        }
      }
    });

    $('body').on('click', () => {
      if ($('body').hasClass('show-search')) {
        Scrolllable.enable();
        $('body').removeClass('show-search');

        // check has class show menu & hide show menu
        if ($('body').hasClass('show-menu')) {
          $('body').removeClass('show-menu');
        }
      }
    });

    $('body').on('click', '.js-show-search, .header__search', (e) => {
      e.stopPropagation();
    });
  };

  // --- handle destroy search
  const handleDestroySearch = () => {
    if ($(window).width() > 767.98) {
      if ($('body').hasClass('show-search')) {
        Scrolllable.enable();
        $('body').removeClass('show-search');
      }
    }
  };

  // --- handleShowGlobalNavigation
  const handleShowGlobalNavigation = () => {
    var _action = '';
    if ($(window).width() > 991.98) {
      _action = 'mouseenter';
    } else {
      _action = 'click';
    }
    $('.header__link').on(_action, (e) => {
      const _this = $(e.currentTarget);
      const _parent = _this.parents('.header__global-nav');
      const _height = _parent.find('.header__global-nav__menu').innerHeight();

      if (_this.parents('.header__item').hasClass('header__global-nav')) {
        // add attr header
        $('.header__global-nav').removeClass('header__global-nav--show');
        if ($(window).width() > 991.98) {
          $('.header__layout').css('height', _height);
        }

        $('body').addClass('global-nav-show');
        _parent.addClass('header__global-nav--show');

        // hide show search
        if ($('body').hasClass('show-search')) {
          Scrolllable.enable();
          $('body').removeClass('show-search');
        }
      } else {
        if ($('body').hasClass('global-nav-show')) {
          $('body').removeClass('global-nav-show');
          $('.header__global-nav').removeClass('header__global-nav--show');
        }
      }
    });
  };

  // --- handleHideGlobalNavigation
  const handleHideGlobalNavigation = () => {
    $('.header__global-nav__content').on('mouseleave', (e) => {
      if ($(window).width() > 767.98) {
        if ($('body').hasClass('global-nav-show')) {
          $('body').removeClass('global-nav-show');
          $('.header__global-nav').removeClass('header__global-nav--show');
          setTimeout(() => {
            $('.header__layout').removeAttr('style');
          }, 500);
        }
      }
    });
  };

  // --- init
  const init = () => {
    if ($('.js-mobile-menu').length) {
      handleShowMobileMenu();
      handleHideMobileMenu();
    }
    if ($('.js-show-search').length) {
      handleShowSearch();
      handleHideSearch();
    }
    if ($('.header__global-nav').length) {
      handleShowGlobalNavigation();
      handleHideGlobalNavigation();
    }
  };

  // --- return
  return {
    init,
    destroyMobileMenu: handleDestroyMobileMenu,
    destroySearch: handleDestroySearch,
    destroyGlobalNavigation: handleShowGlobalNavigation,
  };
})();

export default Header;
