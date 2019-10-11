$('#introName').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
    $('#description').css('display', 'block')
});



// // append summary 

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$(document).on('click' ,"#arrowAnimation", function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});