jQuery(document).ready(function ($) {
  // Soft scroll down.
  $(".scroll-anchor").on("click", function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });

  // Scroll reveal.
  ScrollReveal().reveal("[data-scroll-reveal]", {
    scale: 0.85,
    duration: 1000,
    interval: 200
  });

  // Video placeholder.
  $(".iframe-video-placeholder").on("click", function () {
    const $this = $(this);
    $this.siblings(".iframe-abstract").css({display: "block"});
    $this.hide();
  });

  // Set video and video placeholder's height in proportion to video width.
  const $frame = $("iframe.iframe-abstract");
  if ($frame.length) {
    $frame.height($frame.width() / 1.9);
    $frame.siblings(".iframe-video-placeholder").height($frame.width() / 1.9);
  }
});
