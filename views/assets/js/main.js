// //hide page
// $('#hiddenSummary').hide();

//append first 
append('#container');

//append second on first-end
$('#container').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    appendTwo('#delayed');
});

//fadeout/empty both
$('#delayed').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    displayPage(endFade('#onFadeOut', '#delayed', '#top-container'), '#hidden')
    // endFade('#top-container', '#bot-container')
});

// // append summary 