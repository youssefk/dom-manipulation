$(document).ready(function() {
  $("button#hello").click(function () {
    $("ul#user").prepend("<li>Hello! <span class='clickable delete'>x</span></li>");
    $("ul#webpage").prepend("<li>Why hello there! <span class='clickable delete'>x</span></li>");
    $("li").css('background-color', 'green');
  });

  $("button#goodbye").click(function () {
    $("ul#user").prepend("<li>Goodbye! <span class='clickable delete'>x</span></li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user! <span class='clickable delete'>x</span></li>");
    $("li").css('background-color', 'green');
  });

  $("button#stop").click(function () {
    $("ul#user").prepend("<li>Stop copying me! <span class='clickable delete'>x</span></li>");
    $("ul#webpage").prepend("<li>Pardon me, I meant no offense. <span class='clickable delete'>x</span></li>");
    $("li").css('background-color', 'green');
  });
});
