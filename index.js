const handleScrollBottom = function() {
  $(window).on('scroll', () => {
    let height = $(window).height();
    let scroll = $(window).scrollTop();
    if (scroll > height) {
      $('.scroll-top').removeClass('hidden');
    } else {
      $('.scroll-top').addClass('hidden');
    }
  });
};

const handleScrollClick = function() {
  $('body').on('click', '.scroll-top', () => {
    $('html').animate({ scrollTop: 0 }, 'slow');
  });
};

const handlers = function() {
  handleScrollBottom();
  handleScrollClick();
};

$(handlers);
