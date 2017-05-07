var $ = require('jquery');

var Expand = (function() {
  var tile = $('.strips__strip');
  var tileLink = $('.strips__strip > .strip__content');
  var tileText = tileLink.find('.strip__inner-text');
  var stripClose = $('.strip__close');

  var expanded  = false;

  var open = function() {

    var tile = $(this).parent();
    if (!expanded) {
      tile.css('zIndex', '3');
      tile.addClass('strips__strip--expanded');
      // add delay to inner text
      tileText.css('transition', 'all .5s .5s cubic-bezier(0.23, 1, 0.32, 1)');

      stripClose.addClass('strip__close--show');
      stripClose.css('transition', 'all .6s .25s cubic-bezier(0.23, 1, 0.32, 1)');
      expanded = true;
    }
  };

  var close = function() {
    if (expanded) {
      // remove delay from inner text
      tileText.css('transition', 'all 0s 0s cubic-bezier(0.23, 1, 0.32, 1)');
      tile.removeClass('strips__strip--expanded');

      setTimeout(() => {
        tile.css('zIndex', '0');
      }, 150);

      stripClose.removeClass('strip__close--show');
      stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
      expanded = false;
    }
  };

  var bindKey = function(e) {
    if(e.keyCode == 27) {
      close();
    }
  };

  var bindActions = function() {
    tileLink.on('click', open);
    stripClose.on('click', close);
    $(document).on('keyup', bindKey);
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

}());

Expand.init();
