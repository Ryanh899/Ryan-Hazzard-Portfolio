function append(elem) {
    $(elem).append(`<h1 class="animated fadeIn firstFade">Hey, I'm Ryan, Web Developer</h1>`)
};

function appendTwo(elem) {
    $(elem).append(`<h1 class="animated fadein slow secondFade delay-3.5s">and this is my portfolio`)
};

function appendSummary(...elems) {
    $(elems[0]).fadeOut(500, () => {
        $(this).empty().show(); 
    }); 
    $(elems[1]).fadeOut(500, () => {
        $(this).empty().show(); 
    }); 
};



