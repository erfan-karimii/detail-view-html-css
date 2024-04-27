$(document).ready(function(){
    $('.menu-icon').click(function(){
      if ($('.hamburger-menu').is(":hidden")){
        $('.hamburger-menu').show()
        $('#shadow').show()
        $('body').addClass('stop-scrolling')
      }else{
        $('.hamburger-menu').hide()
        $('#shadow').hide()
        $('body').removeClass('stop-scrolling')
      }
    });
});