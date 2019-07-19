var end = $('#animation')

end.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {
        $('#delayed').append(`<h1 id="delay-font" class="pb-0 mb-0" >and this is my Porfolio</h1>`)
    });

var finished = $('#delayed  ')

finished.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {
        console.log('on end worked'); 
        $('.container-fluid').fadeOut(500, function() {
            $(this).empty().show();
         });
         
    });