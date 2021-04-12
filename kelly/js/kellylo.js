$(document).ready(function() {
    $("#experience-btn").on("click", loadExperience);
    $("#contact-btn").on("click", loadContact);
});

function loadExperience(e) {
    console.log("Experience button clicked");
    $('html,body').animate({
        scrollTop: $(".experience-section").offset().top},
        'slow');
}

function loadContact(e) {
    console.log("Contact button clicked");
    $('html,body').animate({
        scrollTop: $(".contact-section").offset().top},
        'slow');
}