//hide page
$('#hiddenSummary').hide();

//append first 
append('#container');

//append second on first-end
$('#container').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    appendTwo('#delayed');
});

//fadeout/empty both
$('#delayed').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    displayPage(endFade('#onFadeOut', '#delayed'), '#top-container')
    // endFade('#top-container', '#bot-container')
});
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
// append summary 