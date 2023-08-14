/* ------------------------------------------------------------------------------
@name: Card
@description: Card
--------------------------------------------------------------------------------- */

const Card = (() => {
  // --- setPrimary
  const setPrimary = () => {
    let _height = 0;
    let _body = 0;
    // card
    $('.js-set-card .card--primary').each((i, e) => {
      if (_height < $(e).find('.card__head').height()) {
        _height = $(e).find('.card__head').height();
      }
      if (_body < $(e).find('.card__body').height()) {
        _body = $(e).find('.card__body').height();
      }
    });

    $('.js-set-card .card--primary .card__head').height(_height);
    $('.js-set-card .card--primary .card__body').height(_body);
  }

  // --- setCard
  const setCard = () => {
    let _height = 0;
    // card
    $('.js-set-card .card').each((i, e) => {
      if (_height < $(e).find('.card__box').height()) {
        _height = $(e).find('.card__box').height();
      }
    });
    $('.js-set-card .card__box').height(_height);
  }

  // --- setNews
  const setNews = () => {
    let _height = 0;
    // news item
    $('.js-set-card .news__item').each((i, e) => {
      if (_height < $(e).find('.news__item__box').height()) {
        _height = $(e).find('.news__item__box').height();
      }
    });
    $('.js-set-card .news__item__box').height(_height);
  }

  // --- setVideo
  const setVideo = () => {
    let _height = 0;
    // video item
    $('.js-set-card .video__item').each((i, e) => {
      if (_height < $(e).find('.video__item__box').height()) {
        _height = $(e).find('.video__item__box').height();
      }
    });
    $('.js-set-card .video__item__box').height(_height);
  }

  // --- resetCard
  const resetCard = () => {
    let _card = $('.js-set-card .card__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _card !== 'undefined' && _card !== false) {
      $('.js-set-card .card__box').removeAttr('style');
    }
  }

  // --- resetPrimary
  const resetPrimary = () => {
    let _head = $('.js-set-card .card--primary .card__head').attr('style');
    let _body = $('.js-set-card .card--primary .card__body').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _head !== 'undefined' && _head !== false) {
      $('.js-set-card .card--primary .card__head').removeAttr('style');
    }
    if (typeof _body !== 'undefined' && _body !== false) {
      $('.js-set-card .card--primary .card__body').removeAttr('style');
    }
  }

  // --- resetNews
  const resetNews = () => {
    let _news = $('.js-set-card .news__item__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _news !== 'undefined' && _news !== false) {
      $('.js-set-card .news__item__box').removeAttr('style');
    }
  }

  // --- resetVideo
  const resetVideo = () => {
    let _video = $('.js-set-card .video__item__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _video !== 'undefined' && _video !== false) {
      $('.js-set-card .video__item__box').removeAttr('style');
    }
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    handleResetHeight();

    // set card default
    if (!$('.card--primary').length) {
      setCard();
    }
    if ($(window).width() > 575.86) {
      // set card icon
      setPrimary();
      // set card news
      setNews();
      // set card video
      setVideo();
    }
  };

  // --- handleResetHeight
  const handleResetHeight = () => {
    // reset card default
    resetCard();
    // reset card primary
    resetPrimary();
    // reset card news
    resetNews();
    // reset card video
    resetVideo();
  };

  // init
  const init = () => {
    if ($('.js-set-card').length) {
      handleCheckHeight();
    }
  };

  return {
    init,
    checkHeight: handleCheckHeight
  };
})();

export default Card;
