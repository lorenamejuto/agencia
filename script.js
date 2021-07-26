//Mobile menu
function mobileMenu() {
    $('.boton-menu').click(function(){
      $(this).toggleClass('open-menu');
      $('header nav').toggleClass('active-menu');
    });
  }
  
  function closeMenuOnAnchor() {
      $('header nav li a').click(function(){
        $('header nav').removeClass('active-menu');
        $('.boton-menu').removeClass('open-menu');
      });
  }
  
  // Cambia el color de fondo de servicios
  function changeServicesBg() {
    $('#redes-tab').click(function(){
      $('#servicios-desktop').css({'background':'rgb(231,88,33)', 'background':'linear-gradient(180deg, rgba(231,88,33,1) 0%, rgba(225,11,111,1) 100%)'});
    });
    $('#sem-tab').click(function(){
      $('#servicios-desktop').css({'background':'rgb(194,5,123)', 'background':'linear-gradient(180deg, rgba(194,5,123,1) 0%, rgba(98,28,127,1) 100%)'});
    });
    $('#generacion-tab').click(function(){
      $('#servicios-desktop').css({'background':'rgb(58,97,171)', 'background':'linear-gradient(180deg, rgba(58,97,171,1) 0%, rgba(42,35,129,1) 100%)'});
    });
    $('#branding-tab').click(function() {
      $('#servicios-desktop').css({'background':'rgb(210,40,166)', 'background':'linear-gradient(180deg, rgba(210,40,166,1) 0%, rgba(31,93,170,1) 100%)'});
    });
    $('#diseno-tab').click(function() {
      $('#servicios-desktop').css({'background':'rgb(182,206,12)', 'background':'linear-gradient(180deg, rgba(182,206,12,1) 0%, rgba(0,156,65,1) 100%)'});
    });
  }
  
  //Smooth scroll
  function smoothScroll() {
      $('.scrollTo').click(function() {
          $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top
          }, 1000);
          return false;
      });
  }

  //Funciones que se llaman en el document ready
$(document).ready(function() {
  smoothScroll();
  mobileMenu();
  closeMenuOnAnchor();
});

//Funciones que se llaman en el windows resize
$(window).on('resize', function(){
closeMenuOnAnchor();
});
