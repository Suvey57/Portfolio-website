
//Mobile Navigation
/*$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('show');
  });

});*/


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}
 // Back to top button
  $(window).scroll(function() {
    if($(this).scrollTop() > 100){
      $('.back-to-top').fadeIn('slow');
    }else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
  });

