/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

const Footer = (() => {
  const _width = 767.98;
  // handle padding bottom
  const handleFooterSticky = () => {
    const _footer = $('.footer').innerHeight();

    if ($(window).width() > _width) {
      $('.main-site').css('paddingBottom', _footer);
    } else {
      $('.main-site').removeAttr('style');
    }
  };

  // handleFooterAccordion
  const handleFooterAccordion = () => {
    $('.js-footer-acc .footer__title').on('click', (e) => {
      const _this = $(e.currentTarget);
      const _parents = _this.parents('.footer__item');

      if ($(window).width() <= _width) {
        if (_parents.hasClass('footer__item--show')) {
          _parents.find('.footer__menu').slideUp(300);
          _parents.removeClass('footer__item--show');
        } else {
          _parents.siblings('.footer__item').removeClass('footer__item--show').find('.footer__menu').slideUp(300);

          _parents.find('.footer__menu').slideDown(300);
          _parents.addClass('footer__item--show');
        }
      }
    });
  }

  // handle Destroy Accordion
  const handleDestroyAccordion = () => {
    if ($(window).width() > _width) {
      $('.js-footer-acc .footer__item').removeClass('footer__item--show').find('.footer__menu').removeAttr('style');
    }
  }

  // init
  const init = () => {
    handleFooterSticky();
    handleFooterAccordion();
  };

  return {
    init,
    footerSticky: handleFooterSticky,
    destroyAccordion: handleDestroyAccordion
  };
})();

export default Footer;
