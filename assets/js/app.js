$(function(){
    let header = $("#header")
    let headerH = header.innerHeight();
    let intro = $("#intro");
    let introH = intro.innerHeight();


    /*  Header class on scroll  =============================================*/

    headerScroll();

    $(window).on("scroll resize", function(){
        headerScroll();
    })

    function headerScroll(){

        intro = $("#intro");
        introH = intro.innerHeight();
        const heightDiff = introH - headerH;

        let scrollTop = $(this).scrollTop();

        if (scrollTop >= heightDiff){
            header.addClass("header--dark");
        }
        else {
            header.removeClass("header--dark");
        }
    }


    /*  Smooth scroll to sections  =============================================*/

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top - headerH;

        $("html, body").animate({
            scrollTop: scrollElPos
        }, 500)
    })



    /*  Scroll spy  =============================================*/

    let windowH = $(window).height();

    scrollSpy();

    $(window).on("scroll", function () {
        scrollSpy();
    })

    function scrollSpy(){
        let scrollTop = $(this).scrollTop();
        let scrollID;

        $("[data-scrollspy]").each(function(){
            let $this = $(this);
            let sectionID = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;

            if(scrollTop >= sectionOffset - windowH/3){
                scrollID = sectionID;
            }

        })


        $("[data-scroll]").each(function(){
            let curID = $(this).data("scroll");
            if (curID != scrollID){
                $(this).removeClass("active");
            }
            else{
                $(this).addClass("active");
            }
        })
    }


    /*  Modal  =============================================*/

    $("[data-modal]").on("click", function(event){
        event.preventDefault();

        let modal = $(this).data('modal');

        $(modal).addClass("show");
        $('body').addClass('no-scroll');

        setTimeout(()=>{
            $(modal).find('.modal__content').css({
                transform: 'translateY(0)',
                opacity: '1'
            });
        })
    })

    function modalClose(){
        $(".modal").each(function(){
            $(this).find(".modal__content").css({
                transform: 'translateY(-100px)',
                opacity:'0'
            });
            setTimeout(()=>{
                $(this).removeClass("show");
            }, 200)
        })
        $('body').removeClass('no-scroll');
    }

    $("[data-close]").on("click", function(){

       modalClose();

    })

    $(".modal").on("click", function(){

        modalClose();

    })

    $(".modal__content").on("click", (event)=>{
        event.stopPropagation();
    })


    /*  BURGER  */

    let burger = $(".burger");
    let nav = $(".nav");
    let burgerClose = $(".burger-close")

    burger.on("click", function(){

        $('body').addClass('no-scroll');


        nav.addClass("active");

        burger.css({
            transform:'translateY(-100%)',
            opacity:'0'
        })
        setTimeout(()=>{

            burger.addClass("close");

            burgerClose.addClass("active");

            setTimeout(()=>{
                burgerClose.css({
                    transform:'translateX(0) rotate(0deg)',
                    opacity:'1',
                });
            }, 100)
        }, 200)

    })



    function sideMenuClose () {
        $('body').removeClass('no-scroll');
        nav.removeClass("active");
        burgerClose.css({
            transform:'translateX(200%) rotate(180deg)',
            opacity:'0'
        })

        setTimeout(()=>{
            burgerClose.removeClass("active");

            burger.removeClass("close");

            setTimeout(()=>{
                burger.css({
                    transform:'translateX(0)',
                    opacity:'1'
                });
            }, 100)
        }, 200)
    }

    burgerClose.on("click", function(){

        sideMenuClose();

    })

    $(window).on("resize", function(){
        if($(window).width()>767){
            sideMenuClose();
        }
    })



     /*  Slick slider https://kenwheeler.github.io/slick/  =============================================*/

    /*  intro slider  */

    let introSlider=$("#introSlider")

    introSlider.slick({
        infinite: true,
        slidesToshow:1,
        slidesToScroll:1,
        fade:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000
    })

    $("#introSliderPrev").on("click", function(){
        introSlider.slick("slickPrev");
    })
    $("#introSliderNext").on("click", function(){
        introSlider.slick("slickNext");
    })



    /*  reviews slider  */

    let reviewsSlider=$("#reviewsSlider")

    reviewsSlider.slick({
        infinite: true,
        slidesToshow:1,
        slidesToScroll:1,
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:5000
    })



    /*  Animate on scroll https://michalsnik.github.io/aos/ =============================================*/


    AOS.init();

    AOS.init({
      disable: 'mobile',
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
})





