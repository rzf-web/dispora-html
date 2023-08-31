/* ------------------------------------------------------------------------------
@name: Gallery
@description: Gallery
--------------------------------------------------------------------------------- */

const Gallery = (() => {
  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $(".js-gallery-slider");
    const _itemLength = $(".js-gallery-slider .gallery-card").length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // --- check if window scren > small screen
    if ($(window).width() > 991.98) {
      // --- check if itemLength > itemRun
      if (_itemLength > _itemRun) {
        // --- init carousel
        _selector.addClass("owl-carousel").owlCarousel({
          items: 2,
          touchDrag: true,
          mouseDrag: true,
          loop: false,
          dots: false,
          nav: true,
          navText: [
            "<i class='dc-play-left'></i>",
            "<i class='dc-play-right'></i>",
          ],
          smartSpeed: 1500,
        });
      } else {
        if (_selector.hasClass("owl-carousel")) {
          _selector.removeClass("owl-carousel");
        }
      }
    }
  };

  // init
  const init = () => {
    if ($(".js-gallery-slider").length) {
      handleRunCarousel();
    }
  };

  return {
    init,
    destroyCarousel: handleRunCarousel,
  };
})();

export default Gallery;
