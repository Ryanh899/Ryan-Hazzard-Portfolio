var end = $('#animation')

end.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {
        $('#delayed').append(`<h1 id="delay-font" class="pb-0 mb-0" >and this is my Porfolio</h1>`)
    });

var finished = $('#delayed')

finished.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function (e) {
            $('#top-container').fadeOut(500, function () {
                $(this).empty().show();
                
                    $(this).fadeIn('slow', function(){
                        $(this).html(`<h2>Bot Works`)
                    })
            });
        
            $('#bot-container').fadeOut(500, function () {
                $(this).empty().show();
                
                    $(this).fadeIn('slow', function(){
                        $(this).html(`<h2>Bot Works`)
                    })
            });
            });
        

