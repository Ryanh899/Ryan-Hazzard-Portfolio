append('#container');

$('#container').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    appendTwo('#delayed');
});

$('#delayed').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    appendSummary('#top-container', '#bot-container'); 
}); 