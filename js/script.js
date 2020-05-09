$(document).ready(function() {
    

    'use strict'

    //Adjust header height
    var myHeader = $(' .header');

    myHeader.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());
    });

    // links add active class
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active') /*add active to that i click and remove from the athers*/
    });


    //adjust bxslider list item center
    $('.bxslider').each(function(){
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });

    //trigger the bx slider
    $('.bxslider').bxSlider({
        pager: false
    });

    // smooth scroll
    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        // console.log($(this).data('value'));
    });


    // Our Auto Slider code
    (function autoSlider(){
        $('.slider .active').each(function(){   //apply this function to all active class
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            }
            else{
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());


    // mixit up trigger
    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected')
    });

    $('#Container').mixItUp();

    //nice scroll trigger
    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        // cursorwidth: '5px',
        cursorborder: '1px solid #1abc9c',
        cursorborderradius:'5px',
        // scrollspeed:'20'
    });
});