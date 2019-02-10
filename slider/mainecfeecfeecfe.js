(function ($) {
  "use strict";
  
  /* preloader */
  $(window).on('load', function() {
    $('#jhilmil-loader').fadeOut('slow');;
  });  

  jQuery( document ).ready(function() {

    jQuery('.height-product, .single-from-blog, .equal_height').matchHeight();	

    jQuery('.from-blog-img a').addClass('border-hover');

    // product description tab activator
    jQuery(".description-tab-menu ul li").first().addClass("active");
    jQuery(".product-description-tab .tab-content .tab-pane").first().addClass("active");



    /*----------------------------
 client owl active
------------------------------ */  
    jQuery(".client-owl").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:false,
      navigation:true,	  
      items : 6,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1399,5],
      itemsDesktopSmall : [980,4],
      itemsTablet: [768,3],
      itemsMobile : [479,1],
    });

    /*----------------------------
 trend owl active
------------------------------ */  
    jQuery(".trend-item-slider, .tab-item-slider-two").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:false,
      navigation:true,	  
      items : 3,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [980,2],
      itemsTablet: [768,2],
      itemsMobile : [479,1],
    });


    /*----------------------------
 product thaumbnail owl active
------------------------------ */  
    jQuery(".p-details-slider, .product-slider").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:false,
      navigation:true,	  
      items : 3,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,3],
      itemsMobile : [479,2],
    });



    /*----------------------------
 related owl active
------------------------------ */  
    jQuery(".related-product-wrapper").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:false,
      navigation:true,	  
      items : 4,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1399,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsMobile : [479,1],
    });



    /*----------------------------
 testimonial owl active
------------------------------ */  
    jQuery(".testimonial-owl-wrap").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:false,
      navigation:true,	  
      items : 1,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1399,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
    });

    jQuery(".menu-carou, .menu-pro-carou").owlCarousel({
      autoPlay: true, 
      slideSpeed:2000,
      pagination:false,
      navigation:true,	  
      items : 1,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1399,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
    });

    jQuery(".woman_carousel").owlCarousel({
      autoPlay: true, 
      slideSpeed:2000,
      pagination:false,
      navigation:true,	  
      items : 4,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1399,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsMobile : [479,1],
    });



    jQuery(".timing-pro-carosel").owlCarousel({
      autoPlay: false, 
      slideSpeed:2000,
      pagination:false,
      navigation:false,	  
      items : 1,
      /* transitionStyle : "fade", */    /* [This code for animation ] */
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1399,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
      singleItem : true,
      transitionStyle : "fade"
    });    



    //---------------------------------------------
    //Nivo slider
    //---------------------------------------------
    jQuery('#nivoslider').nivoSlider({
      effect: 'random',
      animSpeed: 500,
      pauseTime: 5000,
      startSlide: 0,
      directionNav: true,
      controlNavThumbs: true,
      pauseOnHover: true,
      manualAdvance: false,
      prevText: 'Pr <br /> ev',
      nextText: 'Ne <br /> xt',       
    });  

    /*--------------------------
 Countdown
---------------------------- */
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting">%-D</span>days</div><div class="cdown hours"><span class="counting">%-H</span>hrs</div><div class="cdown minutes"><span class="counting">%M</span>mins</div><div class="cdown seconds"><span class="counting">%S</span>secs</div>'));
      });
    });






    /*----------------------------------------------
    Personal Address toggle function
-----------------------------------------------*/
    $("#add-new-address").on('click', function(){
      $("#add-new-address-info").slideToggle();
    });

    $("#transfer").on('click', function(){
      $("#transfer-info").slideToggle();
    });

    $("#payment").on('click', function(){
      $("#payment-info").slideToggle();
    });

    $("#paypal").on('click', function(){
      $("#paypal-info").slideToggle();
    });

    /*----------------------------
 jQuery MeanMenu
------------------------------ */
    jQuery('nav#dropdown').meanmenu();    

    /*--------------------------
 scrollUp
---------------------------- */	
    jQuery.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    }); 

    /*----------------------------
         Elevate Zoom active
    ------------------------------ */
    jQuery(".zoom1").elevateZoom({
      gallery:'ProductThumbs',
      cursor: 'move',
      galleryActiveClass: 'active',
      imageCrossfade: false,
      zoomWindowFadeIn: 300,
      zoomWindowFadeOut: 300,
      lensFadeIn: 300,
      lensFadeOut: 300,
      easing : true,
      zoomWindowWidth: 400,
      zoomWindowHeight: 400,      
      borderSize: 1,
      borderColour: "#dddddd",
      scrollZoom: false,
      lensBorderColour: "#dddddd",
      lensShape: "square",
      zoomType: "window" //window is default,  also "lens" available -

    }); 
    
    //pass the images to Fancybox
    jQuery(".zoom1").on("click", function(e) {  
      var ez =   $('.zoom1').data('elevateZoom');	
      $.fancybox(ez.getGalleryList());
      return false;
    }); 
    

    jQuery(".product-video-link").fancybox();

  });
})(jQuery); 