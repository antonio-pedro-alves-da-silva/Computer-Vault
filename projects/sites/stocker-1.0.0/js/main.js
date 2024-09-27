

$(window).ready(() => {

  $("#container-spinner").addClass("d-none");


  $(".btnShadowAnimation").on("click", (e) => {
    btnShadowColor = $(e.target).attr("shadow-color");
    $(e.target).css("box-shadow", `0px 0px 0px 0.2rem ${btnShadowColor}`);
  });

  $(".btnShadowAnimation").on("blur", (e) => {
    btnShadowColor = $(e.target).attr("shadow-color");
    $(e.target).css("box-shadow", `0px 0px 0px 0rem ${btnShadowColor}`);
  });

// setting owl carousel
  var headerCarousel = $(".header-carousel").owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    margin: 0,
    nav: false,
    dots:false,
    responsive: {
      0: {
        items: 1,
      },
    },

  });

//   setting the next and prev btn

  $(".nextBtn").click(function () {
    headerCarousel.trigger("next.owl.carousel");
  });

  $(".prevBtn").click(function () {

    headerCarousel.trigger("prev.owl.carousel", [300]);
  });

//  back-to-top btn

  $(window).on("scroll",()=>{
    if(window.scrollY > 500){
      $(".to-top-btn").removeClass("d-none")
    } else {
      $(".to-top-btn").addClass("d-none")

    }
  })

  $(".back-to-top").on("click",()=>{
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  })


// activing cards in the offer section

const cards = $(".offer-cards").children();
const benefits = $(".offer-benefits").children();


cards.on("click",(e)=>{

  let lastItemId = $(".offer-cards").find(".active").attr("collapse");
  let lastActiveItem = document.getElementById(lastItemId);

  let currentItemId = $(e.target).attr("collapse");
  let currentActiveItem = document.getElementById(currentItemId);

  // animating and collapsing
  $(lastActiveItem).animate({
    opacity:0
  },270,()=>{
    
    $(lastActiveItem).addClass("d-none");
    $(lastActiveItem).animate({opacity:1})

    $(currentActiveItem).removeClass("d-none");

  })

  cards.map((i,v)=>{

      // remove active class from siblings
      if(v !== e.target){
        $(v).removeClass("active");
      } 

      // add active class to clicked item

      $(e.target).addClass("active");
    })


    // 

  })

  // setting blog carousel
  var blogCarousel = $(".blog-carousel").owlCarousel({
    loop: true,
    dots:false,
    margin: 0,
    autoplay: true,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
    }
  });

  //   setting the next and prev btn


  $('.blog-nav .nextBtn').click(function() {
    blogCarousel.trigger('stop.owl.autoplay');
    blogCarousel.trigger('next.owl.carousel',[1500]);
  })

  // Go to the previous item
  $('.blog-nav .prevBtn').click(function() {
    blogCarousel.trigger('stop.owl.autoplay');
    blogCarousel.trigger('prev.owl.carousel', [1500]);
  })

  // setting testimonial carousel



  testimonialCarousel = $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots:false,
    autoplay: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
    },

  });

  testimonialCarousel.owlCarousel();

  $('.testimonial-nav .nextBtn').click(function() {
    testimonialCarousel.trigger('stop.owl.autoplay');
    testimonialCarousel.trigger('next.owl.carousel',[1500]);
  })

  $('.testimonial-nav .prevBtn').click(function() {
    testimonialCarousel.trigger('stop.owl.autoplay');
    testimonialCarousel.trigger('prev.owl.carousel', [1500]);
  })



  // selecting the items

  testimonialDot = $(".testimonial-dots");
  items = $(".testimonial-carousel .owl-item:not(.cloned)");

  // adding the testimonial-dots based on the amount of items on testimonial-carousel

  items.map((i,v)=>{
    testimonialDot.append(`<span class="testimonial-dot dots-primary"></span>`)
  })

  dots = testimonialDot.children();

  // adding an event to dots
  dots.map((i,v)=>{

    $(v).on("click",()=>{
      testimonialCarousel.trigger("to.owl.carousel",i);

      // activating dot
      for(ii in dots){
        // activating the dot using the active item 
        activeItem = $(".testimonial-carousel").find(".owl-item.active");
    
        itemsArr = items.toArray();
        dotsArr = dots.toArray();
        
        if(activeItem[0] == itemsArr[ii])
          $(dotsArr[ii]).addClass("active")
        else 
          $(dotsArr[ii]).removeClass("active")
        
      }
    });
  })

    // activating dot
    for(ii in dots){
      // activating the dot using the active item 
      activeItem = $(".testimonial-carousel").find(".owl-item.active");
  
      itemsArr = items.toArray();
      dotsArr = dots.toArray();
      
      if(activeItem[0] == itemsArr[ii])
        $(dotsArr[ii]).addClass("active")
      else 
        $(dotsArr[ii]).removeClass("active")
      
    }

});


