

 var carouselOptions = {interval: 5000, keyboard: false, pause: "false", wrap: true};

var keys = { left: 37, right: 39};
var isCycling = true;
var nextButton = false;

$(document).ready(init);

function init(){

 $("#carouselExampleIndicators").carousel(carouselOptions);

$("#carouselExampleIndicators").carousel('cycle');

$('#carouselExampleIndicators').find('*').on('focus', function(){

pauseCarousel($('#pauseButton'));
handleKeyDown($("#carouselExampleIndicators"));

}	);

$('#carouselExampleIndicators').hover(handlerIn, handlerOut);

$('#pauseButton').on('click', function(){
if(isCycling){
pauseCarousel($(this));
} else {
resumeCarousel($(this));
}// end else.
});

$('#next_slide, #prev_slide').on('click', function(){
nextButton = true;

});

classAttributeListener();

}// end init

function handlerIn(){

pauseCarousel($('#pauseButton'));

}// end handlerIn.


function handlerOut(){

resumeCarousel($('#pauseButton'));

}// end handlerOut .


function classAttributeListener(){

// Crea una instancia de observer
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {

 if($(mutation.target).attr('class') == ""){

$(mutation.target).children().attr('aria-current', 'false');

} else if($(mutation.target).attr('class') == 'active'){

$(mutation.target).children().attr('aria-current', 'true');
if(nextButton){
var currentSlide = $(mutation.target).children().attr('aria-label');
$('#current_slide').html('<span id="screenReaderMessage">'+currentSlide+'</span>');

}// end if nextButton.
nextButton = false;

setTimeout( function(){
    $('#screenReaderMessage').remove();
  }  , 1000 );

}// end if class active.

  });
});

// Configura el observer:
var config = { attributes: true, subtree: true};

// pasa al observer el nodo y la configuracion
var target = $('ol')[0];
observer.observe(target, config);


}// end classAttributeListener.

function pauseCarousel(pauseButton){
pauseButton.attr('aria-label', 'Reanudar');
pauseButton.attr('title', 'Reanudar');
pauseButton.attr('data-original-title', 'Reanudar');
$('#pauseIcon').attr('class', 'fas fa-play');
$('#carouselExampleIndicators').carousel('pause');
isCycling = false;
}// end pauseCarousel.

function resumeCarousel(resumeButton){

resumeButton.attr('aria-label', 'Pausar');
resumeButton.attr('title', 'Pausar');
$('#pauseIcon').attr('class', 'fas fa-pause');
$('#carouselExampleIndicators').carousel('cycle');
isCycling = true;

}// end resumeCarousel.


function handleKeyDown(id){

id.keydown(function(event){
switch(event.which){
case keys.right:

id.carousel('prev');
nextButton = true;

break;
case keys.left:

id.carousel('next');
nextButton = true;

break;
}// end switch.
});
}// end handleKeyDown.

