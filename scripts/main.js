var mainnav = document.querySelector('.mainnav');
var hambtn = document.querySelector('.hamburguerbtn');

var handleHamClick = function (event) {
    console.log(event, 'hola');
    /*var hasMobile = mainnav.classList.contains('mainnav--mobile');
    if(hasMobile){
        mainnav.classList.remove('mainnav--mobile');
    } else {
        mainnav.classList.add('mainnav--mobile');
    }*/
    mainnav.classList.toggle('mainnav--mobile');
}
hambtn.addEventListener('click', handleHamClick);

function handleWindowResize (event) {
    if(window.innerWidth > 400){
        mainnav.classList.remove('mainnav--mobile');
    }
}
window.addEventListener('resize', handleWindowResize);


var btnRight = document.querySelector('.slider__btn--right');
var strip = document.querySelector('.slider__strip');
var posX = 0;
function handleBtnNextClick () {
    // translate
    var quantity = strip.children.length;
    if(posX > -400 * (quantity - 1)){
        posX -= 400;
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
// handleBtnNextClick();
btnRight.addEventListener('click', handleBtnNextClick);
