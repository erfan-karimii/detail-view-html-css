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
    let sliderNumber = 0
    $('.slider-image').first().addClass('displaySlide')

    $('#prevButton').click(function(){
        if (sliderNumber == 0){
          sliderNumber = $('.slider-image').length - 1 
        }else{
          sliderNumber --;
        }
        showSlider(sliderNumber);
    });
    
    $('#nextButton').click(function(){
        if (sliderNumber == $('.slider-image').length - 1 ){
          sliderNumber = 0
        }else{
          sliderNumber ++;
        }
        showSlider(sliderNumber);
    });

        
    $('#minusButton').click(function(){
      let countInput = $('#count-input')
      let countValue = parseInt(countInput.val()) - 1
      if (countValue >= 0 ){
          countInput.val(countValue)
      }
    });

    $('#plusButton').click(function(){
        let countInput = $('#count-input')
        let countValue = parseInt(countInput.val()) + 1
        countInput.val(countValue)
    });

    $('.thumb-image').click(function(){
      $('.slider-image').removeClass('displaySlide')
      image_id = $(this).data('image_id')
      console.log(image_id)
  
      $('#image-'+image_id).addClass('displaySlide')

    })
});


function showSlider(child_number){
  console.log(child_number)
  $('.slider-image').removeClass('displaySlide')
  $('.slider').find('.slider-image').eq(child_number).addClass('displaySlide')
}