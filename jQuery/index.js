$("h1").addClass("big-title");
$(document).keydown(function (e) {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
