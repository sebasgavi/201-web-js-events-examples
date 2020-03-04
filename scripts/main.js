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
var thumbs = document.querySelectorAll('.galery__thumb');
function handleImageClick (elem) {
    // leer atributo src de la imagen pequeña
    var src = elem.getAttribute('src');
    // setear atributo src a la imagen grande
    main.setAttribute('src', src);
    thumbs.forEach(function(innerElem){
        innerElem.classList.remove('galery__thumb--active');
    });
    // agregar clase active
    elem.classList.add('galery__thumb--active');
}
function iterateThumbs (elem, index) {
    elem.addEventListener('click', function () {
        handleImageClick(elem);
    });
}
thumbs.forEach(iterateThumbs);
handleImageClick(thumbs[0]);

var index = 0;
setInterval(function(){
    handleImageClick(thumbs[index]);
    index++;
    if(index >= thumbs.length){
        index = 0;
    }
}, 1000);




/**
 * Modal
 */
var modal = document.querySelector('.modal');
var modalOpen = document.querySelector('.modalopen');
var modalClose = document.querySelector('.modalclose');
modalOpen.addEventListener('click', function(){
    modal.classList.add('modal--block');
    setTimeout(function(){
        // opacity 1
        modal.classList.add('modal--visible');
    }, 10);
});
function closeModal (){
    modal.classList.remove('modal--visible');
    setTimeout(function(){
        modal.classList.remove('modal--block');
    }, 500);
}
modalClose.addEventListener('click', function(){
    closeModal();
});
modal.addEventListener('click', function(event){
    if(event.target == modal){
        closeModal();
    }
});


// change paragraph text from input
var textParagraph = document.querySelector('.textchange__paragraph');
var textInput = document.querySelector('.textchange__input');
function handleTextInput () {
    var text = textInput.value;
    textParagraph.innerText = text;
}
textInput.addEventListener('input', handleTextInput);


// change opacity of image from input range
var opacityImage = document.querySelector('.opacity__image');
var opacityInput = document.querySelector('.opacity__input');
function handleOpacityInput () {
    var opacity = opacityInput.value;
    opacityImage.style.opacity = opacity;
}
opacityInput.addEventListener('input', handleOpacityInput);


// change image source from input range value
var rotationImage = document.querySelector('.rotation__image');
var rotationInput = document.querySelector('.rotation__input');
function handleRotationInput () {
    var index = rotationInput.value;
    rotationImage.setAttribute('src', './images/emoji_' + index + '.jpg');
}
handleRotationInput();
rotationInput.addEventListener('input', handleRotationInput);
