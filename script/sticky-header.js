$(window).scroll(function() {
if ($(this).scrollTop() > 180){
$('.my-header').addClass("sticky");
}   
else{
$('.my-header').removeClass("sticky");
}
});