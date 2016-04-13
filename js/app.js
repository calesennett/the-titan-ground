$(document).ready(function() {
  var src   = $('img.audio').attr('data-audio-src').toString();
  var sound = new Howl({
      urls: [src]
  });

  $('.audio').click(function(e) {
    e.preventDefault();

    if ($(this).hasClass('playing')) {
      $(this).toggleClass('playing');
      sound.pause();
    } else {
      $(this).toggleClass('playing');
      sound.play();
    }
  });

  $('.waves').click(function(e) {
    e.preventDefault();

    sound.pause();
  });
});
