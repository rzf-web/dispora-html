/* ------------------------------------------------------------------------------
@name: hero Banner
@description: hero Banner
--------------------------------------------------------------------------------- */

const HeroBanner = (() => {
  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-hero-banner');
    const _itemLength = $('.js-hero-banner .hero-banner__item').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ["<i class='dc-chevron-left'></i>","<i class='dc-chevron-right'></i>"],
        loop: false,
        touchDrag: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        dotsContainer: '#custom-owl-dots'
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('hero-banner--single');
    }

    $('.hero-banner__card__btn').click(function () {
      $(this).trigger('to.owl.carousel', [$(this).index(), 300]);
    });
  };

  // init
  const init = () => {
    if ($('.js-hero-banner').length) {
      handleRunCarousel();
    }
  };

  return {
    init,
    destroyCarousel: handleRunCarousel
  };
})();

export default HeroBanner;
