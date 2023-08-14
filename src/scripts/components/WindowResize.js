/* ------------------------------------------------------------------------------
@name: WindowResize
@description: WindowResize
--------------------------------------------------------------------------------- */

// --- components
import {
  Header,
  Footer,
  MainBanner,
  Card,
} from 'components';

// --- WindowResize
const WindowResize = (() => {
  let _rtime;
  let _timeout = false;
  let _delta = 200;

  // --- handleResize
  const handleResize = () => {
    $(window).resize(() => {
      _rtime = new Date();
      if (_timeout === false) {
        _timeout = true;
        $('body').addClass('hold-transition');
        setTimeout(handleResizeEnd, _delta);
      }
    });
  };

  // --- handleResizeEnd
  const handleResizeEnd = () => {
    if (new Date() - _rtime < _delta) {
      setTimeout(handleResizeEnd, _delta);
    } else {
      _timeout = false;
      // Run Function on Resize end
      Header.destroyMobileMenu();
      Header.destroySearch();
      Header.destroyHeaderDropdown();
      Footer.footerSticky();
      MainBanner.destroyCarousel();
      Card.checkHeight();
      $('body').removeClass('hold-transition');
    }
  };

  // --- init
  const init = () => {
    handleResize();
  };

  // --- return
  return {
    init
  };
})();

export default WindowResize;
