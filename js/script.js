$(function(){

    // Scroll do navbar
    
    scrooll();

    function scrooll(){
        $('.porque_nos_nav').click(function() {
            $('html, body').animate({
                scrollTop: $(".diferenciais_section").offset().top
            }, 2000);
        });

        $('.depoimentos_nav').click(function() {
            $('html, body').animate({
                scrollTop: $(".depoimentos_section").offset().top
            }, 2000);
        });

        $('.entre_contato_nav').click(function() {
            $('html, body').animate({
                scrollTop: $(".contato_section").offset().top
            }, 2000);
        });
    };

    // Menu Responsivo 

    $('.mobile_menu_icon').click(function(){
        $('.menu_mobile_ul').slideToggle();
    })


    // Impedir o envio do form

    $(".contato_form").submit(function(event) {
        event.preventDefault();
      });

});