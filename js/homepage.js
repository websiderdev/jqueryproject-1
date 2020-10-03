$(function() {
    AOS.init({
        delay: 500,
        duration: 1000,
        easing: 'ease-in-out'
    });
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos +" and "+ prevScrollpos);
        if (prevScrollpos > currentScrollPos) {
            $("#header").css("top","0px");
        } else {
            $("#header").css("top","-130px");
        }
        prevScrollpos = currentScrollPos;
    }

    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        prevArrow: "",
        nextArrow: "",
        pauseOnFocus: false,
        pauseOnHover: false
      });

      $('.whatwedo-wrapper-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        prevArrow: "",
        nextArrow: "",
        pauseOnFocus: false,
        pauseOnHover: false
      });

      console.log("hello");
});