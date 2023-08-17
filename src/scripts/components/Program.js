/* ------------------------------------------------------------------------------
@name: Program
@description: Program
--------------------------------------------------------------------------------- */

const Program = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-program-slider');
    const _itemLength = $('.js-program-slider .program-card').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if window scren > small screen
    if ($(window).width() > 767.98) {
      // --- check if itemLength > itemRun
      if (_itemLength > _itemRun) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          touchDrag: true,
          mouseDrag: true,
          autoplay: true,
          nav: false,
          loop: true,
          dots: false,
          navText: [
            "<i class='dc-chevron-left'></i>",
            "<i class='dc-chevron-right'></i>"
          ],
          smartSpeed: 1500,
          autoWidth: true,
          autoplayHoverPause: true,
          autoplayTimeout: 2000
        });
      } else {
        if (_selector.hasClass('owl-carousel')) {
          _selector.removeClass('owl-carousel');
        }
      }
    }
  };

  // init
  const init = () => {
    if ($('.js-program-slider').length) {
      handleRunCarousel();
    }
  };

  return {
    init,
    destroyCarousel: handleRunCarousel
  };
})();

export default Program;
