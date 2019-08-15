//appends first fade in
function append(elem) {
    $(elem).append(`<h1 class="animated fadeIn firstFade">Hey, I'm Ryan, Web Developer</h1>`)
};
//appends second fade in
function appendTwo(elem) {
    $(elem).append(`<h1 class="animated fadein slow secondFade delay-3.5s">and this is my portfolio`)
};
//fadeout/empty
function endFade(...elems) {
    $(elems[0]).fadeOut(200)
    $(elems[1]).fadeOut(200)
};



async function displayPage(func, elem2) {
    $.when(func).then(appendSummary(elem2)); 
};



function appendSummary(elem) {
        $(elem).html(`<div class="row">
        <div class="col-sm-5 pt-2 mt-2">
            <a href="#" class="photo">
                <img class="p-3 m-3 image-fluid pt-4  animated fadeIn delay-3.5s" id="bio-pic"
                    src="./assets/images/HAZ_1501.jpg" />
                <div class="glow-wrap">
                    <i class="glow"></i>
                </div>
            </a>
        </div>
        <div class="col-sm-7">
            <p id="page-title" class="text-center mr-5 pr-4 pt-5 mt-5 animated fadeIn delay-3.5s">Summary</p>
            <P id="page-content" class="text-center mr-5 pr-4"> Full-stack developer proficient with the MERN stack.
                Along with being a web-developer, works as a professional photographer and is proficient with Adobe
                Lightroom and Adobe Photoshop CC. Is an Eagle Scout. Experienced in HTML5, CSS3, Javascript, Jquery,
                Bootstrap, Firebase, AJAX, and Axios. Three years-experience working in customer service and
                proficient in Spanish.
            </P>
        </div>
    </div>
    </div>`)
    }
