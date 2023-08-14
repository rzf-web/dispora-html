/* ------------------------------------------------------------------------------
@name: ScrollAnimate
@description: ScrollAnimate
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Reveal
} from 'utilities';

// --- ScrollAnimate
const ScrollAnimate = (() => {
  // --- handleSrollAnimateHome
  const handleSrollAnimateHome = () => {
    // main-video
    if ($(".main-video").length) {
      ScrollReveal().reveal(".main-video__head", Reveal.config());
      ScrollReveal().reveal(".main-video__sign", Reveal.config());
      ScrollReveal().reveal(".main-video__foot", Reveal.config());
      ScrollReveal().reveal(".video__item", Reveal.config());
    }
    // news
    if ($(".main-news").length) {
      ScrollReveal().reveal(".main-news__head", Reveal.config());
      ScrollReveal().reveal(".main-news__foot", Reveal.config());
      ScrollReveal().reveal(".news__item", Reveal.config());
    }
    // partner
    if ($(".partner").length) {
      ScrollReveal().reveal(".partner__head", Reveal.config());
      ScrollReveal().reveal(".partner__body", Reveal.config());
    }
  };

  // --- handleSrollAnimateVideo
  const handleSrollAnimateVideo = () => {
    // video
    if ($(".video").length) {
      ScrollReveal().reveal(".filter", Reveal.config());
    }
  };

  // --- handleSrollAnimateAuth
  const handleSrollAnimateAuth = () => {
    // auth
    if ($(".auth").length) {
      ScrollReveal().reveal(".auth__box", Reveal.config());
    }
  };

  // --- handleSrollAnimateNews
  const handleSrollAnimateNews = () => {
    // news
    if ($(".news").length) {
      ScrollReveal().reveal(".filter", Reveal.config());
    }
    // news detail
    if ($(".news-detail").length) {
      if ($(window).width() > 767.98) {
        ScrollReveal().reveal(".news-detail__img", Reveal.config());
      }
      ScrollReveal().reveal(".news-detail__info", Reveal.config());
      ScrollReveal().reveal(".news-detail__title", Reveal.config());
      ScrollReveal().reveal(".news-detail__content", Reveal.config());
    }
    // news-widget
    if ($(".news-widget").length) {
      ScrollReveal().reveal(".news__item", Reveal.config());
      ScrollReveal().reveal(".news-widget__head", Reveal.config());
      ScrollReveal().reveal(".news-widget__foot", Reveal.config());
    }
  };

  // --- handleSrollAnimateSection
  const handleSrollAnimateSection = () => {
    // section
    if ($(".section").length) {
      if (!$(".section--form").length) {
        if (!$(".section--table").length) {
          ScrollReveal().reveal(".status-info", Reveal.config());
          ScrollReveal().reveal(".section__head", Reveal.config());
          ScrollReveal().reveal(".section__card", Reveal.config());
          ScrollReveal().reveal(".section__acc", Reveal.config());
          ScrollReveal().reveal(".card", Reveal.config());
          ScrollReveal().reveal(".summary-legality", Reveal.config());
        }
      }
    }
  };

  // --- init
  const init = () => {
    handleSrollAnimateHome();
    handleSrollAnimateVideo();
    handleSrollAnimateNews();
    handleSrollAnimateAuth();
    handleSrollAnimateSection();
  };

  // --- return
  return {
    init,
  };
})();

export default ScrollAnimate;
