$(document).ready(function () {

    var windowWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var windowHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;



    $('.selectric').selectric();

    $('.slick-fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.store-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $('.slick-carousel').slick({
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });



    $('.carousel-customer a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        //e.target
        $('.slick-carousel').slick('setPosition');
    });

    /***********/




    $('.category-carousel').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.slk-prev').click(function (e) {
        e.preventDefault();
        $('.category-carousel').slick('slickPrev');
    });

    $('.slk-next').click(function (e) {
        e.preventDefault();
        $('.category-carousel').slick('slickNext');
    });





    $('.popover-item').each(function (e) {

        var container = $(this).parents('.job-item').get(0);

        var pc = $(this).parents('.job-item').find('.popover-content').get(0);


        $(this).popover({
            container: container,
            html: true,
            content: pc,
            placement: 'right',
            trigger: 'hover',
        });

    });

/***************/


    jsSocials.shareStrategies["center_popup"] = function(args) {

        var w = 600;
        var h = 500;


        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;


        return $("<div class='btn-jss'>").click(function() {
            window.open(args.shareUrl, "MyShareWindow",
                'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left + ', location=1, resizeable=1, menubar=0, scrollbars=0, status=0, titlebar=0, toolbar=0');
        });
    };

    jsSocials.setDefaults({
        shareIn: "center_popup",
        showLabel: false,
        showCount: false,
    });




    $("#share").jsSocials({
        shares: [
            {
                share: "facebook",
                label: "+1",
                logo: "fab fa-facebook"
            },
            {
                share: "googleplus",
                label: "+1",
                logo: "fab fa-google-plus-g"
            },
            {
                share: "email",
                label: "E-mail",
                logo: "fas fa-envelope"
            }

        ]
    });



/*******************/

    $('.slider-prod-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        asNavFor: '.slider-prod-nav',
        draggable: true
    });

    $('.slider-prod-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-prod-image',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true,
        draggable: false,
        //variableWidth: true
    });



    $('.dropdown-hover').on('mouseenter', function (e) {
        $(this).find('.dropdown-toggle').trigger('click');
    });

    $('.dropdown-hover').on('mouseleave', function (e) {

        $(this).find('.dropdown-toggle').trigger('click');


        /*var btn = $(this).find('.dropdown-toggle');

        setTimeout(function () {
            $(btn).trigger('click');
        },2000)*/


    });


    $('.dropdown-menu').click(function (e) {
        //e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
    });



/*************/


    $('.btn-sw-log').click(function (e) {
        $('.sw-ct-0').fadeOut(0);
        $('.sw-ct-log').fadeIn(800);
    });
// *****************
    $("a[rel^='prettyPhoto']").prettyPhoto();


});
wow = new WOW(
    {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
//                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
//    new WOW.init();
wow.init();
$('.store-menu').ready(function () {
    console.log('aaa');
    $('li').each(function(){
        var hClass = $(this).hasClass('active');
        if(hClass){
            $('.fix-position').css({"background-color":"#edd001","position":"relative","padding-bottom":"15px","padding-top":"15px"})
        }
    });
});





