//appends first fade in
function append(elem) {
    $(elem).append(`<h1 class="animated fadeIn firstFade pt-0 mt-0">Hey, I'm Ryan, Full Stack Developer <img style="height: 100px; width: 100px;" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojidex/112/black-rightwards-arrow_27a1.png"></h1>`)
};
//appends second fade in
function appendTwo(elem) {
    $(elem).append(`<h1 class=" mt-5 pt-5 animated fadein slow secondFade delay-3.5s">and this is my portfolio`)
};
//fadeout/empty
async function endFade(...elems) {
    $(elems[0]).addClass('animated');
    $(elems[1]).addClass('animated');
    $(elems[0]).addClass('fadeOut');
    $(elems[1]).addClass('fadeOut'); 
    $(elems[0]).addClass('slow');
    $(elems[1]).addClass('slow');
    // $(elems[0]).fadeOut(500);
    // $(elems[1]).fadeOut(500);
    $(elems[2]).remove(); 

};



// async function displayPage(func, elem2) {
//     $.when(func).then(appendSummary(elem2)); 
// };

async function displayPage(func, elem2) {
    $.when(func).then(showPage(elem2)); 
};

async function showPage (elem) {
    $(elem).addClass('animated');
    $(elem).addClass('fadeIn'); 
    $(elem).addClass('delay-.2s');
    $(elem).css("display", "block"); 
}; 

// function appendSummary(elem) {
//         $(elem).html(`<div class="row">
//         <div class="col-sm-5 ">
//             <a href="#" class="photo">
//                 <img class="p-3 m-3 image-fluid   animated fadeIn delay-3.5s" id="bio-pic"
//                     src="./assets/images/HAZ_1501.jpg" />
//                 <div class="glow-wrap">
//                     <i class="glow"></i>
//                 </div>
//             </a>
//         </div>
//         <div class="col-sm-7">
//             <p id="page-title" class="text-center mr-5 pr-4 pt-5 mt-5 animated fadeIn delay-3.5s">Summary</p>
//             <P id="page-content" class="text-center mr-5 pr-4"> Full-stack developer proficient with the MERN stack.
//                 Along with being a web-developer, works as a professional photographer and is proficient with Adobe
//                 Lightroom and Adobe Photoshop CC. Is an Eagle Scout. Experienced in HTML5, CSS3, Javascript, Jquery,
//                 Bootstrap, Firebase, AJAX, and Axios. Three years-experience working in customer service and
//                 proficient in Spanish.
//             </P>
//         </div>
//     </div>
//     </div>
//     <section id="experience" class="second-section">
//     <div class="container overflow-hidden">
//         <div class="row">
           
//         </div>
//     </div>
// </section>
//     `)
//     }; 
