var mainnav = document.querySelector('.mainnav');
var hambtn = document.querySelector('.hamburguerbtn');

var handleHamClick = function (event) {
    console.log(event, 'otra cosa');
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
var btnLeft = document.querySelector('.slider__btn--left');
var strip = document.querySelector('.slider__strip');
var slider = document.querySelector('.slider');
var posX = 0;
var width = slider.offsetWidth;
function handleBtnNextClick () {
    // translate
    var quantity = strip.children.length;
    if(posX > -width * (quantity - 1)){
        posX -= width;
    } else {
        posX = 0;
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
btnRight.addEventListener('click', handleBtnNextClick);

function handleBtnPrevClick () {
    // translate
    var quantity = strip.children.length;
    if(posX < 0){
        posX += width;
    } else {
        posX = -width * (quantity - 1);
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
btnLeft.addEventListener('click', handleBtnPrevClick);

//setTimeout(handleBtnNextClick, 3000); // una vez
//setInterval(handleBtnNextClick, 3000); // varias veces
//handleBtnNextClick();




/**
 * Galery
 */
var main = document.querySelector('.galery__main');
var img1 = document.querySelector('.galery__thumb');

img1.addEventListener('click', function () {
    // leer atributo src de la imagen pequeña
    var src = img1.getAttribute('src');
    // setear atributo src a la imagen grande
    main.setAttribute('src', src);
    // agregar clase active
    img1.classList.add('galery__thumb--active');
});