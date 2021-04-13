$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-menu");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

$(document).ready(function() {
    $("#experience-btn").on("click", loadExperience);
    $("#contact-btn").on("click", loadContact);
    $("#home-btn").on("click", loadHeader);
});

function loadExperience(e) {
    console.log("Experience button clicked");
    $('html,body').animate({
        scrollTop: $(".experience-section").offset().top - $(".nav-menu").height()},
        'slow');
}

function loadContact(e) {
    console.log("Contact button clicked");
    $('html,body').animate({
        scrollTop: $(".contact-section").offset().top - $(".nav-menu").height()},
        'slow');
}

function loadHeader(e) {
    console.log("Home button clicked");
    $('html,body').animate({
        scrollTop: $(".header").offset().top - $(".nav-menu").height()},
        'slow');
}