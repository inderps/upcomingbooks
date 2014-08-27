$(function () {
  $.backstretch("/images/pagethemes/black/bg.jpg");
  var austDay = new Date();
  austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
  $('#launchCountdown').countdown({until: austDay});
  $('#year').text(austDay.getFullYear());
});