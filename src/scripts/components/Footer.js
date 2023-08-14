/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

const Footer = (() => {
  const _width = 767.98;
  // handle padding bottom
  const handleFooterSticky = () => {
    const _footer = $('.footer').innerHeight();
    // const _header = $('.header').innerHeight();
    // const _height = $('.section__card').innerHeight() + 48;

    if ($(window).width() > _width) {
      $('.main-site').css('paddingBottom', _footer);
      // $('.section--form').css('height', _height + _header);
    } else {
      $('.main-site').removeAttr('style');
    }
  };

  // init
  const init = () => {
    handleFooterSticky();
  };

  return {
    init,
    footerSticky: handleFooterSticky
  };
})();

export default Footer;
